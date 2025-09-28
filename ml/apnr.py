import cv2
import pytesseract
import json
import time
import numpy as np
import threading
import re
import os
import random
from ultralytics import solutions

phNumber = {1: "1234567578", 2: "1002020213", 3: "4848292911", 4: "3849291022"}

# Create folder for detected images
output_folder = "detected_plates"
os.makedirs(output_folder, exist_ok=True)

# Load video
VIDEO_PATH = r"C:\Users\HP\OneDrive\Documents\GitHub\ALL-PROJECTS\PES Hackathon - Github\AI-DRIVEN-OVERSPEEDING-DETECTION-PES-HACKATHON\2103099-uhd_3840_2160_30fps.mp4"
cap = cv2.VideoCapture(VIDEO_PATH)
cap = cv2.VideoCapture(VIDEO_PATH)

if not cap.isOpened():
    print("Error: Could not open video file")
    exit()

# Get video properties
w, h, fps = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH)), int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT)), int(cap.get(cv2.CAP_PROP_FPS))

resized_w, resized_h = 1280, 720

# Initialize VideoWriter
video_writer = cv2.VideoWriter("speed_estimation.mp4", cv2.VideoWriter_fourcc(*"mp4v"), fps, (resized_w, resized_h))

# Frame Processing Interval
FRAME_SKIP = 3  # Process every nth frame

# Timer for 30-second limit
start_time = time.time()

# Initialize Speed Estimator
speed_obj = solutions.SpeedEstimator(
    region=[(0, 288), (1280, 288)],  
    model="yolo11n.pt",
    fps = fps,
    meter_per_pixel = 0.5,
    show=False
)

# Load Haar Cascade for License Plate Detection
plate_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + "haarcascade_russian_plate_number.xml")

# Set Tesseract Path (Update for Windows Users)
pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'

# Track detected vehicles
violations = []
threads = []

# Regular Expression for License Plate Filtering
plate_regex = re.compile(r'^[A-Z0-9]{5,10}$')

# Function to detect license plates
def detect_license_plates(gray, frame, speed):
    plates = plate_cascade.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30))
    
    for (x, y, pw, ph) in plates:
        plate_region = gray[y:y + ph, x:x + pw]
        plate_text = pytesseract.image_to_string(plate_region, config='--psm 7')
        
        # Clean and validate plate text
        plate_text = "".join(e for e in plate_text if e.isalnum()).upper()
        
        if plate_regex.match(plate_text) and speed > 1:  # Valid plate format & speed > 5
            image_path = os.path.join(output_folder, f"{plate_text}.jpg")
            cv2.imwrite(image_path, frame)
            
            violations.append({"license_plate": plate_text, "speed": speed, "phoneNumber": (random.choice(list(phNumber.values()))), "amount": 500, "status": "Unpaid", "image_path": image_path})
            
            cv2.rectangle(frame, (x, y), (x + pw, y + ph), (0, 255, 0), 2)
            cv2.putText(frame, plate_text, (x, y - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.9, (0, 255, 0), 2)

# Process video
frame_count = 0

while cap.isOpened():
    current_time = time.time()

    if current_time - start_time > 15:
        break

    success, frame = cap.read()
    if not success:
        break

    # Skip frames for efficiency
    frame_count += 1
    if frame_count % FRAME_SKIP != 0:
        continue

    # Resize frame for consistency
    frame = cv2.resize(frame, (resized_w, resized_h))

    # Convert to grayscale for plate detection
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

    # Detect vehicle speed
    results = speed_obj(frame)

    speed_values = []
    for track in speed_obj.tracks:
        if isinstance(track, dict) and 'speed' in track:
            speed_values.append(track['speed'])
    
    if speed_values:
        speed_value = float(np.median(speed_values))
    else:
        speed_value = 0
    
    print(f"Detected Speed: {speed_value} km/h")  # Debugging Info

    # Process plates in a separate thread if speed is above 5
    if speed_value > 1:
        plate_thread = threading.Thread(target=detect_license_plates, args=(gray, frame, speed_value))
        threads.append(plate_thread)
        plate_thread.start()

    # Draw reference lines
    cv2.line(frame, (0, int(h * 0.4)), (w, int(h * 0.4)), (0, 0, 255), 2)  # Red Line
    cv2.line(frame, (0, int(h * 0.6)), (w, int(h * 0.6)), (255, 0, 0), 2)  # Blue Line

    # Write frame to output video
    video_writer.write(frame)

    # Show frame
    cv2.imshow("Speed & License Plate Detection", frame)

    # Control video playback speed
    time.sleep(1 / fps)

    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# Wait for all threads to complete
for thread in threads:
    thread.join()

# Release resources
cap.release()
video_writer.release()
cv2.destroyAllWindows()

# Save detected vehicle data
if violations:
    with open("detected_vehicles.json", "w") as json_file:
        json.dump(violations, json_file, indent=4)
    print("Speed violation detection complete. Results saved in 'detected_vehicles.json'")
else:
    print("No speeding vehicles detected in 30 seconds.")

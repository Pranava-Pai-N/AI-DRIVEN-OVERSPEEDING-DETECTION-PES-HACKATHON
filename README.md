# AI-Driven Overspeeding Detection 🚗💨

## Overview
This project is an AI-powered system for detecting overspeeding vehicles using computer vision. It was developed as part of the **PES Hackathon**. The system identifies vehicles in a video, detects their speed, and marks license plates, highlighting those exceeding the speed limit (50 km/h).

## Features
- 📷 **Real-time Vehicle Detection** using a pre-trained AI model(YOLOV8 and YOLOV11).
- 🏎 **Speed Estimation** to determine if a vehicle is overspeeding.
- 🔍 **License Plate Recognition** for identifying vehicles.
- 🚨 **Automatic Overspeed Highlighting** for vehicles exceeding 50 km/h.
- 📊 **Video Output with Annotations** showing detected vehicles, their speed, and license plates.

## Tech Stack
- **Python** 🐍
- **OpenCV** 🎥
- **YOLO / Custom AI Model** 🤖
- **OCR (Tesseract / EasyOCR)** 🔠
- **Node.js (Backend API)** 🌐
- **Kaggle (For Dataset)**
- **React(Frontend)**
- **Google Colab (For training)**

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Pranava-Pai-N/AI-DRIVEN-OVERSPEEDING-DETECTION-PES-HACKATHON.git
   cd AI-DRIVEN-OVERSPEEDING-DETECTION-PES-HACKATHON
   ```
2. Install dependencies:
   ```bash
   npm install  # For backend dependencies
   ```
3. Download the pre-trained model and place it in the appropriate directory (instructions in the repo).
## Usage
### Run the Backend Server
```bash
node server.js
```
The backend server will start on `http://localhost:5000`.

### Run ANPR and Detection Script
Run the detection script with a video input:
```bash
python anpr.py 
```

## Expected Output
- A processed video with marked license plates.
- Speed displayed on-screen for each detected vehicle.
- Vehicles exceeding 50 km/h highlighted.
- A Website for RTO Officials giving details about Speed Violations

## Future Enhancements
- 🚀 **Real-time processing on live camera feeds**.
- 📌 **Geo-location tagging for violations**.
- 📡 **Cloud integration for centralized monitoring**.

## Contributors
- **Pranav Pai N**
- **Ajith Goveas**
- **Aadithya Nayak V**
- **Karthik Acharya**

## License
This project is open-source and available under the [MIT License](LICENSE).

---

📫 Feel free to reach out or contribute! 🚀


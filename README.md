# AI-Driven Overspeeding Detection 🚗💨

## Overview

This project is an AI-powered system for detecting overspeeding vehicles using computer vision. It was developed as part of the **PES Hackathon**. The system identifies vehicles in a video, detects their speed, and marks license plates, highlighting those exceeding the speed limit (50 km/h).

## Features

- 📷 **Real-time Vehicle Detection** using a pre-trained AI model (YOLOv8 and YOLOv11).
- 🏎 **Speed Estimation** to determine if a vehicle is overspeeding.
- 🔍 **License Plate Recognition** for identifying vehicles.
- 🚨 **Automatic Overspeed Highlighting** for vehicles exceeding 50 km/h.
- 📊 **Video Output with Annotations** showing detected vehicles, their speed, and license plates.
- 🌐 **Web Dashboard** for RTO officials to monitor violations.

## Tech Stack

- **Python** 🐍
- **OpenCV** 🎥
- **YOLO / Custom AI Model** 🤖
- **OCR (Tesseract / EasyOCR)** 🔠
- **Node.js (Backend API)** 🌐
- **React.js (Frontend)** ⚛️
- **Google Colab (For Model Training)** 💻
- **Kaggle (For Dataset)** 📊

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Pranava-Pai-N/AI-DRIVEN-OVERSPEEDING-DETECTION-PES-HACKATHON.git
   cd AI-DRIVEN-OVERSPEEDING-DETECTION-PES-HACKATHON
   ```
2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
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
- A web dashboard for RTO officials providing details about speed violations.

## Future Enhancements

- 🚀 **Real-time processing on live camera feeds**.
- 📌 **Geo-location tagging for violations**.
- 📡 **Cloud integration for centralized monitoring**.
- 📱 **Mobile App Integration for Real-time Monitoring**.

## Contributors

- **Pranav Pai N**
- **Ajith Goveas**
- **Aadithya Nayak V**
- **Karthik Acharya**

## License

This project is open-source and available under the [MIT License](https://opensource.org/licenses/MIT).

---

📫 Feel free to reach out or contribute! 🚀


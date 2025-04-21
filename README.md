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

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Pranava-Pai-N/AI-DRIVEN-OVERSPEEDING-DETECTION-PES-HACKATHON.git
cd AI-DRIVEN-OVERSPEEDING-DETECTION-PES-HACKATHON
```

### 2️⃣ Install Dependencies

#### Frontend Setup (React + Vite)
```bash
cd frontend
npm install  # Install frontend dependencies
```

#### Backend Setup (Node.js + Express)
```bash
cd backend
npm install  # Install backend dependencies
```

#### Python Dependencies (For Detection & ANPR)
If your project includes a Python-based AI model, install the required dependencies:
```bash
pip install -r requirements.txt
```

---

## Usage

### 1️⃣ Run the Backend Server
```bash
cd backend
node server.js
```
The backend will start on `http://localhost:5000`.

### 2️⃣ Run the Frontend Dashboard
```bash
cd frontend
npm run dev
```
The frontend will start on `http://localhost:5173`.

### 3️⃣ Run ANPR and Detection Script
Run the AI-based detection script with a video input:
```bash
cd ml
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

<div style="display: flex; gap: 10px;">
  <img src="https://github.com/Pranava-Pai-N.png" alt="Pranava Pai N" width="30" height="30" style="border-radius: 50%; object-fit: cover;">
  <img src="https://github.com/AjithGoveas.png" alt="Ajith Goveas" width="30" height="30" style="border-radius: 50%; object-fit: cover;">
  <img src="https://github.com/AadithyaNayakV.png" alt="Aadithya Nayak V" width="30" height="30" style="border-radius: 50%; object-fit: cover;">
  <img src="https://github.com/karthik71005.png" alt="Karthik Acharya" width="30" height="30" style="border-radius: 50%; object-fit: cover;">
</div>





## License

This project is open-source and available under the [MIT License](https://opensource.org/licenses/MIT).

---

📫 Feel free to reach out or contribute! 🚀


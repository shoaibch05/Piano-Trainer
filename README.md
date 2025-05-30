# 🎹 Piano Trainer - Chrome Extension

**Piano Trainer** is a Chrome Extension that helps users play a virtual piano and learn songs directly in the browser. It's built with React and Vite, and packaged as a web extension using `vite-plugin-web-extension`.

---

## 🛠 Features

- 🎼 Virtual piano keyboard
- 🧠 Song learning functionality
- 🎨 Clean and responsive UI
- 🚀 Lightweight, fast-loading popup
- 🧩 Runs as a Chrome Extension

---

## 📁 Project Structure

piano-trainer/
├── public/ # Static assets (optional)
├── src/ # React components and styles
│ ├── components/ # Piano UI and helpers
│ └── index.jsx # App entry point
├── manifest.json # Chrome extension manifest
├── background.js # (optional) Background service worker
├── index.html # Used as popup.html
├── index.css # Global styles for popup
├── icons/ # Icon images for the extension
├── vite.config.js # Vite config with webExtension plugin
├── package.json # NPM project config
└── README.md # You're here

yaml
Copy
Edit

---

## 🚀 Getting Started

### 1. Clone the Repository

git clone https://github.com/your-username/piano-trainer.git
cd piano-trainer 
### 2. Install Dependencies
bash
Copy
Edit
npm install
### 3. Run in Development Mode
bash
Copy
Edit
npm run dev
You can open http://localhost:5173 to view the UI in the browser.

### 4. Build for Chrome Extension
bash
Copy
Edit
npm run build
The dist/ folder will contain all necessary files for loading into Chrome.

### 🧩 Load Extension in Chrome
Go to chrome://extensions

Enable Developer mode

Click Load unpacked

Select the dist/ folder

Click the 🎹 Piano Trainer icon to launch the extension

### 🧾 Technologies Used
React

Vite

vite-plugin-web-extension

HTML/CSS/JavaScript

### 📦 Build Commands
bash
Copy
Edit
npm run dev      # Start dev server
npm run build    # Build extension to /dist


### 📸 Screenshots
![WhatsApp Image 2025-05-30 at 4 16 40 PM](https://github.com/user-attachments/assets/784d0972-6b3c-4fef-b764-e4b76aa4e9df)
![WhatsApp Image 2025-05-30 at 4 16 39 PM](https://github.com/user-attachments/assets/6ab6388b-d34f-445b-80c3-f63cf435987d)
![WhatsApp Image 2025-05-30 at 4 17 38 PM](https://github.com/user-attachments/assets/dd4e63f3-3a5f-4891-ab3d-5abb97def186)

![30 05 2025_17 26 56_REC mp4](https://github.com/user-attachments/assets/484add03-dbaf-4919-abff-07111fef97aa)

### 📄 License
MIT License. Feel free to use, modify, or contribute!

### 🙌 Acknowledgments
Inspired by online piano learning apps and Chrome extension development using Vite + React.


# 📸 Image Compression API

A simple backend service to **upload an image**, **compress** it dynamically to a target size (in KB), and **return** the compressed image — built using **Node.js**, **Express**, **Multer**, and **Sharp**.

---

## 🧠 Project Idea

Often, colleges and schools ask for a **passport-sized photo** under **50 KB** — but resizing manually is tedious.  
This app solves that pain by allowing users to **upload any image** and get a **compressed version instantly** without installing any software.

---

## 🛠 Tech Stack

- **Node.js** (Runtime Environment)
- **Express.js** (Backend Framework)
- **Multer** (Handling file uploads)
- **Sharp** (Image compression and processing)
- **TypeScript** (for type safety)

---

## 🧩 Backend Flow (Mindmap)

Frontend → POST image and targetSize → API Endpoint  
API Endpoint → multer parses image → Controller receives  
Controller → Compress image using sharp till targetSize achieved  
Controller → Return compressed image as HTTP response  
Frontend → Receives compressed image → Downloads it

---

## 📂 Project Structure

```bash
├── controllers/
│   └── compressController.ts   # Core logic for compression
├── routes/
│   └── compressRoute.ts         # Route for /api/compress
├── middlewares/
│   └── uploadMiddleware.ts      # Multer configuration
├── app.ts                       # App initialization and middlewares
├── server.ts                    # Entry point (server setup)
├── uploads/                     # (optional - temporary folder if needed)
├── package.json
├── tsconfig.json
└── README.md
```

## 📦 Installation

### Clone the repository

```bash
git clone https://github.com/your-username/image-compression-api.git
cd image-compression-api
```

### Install dependencies

```bash
npm install
```

### (Optional) Create a .env file

```env
PORT=5000
```

## ▶️ Running the Server

For normal start:

```bash
npm run start
```

For development (auto-reload with nodemon):

```bash
npm run dev
```

Server will run at:

```
http://localhost:5000
```

## 📬 API Documentation

### POST `/api/compress`

Uploads and compresses an image to a target size.
# 🎬 YouTube Clone – Full Stack MERN Application

A **YouTube Clone** built using the **MERN Stack** with a modern **React + Redux Toolkit frontend** and a **Node.js + Express + MongoDB backend**.  
This project replicates core YouTube features such as authentication, video management, channels, comments, and a responsive UI.

---

## 👤 Author

- **Name:** Vaibhav  
- **GitHub:** https://github.com/Vaibhavthorat100

---

## 🧠 Project Overview

This is a **Full Stack YouTube Clone Capstone Project**.

- **Frontend** handles UI, routing, state management, and user experience.
- **Backend** provides secure REST APIs with JWT authentication.
- Project is fully scalable and follows industry-level folder structure.

---

## 🚀 Features

### 🔹 Frontend Features
- YouTube-style Header
  - Search Bar (working on frontend)
  - Create Button
  - Notification Icon
  - Profile Dropdown (Login / Logout / My Channel)
- Responsive Sidebar
  - Home
  - Subscriptions (Dummy)
  - Explore (Trending, Music, Gaming, News)
  - Library, History, Watch Later, Liked Videos
- Home Page with Video Grid
- Watch Page
  - Video Player
  - Like Button
  - Comments UI
- Channel Page
  - Upload Video (UI)
  - Delete Video
- Authentication UI
  - Login Page
  - Protected Routes
- Light Theme UI
- Fully Responsive Design

---

### 🔹 Backend Features
- User Authentication
  - Register
  - Login
  - Password hashing using bcrypt
  - JWT-based authentication
- Channel Management
  - Create Channel
  - Get Channel Details
- Video Management
  - Upload Video
  - Get All Videos
  - Search Videos by Title
  - Filter Videos by Category
  - Delete Video (Owner only)
- Comment System
  - Add Comment
  - Get Video Comments
  - Delete Comment (Owner only)

---

## 🛠 Tech Stack

### Frontend
- React (Vite)
- Redux Toolkit
- React Router DOM
- Tailwind CSS
- react-icons
- Axios (API ready)

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT (JSON Web Token)
- bcryptjs
- dotenv
- cors

---

## 📂 Project Folder Structure

### 📁 Frontend (`youtube-clone-frontend`)
src/
├── app/
│ └── store.js
├── components/
│ ├── header/
│ ├── sidebar/
│ └── video/
├── features/
│ ├── auth/
│ ├── video/
│ └── ui/
├── pages/
│ ├── Home.jsx
│ ├── Watch.jsx
│ ├── Channel.jsx
│ └── Login.jsx
├── routes/
│ ├── AppRoutes.jsx
│ └── PrivateRoute.jsx
├── utils/
│ ├── api.js
│ └── formatViews.js
├── data/
│ └── mockVideos.js
├── App.jsx
├── main.jsx
└── index.css


---

### 📁 Backend (`youtube-clone-backend`)
src/
├── config/
│ ├── db.js
│ └── jwt.js
├── models/
│ ├── User.model.js
│ ├── Channel.model.js
│ ├── Video.model.js
│ └── Comment.model.js
├── controllers/
│ ├── auth.controller.js
│ ├── channel.controller.js
│ ├── video.controller.js
│ └── comment.controller.js
├── routes/
│ ├── auth.routes.js
│ ├── channel.routes.js
│ ├── video.routes.js
│ └── comment.routes.js
├── middleware/
│ └── auth.middleware.js
├── utils/
│ └── generateToken.js
├── app.js
└── server.js


---

## 🔐 Authentication Flow

- JWT-based authentication
- Token stored on frontend
- Protected routes implemented
- Secure middleware on backend
- Easy to extend with refresh tokens

---

## 🔍 Search Functionality

- Frontend-based search using video titles
- Backend API available for search
- Can be upgraded to full-text MongoDB search

---

## ⚙️ Environment Variables (Backend)

Create a `.env` file in backend root:

PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/youtube_clone
JWT_SECRET=your_jwt_secret_key


---

## ▶️ How to Run the Project

### 🔹 Backend Setup
```bash
git clone https://github.com/Vaibhavthorat100/youtube-clone.git
cd youtube-clone-backend
npm install
npm run dev
Server will run at:

http://localhost:5000
🔹 Frontend Setup
cd youtube-clone-frontend
npm install
npm run dev
Frontend will run at:

http://localhost:5173
🔗 Future Enhancements
Video streaming using Cloudinary / AWS S3

Real-time notifications

Subscription system

Like & Dislike counters

Admin dashboard

Dark Mode


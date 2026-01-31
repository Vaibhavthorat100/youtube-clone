# 🎥 YouTube Clone – Backend (MERN Stack)

This is the **backend** for a YouTube Clone application developed as part of a **Capstone Project (MERN Stack)**.  
The backend provides REST APIs for **authentication, channels, videos, comments**, and supports **JWT-based security**.

---

## 👤 Author

- **Name:** Vaibhav  
- **GitHub:** https://github.com/<YOUR_GITHUB_USERNAME>

> Replace `<YOUR_GITHUB_USERNAME>` with your actual GitHub ID.

---

## 🚀 Tech Stack Used

- **Node.js**
- **Express.js**
- **MongoDB (Mongoose)**
- **JWT (JSON Web Token)**
- **bcryptjs**
- **dotenv**
- **cors**

---

## 📁 Project Folder Structure

youtube-clone-backend/
│
├── src/
│ ├── config/
│ │ ├── db.js
│ │ └── jwt.js
│ │
│ ├── models/
│ │ ├── User.model.js
│ │ ├── Channel.model.js
│ │ ├── Video.model.js
│ │ └── Comment.model.js
│ │
│ ├── controllers/
│ │ ├── auth.controller.js
│ │ ├── channel.controller.js
│ │ ├── video.controller.js
│ │ └── comment.controller.js
│ │
│ ├── routes/
│ │ ├── auth.routes.js
│ │ ├── channel.routes.js
│ │ ├── video.routes.js
│ │ └── comment.routes.js
│ │
│ ├── middleware/
│ │ └── auth.middleware.js
│ │
│ ├── utils/
│ │ └── generateToken.js
│ │
│ ├── app.js
│ └── server.js
│
├── .env
├── package.json
└── README.md


---

## 🔐 Features Implemented

### ✅ User Authentication
- User Registration
- User Login
- Password Hashing using bcrypt
- JWT-based Authentication

### ✅ Channel Management
- Create Channel (Protected)
- Get Channel Details

### ✅ Video Management
- Upload Video
- Get All Videos (Home Page)
- Search Videos by Title
- Filter Videos by Category
- Delete Video (Owner only)

### ✅ Comments System
- Add Comment (Protected)
- Get Comments for a Video
- Delete Comment (Owner only)

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory:



PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/youtube_clone
JWT_SECRET=your_jwt_secret_key


---

## ▶️ How to Run This Backend Project

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Vaibhavthorat100/youtube-clone.git

cd youtube-clone-backend
2️⃣ Install Dependencies
npm install
3️⃣ Start MongoDB
Make sure MongoDB is running locally
(or update MONGO_URI for MongoDB Atlas).

4️⃣ Run the Server
npm run dev
Server will start at:

http://localhost:5000
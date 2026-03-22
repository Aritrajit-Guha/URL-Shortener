# 🔗 URL Shortener (Node.js Journey)

![React](https://img.shields.io/badge/Frontend-React%20%2B%20Vite-61DAFB) ![Node.js + Express.js](https://img.shields.io/badge/Backend-Node.js%20%2B%20Express.js-000000) ![Gemini](https://img.shields.io/badge/AI-Google%20Gemini-8E75B2) ![MongoDB](https://img.shields.io/badge/Database-MongoDB-FFCA28) ![GitHub Repo stars](https://img.shields.io/github/stars/Aritrajit-Guha/Url-Shortener?style=social)

---

## 📌 Project Overview
A full-stack **URL Shortener Web Application** built using **Node.js, Express, MongoDB, and React**.  
This project allows users to shorten long URLs, manage them, and track usage with authentication support.

---

## 🚀 Features
- 🔐 User Authentication (JWT + Cookies)
- 🔗 URL Shortening
- 📊 Analytics for shortened URLs
- 📋 Personalized Dashboard
- 🧾 MVC Architecture
- 🌐 Frontend Integration

---

## 🏗️ Tech Stack

### Frontend
- React + Vite
- HTML, CSS, JavaScript
### Backend
- Node.js
- Express.js
### Database
- MongoDB
### Authentication
- JWT (JSON Web Tokens)
- Cookies

---

## 📂 Project Structure

```
project-root/
│
├── client/ # Frontend (React + Vite)
│ ├── public/
│ │ └── images.png # Static assets
│ │
│ ├── src/
│ │ ├── components/ # Reusable UI components
│ │ ├── App.jsx # Main App component
│ │ ├── App.css # App styling
│ │ ├── index.css # Global styles
│ │ └── main.jsx # Entry point
│ │
│ ├── .gitignore
│ ├── eslint.config.js
│ ├── index.html # Root HTML file
│ ├── package.json
│ ├── package-lock.json
│ ├── vite.config.js # Vite configuration
│ └── vercel.json # Deployment config
│
├── server/ # Backend (Node.js + Express)
│ ├── db/ # Database connection
│ ├── models/ # Mongoose schemas
│ ├── routes/ # API routes
│ ├── controller/ # Business logic
│ ├── middleware/ # Auth middleware
│ └── index.js # Server entry point
│
└── README.md
```

## 📅 Development Journey

### ✅ Day 1: MVC Architecture Setup
- Implemented MVC structure  
- Created database connection logic  
- Designed schema models  
- Built routes and controllers  

---

### ✅ Day 2: Frontend Development
- Added `public/` directory  
- Created UI for URL shortener  
- Started documentation with README  

---

### ✅ Day 3: Authentication & Personalization
- Implemented JWT-based authentication  
- Added cookie-based session handling  
- Created login & signup pages:  
  - `/public/auth/signup.html`  
  - `/public/auth/login.html`  
- Built middleware for authentication (`middleware/auth.js`)  
- Developed personalized dashboard:  
  - Displays all shortened URLs  
  - Shows redirect links in tabular format  

---

## 🔑 Environment Variables

Create a `.env` file in the root directory:

```

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```

git clone [https://github.com/your-username/url-shortener.git](https://github.com/your-username/url-shortener.git)
cd url-shortener

```

### 2️⃣ Install Dependencies
```

npm install

```

### 3️⃣ Run the Server
```

npm start

```

---

## 🌐 API Endpoints (Sample)

| Method | Route     | Description             |
|--------|----------|--------------------------|
| POST   | /signup  | Register user            |
| POST   | /login   | Login user               |
| POST   | /shorten | Create short URL         |
| GET    | /:shortId| Redirect to original URL |

---

## 📊 Future Improvements
- 📈 Advanced analytics (click tracking, location)  
- 🌍 Deployment (AWS / Vercel)  
- 📱 Responsive UI improvements  
- 🔗 Custom short URLs  

---

## Author
- **Aritrajit Guha**
- **Sweety Paul**

---

## ⭐ Support
If you like this project, give it a ⭐ on GitHub!
```

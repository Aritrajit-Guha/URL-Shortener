# Nodejs journey
![React](https://img.shields.io/badge/Frontend-React%20%2B%20Vite-61DAFB) ![Node.js + Express.js](https://img.shields.io/badge/Backend-Node.js%20%2B%20Express.js-000000) ![Gemini](https://img.shields.io/badge/AI-Google%20Gemini-8E75B2) ![Firebase](https://img.shields.io/badge/Database-MongoDB-FFCA28)
![GitHub Repo stars](https://img.shields.io/github/stars/Aritrajit-Guha/Url-Shortener?style=social)
# Project: URL Shortener
---
**Day 1:** I made a MVC (MODEL VIEW CONTROLLER) sturcture for this projetc

- The db dirrectory holds the logic for connecting to the local MongoDb databse which contains the shorturls, redirecturls, and analytics
- The models contains the schema on which the documents are stored in the collection
- The routes directory holds the logic on what api to use when a request is received from a particular route
- The controller directory holds the logic of what does the api does
---
**Day 2:** Made the view page (frontend) for the URL-Shortener backend

- Added a public directory to hold the frontend logics and pages required
- Added a readme.md page for proper documentation of everyday tasks
---
**Day 3:**  Added authentication and personalized shorturl deck

- Added authentication through JWT (JsonWebTokens) and Cookies
- Added personalized list of all ShortUrls and Redirected Urls in serial order in a tabular form of the all the urls shortened by the particular user
- Added the middleware _*/middleware/auth.js_ file for the JWT authentication 
- Added _*/public/auth/signup.html_ & _*/public/auth/login.html_ pages to handle login and signuo actions
- Added the HandlerFunctions for all the tasks in the _*/controller/controller.js_ and the routes are handled in the _*/routes/route.js_
- Kept the JWT secret token inside .env and configured the dotenv() inside _*/server/index.js_

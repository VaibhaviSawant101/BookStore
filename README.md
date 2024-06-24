# BookStore

This repository contains a full-stack web application for a BookStore built with the MERN stack (MongoDB, Express.js, React.js, Node.js).

## Features

- **Backend**:
  - RESTful API built with Node.js and Express.js
  - MongoDB database integration for storing book data

- **Frontend**:
  - Single-page application (SPA) using React.js
  - Responsive design using Tailwind CSS

## Folder Structure
BookStore/  
├── backend/ # Backend Node.js application  
│ ├── controllers/  
│ ├── models/  
│ ├── routes/  
│ └── ...  
└── frontend/ # Frontend React application  
├── public/  
├── src/  
├── .gitignore  
├── package.json  
└── ...  

## Installation
To run this project locally, clone the repository and follow these steps:

1. **Backend Setup**:
   ```bash
   cd backend
   npm install
   npm start

2. **Frontend Setup**:
   ```bash
   cd frontend
   npm install
   npm run dev
   
3. **Open your browser and go to http://localhost:3000 to view the application.**

## Technologies Used

### Backend:

- Node.js
- Express.js
- MongoDB
- Mongoose

### Frontend:

- React.js
- Axios
- Tailwind CSS

### Home Page
![Home Page - Table](Screenshots/home.png)
![Home Page - Card](Screenshots/card.png)

### Add Book
![Add Book - Add](Screenshots/Add/add.png)
![Add Book - Result](Screenshots/Add/result.png)

### Edit Book
![Edit Book - Initial](Screenshots/Edit/initial.png)
![Edit Book - Edit](Screenshots/Edit/edit.png)
![Edit Book - Result](Screenshots/Edit/result.png)

### Delete Book
![Delete Book - Initial](Screenshots/Delete/initial.png)
![Delete Book - Edit](Screenshots/Delete/delete.png)
![Delete Book - Result](Screenshots/Delete/result.png)

### Show Book
![Show Book](Screenshots/show.png)

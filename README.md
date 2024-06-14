# Simple Blog Display

Simple Blog Display is a React application that fetches blog data from a JSON file and displays each blog post dynamically. Each post includes a title, content, author information, and an image.

## Features

- Display multiple blog posts fetched from a JSON file.
- Each blog post includes a title, content, author, and image.
- Utilizes React Router for navigation with a basic Navbar and an About page.

## Technologies Used

- **React**: Front-end JavaScript library for building user interfaces.
- **React Router**: Declarative routing for React applications.
- **HTML/CSS**: Basic styling and structure.
- **JavaScript (ES6+)**: Modern JavaScript syntax and features.

## Getting Started

To run this project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/zainab2k/Simple-blog-display.git
   cd Simple-blog-display

  2. **Install dependencies:**
     ```bash
     npm install
     
   3. **Run the development server:**
      ```bash
      npm start
4. **Open in your browser:**
   Open http://localhost:3000 to view the app in your browser.

 ##  Folder Structure
The project directory structure is organized as follows:

   ```php
   Simple-blog-display/
│
├── public/
│   ├── index.html
│   └── ...
│
├── src/
│   ├── components/
│   │   ├── Blog.js        # Component for displaying individual blog posts
│   │   ├── BlogList.js    # Component for rendering a list of blog posts
│   │   ├── Navbar.js      # Navigation bar component
│   │   └── ...            # Other components used in the application
│   │
│   ├── assets/            # Static assets such as images
│   │   ├── img1.jpg
│   │   ├── img2.jpg
│   │   └── ...
│   │
│   ├── App.js             # Main component handling routing and page structure
│   ├── index.js           # Entry point for React application
│   └── ...
│
├── package.json
└── README.md              # This file, providing project information


Author
Zainab - GitHub
Acknowledgments
This project was inspired by various React tutorials and documentation resources.


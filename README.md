Simple Blog Display
This project is a simple blog display application built using React. It fetches blog data from a JSON file and dynamically renders each blog post. Each post includes a title, content, author information, and an image.


Features
Display multiple blog posts fetched from a JSON file.
Each blog post includes a title, content, author, and image.
Utilizes React Router for navigation with a basic Navbar and an About page.
Technologies Used
React: Front-end JavaScript library for building user interfaces.
React Router: Declarative routing for React applications.
HTML/CSS: Basic styling and structure.
JavaScript (ES6+): Modern JavaScript syntax and features.
Getting Started
To run this project locally, follow these steps:

Clone the repository:

bash
Copy code
git clone https://github.com/zainab2k/Simple-blog-display.git
cd Simple-blog-display
Install dependencies:

bash
Copy code
npm install
Run the development server:

bash
Copy code
npm start
Open in your browser:

Open http://localhost:3000 to view the app in your browser.

Folder Structure
The project directory structure is organized as follows:

php
Copy code
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
Detailed Description
Components
Blog.js: Renders an individual blog post with its title, content, author, and image.
BlogList.js: Fetches blog data from blogData.json and maps each blog object to the Blog component.
Navbar.js: Provides navigation links using React Router for navigating between the Home and About pages.
JSON Data
blogData.json: Contains static data for blog posts including titles, content, authors, and image paths.
Routing
React Router: Used for handling navigation between different views/pages within the application.
Styling
CSS: Basic styling applied to components to structure and present the blog posts and navigation.
Additional Information
This project was created as a practice exercise to solidify React fundamentals and component-based architecture.
Blog post images are stored in the src/assets/ directory.
The project includes a basic navigation bar with links to the home page (blog display) and an About page.
Author
Zainab - GitHub
Acknowledgments
This project was inspired by various React tutorials and documentation resources.
License
This project is licensed under the MIT License. See the LICENSE file for details.

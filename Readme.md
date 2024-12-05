# Ecommerce Applications

# Milestone 1: Project Overview


1. Authentication: Provides functionality for users to sign up, log in, and log out securely.
2. Product Page: Displays a list of all available products with details such as name, price, and description.
3. Orders Page: Displays a personalized order history for each user, showing details of past and current orders.
4. Payment Gateway: Integrates a secure payment system to process transactions seamlessly.



# Milestone 2:

# E-Commerce App Follow-Along Project

## Overview

I included both the frontend and backend components. For frontend I used React.js with Tailwind CSS for styling, and the backend is built with Node.js using Express, Mongoose, and MongoDB.

### Key Features:

1. **Frontend:**
   - I created a Login Page using Tailwind CSS for responsive and accessible styling.
   - I made the page responsive.
   - The frontend is built with React.js, and the user interface (UI) is structured to allow easy maintenance.

2. **Backend:**
   - The backend is built using Node.js and Express.
   

3. **Tailwind CSS Setup:**
   - I installed and configured Tailwind CSS for styling the frontend.

## Installation & Setup

### Backend Setup:
1. **I created a Backend Directory**:  
   I used gitbash to run these commands:
    - mkdir Backend
    - cd Backend

### Initialize the Backend Project:

I used bash to run the below command: 
  - npm init -y

### Install Required Dependencies:
I used bash to run the below command:
- npm i express mongoose cors nodemon

### Project Structure:
I used bash to run the below command:
- mkdir src
- cd src


## Frontend Setup:
### Create Frontend Directory:
I used bash to run the below command:

- mkdir Frontend
- cd Frontend


## Install Tailwind CSS:
Install Tailwind CSS, PostCSS, and Autoprefixer as development dependencies:

I used bash to run the below command:

- npm install -D tailwindcss postcss autoprefixer

## Initialize Tailwind CSS Configuration:

I used bash to run the below command:

- npx tailwindcss init -p





### For the Login Page
- Input fields for email and password.
- Basic input validation.
- Responsive design for mobile and desktop views.




# Milestone 3

## Overview
Today, I worked on setting up the backend for my project. This involved connecting the application to MongoDB, and implementing error handling. 

## 1. Nodejs server setup and api interface:
- I initialized an Express server and set up a basic route to handle API requests.
- The server was configured to serve responses appropriately and form the foundation for further API development.

## 2. Connecting the application to MongoDB to store and manage data
- I established a connection to MongoDB using Mongoose.
- The connection string was stored in an `.env` file.

## 3. Build a connection between database and server
- I integrated the database connection into the server setup.
- When I start the server, the application now connects to MongoDB.

## 4. Implementing an error handler
- I created a Error-Handler file to handle unexpected errors.

## Branch Management
- I switched to a new branch named `milestone3` to keep the changes isolated from the main branch.

## Environment Variables
- A `.env` file was created to store configuration details like the database URL and server port.

## Folder Structure
- I organized the backend files into appropriate folders: `src`,`config`, `DB`, and `utils`.

## Version Control
- All changes were committed to the `milestone3` branch with a  commit message.



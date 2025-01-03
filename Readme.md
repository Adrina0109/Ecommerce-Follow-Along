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



# Milestone 4

## Today's Progress:
Today, I focused on implementing user management functionalities for the backend. This involved creating a user model, setting up controllers to manage user-related data, and enabling file uploads using Multer. Below are the details of the steps I completed:


### 1. **User Model for the  Database**
   - Inside src I created models folder, inide that I created a file named `user.model.js` to define the user schema.


### 2. **Setting Up Controllers to Handle User-related Data**
   - I created a controllers folder inside the `src` directory.
   - Inside the controllers folder, I created a file named `user.controller.js` to handle user-related actions.
   - This file includes functions to:
     This allows the users to update their personal information like name,email and password and enables new users to add their information.

### 3. **Enabling File Uploads Using Multer**
   - I installed and configured Multer by the command npm i multer.
   - I added a middleware to the routes for processing file uploads. The middleware ensures proper validation of file type and size before saving  it.




# Milestone:5

## Overview
In this milestone, I worked on creating a Sign-Up page for users to register by filling out their details. I ensured the design was simple,while implementing form validation to check user inputs before submission.

---

## Today's Progress

### 1. Built the Sign-Up Page UI
- **Created a basic layout using HTML**:
  - Added fields for Name, Email, and Password.
  - Included a submit button for user registration.
- **Styled the form with CSS**:
  - Kept the design simple.
### 2. Implemented Form Validation
- **Added input validation**:
  - Checked if the email is in the correct format (example@domain.com).
  - Ensured the password met security criteria (minimum length).
- **Validation Benefits**:
  - Prevented incorrect or incomplete data from being submitted.
  - Improved user experience by guiding users with error messages.




# Milestone:5

## Overview
In this milestone, I worked on creating a Sign-Up page for users to register by filling out their details. I ensured the design was simple, user-friendly, and effective, while implementing form validation to check user inputs before submission.


## Today's Progress

### 1. Built the Sign-Up Page UI
- **Created a basic layout using HTML**:
  - Added fields for Name, Email, and Password.
  - Included a submit button for user registration.
- **Styled the form with CSS**:
  - Ensured the design was clean and easy to use.
  - Applied responsive styling for better accessibility on different devices.

### 2. Implemented Form Validation
- **Added input validation**:
  - Checked if the email is in the correct format (e.g., `example@domain.com`).
  - Ensured the password met security criteria (e.g., minimum length).
- **Validation Benefits**:
  - Prevented incorrect or incomplete data from being submitted.
  - Improved user experience by guiding users with error messages.




# Milestone:6

## Overview
In this milestone, I worked on implementing email verification for user registration. I ensured that the email address provided by users is valid and secure. For this I used JWT tokens for generating activation links and Nodemailer for sending verification emails.

---

## Today's Progress:

### 1. Generated JWT Tokens for Activation
- **Created a JWT token during user signup**:
  - The token contains basic user information like the email address.
  - Used the token to create a unique activation link.

### 2. Configured Nodemailer to Send Verification Emails
- **Set up Nodemailer**:
  - Configured SMTP settings for sending emails.
- **Sent verification emails**:
  - The email contains instructions and a clickable link for account activation.

### 3. Created an Endpoint to Verify Tokens
- **Verified the activation token**:
  - Implemented an endpoint to handle requests from the activation link.
  - Validated the token to ensure it is valid and hasn’t expired.
- **Activated the user account**:
  - Once verified, the user’s account status is updated to active.



# Milestone 7 

## Today's Progress:
###  1. User Registration:
- I've implemented a check to verify if the user’s email is already registered in the database. 
- If the email is already associated with an existing account, the system will prompt the user to log in instead of allowing them to register again.


- If the user is not found in the database, I’ve set up functionality to hash their password using bcrypt.js for security.
- I then create a new user by storing their name, email, and hashed password in the database.


### 2. User Login:
- For login, I’ve ensured that the system checks if the email exists in the database.
- If the email is found, I validate the provided password.
  - If the password is correct, I generate a JWT token and store it in a cookie for the user's session.
  - If the password is incorrect, the system will notify the user that they need to sign up first, as they are not registered.


# Milestone 8: 
Building the Product Display

## 1. Reusable Card Component

In this milestone, I created a **Card Component** that can be used across the app to display product details. This component accepts props such as:

- **Product Name**
- **Product Image**
- **Product Price**

The card component ensures that all product data is displayed consistently across the homepage.

## 2. Homepage Layout Design

I designed the **Homepage Layout** using **Flexbox** to create a responsive grid. This layout displays multiple product cards neatly and adapts to different screen sizes for a smooth user experience.

---



# Milestone 9:
Product Form and Data Handling

## 1. Product Form Design and Implementation

I built a **Product Form** where users can input information about a new product, including:

- **Product Name**
- **Price**
- **Images (multiple)**

This form enables the user to submit details about new products.

## 2. Enable Multiple Product Images

The form includes functionality to accept multiple images for each product. Users can upload multiple images at once, and these images will be handled and stored accordingly.

## 3. Saving Form Data to the Database

Once the user submits the form, the product data, including the images, is sent to the backend and saved in the database. I implemented an API endpoint using **Express** to handle this data saving process.

## 4. Displaying Saved Products on the Homepage

After the product is successfully saved, I added a feature to **fetch and display saved products** on the homepage. The product details are dynamically loaded from the backend and displayed using the **Card Component** created in Milestone 8.



# Milestone 10

## Overview:

I've created a **Product Schema** using **Mongoose** to structure product data (name, description, price, image URL). I also built a **POST endpoint** to accept product data, validate it, and store it in **MongoDB**.


### 1. Product Schema

I defined the structure for product data with the following fields:

- **Name** (required)
- **Description**
- **Price** (required, number)
- **Image URL** (string)

Each field has proper validation to ensure correct data types and required fields.

---

### 2. POST Endpoint

I built a **POST endpoint** to:

- Receive product data.
- **Validate** the data.
- **Save** it to MongoDB.

This ensures that new products are added correctly to the database.

This is all that I've done for this milestone.










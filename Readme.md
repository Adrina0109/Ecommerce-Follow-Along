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


# Milestone 11: 

## Overview
In this milestone, I worked on creating an endpoint that sends all the product data from the backend.

## Features
- **Backend**: Created an endpoint that returns all product data.

## Backend Endpoint
- Created an endpoint in the backend that sends all the product data to the frontend.
- The data is fetched from the server and returned as a JSON response.


# Milestone 12:

## Overview
In this milestone, I focused on the backend to create an endpoint that sends all product data along with the associated user email.
The data is filtered based on certain constraints before being sent to the frontend.

## Features
- **Backend Endpoint**: Created an endpoint that returns products along with the associated user email.
- **Data Filtering**: Filtered the data based on specific constraints before sending it to the frontend.
- **User Email**: The product data includes the user’s email, linking each product to a specific user.


# Milestone 13: 

## Overview
In this milestone, I added an "Edit" feature that allows users to update existing product data. 
The backend endpoint updates the product in MongoDB, and on the frontend, users can click an "Update" button to fill a form with the product's data, edit it, and save the changes.

## Features
- **Update Button**: Added an "Update" button to each product card.
- **Auto-Fill Form**: When clicked, a form is filled with the current product data for editing.
- **Backend Endpoint**: Created an endpoint to handle updating product details in MongoDB.
- **Database Update**: Changes are saved to the database when the user submits the form.

# Milestone 14: 

## Overview
In this milestone, I added a "Delete" feature that allows users to remove products from MongoDB. 
When the "Delete" button on a product card is clicked, the product ID is sent to the server to delete the product.

## Features
- **Delete Button**: Added a "Delete" button to each product card.
- **Frontend**: When clicked, the product ID is sent to the server to request deletion.
- **Backend Endpoint**: Created an endpoint to delete the product from MongoDB by its ID.
- **Database Deletion**: The product is removed from the database upon a successful request.

# Milestone 15: 

## Overview
In this milestone, I created a new Navigation (Navbar) component with links to all the pages: Home, My-products, Add product, and Cart.

## Features
- **Nav Component**: Added a new Nav component with links to all pages.
- **Page Links**: Created links for Home, My-products, Add product, and Cart in the navbar.
- **Smooth Navigation**: Ensured the navigation between pages is seamless and easy.

# Milestone 16:

## Overview
In this milestone, I created a new page that displays all the product data, along with a single page product details page. 
Additionally, I created an Image Modal component to allow users to view larger images of the products.

## Features
- **Product Listing Page**: Created a new page to display all product data in a list.
- **Single Product Details Page**: Added a page to display detailed information for a single product.
- **Image Modal Component**: Implemented a modal to display larger images of the products with navigation controls.






# Milestone 16:

## Overview
In this milestone, I created a new page that displays all the product data, along with a single page product details page. Additionally, I developed an Image Modal component to allow users to view larger images of the products.

## Features
- **Product Listing Page**: Created a new page to display all product data in a list.
- **Single Product Details Page**: Added a page to display detailed information for a single product.
- **Image Modal Component**: Implemented a modal to display larger images of the products with navigation controls.



# Milestone 17

## Overview
In this milestone, I focused on implementing the Cart functionality for the application. This involved creating the **Cart Schema** to store cart data, developing the **Cart Route** for handling API requests related to the cart, and building the **Cart Controller** with `get` and `addToCart` methods to manage cart items.

## Features
- **Cart Schema**: Created the Cart schema to define the structure of the cart data and ensure proper data storage.
- **Cart Route**: Developed the Cart route to handle the API endpoints related to cart operations, including fetching and adding items to the cart.
- **Cart Controller**: Implemented the controller functions:
  - `get`: Fetches the current user's cart data.
  - `addToCart`: Allows the user to add new products to the cart.




# Milestone 18

## Overview
In this milestone, I implemented the backend functionality for the cart page by adding essential endpoints. Specifically, I created an endpoint for the cart page itself and another endpoint to fetch the products currently stored in the cart for a specific user.

## Features
- **Cart Page Endpoint**: Developed a backend route that serves the cart page, providing a foundation for users to interact with their cart.
- **Get Cart Products Endpoint**: Implemented an endpoint that fetches all the products in the user's cart, enabling the user to view and manage the items they have added.

These endpoints facilitate the cart management features in the application, enabling users to access their cart data seamlessly.

# Milestone 19

## Overview  
In this milestone, I focused on implementing the **Cart UI** for the application, which allows users to view their cart details. This involved creating the **CartPage.jsx** and **CartCard** components in the frontend to display cart items, and setting up the necessary functionality to fetch cart data from the backend.

## Features  
- **Cart UI**: Developed the user interface for the Cart page where users can view all items added to their cart.
- **CartPage.jsx**: Created the `CartPage.jsx` component to render the entire cart page layout and display a list of cart items.
- **CartCard**: Designed the `CartCard` component to represent individual cart items with relevant details such as product name, image, and price.
- **Fetching Cart Details**: Integrated the frontend with the backend to fetch the user's cart data through an API request. The cart data is displayed dynamically in the Cart UI.
- **/cart Endpoint**: Set up the `/cart` endpoint so users can easily navigate to the cart page and view the details of the products they have added.

# Milestone 20

## Overview
In this milestone, I focused on creating a user profile page with relevant details. This includes the development of a backend endpoint for fetching the user’s profile data, as well as a frontend component to display the user’s profile information.

## Achievements
- **Profile Page Endpoint**: Implemented the `/profile` endpoint to retrieve and display the authenticated user’s profile data.
- **ProfileCard Component**: Created the `ProfileCard.jsx` component, which displays the following user details:
  - **Profile Photo**: User's profile image.
  - **Username**: The username of the user.
  - **Email ID**: The email address associated with the user's account.
  - **Role**: The user's role (e.g., Admin, User).
  - **Address**: The user's address details.
  


# Milestone 21
## Overview
In this milestone we had to create an user interface for displaying the address. The goal is to allow users to input and store their address information in a structured way, including city, country, address lines, and address type.

### Features  
- **Address Page UI**: Developed the user interface for the address page where users can input their address details such as city, country, address1, address2, address3, and address type.
- **AddressPage.jsx**: Created the `AddressPage.jsx` component to render the Address page layout and allow users to fill in and submit their address information.
- **/address Endpoint**: Set up the `/address` endpoint to handle displaying the Address page and receiving user input for address details.


# Milestone 22  

## Overview  
In this milestone, I focused on handling address submission and storing multiple addresses for each user in the database. The goal was to ensure that the address data received from the frontend is correctly processed and stored in a user-specific array within the database.

### Features  
- **Address Submission Handling**: Implemented functionality to receive address data from the frontend via an HTTP POST request.
- **Database Integration**: Developed logic to add the received address data to the user document in the database, specifically inside an array that holds multiple addresses.
- **Address Array**: Enhanced the user model to support storing an array of addresses, allowing users to have multiple addresses in their profile. Each address will be stored with details such as city, country, address lines, and address type.

# Milestone 23

## Overview  
In this milestone, I focused on integrating the functionality to select and display the user's address during the checkout process on the cart page. The goal was to allow users to choose an address from their stored addresses and display it before finalizing the checkout.

### Features  
- **Address Selection**:  
  Implemented functionality to display the stored addresses and allow users to select one for checkout.
  
- **Address Display**:  
  Once an address is selected, it is displayed on the cart page before proceeding to the checkout.

- **Checkout Integration**:  
  Integrated the selected address into the checkout flow, ensuring it is visible and ready for the order process.


# Milestone 24

## Overview  
In this milestone, I created the `OrderConfirmation.jsx` component to display the user's orders and their total value after completing the checkout process. The goal was to provide users with a summary of their orders and allow them to see the total value once they proceed from the cart to the order confirmation.

### Features  
- **Order Confirmation Page**:  
  Created the `OrderConfirmation.jsx` component that displays a list of all the orders made by the user.

- **Order Summary**:  
  The page includes a detailed view of each order, showing the items purchased, quantities, and pricing information.

- **Total Value Calculation**:  
  Implemented logic to calculate and display the total value of the user's order, including item prices, taxes, and any applicable discounts.

- **Post-Checkout Navigation**:  
  Once users complete the checkout process, they are redirected to the order confirmation page where they can view their order details and total.




# Milestone 25  

## Overview  
In this milestone, I worked on handling order processing by receiving product details, user information, and address details. The goal was to create separate orders for each product while using the same address.  

### Features  

- **User Identification**  
  - Retrieved the user `_id` based on their email.  

- **Order Creation**  
  - Created separate orders for each product while ensuring they use the same address.  

- **Order Storage**  
  - Stored the order details in the MongoDB `orders` collection.  


# Milestone 26

## Overview  
In this milestone, I worked on handling order processing by receiving product details, user information, and address details. The goal was to create separate orders for each product while using the same address and provide an endpoint to retrieve user-specific orders.  

### Features  

- **User Identification**  
  - Retrieved the user `_id` based on their email.  

- **Order Creation**  
  - Created separate orders for each product while ensuring they use the same address.  

- **Order Storage**  
  - Stored the order details in the MongoDB `orders` collection.  

- **Order Retrieval**  
  - Provided an endpoint to retrieve all orders for a specific user.  




# Milestone 27

## Overview  
This module focuses on handling order processing by receiving product details, user information, and address details. Each order is processed separately per product while maintaining a common shipping address. Additionally, an `order-history` endpoint has been implemented to display all order items along with their processing status.  

## Features  

### User Identification  
- Retrieved the user `_id` based on their email.  

### Order Creation  
- Created separate orders for each product while ensuring they use the same address.  

### Order Storage  
- Stored order details in the MongoDB `orders` collection.  

### Order Retrieval  
- Provided an endpoint to retrieve all orders for a specific user.  

### Order History  
- Implemented an `order-history` endpoint to fetch all order items.  
- Displayed the processing status of each order item.  

## API Endpoints  

### Retrieve User Orders  
**Endpoint:** `GET /api/orders`  
- Returns all orders for the authenticated user.  

### Order History  
**Endpoint:** `GET /api/order-history`  
- Fetches all order items along with their processing status.  

# Milestone 28

## Overview  
In this milestone, I worked on handling order processing by receiving product details, user information, and address details. The goal was to create separate orders for each product while using the same address and provide an endpoint to retrieve user-specific orders.  

### Features  

- **User Identification**  
  - Retrieved the user `_id` based on their email.  

- **Order Creation**  
  - Created separate orders for each product while ensuring they use the same address.  

- **Order Storage**  
  - Stored the order details in the MongoDB `orders` collection.  

- **Order Retrieval**  
  - Provided an endpoint to retrieve all orders for a specific user.  

- **Order Cancellation**  
  - Added a cancel button near each order item.  
  - Users can cancel an order when required.  
  - Integrated functionality to update the order status accordingly.  



# Milestone 29 & 30  

## Overview  
In these milestones, I've worked on integrating PayPal as a payment option. I set up a PayPal Developer Account, retrieved necessary credentials, and implemented UI elements to allow users to select their preferred payment method.  


### Set Up PayPal Developer Account  
- Created a PayPal Developer Account.  
- Logged into the PayPal Developer Dashboard.  
- Accessed the **Sandbox Accounts** section.  
- Retrieved and saved the **Sandbox User ID** for testing purposes.  

### Retrieved PayPal API Credentials  
- Located the **Sandbox Account** in the PayPal Developer Dashboard.  
- Copied and securely stored the **Client ID** needed for API integration.  

### Implemented Payment Options in UI  
- Added **radio buttons** for users to choose between:  
  - **Cash on Delivery (COD)**  
  - **Online Payment via PayPal**  
- Dynamically displayed the **PayPal payment button** when the user selected the **Online Payment** option 


# Milestone 31  

## Overview  
In this milestone, I've made updates to the frontend by integrating Redux for managing user email state after login. This ensures that the email is stored in Redux state and can be accessed globally across the application.  

## What I've Done  

###  Implemented Redux State Management for User Email  
- Added an **action** in Redux to update the email state when a user logs in.  
- Created a **Redux slice** with an initial state containing the email and a reducer to handle email updates.  
- Configured the **Redux store** to include the newly created user slice.  

###  Updated Login Functionality to Store Email in Redux  
- Integrated **Redux** in the login component by dispatching the email to Redux state after a successful login.  
- Retrieved **user credentials** from the login form and updated Redux state accordingly.  
- Stored the **authentication token** in `localStorage` for session management.  
- Ensured that the **email state persists** throughout the application for future use.  

These updates improve **state management** and allow the application to track user login details efficiently using Redux.   

# Milestone 32  

## Overview  
In this milestone, I made minor updates to Redux state usage in multiple files. Specifically, I added a `useSelector` statement to retrieve user data from Redux and log it to the console.  

### Features  

- **Redux State Access**  
  - Added `useSelector` to retrieve `state.user` in `CartPage.jsx`, `HomePage.jsx`, and a few other files.  

- **ProfileCard.jsx Update**  
  - Imported `useSelector` from `react-redux`.  
  - Retrieved user data using `useSelector(state => state.user)`.  
  - Logged the retrieved data to the console.  


# Milestone 33  

## Overview  
In this milestone, I made updates to authentication handling in the backend and Redux state usage in the frontend.  

### Backend Updates  
- **Updated `userController.js` (Login Functionality)**  
  - Modified the `login` function to set a `token` cookie in the response.  
  - Added `httpOnly`, `secure`, and `sameSite: 'Strict'` properties for better security.  

### Frontend Updates  
- **Updated `HomePage.jsx`**  
  - Added `useSelector` import from `react-redux`.  
  - Retrieved user data from Redux state using `useSelector(state => state.user)`.  

These changes enhance authentication security and improve state management in the application. 

# Milestone 34: JWT Authentication

## Overview
I implemented JSON Web Token (JWT) for secure communication between the client and the server during user authentication.

## Key Features
- **JWT Authentication:** Used JWT for user login and to protect API endpoints.  
- **Cookie Storage:** Stored JWT securely in cookies for session management.  
- **Client-Server Communication:** Ensured all requests between the client and server include the JWT for authentication. 


# Milestone 35:

Backend Deployment Link: https://ecommerce-follow-along-dwdh.onrender.com

Frontend Deployment Link: ecomfro.netlify.app

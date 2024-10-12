
## To Run the Project Locally, Follow These Steps

1. Clone the repository

    ```
    git clone https://github.com/fms-faisal/skyview-apartments-client.git
    ```
2. Navigate to the project directory
    ```
    cd skyview-apartments-client
    ```

3. Install dependencies
    ```
     npm install
    ```

4. Run the development server
   ```
     npm run dev
   ```

5. Replace environmental variables

   Create **.env.local** file and add the following environment variables
   ```
    VITE_API_URL='https://your-server-link.com'  # Replace with server link
   ```

   Firebase configuration
   ```
    VITE_APIKEY='YOUR_API_KEY'
    VITE_AUTHDOMAIN='YOUR_AUTH_DOMAIN'
    VITE_PROJECTID='YOUR_PROJECT_ID'
    VITE_STORAGEBUCKET='YOUR_STORAGE_BUCKET'
    VITE_MESSAGINGSENDERID='YOUR_MESSAGING_SENDER_ID'
    VITE_APPID='YOUR_APP_ID'
   ```

---

# **Skyview Apartments: Building Management System**

## **Overview**
**Skyview Apartments** is a web application for managing apartment rentals. It allows users to apply for apartments, with administrators able to accept or reject applications and manage user roles. Each apartment is available to one renter at a time, and the app integrates Stripe for secure payments. Built with DaisyUI, TailwindCSS, JavaScript, React, Firebase, Axios, JWT, Express, and MongoDB, it offers a responsive user experience.

## **Key Features**
- **Exclusive Apartment Availability**: Each apartment is assigned to only one renter at a time, ensuring a fair rental process.
- **Application Management**: Users can apply for apartments, and administrators have the ability to accept or reject these applications.
- **User Role Management**: Administrators can change user roles between user, member, and admin as needed for better management.
- **Secure Payments**: Integrated Stripe for secure credit card payments, simplifying the rental transaction process.

### **User Dashboard**
The user dashboard provides a personalized interface for users to view their profiles, make payments, and access announcements. It includes features such as:
- **Profile Information**: Displays name, image, and email.
- **Agreement Details**: Shows agreement accept date and rented apartment details.
- **Payment History**: Includes search functionality for payment records.

### **Apartment Management**
The system allows users to view and apply for apartments, which includes:
- **Apartment Details**: Displays image, floor number, block name, apartment number, and rent.
- **Agreement Button**: Allows users to apply for an apartment.
- **Pagination**: Facilitates easy navigation through apartment listings.

### **Admin Dashboard**
The admin dashboard provides a comprehensive interface for administrators to manage various aspects of the system, including:
- **Manage Members**: View and remove members.
- **Make Announcements**: Create and manage announcements.
- **Agreement Requests**: View and manage apartment agreement requests.
- **Manage Coupons**: View and add coupons.

### **Payment System**
The system includes a payment feature that allows users to make payments and apply coupons. It includes:
- **Payment Form**: Fields for member email, floor, block name, apartment number, rent, and month.


### **Responsive Design**
The system is designed to be responsive for all devices, including mobile, tablet, and desktop views.

### **Dynamic Banner**
- **React Slider**: Implements an automatic sliding banner showcasing building/apartment images.

## **Technical Details**

### **Frontend**
- **React**: A popular JavaScript library for building user interfaces.
- **React Slider**: For implementing the dynamic banner.
- **React Map**: To provide details about the apartment's location.

### **Backend**
- **Node.js**: A JavaScript runtime environment.
- **Express.js**: A popular web framework.

### **Database**
- **MongoDB**: A NoSQL database used to store user and apartment information.

### **Data Fetching**
- **TanStack Query**: Efficient data fetching and caching.
- **Axios**: A popular JavaScript library for making HTTP requests to interact with the backend API.

### **Authentication**
- **JWT (JSON Web Tokens)**: Used for user authentication and stores the token in local storage.


## **Live Demo**
[Building Management System Live Site](https://skyviewapartments-c882f.web.app/)

## **Repository Links**
- **Server Side GitHub Repository**: [Server Repository](https://github.com/Faisal778/skyview-apartments-server)

## **Admin Credentials**
- **Admin Email**: admin@gmail.com
- **Admin Password**: admin12345

 
---


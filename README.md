# User Management API

This project implements a RESTful API for a User Management System using Node.js, Express.js, and MongoDB.

## Features

*   User registration with name, email, password, and phone number.
*   User login with email and password.
*   User profile retrieval and update.
*   User account deactivation.
*   Super admin access to retrieve all user details.

## Key Decisions

*   **Super Admin:** A `role` field in the `User` model distinguishes super admins from regular users. The initial super admin account should be created manually in the database or using a separate script/endpoint.
*   **Account Deactivation:**  Instead of deleting user data, accounts are deactivated by setting the `isActive` flag to `false`. This preserves data and allows for potential reactivation.

## Technologies Used

*   Node.js
*   Express.js
*   MongoDB
*   Mongoose
*   bcryptjs (for password hashing)
*   jsonwebtoken (for authentication)

## Project Structure

user-management-api/
├── config/
│   └── db.js  // Database connection
├── models/
│   └── User.js // User schema
├── routes/
│   └── users.js // API routes
├── controllers/
│   └── userController.js // Controller logic
├── middleware/
│   ├── auth.js // Authentication middleware
│   └── superAdmin.js // Super admin middleware
├── app.js // Main application file
└── .env // Environment variables


## Installation and Setup

1.  Clone the repository: `git clone <repository_url>`
2.  Install dependencies: `npm install`
3.  Configure environment variables:
    *   Create a `.env` file in the project root.
    *   Add the following variables, replacing the placeholders with your actual values:
        ```
        MONGO_URI=<your_mongodb_connection_string>
        JWT_SECRET=<your_strong_jwt_secret>
        PORT=5000  // Or any port you prefer
        ```
4.  Start the server: `npm start`

## API Endpoints

| Method | Endpoint              | Description                                      | Access       |
| ------ | --------------------- | ------------------------------------------------ | ------------ |
| POST   | `/api/users`          | Register a new user                             | Public       |
| POST   | `/api/users/login`    | Login a user                                    | Public       |
| GET    | `/api/users/me`       | Get current user's profile                      | Private      |
| PUT    | `/api/users/me`       | Update current user's profile                   | Private      |
| DELETE | `/api/users/me`       | Deactivate current user's account              | Private      |
| GET    | `/api/users`          | Get all users (Super Admin only)                | Private (SA) |

## Authentication

*   The API uses JWT (JSON Web Tokens) for authentication.
*   After logging in, include the JWT in the `Authorization` header of your requests as a Bearer token (e.g., `Authorization: Bearer <token>`).

## Error Handling

The API provides informative error messages with appropriate HTTP status codes.

## Postman Collection

A Postman collection is included in the project to help you test the API endpoints.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.
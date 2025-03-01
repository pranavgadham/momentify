# Momentify API

This is a simple social media API built using Express.js and MongoDB, allowing users to manage their posts, comments, likes, friends, and OTP-based password resets.

## Features

- User authentication and profile management
- Create, update, delete, and fetch posts
- Comment on posts
- Like and unlike posts and comments
- Manage friendships
- OTP-based password reset
- Full API documentation available via Swagger UI

## Documentation

The full API documentation is available using Swagger UI.

- [API Documentation](http://localhost:3000/api-docs)

## Setup Instructions

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14 or higher)
- **MongoDB** (local or cloud instance)

### 1. Clone the Repository

Run the following command to clone the repository:

```bash
git clone https://github.com/your-username/momentify-api.git
cd momentify-api
```

### 2. Install Dependencies

Run the following command to install all required dependencies:

```bash
npm install
```

### 3. Set up Environment Variables

Create a .env file at the root of your project and set the following environment variables:

```bash
# .env file
PORT=
MONGO_URI=
JWT_KEY=
MAIL=
```

### 4. Start the Application

Run the application in development mode:

```bash
npm run dev
```

## Technologies Used

- Express.js: Web framework for Node.js
- MongoDB: NoSQL database for storing data
- Swagger-UI: For API documentation

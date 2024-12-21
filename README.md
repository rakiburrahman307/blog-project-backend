# Blog Platform Backend

## Welcome! 👋

The **Blog Platform Backend** is a robust service enabling users to create, update, and manage blogs. With role-based access control, it ensures a secure and efficient blogging experience for both users and admins.

---

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [API Endpoints](#api-endpoints)
5. [Validation and Error Handling](#validation-and-error-handling)

---

## Overview

### About the Project

The **Blog Platform Backend** is designed for blogging enthusiasts and administrators, providing secure authentication, role-based actions, and a public API for browsing blogs.

### Key Highlights

- RESTful API design for blog and user management.
- Role-based access control for admin and user actions.
- Search, filter, and sort functionalities for blogs.
- Robust validation and error handling.

---

## Features

- **Authentication**: Secure login and registration.
- **Role-Based Access Control**: Separate actions for Admin and User roles.
- **Blog Management**: Create, update, and delete blogs.
- **Public Blog Access**: View blogs with search, sorting, and filtering.
- **Error Handling**: Detailed error responses for consistent API behavior.

---

## Technologies Used

- **Node.js**: Runtime environment.
- **Express.js**: Web framework for building APIs.
- **MongoDB**: NoSQL database for data storage.
- **Mongoose**: ODM library for MongoDB.
- **TypeScript**: For static typing and cleaner code.
- **Zod**: Schema validation for requests and inputs.

---

## API Endpoints

### 1. Authentication

#### 1.1 Register User

**POST** `/api/auth/register`

#### 1.2 Login User

**POST** `/api/auth/login`

### 2. Blog Management

#### 2.1 Create Blog

**POST** `/api/blogs`

#### 2.2 Update Blog

**PATCH** `/api/blogs/:id`

#### 2.3 Delete Blog

**DELETE** `/api/blogs/:id`

#### 2.4 Get All Blogs (Public)

**GET** `/api/blogs`

### 3. Admin Actions

#### 3.1 Block User

**PATCH** `/api/admin/users/:userId/block`

#### 3.2 Delete Blog

**DELETE** `/api/admin/blogs/:id`

---

## Validation and Error Handling

- **Validation**: Zod is used to validate request bodies for user registration, login, and blog creation.
- **Error Handling**: Custom middleware ensures all errors are handled uniformly.

Example error response:

```json
{
  "success": false,
  "message": "Validation error",
  "statusCode": 400,
  "error": {
    "details": "Invalid input format"
  }
}
```

---

Thank you for using the **Blog Platform Backend**! 📝

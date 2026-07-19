# Book Store - Full Stack E-Commerce Platform

<div align="center">

[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-16.x-339933?style=flat-square&logo=node.js)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-5.x-47A248?style=flat-square&logo=mongodb)](https://www.mongodb.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](LICENSE)

A modern, feature-rich online bookstore platform built with React, Node.js, and MongoDB. Browse, purchase, and manage your favorite books with ease.

[Features](#features) • [Tech Stack](#tech-stack) • [Installation](#installation) • [Project Structure](#project-structure) • [API Documentation](#api-documentation)

</div>

---

## 📋 Overview

Book Store is a complete e-commerce solution for buying and selling books online. It provides a seamless user experience with modern UI/UX, secure authentication, and a robust backend API.

**Live Demo:** [Coming Soon]

---

## ✨ Features

### User Features
- 🔐 **Secure Authentication** - User registration, login, and session management
- 📚 **Browse Books** - Filter and search through multiple book categories
- ❤️ **Favorites** - Save books to your favorites list
- 🛒 **Shopping Cart** - Add/remove items with real-time updates
- 💳 **Order Management** - View order history and track purchases
- 👤 **User Profile** - Update personal information and settings
- 📱 **Responsive Design** - Works perfectly on desktop, tablet, and mobile

### Admin Features
- 📖 **Add/Update Books** - Manage book inventory
- 📊 **Order Management** - View and manage customer orders
- 👥 **User Management** - Monitor user activity

### Technical Features
- ⚡ **Fast Loading** - Optimized with Vite and React lazy loading
- 🎨 **Beautiful UI** - Tailwind CSS with custom components
- 🔄 **Real-time Updates** - Live cart and order status
- 📦 **State Management** - Redux for predictable state
- 🛡️ **Secure API** - JWT authentication and validation

---

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Next-generation build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Redux** - State management
- **Framer Motion** - Animation library
- **Axios** - HTTP client

### Backend
- **Node.js** - JavaScript runtime
- **Express** - Web framework
- **MongoDB** - NoSQL database
- **JWT** - Authentication
- **Vercel** - Deployment

---

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MongoDB Atlas account or local MongoDB instance

### Clone the Repository

```bash
git clone https://github.com/yourusername/book-store.git
cd book-store
```

### Backend Setup

```bash
cd Backend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Add your environment variables
# MONGODB_URI=your_mongodb_connection_string
# JWT_SECRET=your_jwt_secret
# PORT=5000

# Start the server
npm start
```

### Frontend Setup

```bash
cd Frontend-main/Frontend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Add your API endpoint
# VITE_API_URL=http://localhost:5000

# Start development server
npm run dev
```

---

## 📁 Project Structure

```
Book Store Project/
├── Backend/
│   ├── models/
│   │   ├── books.js          # Book schema and model
│   │   ├── users.js          # User schema and model
│   │   └── orders.js         # Order schema and model
│   ├── routes/
│   │   ├── book.js           # Book operations endpoints
│   │   ├── user.js           # User profile endpoints
│   │   ├── userAuth.js       # Authentication endpoints
│   │   ├── cart.js           # Cart management endpoints
│   │   ├── favourate.js      # Favorites endpoints
│   │   └── orders.js         # Order management endpoints
│   ├── app.js                # Express app configuration
│   ├── server.js             # Server entry point
│   ├── conn.js               # Database connection
│   └── package.json          # Dependencies
│
└── Frontend-main/Frontend/
    ├── src/
    │   ├── components/
    │   │   ├── Home/          # Homepage components
    │   │   ├── Navbar/        # Navigation components
    │   │   ├── BookinCard/    # Book card component
    │   │   ├── profile/       # Profile-related components
    │   │   └── Footer/        # Footer component
    │   ├── pages/
    │   │   ├── Home.jsx       # Home page
    │   │   ├── Allbooks.jsx   # All books page
    │   │   ├── Cart_add.jsx   # Shopping cart
    │   │   ├── Profile.jsx    # User profile
    │   │   ├── Login.jsx      # Login page
    │   │   ├── Signup.jsx     # Registration page
    │   │   ├── AddBooks.jsx   # Add book (admin)
    │   │   ├── UpdateBooks.jsx# Update book (admin)
    │   │   ├── AllOrders.jsx  # Orders page
    │   │   └── Favourites.jsx # Favorites page
    │   ├── store/
    │   │   ├── index.js       # Redux store
    │   │   └── auth.js        # Auth reducer
    │   ├── App.jsx            # Root component
    │   └── main.jsx           # Entry point
    ├── tailwind.config.js     # Tailwind configuration
    ├── vite.config.js         # Vite configuration
    └── package.json           # Dependencies
```

---

## 🚀 Quick Start

### Running Both Frontend and Backend

**Terminal 1 - Backend:**
```bash
cd Backend
npm start
# Server running on http://localhost:5000
```

**Terminal 2 - Frontend:**
```bash
cd Frontend-main/Frontend
npm run dev
# App running on http://localhost:5173
```

### Development Build
```bash
npm run build
```

### Production Build
```bash
npm run build:prod
```

---

## 🔌 API Documentation

### Base URL
```
http://localhost:5000/api
```

### Authentication Endpoints

#### Sign Up
```http
POST /auth/signup
Content-Type: application/json

{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "password123"
}
```

#### Login
```http
POST /auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

### Book Endpoints

#### Get All Books
```http
GET /books?category=fiction&limit=10&page=1
```

#### Get Single Book
```http
GET /books/:id
```

#### Add Book (Admin)
```http
POST /books
Authorization: Bearer <token>
Content-Type: application/json

{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "category": "Fiction",
  "price": 299,
  "description": "...",
  "imageUrl": "..."
}
```

#### Update Book
```http
PUT /books/:id
Authorization: Bearer <token>
```

#### Delete Book
```http
DELETE /books/:id
Authorization: Bearer <token>
```

### Cart Endpoints

#### Add to Cart
```http
POST /cart/add
Authorization: Bearer <token>
```

#### Get Cart
```http
GET /cart
Authorization: Bearer <token>
```

#### Remove from Cart
```http
DELETE /cart/:bookId
Authorization: Bearer <token>
```

### Order Endpoints

#### Create Order
```http
POST /orders
Authorization: Bearer <token>
```

#### Get Order History
```http
GET /orders/history
Authorization: Bearer <token>
```

### Favorites Endpoints

#### Add to Favorites
```http
POST /favorites/add
Authorization: Bearer <token>
```

#### Get Favorites
```http
GET /favorites
Authorization: Bearer <token>
```

---

## 🎨 Key Components

### HomePage
Interactive carousel with featured books, recent additions, and category browsing.

### BookCard
Reusable component displaying book information with add-to-cart and favorites functionality.

### Navbar
Responsive navigation with search, user authentication, and cart indicator.

### Profile
User dashboard for managing profile, orders, and favorites.

---

## 🔒 Environment Variables

### Backend (.env)
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/bookstore
JWT_SECRET=your_jwt_secret_key
PORT=5000
NODE_ENV=development
```

### Frontend (.env)
```
VITE_API_URL=http://localhost:5000/api
```

---

## 🧪 Testing

```bash
# Run tests
npm test

# Coverage report
npm run test:coverage
```

---

## 📱 Screenshots

### Home Page
- Interactive carousel with featured books
- Category filters
- Book recommendations

### Shopping Experience
- Book browsing with filters
- Add to cart/favorites
- Real-time cart updates

### User Profile
- Order history
- Favorites collection
- Account settings

---

## 🤝 Contributing

We love contributions! Here's how you can help:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Style
- Follow ESLint configuration
- Use meaningful variable names
- Add comments for complex logic
- Keep components small and reusable

---

## 🐛 Known Issues & Roadmap

### Current Issues
- [ ] Payment gateway integration pending

### Upcoming Features
- 🎯 Advanced book recommendations using ML
- 💬 Customer reviews and ratings
- 📧 Email notifications
- 📱 Mobile app (React Native)
- 🔍 Advanced search with filters

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👥 Authors & Contributors

- **Your Name** - Full Stack Developer

---

## 📞 Support

Have questions? Let's connect!

- 📧 Email: your.email@example.com
- 💼 LinkedIn: [Your LinkedIn Profile]
- 🐙 GitHub: [@yourprofile](https://github.com/yourprofile)

---

## 🙏 Acknowledgments

- React community
- Tailwind CSS team
- MongoDB documentation
- Contributors and testers

---

<div align="center">

Made with ❤️ by [Your Name]

⭐ If you found this helpful, please consider giving it a star!

</div>

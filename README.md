# 📚 Book Store - Full Stack E-Commerce Platform

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

**Live Demo:** [Insert Your Deployed Link Here - e.g., https://your-app.vercel.app]

---

## ✨ Features

### User Features
- 🔐 **Secure Authentication** - User registration, login, and session management.
- 📚 **Browse Books** - Filter and search through multiple book categories.
- ❤️ **Favorites** - Save books to your favorites list.
- 🛒 **Shopping Cart** - Add/remove items with real-time updates.
- 💳 **Order Management** - View order history and track purchases.
- 👤 **User Profile** - Update personal information and settings.
- 📱 **Responsive Design** - Works perfectly on desktop, tablet, and mobile.

### 🎨 UI Design Accent
- **Premium Aesthetics** - Custom typography and color tokens adapted from high-fidelity Figma specifications.
- **Modern Palette** - Featuring balanced dark/light mode accents like deep slates (`#0F172A`) and vivid brand oranges (`#F97316`).
- **Dynamic Elements** - Interactive hero slider highlighting new arrivals and trending categories.

### Admin Features
- 📖 **Add/Update Books** - Manage book inventory.
- 📊 **Order Management** - View and manage customer orders.
- 👥 **User Management** - Monitor user activity.

### Technical Features
- ⚡ **Fast Loading** - Optimized with Vite and React lazy loading.
- 🎨 **Beautiful UI** - Tailwind CSS with custom components.
- 🔄 **Real-time Updates** - Live cart and order status.
- 📦 **State Management** - Redux for predictable state.
- 🛡️ **Secure API** - JWT authentication and validation.

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
git clone [https://github.com/](https://github.com/)[Your-Username]/book-store.git
cd book-store
Backend Setup
Bash
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

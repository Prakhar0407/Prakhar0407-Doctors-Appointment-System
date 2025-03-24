# Doctors Appointment System

## Overview
The **Doctors Appointment System** is a web-based application designed to streamline the process of booking and managing doctor appointments. Built using **React.js, JavaScript, Node.js, Express.js, and MongoDB**, it provides users with a seamless experience to schedule appointments, track their status, and access medical updates.

## Features
- **User Authentication & Authorization:** Secure login and registration with JWT-based authentication.
- **Appointment Management:** Book, update, and track the status of appointments (visited/pending).
- **Doctor Reviews & Ratings:** Patients can rate doctors after appointments.
- **News Section:** Stay updated with the latest news on doctors and medicine.
- **RESTful API Integration:** Efficient communication between frontend and backend.
- **Secure CRUD Operations:** Ensuring robust data transactions with MongoDB.

## Tech Stack
- **Frontend:** React.js, JavaScript, CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT Tokens

## Installation

### Prerequisites
Ensure you have **Node.js** and **MongoDB** installed on your system.

### Steps to Run
1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/doctors-appointment-system.git
   cd doctors-appointment-system
   ```

2. **Install dependencies:**
   ```sh
   npm install
   cd frontend  # Navigate to frontend
   npm install
   ```

3. **Configure environment variables:**
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```env
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_secret_key
     PORT=5000
     ```

4. **Run the backend server:**
   ```sh
   cd backend
   npm run dev
   ```

5. **Run the frontend application:**
   ```sh
   cd frontend
   npm start
   ```

## Deployed Link
[Doctors Appointment System](https://docatpat.netlify.app)

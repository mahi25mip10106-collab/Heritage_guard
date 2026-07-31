# TAVIS – Tourism Assistance & Virtual Intelligent System

## Overview

TAVIS (Tourism Assistance & Virtual Intelligent System) is a smart heritage tourism platform designed to improve the travel experience by combining cultural exploration, emergency support, and location-based assistance into a single system.

The project focuses on making tourism more interactive, informative, and safer by providing visitors with historical information, cultural recommendations, and emergency response capabilities.

---

## Problem Statement

Tourists often face challenges while exploring unfamiliar places, such as:

- Lack of authentic historical information.
- Difficulty finding local cultural experiences.
- Limited access to nearby heritage recommendations.
- Safety concerns during travel.
- Fragmented tourism services across multiple applications.

TAVIS addresses these challenges through a unified intelligent tourism platform.

---

# Project Modules

## 1. TAVIS (Emergency Assistance)

The TAVIS module is responsible for handling emergency situations.

### Features

- SOS Emergency Button
- Location Capture
- Emergency Request Logging
- Supabase Integration
- API-based Emergency Response

---

## 2. DAASTAAN (Historical Storytelling)

DAASTAAN acts as a virtual heritage guide.

It allows users to ask questions regarding historical monuments and provides informative responses about heritage sites.

### Features

- Historical Information
- Interactive Chat Interface
- Heritage Storytelling
- Chat History Storage
- AI-ready Architecture

---

## 3. PARAMPARA (Culture & Heritage)

PARAMPARA promotes local traditions and cultural tourism.

It recommends places based on user interests and showcases Indian heritage, cuisine, monuments, and traditional experiences.

### Features

- Heritage Recommendations
- Cultural Exploration
- Local Cuisine Suggestions
- Traditional Experiences
- Tourism Promotion

---

## 4. Analytics

The analytics module provides basic system insights by retrieving tourism-related analytical information stored in the database.

---

# Technology Stack

## Frontend

- HTML5
- CSS3
- JavaScript
- Tailwind CSS
- Lucide Icons
- Feather Icons
- AOS Animation Library

---

## Backend

- Node.js
- Express.js

---

## Database

- Supabase

---

## Additional Libraries

- Axios
- Firebase Admin SDK
- dotenv
- CORS

---

# Project Architecture

```
User
   │
   ▼
Frontend (HTML + JavaScript)
   │
   ▼
Express Backend
   │
   ├── TAVIS Module
   ├── DAASTAAN Module
   ├── PARAMPARA Module
   └── Analytics
            │
            ▼
        Supabase Database
```

---

# API Modules

## TAVIS

### GET

```
/api/tavis/sos
```

Checks whether the emergency service is active.

### POST

```
/api/tavis/sos
```

Stores emergency location details inside the database.

---

## DAASTAAN

### POST

```
/api/daastaan/chat
```

Returns historical information according to the user's query while storing conversation history.

---

## PARAMPARA

### GET

```
/api/parampara
```

Checks module availability.

### POST

```
/api/parampara/recommend
```

Provides recommendations based on selected category.

---

## Analytics

### GET

```
/api/analytics
```

Fetches tourism analytics stored inside Supabase.

---

# Key Features

- Heritage Information Portal
- Cultural Tourism Guide
- AI-ready Historical Assistant
- Emergency SOS Support
- Local Recommendation Engine
- Responsive Dashboard
- Database Integration
- Modular Backend Architecture

---

# Folder Structure

```
TAVIS-V2
│
├── backend
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── routes
│   │     ├── tavis.js
│   │     ├── daastaan.js
│   │     ├── parampara.js
│   │     └── analytics.js
│   ├── server.js
│   └── package.json
│
├── frontend
│   ├── index.html
│   ├── tavis.html
│   ├── daastaan.html
│   ├── parampara.html
│   └── assets
│
└── README.md
```

---

# Installation

Clone the repository

```bash
git clone <repository-url>
```

Move into backend

```bash
cd backend
```

Install dependencies

```bash
npm install
```

Start server

```bash
npm start
```

Open the frontend pages in your browser or serve them using a local server.

---

# Future Scope

- AI-powered multilingual tourist guide
- Voice-based interaction
- Live navigation support
- QR-based monument information
- Personalized itinerary planning
- AR/VR heritage exploration
- Smart crowd monitoring
- Emergency authority integration

---

# Team 
Mahi Gadage
Govind Mewada 

---

Developed as a Smart Heritage Tourism Solution to enhance cultural exploration, tourist safety, and intelligent travel assistance.

---

## License

This project is developed for educational and innovation purposes.

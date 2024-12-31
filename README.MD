# 🏆 Champions League API ⚽️

![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white) ![Status](https://img.shields.io/badge/Status-Completed-brightgreen?style=flat)

---

## 🖊️ About
The **Champions League API** is a **Simple API** built with **Express** and **TypeScript**. Its primary goal is to provide a fast and practical solution for simulating UEFA Champions League data, ideal for front-end projects and local testing. This API stands out by being lightweight and easy to configure, offering a fresh alternative to conventional mock APIs.

> Based on the "DIO" NodeJs course, by Felipão, with improvements implemented for a more automated dynamic system

---

## 💻 Technologies Used
- 🟢 **Node.js**: JavaScript runtime for back-end development.  
- 🔹 **TypeScript**: A superset of JavaScript that adds static typing.  
- ⚡ **Express**: A Web Framework for building APIs.  
- 🌐 **CORS**: Support for cross-origin requests.  

---

## 🚀 Features
- Provides endpoints to access data about Champions League clubs and players.
- Simulates a real API environment for integration with front-end applications.
- Includes mock data for easy customization and use.

---

## ⚙️ Installation and Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/Luixs/NodeJs-ChampionsAPI
   ```

2. Navigate to the project directory:
   ```bash
   cd champions-league-api
   ```

3. Install dependencies:
   ```bash
   npm i
   ```

4. Start the server:
   ```bash
   npm run start:watch
   ```

By default, the server runs on **http://localhost:3333**.

---

## 📡 API Endpoints

### Base URL: `http://localhost:3333`

### **1. Get All Clubs**
**Endpoint:** `/api/clubs`  
**Method:** `GET`  

**Response:**
```json
{
  "clubs": [
    { "id": 1, "name": "Real Madrid" },
    { "id": 2, "name": "Barcelona" },
    { "id": 3, "name": "Manchester City" }
  ]
}
```

---

### **2. Get Club by ID**
**Endpoint:** `/api/clubs/:id`  
**Method:** `GET`  

**Parameters:**
- `id` (number): ID of the club to retrieve.

**Responses:**
- **Success (200):**
  ```json
  {
    "club": { "id": 1, "name": "Real Madrid" }
  }
  ```

---

### **3. Add a New Club**
**Endpoint:** `/api/clubs`  
**Method:** `POST`  

**Payload:**
```json
{
  "id": 4,
  "name": "Paris Saint-Germain"
}
```

**Responses:**
- **Success (201):**
  ```json
  {
    "club": { "id": 4, "name": "Paris Saint-Germain" }
  }
  ```
---

### **4. Update Club**
**Endpoint:** `/api/clubs/:id`  
**Method:** `PATCH`  

**Payload:**
```json
{
  "name": "PSG"
}
```

**Response:**
- **Success (200):**
  ```json
  {
    "club": { "id": 4, "name": "PSG" }
  }
  ```
---

### **5. Delete Club**
**Endpoint:** `/api/clubs/:id`  
**Method:** `DELETE`  

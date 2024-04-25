# Traini8 Govt Funded Training Centers Registry

This repository contains the code for Traini8's MVP for a registry for Govt funded Training Centers.

## Technologies Used

- Node.js
- Express.js
- Sequelize (ORM for PostgreSQL)
- PostgreSQL

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/your-username/traini8-registry.git
2. Install dependencies:
   ```bash
   cd traini8-registry
   npm install

3. Set up your database: <br>
    <li> Create a PostgreSQL database.<br>
    <li> Update the database configuration in config/database.js.

4. Run the server:
    ```bash
    npm start

## Usage
This project exposes two main API endpoints:

<li> POST /api/training-centers: Create a new training center. 
<li> GET /api/training-centers: Get a list of all training centers.
<li> You can use tools like Postman to interact with these APIs.

# API Endpoints
## Create Training Center
Method: POST <br>
URL: " /api/training-centers" <br>
Request Body: JSON


```json
{
       "centerName": "Example Center",
        "centerCode": "ABC123456789",
        "address": {
          "detailedAddress": "123 Example St",
          "city": "Example City",
          "state": "Example State",
          "pincode": "12345"
        },
        "studentCapacity": 100,
        "coursesOffered": ["Course A", "Course B"],
        "contactEmail": "example@example.com",
        "contactPhone": "+1234567890"
        }

```
Response

  ```json
        {
        "id": 1,
        "centerName": "Example Center",
        "centerCode": "ABC123456789",
        "address": {
          "detailedAddress": "123 Example St",
          "city": "Example City",
          "state": "Example State",
          "pincode": "12345"
          },
        "studentCapacity": 100,
        "coursesOffered": ["Course A", "Course B"],
        "createdOn": "2024-04-25T15:38:23.036Z",
        "contactEmail": "example@example.com",
        "contactPhone": "+1234567890",
        "createdAt": "2024-04-25T15:38:23.036Z",
        "updatedAt": "2024-04-25T15:38:23.036Z"
        }
```

## Get All Training Centers
<li> GET /api/training-centers <br>
<li> Get a list of all training centers. 

   ```json
        {
      "id": 1,
      "centerName": "Example Center",
      "centerCode": "ABC123456789",
      "address": {
        "detailedAddress": "123 Example St",
        "city": "Example City",
        "state": "Example State",
        "pincode": "12345"
      },
      "studentCapacity": 100,
      "coursesOffered": ["Course A", "Course B"],
      "createdOn": "2024-04-25T15:38:23.036Z",
      "contactEmail": "example@example.com",
      "contactPhone": "+1234567890",
      "createdAt": "2024-04-25T15:38:23.036Z",
      "updatedAt": "2024-04-25T15:38:23.036Z"
      } 
   ```

## screen shots from Postman 

### POST REQ
<img src="https://github.com/abhishekbodkhe/traini8-api/blob/main/post%20req.jpg?raw=true" alt="GitHub Logo" style="max-width: 80%;">

### GET REQ
<img src="https://github.com/abhishekbodkhe/traini8-api/blob/main/get%20req.jpg?raw=true" alt="GitHub Logo" style="max-width: 80%;">




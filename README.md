# School Location API

A RESTful API service that manages school information and provides location-based school searching functionality.

## Features

- Add new schools with location details
- Retrieve all schools
- Find nearest schools based on user coordinates
- Distance-based sorting of schools

## Prerequisites

- Node.js (v14 or higher)
- MySQL
- npm or yarn

## Installation

1. Clone the repository: 

bash
git clone <repository-url>
npm install
node app.js

2.Set your environment variable

MySQL_HOST='127.0.0.1'
MYSQL_USER= 'root'
MYSQL_PASSWORD= 'your_password'
MYSQL_DATABASE= 'schools_app'




## API Endpoints

### Get All Schools
- **Endpoint:** `/getschool`
- **Method:** GET
- **Response:** List of all schools in the database

### Add New School
- **Endpoint:** `/addschool`
- **Method:** POST
- **Body:**

add this json in addschool endpoint
{
"name": "School Name",
"address": "School Address",
"latitude": 90.2222222,
"longitude": -28.8983492
}

get endpoint results

json

"message": "Here is your list of nearest schools",
"schools": [
{
"id": 1,
"name": "School Name",
"address": "School Address",
"latitude": 90.2222222,
"longitude": -28.8983492,
"distance": 42.5
}

]

## Database Schema

CREATE TABLE schools (
id INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(255) NOT NULL,
address TEXT NOT NULL,
latitude FLOAT NOT NULL,
longitude FLOAT NOT NULL
);

## Error Handling

The API includes error handling for:
- Missing coordinates in nearest schools query
- Database connection errors
- Invalid input data

## Technologies Used

- Express.js
- MySQL
- Node.js

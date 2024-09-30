SmokeTrees Backend Assignment
This project is a backend application developed for SmokeTrees as part of the assignment. It enables users to register and store their addresses, establishing a one-to-many relationship between users and addresses using MongoDB. The backend is implemented with Node.js and Express.js.

Table of Contents:
  Project Overview
  Technologies Used
  Database Design
  User Interface
  API Endpoints


Project Overview
Company Name: SmokeTrees
Assignment: Create a backend where users can register and store their addresses. The data is stored across two collections: User and Address. The user information is stored in the User collection, while their associated addresses are stored in the Address collection.
Database: MongoDB is used for storing user and address information.

Technologies Used
Node.js: JavaScript runtime for building server-side applications.
Express.js: Web framework for Node.js.
MongoDB: NoSQL database for storing user and address data.
HTML/CSS/JavaScript: Basic front-end technologies for the user registration form.


Database Design
The application follows a one-to-many relationship between User and Address.

Collections:
User Collection:
Fields:
_id: MongoDB Object ID (Primary Key)
name: The name of the user (String)
Address Collection:
Fields:
_id: MongoDB Object ID (Primary Key)
address: The user's address (String)
userId: References the _id of the User collection (Foreign Key).


User Interface
The front-end consists of a user registration form that collects the user's name and address. Upon submission, the data is sent to the backend API for processing.

API Endpoints
POST /register
Description: This endpoint registers a new user and stores their associated address.

Request Body:
name (String): The name of the user.
address (String): The address of the user.

# Simple REST API for CRUD Operations on "Person" Resource
This repository contains a simple REST API developed in Node.js, capable of performing CRUD (Create, Read, Update, Delete) operations on a "person" resource. The API interfaces with a MongoDB database and handles dynamic parameters such as adding or retrieving a person by name. The project also includes UML diagrams representing the system's design and database structure.

## Table of Contents
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [API Endpoints](#api-endpoints)
- [Database Modeling](#database-modeling)
- [Testing](#testing)
- [Dynamic Parameter Handling](#dynamic-parameter-handling)
- [GitHub Repository](#github-repository)
- [Documentation](#documentation)
- [Hosting](#hosting)
- [Acceptance Criteria](#acceptance-criteria)
- [Submission](#submission)

## Getting Started

### Prerequisites
Before you begin, ensure you have met the following requirements:
- Node.js and npm or yarn installed on your development machine.
- A database of your choice (e.g.,MongoDB MySQL, PostgreSQL) set up and running.

### Installation
1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/Ezeah/person-api-v1.git
   ```
2. Navigate to the project directory:
   ```bash
   cd person-api-v1
   ```

3. Install the project dependencies:
   ```bash
   npm init 
   or 
   yarn init

   npm add express mongoose dotenv colors express-async-errors 
   or
   yarn add express mongoose dotenv colors express-async-errors
   ```

4. Install the project dependencies:
   ```bash
   npm add -D nodemon
   or
   yarn add -D nodemon
   ```

5. Configure the database and server connection in the `.env` file:
   ```
   DATABASE_URI=your_connection_string
   PORT=your_server_port
   ```

6. Start the API server:
   ```bash
   npm start
   or
   npm run server

   yarn start
   or
   yarn run server
   ```

Now, your API is up and running locally.

## API Endpoints
- **POST /api**: Create a new person.
- **GET /api/:user_id**: Retrieve details of a person by their ID.
- **PUT /api/:user_id**: Update the details of an existing person by their ID.
- **DELETE /api/:user_id**: Remove a person by their ID.

All interactions with the database are secure and protected against common vulnerabilities like SQL injections.

## Database Modeling
[UML link](https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1#G1GqXfvowghratJMjnYXssR6x5Nla-t4dw)

This UML diagram represents the structure and relationships of the API's classes and models
using the E-R diagram (entity-relationship diagram).

## Testing
You can test the API using tools like Thunderclient, insomnia Postman or Python scripts with the `requests` library. Ensure you test each CRUD operation with the following scenarios:
1. Add a new person (e.g., "Mark Essien").
2. Fetch details of a person.
3. Modify the details of an existing person.
4. Remove a person.

## Dynamic Parameter Handling
The API is flexible and can handle dynamic input. You can provide a person's name as a parameter, and the backend will process operations using that name. Validation is in place to ensure that only strings are accepted as input; other data types are not allowed.

## GitHub Repository
You can access the GitHub repository for this project [here](https://github.com/Ezeah/person-api-v1/tree/main). The repository is well-organized and contains all the necessary files.

## Documentation
Please refer to the [DOCUMENTATION.md](https://github.com/Ezeah/person-api-v1/blob/main/docs/documentation.md) file in the repository for detailed information on how to use the API, including request/response formats, sample usage, known limitations, and setup/deployment instructions.

## Hosting
The API was hosted on render.com [link](https://person-api-v1-com.onrender.com/api) and github [link](https://github.com/Ezeah/person-api-v1). Make sure to modify the server configuration accordingly to host the endpoint. Test extensively with various testing tools to ensure it is accessible before deployment.

## Acceptance Criteria
- The API successfully performs all CRUD operations.
- Clear and accurate UML diagrams are provided.
- All CRUD operations have been tested exhaustively.
- The API correctly handles and responds to different parameters.
- The GitHub repository is well-organized, contains all necessary files, and is publicly accessible.
- The documentation provides clear guidance on how to use the API, including setup, request/response formats, sample usage, and any known limitations.

Thank you for taking your time to read my README.md!

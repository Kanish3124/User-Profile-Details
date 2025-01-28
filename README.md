# Web Application for User Profile Details

This project is a simple web application built using Node.js, Express.js, and EJS. It allows users to fill out a form, upload a profile image, and view their submitted details on a profile page.

## Features

- User form with fields for:
  - Username
  - Email
  - Department
  - Project Links
  - Description
- Profile image upload functionality using `multer`.
- Displays submitted data, including the profile image, on a separate profile page.
- Static file serving using Express.

## Prerequisites

Before running this project, make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd <project-directory>
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the server:
   ```bash
   node app.js
   ```

2. Open your browser and go to:
   ```
   http://localhost:3000
   ```

3. Fill out the form, upload a profile image, and click submit.

4. View the submitted details on the profile page.

## Dependencies

- [Express](https://www.npmjs.com/package/express) - Web framework for Node.js
- [Body-Parser](https://www.npmjs.com/package/body-parser) - Middleware for parsing request bodies
- [Multer](https://www.npmjs.com/package/multer) - Middleware for handling file uploads
- [EJS](https://www.npmjs.com/package/ejs) - Template engine


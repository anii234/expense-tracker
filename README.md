# Expense Tracker

An easy-to-use expense tracking application built with Node.js and Express
## Table of Contents
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features
- Record and manage your expenses.
- Store expenses with descriptions, amounts, and dates.
- Simple RESTful API with CRUD operations.

## Prerequisites
Before you begin, ensure you have met the following requirements:
- Node.js and npm installed.
  
## Installation
1. Clone the repository:

    ```bash
    git clone <repository_url>
    ```

2. Install dependencies:

    ```bash
    cd expense-tracker
    npm install
    ```

## Usage
1. Start the server:

    ```bash
    node app.js
    ```

2. Use the API:
   - Open your browser  if application is hosted on the AWS EC2 machine http://<DNS-name>:3000/
     note: makesure the port 3000 should be enable under the security-group.
- **GET /expenses**: Retrieve all expenses.

## Contributing
Contributions are welcome! Follow these steps:
1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature`.
3. Commit your changes: `git commit -m "Add new feature"`.
4. Push to the branch: `git push origin feature/your-feature`.
5. Submit a pull request.

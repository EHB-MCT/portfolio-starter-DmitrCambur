# Student Forum API

## Project Overview

The **Student Forum API** project is structured with two main components: `client` and `server`. The `client` folder contains a React.js application that serves as the frontend, while the `server` folder includes the backend setup.

- **Client**: A React.js application for the user interface.
- **Server**: An Express.js API coupled with a PostgreSQL database managed by Knex.js, all orchestrated using Docker. The server folder supports integration, unit, and end-to-end testing, and includes a CI/CD pipeline for automated testing and deployment.

This project is designed to facilitate comprehensive testing and deployment processes as part of its development and is currently being prepared for further features and enhancements.

## Getting Started

To set up and run the project, follow these instructions:

1. **Set Up Environment Variables**:

   - Duplicate the `.env.template` file and rename it to `.env` within the `./server` directory of the project.

2. **Build and Launch the Project**:

   - Open a terminal and navigate to the `server` folder. Run Docker Compose to build and start the backend server and database:
     ```bash
     docker-compose up --build
     ```

3. **Run the React Client**:
   - Open a new terminal and navigate to the `client` folder. Start the React development server by running:
     ```bash
     npm start
     ```

## Current Status

The project is actively being developed, with ongoing work on testing and feature implementation.

## Support and Inquiries

For any questions or support, please open an issue or a support ticket in the repository.

## License

This project is distributed under the [MIT License](LICENSE).

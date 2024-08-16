# Changelog

All notable changes to this project will be documented in this file.

This project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Add integration tests for "threads" routes and refactor route handlers.
- Add integration tests for "replies" routes and refactor route handlers.

## [0.1.0] - 2024-08-16

### Added

- Established the foundation for the Express application.
- Introduced Docker support with essential files: `Dockerfile`, `docker-compose.yml`, and `.dockerignore`.
- Integrated Docker to include a `PostgreSQL` service with environment variables for database configuration.
- Initialized a React project as the frontend foundation.
- Established the foundation for Test-Driven Development (TDD) with unit and integration tests for both API and frontend.
- Integrated Knex.js and created initial migrations and seeds.
- Added unit tests, user integration tests, and database setup.

### Changed

- Reorganized the project directory structure for improved organization and maintenance.
- Updated the directory structure for better clarity and manageability.
- Updated CI/CD pipeline configuration for Docker and deployment.
- Simplified Docker Compose commands with the correct working directory and Docker login action versions.

### Fixed

- Updated Docker login action versions and used existing secrets in CI/CD.
- Fixed CI/CD workflow to use the correct Docker Compose path and ensure successful builds.

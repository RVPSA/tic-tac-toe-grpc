# Real-Time Tic-Tac-Toe Game with Docker Compose

This document provides instructions to set up and run the Real-Time Tic-Tac-Toe Game application using Docker Compose. The setup includes the frontend, backend, and Envoy Proxy for routing traffic between components.

## Prerequisites

- Docker installed on your system.
- Docker Compose installed. Refer to the [official Docker Compose documentation](https://docs.docker.com/compose/install/) for installation instructions.

## Project Structure

The Docker Compose file should be structured to include the following services:

- **Frontend**: The user interface of the Tic-Tac-Toe game.
- **Backend**: The server handling game logic and real-time updates.
- **Envoy Proxy**: Routes traffic between the frontend and backend.


## Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd RealTimeTicTacToe_Game
```

### 2. Build and Start the Services

Use Docker Compose to build and start all services:

```bash
docker-compose -f docker-compose.yml up
```

This will:
- Build the Docker images for the backend and frontend.
- Start the backend on port `50051`, the frontend on port `3000`, and Envoy Proxy on port `8080`.

### 3. Access the Application

- **Frontend**: Visit `http://localhost:3000` to access the game interface.
- **Backend**: The backend runs internally and is accessed through Envoy Proxy.
- **Envoy Proxy**: Routes traffic and is accessible at `http://localhost:8080`.

### 4. Stop the Services

To stop all running services, use:

```bash
docker-compose -f docker-compose.yml down
```

If you are not using docker follow the readme file in each directory.


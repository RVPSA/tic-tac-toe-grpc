# Real-Time Tic-Tac-Toe Game Backend

This repository contains the backend implementation of a real-time Tic-Tac-Toe game using Golang.

## Prerequisites

- Go 1.23.3 or higher installed on your system

## Project Structure

- `go.mod`, `go.sum`: Manage Go module dependencies.
- `server.go`: Main backend server implementation.

## Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd RealTimeTicTacToe_GameBackend
```

### 2. Install Dependencies

Run the following command to download the required Go modules:

```bash
go mod download
```

### 3. Run the Backend Server

Start the backend server using the following command:

```bash
go run server.go
```

### 4. Access the Backend

The backend will be running and accessible at `localhost:50051` (or the configured host and port in your `server.go` file).

## Troubleshooting

- Ensure Go is installed and added to your system's PATH.
- Check for any errors during module installation or server startup.
- Verify that port `50051` is not in use by another application.

## License

This project is licensed under the MIT License.

---


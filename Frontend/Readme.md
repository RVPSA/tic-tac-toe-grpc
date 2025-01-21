# Real-Time Tic-Tac-Toe Game Frontend

This repository contains the frontend implementation of a real-time Tic-Tac-Toe game using Node.js and npm.

## Prerequisites

- Node.js 22 or higher installed on your system
- npm installed (comes with Node.js)

## Project Structure

- `package.json`, `package-lock.json`: Manage project dependencies.
- `src/`: Contains the source code for the frontend application.
- `public/`: Static files and index.html for the frontend.

## Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd RealTimeTicTacToe_GameFrontend
```

### 2. Install Dependencies

Run the following command to install the required npm packages:

```bash
npm install --legacy-peer-deps
```

### 3. Install Additional Tools

This project requires `protoc-gen-grpc-web` for gRPC-Web support. Install it globally:

```bash
npm install -g protoc-gen-grpc-web
```

### 4. Run the Frontend Server

Start the frontend server using the following command:

```bash
npm start
```

The application will be running and accessible at `http://localhost:3000` by default.

## Troubleshooting

- Ensure Node.js and npm are installed and added to your system's PATH.
- Check for any errors during dependency installation or server startup.
- Verify that port `3000` is not in use by another application.


## License

This project is licensed under the MIT License.

---

Feel free to contribute to the project by submitting issues or pull requests!


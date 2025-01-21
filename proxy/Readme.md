# Envoy Proxy Setup for Real-Time Tic-Tac-Toe Game

This document provides instructions to set up and run Envoy Proxy for routing traffic between the frontend and backend of the Real-Time Tic-Tac-Toe Game.

## Running Envoy Proxy

### Step 1: Install Envoy Proxy

Follow the [official Envoy Proxy installation guide](https://www.envoyproxy.io/docs/envoy/latest/start/install) to install Envoy on your system.

### Step 2: Run Envoy with the Custom Configuration

Once Envoy is installed, use the following command to start it with your custom configuration file:

```bash
envoy -c /path/to/your/envoy2.1.yaml
```

Replace `/path/to/your/envoy-config.yaml` with the actual path to your configuration file.

### Step 3: Verify Envoy is Running

Envoy will start listening on the port defined in your configuration (e.g., `8080`). You can verify it by making a request to `http://localhost:8080`.

## References

- [Envoy Proxy Official Documentation](https://www.envoyproxy.io/docs/envoy/latest/)
- [Getting Started with Envoy](https://www.envoyproxy.io/docs/envoy/latest/start/quick-start)

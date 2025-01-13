import React, { useState, useEffect } from "react";
import {
  CreateGame,
  JoinGame,
  UpdateGameState,
  StreamGameUpdate,
} from "../grpcclient/GrpcClient";

const Game = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [username, setUsername] = useState("User");
  const [username2, setUsername2] = useState("User2");
  const [gameId, setGameId] = useState();
  const handleCreateGame = async () => {
    try {
      await CreateGame(username);
      setInput("");
    } catch (err) {
      console.error("Error Creating Game:", err);
    }
    var gameIdl = sessionStorage.getItem("gameId");
    var playerNamel = sessionStorage.getItem("playerName");
    StreamGameUpdate(
      (message) => {
        setMessages((prev) => [...prev, message]);
        // console.log(message);
      },
      gameIdl,
      playerNamel
    );
  };

  const handleJoinGame = async () => {
    try {
      await JoinGame(gameId, username2);
    } catch (error) {
      console.error("Error Joining Game:", error);
    }
    var gameIdl = sessionStorage.getItem("gameId");
    var playerNamel = sessionStorage.getItem("playerName");
    StreamGameUpdate(
      (message) => {
        setMessages((prev) => [...prev, message]);
        // console.log(message);
      },
      gameIdl,
      playerNamel
    );
  };

  const handleGameUpdate = async () => {
    var gameIdl = sessionStorage.getItem("gameId");
    var playerNamel = sessionStorage.getItem("playerName");
    try {
      await UpdateGameState(gameIdl, playerNamel, input);
    } catch (error) {
      console.error("Error Updating Game:", error);
    }

    // StreamGameUpdate(
    //   (message) => {
    //     // setMessages((prev) => [...prev, message]);
    //     console.log(message);
    //   },
    //   gameIdl,
    //   playerNamel
    // );
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Real-Time Chat</h1>
      <div>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <button onClick={handleCreateGame}>Create Game</button>
      </div>
      <div>
        <label>
          Username:
          <input
            type="text"
            value={username2}
            onChange={(e) => setUsername2(e.target.value)}
          />
        </label>
        <br />
        <label>
          GameId:
          <input
            type="text"
            value={gameId}
            onChange={(e) => setGameId(e.target.value)}
          />
        </label>
        <button onClick={handleJoinGame}>Join Game</button>
      </div>
      <div
        style={{
          border: "1px solid #ccc",
          height: "300px",
          overflowY: "scroll",
          margin: "20px 0",
          padding: "10px",
        }}
      >
        {messages.map((msg, idx) => (
          <div key={idx}>
            <strong>{msg.sender}</strong>: {msg.update}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message..."
        style={{ width: "80%" }}
      />
      <button onClick={handleGameUpdate}>Update Game</button>
    </div>
  );
};

export default Game;

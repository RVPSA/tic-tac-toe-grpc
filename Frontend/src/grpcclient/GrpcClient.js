import { GameServiceClient } from "../proto/game_grpc_web_pb";
import {
  CreateGameRequest,
  JoinGameRequest,
  UpdateGameStateRequest,
  StreamGameUpdatesRequest,
} from "../proto/game_pb";

const client = new GameServiceClient("http://localhost:8080");

export const CreateGame = (playerName) => {
  const createGameRequest = new CreateGameRequest();
  createGameRequest.setPlayerName(playerName);

  return new Promise((resolve, reject) => {
    client.createGame(createGameRequest, {}, (err, response) => {
      if (err) {
        reject(err);
      } else {
        console.log(response.toObject());
        sessionStorage.setItem("gameId", response.toObject().gameId);
        sessionStorage.setItem("playerName", playerName);
        resolve(response.toObject());
      }
    });
  });
};

export const JoinGame = (gameId, playerName) => {
  const joinGameRequest = new JoinGameRequest();
  joinGameRequest.setGameId(gameId);
  joinGameRequest.setPlayerName(playerName);

  return new Promise((resolve, reject) => {
    client.joinGame(joinGameRequest, {}, (err, response) => {
      if (err) {
        reject(err);
      } else {
        console.log(response.toObject());
        sessionStorage.setItem("gameId", gameId);
        sessionStorage.setItem("playerName", playerName);
        resolve(response.toObject());
      }
    });
  });
};

export const UpdateGameState = (gameId, playerName, newState) => {
  const updateGameStateRequest = new UpdateGameStateRequest();

  updateGameStateRequest.setGameId(gameId);
  updateGameStateRequest.setPlayerName(playerName);
  updateGameStateRequest.setNewState(newState);

  return new Promise((resolve, reject) => {
    client.updateGameState(updateGameStateRequest, {}, (err, response) => {
      if (err) {
        reject(err);
      } else {
        // console.log(response.toObject());
        // localStorage.setItem("gameId",response.toObject().gameId)
        resolve(response.toObject());
      }
    });
  });
};

export const StreamGameUpdate = (callback, gameId, playerName) => {
  const streamGameUpdateRequest = new StreamGameUpdatesRequest();

  streamGameUpdateRequest.setGameId(gameId);
  streamGameUpdateRequest.setPlayerName(playerName);

  const stream = client.streamGameUpdates(streamGameUpdateRequest, {});

  stream.on("data", (response) => {
    callback(response.toObject());
  });

  stream.on("error", (err) => {
    console.error("Stream error:", err);
  });
};

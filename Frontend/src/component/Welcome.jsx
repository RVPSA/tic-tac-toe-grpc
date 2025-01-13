import React, { useEffect, useState } from "react";
import { tictactoe } from "../assests";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { CreateGame, JoinGame } from "../grpcclient/GrpcClient";
import Alert from "./Alert";

const Welcome = () => {
  const [animate, setAnimate] = useState(false);
  const [joinGame, setJoinGame] = useState(false);
  const [playerName, setPlayerName] = useState("");
  const [gameId, setGameId] = useState("");
  const [alert, setAlert] = useState(false);
  const [object, setObject] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 3000);
  }, []);

  const handleJoinGame = () => {
    if (!joinGame) {
      setJoinGame(true);
    } else {
      handleJoinGameServer();
    }
  };

  const handleJoinGameServer = async () => {
    try {
      await JoinGame(gameId, playerName);
      setGameId("");
      setAlert(true);
      setObject({
        status: "Success",
        msg1: "Successfully Joined",
        msg2: "",
        btnfunction: () => {
          navigate("/game");
          setAlert(false);
        },
        isError: false,
      });
    } catch (error) {
      setAlert(true);
      setObject({
        status: "Error",
        msg1: "Can not Join to the Game",
        msg2: "Try again",
        btnfunction: () => {
          setAlert(false);
        },
        isError: true,
      });
    }
  };

  const handleCreateGame = async () => {
    try {
      await CreateGame(playerName);
      setPlayerName("");
      // handleStreamUpdate();
      setAlert(true);
      setObject({
        status: "Success",
        msg1: "Game Created Successfully",
        msg2: `Game Id : ${sessionStorage.getItem("gameId")}`,
        btnfunction: () => {
          navigate("/game");
          setAlert(false);
        },
        isError: false,
      });
      // navigate("/game");
    } catch (err) {
      setAlert(true);
      setObject({
        status: "Error",
        msg1: "Game Creation Fail",
        msg2: "Try again",
        btnfunction: () => {
          setAlert(false);
        },
        isError: true,
      });
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center ">
      <div
        className={`${
          animate && "transition-all h-32 w-32 duration-500"
        } rounded-full overflow-hidden bg-cyan-50 h-52 w-52`}
      >
        <img
          src={tictactoe}
          className="w-full h-full object-fill"
          alt="Tic tac logo"
        />
      </div>
      <p
        className={` ${
          animate && "transition-all text-lg duration-500"
        } pt-5 text-cyan-100 text-center text-3xl font-bold`}
      >
        Tic Tac Toe <br /> Multiplayer Game
      </p>

      <div
        className={`${
          animate ? "flex flex-col mt-5 transition-all delay-700" : "hidden"
        }`}
      >
        <input
          placeholder="Enter your name "
          className="rounded-lg m-2 p-2 outline-none"
          value={playerName}
          onChange={(e) => {
            setPlayerName(e.target.value);
          }}
        ></input>
        {joinGame ? (
          <input
            placeholder="Enter game Id "
            className="rounded-lg m-2 p-2 outline-none"
            value={gameId}
            onChange={(e) => {
              setGameId(e.target.value);
            }}
          ></input>
        ) : (
          <Button btnName="Create Game" btnfunction={handleCreateGame}></Button>
        )}

        {/* <button className="rounded-lg p-3 m-3 bg-gradient-to-t from-cyan-600 to-cyan-500 hover:from-cyan-700 hover:to-cyan-600 ">
          Create Game
        </button> */}

        <Button btnName="Join Game" btnfunction={handleJoinGame}></Button>

        {/* <button className="rounded-lg p-3 m-3 bg-gradient-to-t from-cyan-600 to-cyan-500 hover:from-cyan-700 hover:to-cyan-600 ">
          Join Game
        </button> */}
      </div>
      {alert && <Alert object={object}></Alert>}
    </div>
  );
};

export default Welcome;

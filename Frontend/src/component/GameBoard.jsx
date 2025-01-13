import React, { useEffect, useState } from "react";
import { StreamGameUpdate } from "../grpcclient/GrpcClient";
import Tile from "./Tile";
import Alert from "./Alert";
import { useNavigate } from "react-router-dom";

const GameBoard = () => {
  const [gameId, setGameId] = useState("");
  const [playerName, setPlayerName] = useState("");
  const [oppsiteTile, setOppositeTile] = useState([]);
  const [myTile, setMyTile] = useState([]);
  const [disable, setDisable] = useState(false);
  const [alert, setAlert] = useState(false);
  const [object, setObject] = useState({});

    const navigate = useNavigate();

  useEffect(() => {
    handleStreamUpdate();
  }, []);

  const handleStreamUpdate = () => {
    var gameIdl = sessionStorage.getItem("gameId");
    var playerNamel = sessionStorage.getItem("playerName");
    setGameId(gameIdl);
    setPlayerName(playerNamel);
    StreamGameUpdate(
      (message) => {
        // setMessages((prev) => [...prev, message]);

        var splitResponse = message.update.split(/[::]/);
        if (splitResponse[0] == playerNamel) {
          if (splitResponse[2] == "wins") {
            setAlert(true);
            setObject({
              status: "win",
              msg1: "You won the game",
              msg2: ``,
              btnfunction: () => {
                navigate("/");
                setAlert(false);
              },
              isError: false,
            });
          } else if (splitResponse[2] == "draw") {
            setAlert(true);
            setObject({
              status: "",
              msg1: "Game Draw",
              msg2: ``,
              btnfunction: () => {
                navigate("/");
                setAlert(false);
              },
              isError: false,
            });
          } else {
            setMyTile((prev) => [...prev, splitResponse[2]]);
            setDisable(true);
          }
        } else {
          if (splitResponse[2] == "wins") {
            setAlert(true);
            setObject({
              status: "loss",
              msg1: "You loss",
              msg2: `Try again`,
              btnfunction: () => {
                navigate("/");
                setAlert(false);
              },
              isError: false,
            });
          } else if (splitResponse[2] == "draw") {
            setAlert(true);
            setObject({
              status: "",
              msg1: "Game Draw",
              msg2: ``,
              btnfunction: () => {
                navigate("/");
                setAlert(false);
              },
              isError: false,
            });
          } else {
            setOppositeTile((prev) => [...prev, splitResponse[2]]);
            setDisable(false);
          }
        }
      },
      gameIdl,
      playerNamel
    );
  };

  const handelDisable = () => {
    // setDisable(true);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-row  justify-evenly w-full">
        <div className="flex flex-col items-center justify-center pt-5">
          <h3>Welcome</h3>
          <h1>{playerName}</h1>
        </div>
        <div className="flex flex-col items-center justify-center mt-5">
          <h3>Game Id</h3>
          <h1>{gameId}</h1>
        </div>
      </div>
      {/* <div className=" w-full grid grid-cols-4 gap-5">
        <div className="col-span-2 place-items-center">
          <h3>Welcome</h3>
          <h1>Akesh</h1>
        </div>
        <div className="col-span-2 justify-items-center">
          <h3>Game Id</h3>
          <h1>game-1</h1>
        </div>
      </div> */}

      <div className="m-10 bg-[#0c1017] p-10 rounded-md text-white text-center shadow-2xl flex flex-col justify-between w-3/6">
        <div className="flex flex-row justify-around pb-5">
          {/* Generating first row */}
          {myTile.includes("1") ? (
            <Tile ownerShip={1}></Tile>
          ) : oppsiteTile.includes("1") ? (
            <Tile ownerShip={2}></Tile>
          ) : (
            <Tile
              ownerShip={3}
              val="1"
              handelDisable={handelDisable}
              disable={disable}
            ></Tile>
          )}

          {myTile.includes("2") ? (
            <Tile ownerShip={1}></Tile>
          ) : oppsiteTile.includes("2") ? (
            <Tile ownerShip={2}></Tile>
          ) : (
            <Tile
              ownerShip={3}
              val="2"
              handelDisable={handelDisable}
              disable={disable}
            ></Tile>
          )}

          {myTile.includes("3") ? (
            <Tile ownerShip={1}></Tile>
          ) : oppsiteTile.includes("3") ? (
            <Tile ownerShip={2}></Tile>
          ) : (
            <Tile
              ownerShip={3}
              val="3"
              handelDisable={handelDisable}
              disable={disable}
            ></Tile>
          )}
        </div>
        <div className="flex flex-row justify-around pb-5">
          {/* Generating Second Row */}
          {myTile.includes("4") ? (
            <Tile ownerShip={1}></Tile>
          ) : oppsiteTile.includes("4") ? (
            <Tile ownerShip={2}></Tile>
          ) : (
            <Tile
              ownerShip={3}
              val="4"
              handelDisable={handelDisable}
              disable={disable}
            ></Tile>
          )}

          {myTile.includes("5") ? (
            <Tile ownerShip={1}></Tile>
          ) : oppsiteTile.includes("5") ? (
            <Tile ownerShip={2}></Tile>
          ) : (
            <Tile
              ownerShip={3}
              val="5"
              handelDisable={handelDisable}
              disable={disable}
            ></Tile>
          )}

          {myTile.includes("6") ? (
            <Tile ownerShip={1}></Tile>
          ) : oppsiteTile.includes("6") ? (
            <Tile ownerShip={2}></Tile>
          ) : (
            <Tile
              ownerShip={3}
              val="6"
              handelDisable={handelDisable}
              disable={disable}
            ></Tile>
          )}
        </div>
        <div className="flex flex-row justify-around">
          {/* Generating Third row */}
          {myTile.includes("7") ? (
            <Tile ownerShip={1}></Tile>
          ) : oppsiteTile.includes("7") ? (
            <Tile ownerShip={2}></Tile>
          ) : (
            <Tile
              ownerShip={3}
              val="7"
              handelDisable={handelDisable}
              disable={disable}
            ></Tile>
          )}

          {myTile.includes("8") ? (
            <Tile ownerShip={1}></Tile>
          ) : oppsiteTile.includes("8") ? (
            <Tile ownerShip={2}></Tile>
          ) : (
            <Tile
              ownerShip={3}
              val="8"
              handelDisable={handelDisable}
              disable={disable}
            ></Tile>
          )}

          {myTile.includes("9") ? (
            <Tile ownerShip={1}></Tile>
          ) : oppsiteTile.includes("9") ? (
            <Tile ownerShip={2}></Tile>
          ) : (
            <Tile
              ownerShip={3}
              val="9"
              handelDisable={handelDisable}
              disable={disable}
            ></Tile>
          )}
        </div>
      </div>
      {/* <div className='grid grid-cols-3 grid-rows-12 gap-2 '> */}
      {/* <div className=' border-2 border-[#173347] bg-[#111e2a] row-span-4'>1</div>
            <div className=' border-2 border-[#8e3939] bg-[#381e22] '>1</div>
            <div className=''>1</div>
            <div className='col-start-1 col-end-3 bg-[#12161f] row-span-4'>2</div>
            <div className='col-start-3 col-end-5'>2</div>
            <div className='col-start-5 col-end-7'>2</div>
            <div className='col-start-1 col-end-3 row-span-4 bg-[#12161f]'>3</div>
            <div className='col-start-3 col-end-5'>3</div>
            <div className='col-start-5 col-end-7'>3</div> */}
      {/* </div> */}
      {alert && <Alert object={object} gameStatus={true}></Alert>}
    </div>
  );
};

export default GameBoard;

import React, { useEffect,useState } from "react";
import { circle, cross } from "../assests";
import { UpdateGameState } from "../grpcclient/GrpcClient";

//ownerShip = 1 -- mine
//ownerShip = 2 -- opposite
//ownerShip = 3 -- noOwner
const Tile = ({ ownerShip, val = 0,handelDisable,disable}) => {
  const [gameId, setGameId] = useState("");
  const [playerName, setPlayerName] = useState("");

  useEffect(() => {
    setGameId(sessionStorage.getItem("gameId"));
    setPlayerName(sessionStorage.getItem("playerName"));
  }, []);

  const handleGameUpdate = async (val) => {
    
    try {
      await UpdateGameState(gameId, playerName, val);
      handelDisable()
    } catch (error) {
      console.error("Error Updating Game:", error);
    }
  };
  if (ownerShip == 1) {
    return (
      <div className="w-32 h-32 border-2 border-[#173347] bg-[#111e2a]">
        <div className="w-full h-full flex flex-row justify-center items-center">
          <img src={circle} className="w-8 h-8"></img>
        </div>
      </div>
    );
  } else if (ownerShip == 2) {
    return (
      <div className="w-32 h-32 border-2 border-[#8e3939] bg-[#381e22]">
        <div className="w-full h-full flex flex-row justify-center items-center">
          <img src={cross} className="w-8 h-8"></img>
        </div>
      </div>
    );
  } else if (ownerShip == 3) {
    return (
      <div
        className="w-32 h-32 bg-[#12161f]"
        onClick={!disable ? () => {
          handleGameUpdate(val);
        } : ()=>{}}
      ></div>
    );
  }
};

export default Tile;

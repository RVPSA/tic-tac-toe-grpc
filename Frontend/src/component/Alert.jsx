import React from "react";
import Button from "./Button";
import { check, cross, loss, win } from "../assests";

const Alert = ({ object, gameStatus = false }) => {
  //GameStatus = false => game join,creation etc
  if (!gameStatus) {
    return (
      <div className="flex flex-row justify-center items-center bg-[#020617] bg-opacity-50 inset-0 absolute">
        <div className="bg-cyan-50 w-96 h-96 m-10 rounded-md flex flex-col relative">
          <div
            className="w-12 h-12 rounded-full bg-[#f3f3f3] bg-opacity-80 absolute -top-5 -right-5 flex flex-row items-center justify-center z-20"
            onClick={object.btnfunction}
          >
            <img src={cross} className="w-3 h-3" alt="cross mark" />
          </div>
          <div className="w-full h-full relative overflow-hidden">
            <div
              className={`w-96 h-96 rounded-full ${
                !object.isError ? "bg-cyan-800" : "bg-red-800"
              } absolute bottom-52`}
            ></div>
            <div
              className={`w-72 h-72 rounded-full ${
                !object.isError ? "bg-cyan-700" : "bg-red-700"
              } absolute bottom-64 left-24`}
            ></div>
            <div
              className={`w-52 h-52 rounded-full ${
                !object.isError ? "bg-cyan-600" : "bg-red-600"
              } absolute bottom-72 left-44`}
            ></div>
            <div
              className={`w-12 h-12 rounded-full ${
                !object.isError ? "bg-cyan-500" : "bg-red-500"
              } absolute bottom-52 left-[170px] flex flex-row items-center justify-center`}
            >
              <img
                src={!object.isError ? check : cross}
                className="w-6 h-6"
                alt="check mark or cross mark"
              />
            </div>
          </div>

          <h1 className="absolute bottom-44 w-full text-center">
            {object.status}
          </h1>
          <div className="absolute bottom-36 w-full text-center">
            {object.msg1}
          </div>
          <div className="absolute bottom-28 w-full text-center">
            {object.msg2}
          </div>
          <div className="absolute bottom-7 w-full">
            <Button
              btnName="Ok"
              btnfunction={object.btnfunction}
              isError={object.isError}
            ></Button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-row justify-center items-center bg-[#020617] bg-opacity-50 inset-0 absolute">
        <div className="bg-cyan-50 w-96 h-96 m-10 rounded-md flex flex-col relative">
          <div
            className="w-12 h-12 rounded-full bg-[#f3f3f3] bg-opacity-80 absolute -top-5 -right-5 flex flex-row items-center justify-center z-20"
            onClick={object.btnfunction}
          >
            <img src={cross} className="w-3 h-3" alt="cross mark" />
          </div>
          <div className="w-full h-full relative overflow-hidden">
            <div
              className={`w-96 h-96 rounded-full ${
                object.status == "win"
                  ? "bg-yellow-800"
                  : object.status == "loss"
                  ? "bg-green-800"
                  : "bg-slate-800"
              } absolute bottom-52`}
            ></div>
            <div
              className={`w-72 h-72 rounded-full ${
                object.status == "win"
                  ? "bg-yellow-700"
                  : object.status == "loss"
                  ? "bg-green-700"
                  : "bg-slate-700"
              } absolute bottom-64 left-24`}
            ></div>
            <div
              className={`w-52 h-52 rounded-full ${
                object.status == "win"
                  ? "bg-yellow-600"
                  : object.status == "loss"
                  ? "bg-green-600"
                  : "bg-slate-600"
              } absolute bottom-72 left-44`}
            ></div>
            <div
              className={`w-12 h-12 rounded-full ${
                object.status == "win"
                  ? "bg-yellow-500"
                  : object.status == "loss"
                  ? "bg-green-500"
                  : "bg-slate-500"
              } absolute bottom-52 left-[170px] flex flex-row items-center justify-center`}
            >
              <img
                src={
                  object.status == "win"
                    ? win
                    : object.status == "loss"
                    ? loss
                    : check
                }
                className="w-6 h-6"
                alt="check mark or cross mark"
              />
            </div>
          </div>

          <h1 className="absolute bottom-44 w-full text-center uppercase">
            {object.status}
          </h1>
          <div className="absolute bottom-36 w-full text-center">
            {object.msg1}
          </div>
          <div className="absolute bottom-28 w-full text-center">
            {object.msg2}
          </div>
          <div className="absolute bottom-7 w-full">
            <div className="flex flex-row items-center">
              <button
                className={`rounded-lg p-3 m-3 ${
                  object.status == "win"
                    ? "bg-gradient-to-t from-yellow-600 to-yellow-500 hover:from-yellow-700 hover:to-yellow-600"
                    : object.status == "loss"
                    ? "bg-gradient-to-t from-green-600 to-green-500 hover:from-green-700 hover:to-green-600"
                    : "bg-gradient-to-t from-slate-600 to-slate-500 hover:from-slate-700 hover:to-slate-600"
                } w-full`}
                onClick={object.btnfunction}
              >
                Ok
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}; /*  */

export default Alert;

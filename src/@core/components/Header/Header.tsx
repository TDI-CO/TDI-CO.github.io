import React from "react";
import { IconButton } from "@mui/material";
import YouTube from "@mui/icons-material/YouTube";
import Instagram from "@mui/icons-material/Instagram";

export const Header = () => {
  return (
    <div className="w-full md:w-1/6 h-fit flex flex-row items-center justify-between bg-white backdrop-blur bg-opacity-10 rounded-2xl p-2  ">
      <div className="gap-4 flex justify-center items-center  w-full">
        <a
          href="https://www.instagram.com/tdi_colombia/"
          rel="noreferrer"
          target="_blank"
          className="flex items-center justify-center"
        >
          <IconButton className="text-white transition hover:-translate-y-1 hover:scale-110 ease-in-out delay-150 duration-300   bg-gradient-to-r from-cyan-500 to-blue-500  rounded-2xl bg-opacity-10   hover:from-sky-500 hover:to-indigo-500">
            <Instagram fontSize="large" />
          </IconButton>
        </a>
        <a
          href="https://www.youtube.com/@TDIVDev"
          rel="noreferrer"
          target="_blank"
          className="flex items-center justify-center"
        >
          <IconButton className="text-white transition hover:-translate-y-1 hover:scale-110 ease-in-out delay-150 duration-300   bg-gradient-to-r from-cyan-500 to-blue-500  rounded-2xl bg-opacity-10   hover:from-sky-500 hover:to-indigo-500">
            <YouTube fontSize="large" />
          </IconButton>
        </a>
      </div>
    </div>
  );
};

import { Settings } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import PauseButton from "./PauseButton";
import PlayButton from "./PlayButton";
import SetupButton from "./SetupButton";

export default function DoroTimer() {

  return (
    <div>
      <CircularProgressbar
        value={50}
        text={`${50}`}
        styles={buildStyles({
          textColor: "#fff",
          pathColor: "#0091ff",
          trailColor: "#828587",
        })}
      />
      <div style={{marginTop: '20px'}}>
        <PlayButton/>
        <PauseButton/>
      </div>
      <div style={{marginTop: '10px'}}>
        <SetupButton/>
      </div>
    </div>
  );
}

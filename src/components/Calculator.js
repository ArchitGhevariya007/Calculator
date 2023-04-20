import React from "react";
import { useState } from "react";
import { Box } from "@mui/material";
import Buttons from "./Buttons";
import Display from "./Display";

export default function Calculator() {

      //Button Array
  const ButtonRow1 = ["C", "<", "%", "/"];
  const ButtonRow2 = [7, 8, 9, "*"];
  const ButtonRow3 = [4, 5, 6, "-"];
  const ButtonRow4 = [1, 2, 3, "+"];
  const ButtonRow5 = [0, ".", "<", "="];

  //Set input into text field on button click
  const [ButtonData, SetButtonData] = useState("");
  const [Text2, SetText2] = useState("");
  const [Text1, SetText1] = useState("");

  //Clear button
  const ClearButton = () => {
    SetButtonData("");
    SetText1("");
    SetText2("");
  };

  //Cancle Button
  const CancleButton = () => {
    const value = Text1.slice(0, -1);
    SetText2(value);
    SetText1(value);
    SetButtonData(value);
  };

  //Handling Button Events
  const HandleButton = (e) => {

    //getting button value
    const ButtonValue = e.target.value;

    //setting state
    SetButtonData(ButtonData + ButtonValue);
    SetText1(ButtonData + ButtonValue);
    SetText2(ButtonData + ButtonValue);

    // condition to call functions
    if (ButtonValue === "C") {
      ClearButton();
    }
    if (ButtonValue === "<") {
      CancleButton();
    }

    if (ButtonValue === "=") {
      SetText2(eval(Text2));
      SetText1(Text2);
      SetButtonData(eval(Text2));
    }
  };


  return (
    <>
      <Box
        sx={{
          width: 290,
          height: 470,
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          backgroundColor: "#3b4655",
          borderRadius: 1,
          boxShadow: 20,
        }}
      >
        {/* Display screen */}
        <Display s1={Text1} s2={Text2}></Display>

        {/* Buttons */}
        <Buttons
          bl1={ButtonRow1}
          bl2={ButtonRow2}
          bl3={ButtonRow3}
          bl4={ButtonRow4}
          bl5={ButtonRow5}
          handler={HandleButton}
        ></Buttons>
      </Box>
    </>
  );
}

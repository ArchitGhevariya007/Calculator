import "./App.css";
import { useState } from "react";
import { Box, Button, Stack, TextField } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

function App() {
  //Theme create function
  const theme = createTheme({
    palette: {
      primary: {
        main: "#3b4655",
      },
    },
  });

  //Button Array
  const ButtonRow1 = ["C", "+/-", "%", "/"];
  const ButtonRow2 = [7, 8, 9, "*"];
  const ButtonRow3 = [4, 5, 6, "-"];
  const ButtonRow4 = [1, 2, 3, "+"];
  const ButtonRow5 = [0, ".", "<", "="];

  //Set input into text field on button click
  const [ButtonData, SetButtonData] = useState("");
  const [Text2, SetText2] = useState("");
  const [Text1, SetText1] = useState("");

  // function SetValue(value){

  // }

  const HandleButton = (e) => {
    const ButtonValue = e.target.value.toString();
    
    SetButtonData(ButtonData + ButtonValue);
    SetText1(ButtonData + ButtonValue);
    SetText2(ButtonData + ButtonValue);
    // console.log("value one " +Text1);
    // console.log("value two " +Text2);

    if (ButtonValue === "C") {
      SetButtonData("");
      SetText1("");
      SetText2("");
    }
    if (ButtonValue === "=") {
      SetText2(eval(Text2).toString());
      SetText1(Text2);
    }
  };


  return (
    <div className="CalcBody">
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            width: 290,
            height: 470,
            my: 11,
            backgroundColor: "#3b4655",
            borderRadius: 1,
            boxShadow: 20,
          }}
        >
          <Box
            sx={{
              width: 290,
              height: 130,
              backgroundColor: "#3b4655",
              borderRadius: 1,
            }}
          >
            {/* TextBox 1 */}
            <TextField
              value={Text1}
              sx={{
                width: "100%",
                height: "40%",
                backgroundColor: "#3b4655",
                input: {
                  color: "#A7B4BB",
                },
                mt: 0.7,

                "& .MuiOutlinedInput-root": {
                  "& > fieldset": {
                    border: "none",
                  },
                },
              }}
            />

            {/* TextBox 2 */}
            <TextField
              value={Text2}
              sx={{
                width: "100%",
                height: "60%",
                backgroundColor: "#3b4655",
                input: {
                  color: "#d5e8f7",
                  textAlign:"right",
                  fontSize: 30,
                },
                mt: -1.3,

                "& .MuiOutlinedInput-root": {
                  "& > fieldset": {
                    border: "none",
                  },
                },
              }}
            />
          </Box>

          {/* Buttons */}
          <Stack spacing={0.5} sx={{ backgroundColor: "#3b4655" }}>
            {/* Row 1 */}
            <Stack
              direction="row"
              spacing={0.5}
              sx={{ backgroundColor: "#3b4655" }}
            >
              {ButtonRow1.map((btn, key) => (
                <Button
                  variant="contained"
                  color="primary"
                  key={key}
                  value={btn}
                  disableElevation
                  onClick={HandleButton}
                  sx={{
                    py: 2.5,
                    width: "30%",
                    backgroundColor: "#374352",
                    borderRadius: 0,
                  }}
                >
                  {btn}
                </Button>
              ))}
            </Stack>

            {/* Row 2 */}
            <Stack
              direction="row"
              spacing={0.5}
              sx={{ backgroundColor: "#3b4655" }}
            >
              {ButtonRow2.map((btn, key) => (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={HandleButton}
                  disableElevation
                  value={btn}
                  key={key}
                  sx={{
                    py: 2.5,
                    width: "30%",
                    backgroundColor: "#374352",
                    borderRadius: 0,
                  }}
                >
                  {btn}
                </Button>
              ))}
            </Stack>

            {/* Row 3 */}
            <Stack
              direction="row"
              spacing={0.5}
              sx={{ backgroundColor: "#3b4655" }}
            >
              {ButtonRow3.map((btn, key) => (
                <Button
                  variant="contained"
                  color="primary"
                  disableElevation
                  key={key}
                  value={btn}
                  onClick={HandleButton}
                  sx={{
                    py: 2.5,
                    width: "30%",
                    backgroundColor: "#374352",
                    borderRadius: 0,
                  }}
                >
                  {btn}
                </Button>
              ))}
            </Stack>

            {/* Row 4 */}
            <Stack
              direction="row"
              spacing={0.5}
              sx={{ backgroundColor: "#3b4655" }}
            >
              {ButtonRow4.map((btn, key) => (
                <Button
                  variant="contained"
                  color="primary"
                  disableElevation
                  key={key}
                  value={btn}
                  onClick={HandleButton}
                  sx={{
                    py: 2.5,
                    width: "30%",
                    backgroundColor: "#374352",
                    borderRadius: 0,
                  }}
                >
                  {btn}
                </Button>
              ))}
            </Stack>

            {/* Row 5 */}
            <Stack
              direction="row"
              spacing={0.5}
              sx={{ backgroundColor: "#3b4655" }}
            >
              {ButtonRow5.map((btn, key) => (
                <Button
                  variant="contained"
                  color="primary"
                  disableElevation
                  key={key}
                  value={btn}
                  onClick={HandleButton}
                  sx={{
                    py: 2.5,
                    width: "30%",
                    backgroundColor: "#374352",
                    borderRadius: 0,
                  }}
                >
                  {btn}
                </Button>
              ))}
            </Stack>
          </Stack>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default App;

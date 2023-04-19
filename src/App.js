import "./App.css";
import { Map } from "react";
import { Box, Input, Button, Stack, TextField } from "@mui/material";
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
  const ButtonRow2 = [7, 8, 9, "X"];
  const ButtonRow3 = [4, 5, 6, "-"];
  const ButtonRow4 = [1, 2, 3, "+"];
  const ButtonRow5 = [0, ".", "<", "="];

  // const ButtonList = [
  //   {
  //     one: 1,
  //     two: 2,
  //     three: 3,
  //     four: 4,
  //     five: 5,
  //     six: 6,
  //     seven: 7,
  //     eight: 8,
  //     nine: 9,
  //     zero: 0,
  //     clear: "C",
  //     pluseminus: "+/-",
  //     modulo: "%",
  //     minus: "-",
  //     plus: "+",
  //     multipy: "X",
  //     divide: "/",
  //     dot: ".",
  //     cancle: "<",
  //   },
  // ];

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
              type="number"
              sx={{
                width: "100%",
                height: "40%",
                backgroundColor: "#3b4655",
                input: {
                  color: "#A7B4BB",
                  direction: "rtl",
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
              type="number"
              // readOnly={true}
              sx={{
                width: "100%",
                height: "60%",
                backgroundColor: "#3b4655",
                input: {
                  color: "#d5e8f7",
                  direction: "rtl",
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
                  disableElevation
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
                  disableElevation
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

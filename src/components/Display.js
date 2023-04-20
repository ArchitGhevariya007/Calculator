import React from "react";
import { Box, TextField } from "@mui/material";

export default function Display(props) {
  return (
    <>
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
          value={props.s1}
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
          value={props.s2}
          sx={{
            width: "100%",
            height: "60%",
            backgroundColor: "#3b4655",
            input: {
              color: "#d5e8f7",
              textAlign: "right",
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
    </>
  );
}

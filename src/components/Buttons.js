import React from "react";
import { Button, Stack } from "@mui/material";

export default function Buttons(props) {
  return (
    <>
      <Stack spacing={0.5} sx={{ backgroundColor: "#3b4655" }}>
        {/* Row 1 */}
        <Stack
          direction="row"
          spacing={0.5}
          sx={{ backgroundColor: "#3b4655" }}
        >
          {props.bl1.map((btn, key) => (
            <Button
              variant="contained"
              color="primary"
              key={key}
              value={btn}
              disableElevation
              onClick={props.handler}
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
          {props.bl2.map((btn, key) => (
            <Button
              variant="contained"
              color="primary"
              onClick={props.handler}
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
          {props.bl3.map((btn, key) => (
            <Button
              variant="contained"
              color="primary"
              disableElevation
              key={key}
              value={btn}
              onClick={props.handler}
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
          {props.bl4.map((btn, key) => (
            <Button
              variant="contained"
              color="primary"
              disableElevation
              key={key}
              value={btn}
              onClick={props.handler}
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
          {props.bl5.map((btn, key) => (
            <Button
              variant="contained"
              color="primary"
              disableElevation
              key={key}
              value={btn}
              onClick={props.handler}
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
    </>
  );
}

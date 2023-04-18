import "./App.css";
import { Box, Input,Grid, Button } from "@mui/material";


function App() {
  return (
    <div className="CalcBody">
      <Box
        sx={{
          width: 300,
          height: 500,
          my: 11,
          backgroundColor: "#3b4655",
          borderRadius: 1,
          boxShadow: 20,
        }}
      >
        <Box
          sx={{
            width: 300,
            height: 130,
            backgroundColor: "#384351",
            borderRadius: 1,
          }}
        >
          {/* TextBox 1 */}
          <Input
            type="number"
            // readOnly={true}
            sx={{
              width: "100%",
              height: "40%",
              backgroundColor: "#3b4655",
              color: "#A7B4BB",
              direction: "rtl",
              padding: 1.5,
              caretColor: "transparent",
            }}
          />

          {/* TextBox 2 */}
          <Input
            type="number"
            // readOnly={true}
            sx={{
              width: "100%",
              height: "60%",
              backgroundColor: "#3b4655",
              color: "#d5e8f7",
              padding: 1.5,
              textAlign: "right",
              direction: "rtl",
              fontSize: 30,
              caretColor: "transparent",
            }}
          />
        </Box>

        {/* Buttons */}
        <Grid container rowSpacing={1} >
          <Grid item xs={3} sx={{backgroundColor:"#3a4654"}}>
            <Button>9</Button>
          </Grid>
          <Grid item xs={3} sx={{backgroundColor:"#3a4654"}}>
            2
          </Grid>
          <Grid item xs={3} sx={{backgroundColor:"#3a4654"}}>
            3
          </Grid>
          <Grid item xs={3} sx={{backgroundColor:"#3a4654"}}>
            4
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;

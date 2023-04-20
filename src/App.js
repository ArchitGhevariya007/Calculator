import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Calculator from "./components/Calculator";

function App() {
  //Theme create function
  const theme = createTheme({
    palette: {
      primary: {
        main: "#3b4655",
      },
    },
  });

  return (
    <div className="CalcBody">
      <ThemeProvider theme={theme}>
        <Calculator></Calculator>
      </ThemeProvider>
    </div>
  );
}

export default App;

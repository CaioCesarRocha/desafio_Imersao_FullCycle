import { CssBaseline, MuiThemeProvider } from "@material-ui/core";
import { SnackbarProvider } from "notistack";
import theme from "./theme";

import AppRoutes from "./routes/App.routes";


function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <SnackbarProvider maxSnack={3}>
        <CssBaseline/>
        <AppRoutes/>
      </SnackbarProvider>
    </MuiThemeProvider>  
  );
}

export default App;

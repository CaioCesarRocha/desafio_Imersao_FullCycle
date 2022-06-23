import { createTheme } from "@material-ui/core";
import { PaletteOptions } from "@material-ui/core/styles/createPalette";

const palette: PaletteOptions = {
  type: "dark",
  primary: {
    main: "#14161a",
    contrastText: "#FFCD00",
  },
  background: {
    default: "#8a8e94",
  },
};

const theme = createTheme({
  palette,
});

export default theme;
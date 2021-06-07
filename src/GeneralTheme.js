import { createMuiTheme } from "@material-ui/core/styles";

import cyan from "@material-ui/core/colors/cyan";

const GeneralTheme = createMuiTheme({
  palette: {
    primary: cyan,
    secondary: {
      main: "#ffeb3b"
    }
  }
});

export default GeneralTheme;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import GeneralTheme from "./GeneralTheme";

const useStyles = makeStyles((GeneralTheme) => ({
  root: {
    margin: GeneralTheme.spacing(1)
  }
}));

export default function ContainedButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button variant="contained" color="secondary">
        Secondary
      </Button>
    </div>
  );
}

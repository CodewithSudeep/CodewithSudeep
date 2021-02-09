import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

export default function VertStepper() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Stepper orientation="vertical">
        <Step key="create-an-idea">
          <StepLabel>
            Create an Idea: Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Molestiae itaque optio corrupti. Perferendis molestias quam a
            debitis at error rerum, totam laborum exercitationem iusto eos fuga
            dicta maxime. Ut, laudantium.
          </StepLabel>
        </Step>

        <Step key="gather-a-team">
          <StepLabel>Gather a Team</StepLabel>
        </Step>

        <Step key="create-success-stories">
          <StepLabel>Create success stories</StepLabel>
        </Step>
      </Stepper>
    </div>
  );
}

import React, {useState} from 'react';
import {Button, Container, Grid, makeStyles, Step, StepLabel, Stepper, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 10,
  },
  button: {
    marginRight: theme.spacing(1)
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  }
}));


const getSteps = () => {
  return [
    'オプションを選択してください',
    'グループを設定してください',
    '新規作成を始めてください',
    '既存の編集を行ってください'
  ];
}
const getStepContent = (step) => {
  switch (step) {
    case 0:
      return '以下のオプションの中から3つ選んでください…';
    case 1:
      return 'グループの設定を開始してくださいな…';
    case 2:
      return '作成手順は以下の通りです…';
    case 3:
      return '現在編集していると思いますが，ここで…';
    default:
      return '不明な選択です';
  }
}

export const Steppers = () => {
  const classes = useStyles();

  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  const steps = getSteps();

  const isStepOptional = (step) => step === 1;
  const isStepSkipped = (step) => skipped.has(step);

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    setSkipped(newSkipped);
    setActiveStep((prevStep) => prevStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };
  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error('You cannot skip a step that is not optional.');
    }
    setActiveStep((prevStep) => prevStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  }
  const handleReset = () => {
    setActiveStep(0);
  }




  const StepCompleted = () => {
    const classes = useStyles();
    return (
      <div>
        <Typography className={classes.instructions}>
          全ステップ終了 - you are finished
        </Typography>
        <Button onClick={handleReset} className={classes.button}>リセット</Button>
      </div>
    );
  }

  const StepOngoing = () => {
    const classes = useStyles();
    return (
      <div>
        <Typography className={classes.instructions}>
          {getStepContent(activeStep)}
        </Typography>
        <div>
          <Button disabled={activeStep === 0}
                  onClick={handleBack}
                  className={classes.button}>戻る</Button>
          {isStepOptional(activeStep) && (
            <Button variant={'contained'}
                    color={'primary'}
                    onClick={handleSkip}
                    className={classes.button}>スキップ</Button>
          )}
          <Button variant={'contained'}
                  color={'primary'}
                  onClick={handleNext}
                  className={classes.button}>
            {activeStep === steps.length - 1 ? '完了' : '次へ'}
          </Button>
        </div>
      </div>
    );
  }




  return (
    <div className={classes.root}>
      <Container maxWidth={'md'} mt={4}>
        <Typography variant={'h4'}>Steppers</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>

            <Stepper activeStep={activeStep}>
              {steps.map((label, index) => {
                const stepProps = {};
                const labelProps = {};
                if (isStepOptional(index)) {
                  labelProps.optional = <Typography variant={'caption'}>optional</Typography>;
                }
                if (isStepSkipped(index)) {
                  stepProps.completed = false;
                }
                return (
                  <Step key={label} {...stepProps}>
                    <StepLabel {...labelProps}>{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>

          </Grid>

          <Grid item xs={6}>
            {activeStep === steps.length ? <StepCompleted/> : <StepOngoing/>}
          </Grid>

        </Grid>
      </Container>
    </div>
  );

};
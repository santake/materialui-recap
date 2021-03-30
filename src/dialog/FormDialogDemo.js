import React, {useState} from 'react';
import {
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  makeStyles,
  TextField,
  Typography
} from "@material-ui/core";


const useStyles = makeStyles({
  root: {
    marginTop: '2em',
    marginBottom: '2em',
  },
});


export const FormDialogDemo = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  }

  return (
    <div className={classes.root}>
      <Container maxWidth={'md'}>
        <Typography variant={'h5'}>Form Dialog</Typography>

        <Grid container>
          <Grid item xs>
            <Button variant={'contained'}
                    onClick={handleOpen}>
              Open Dialog
            </Button>
          </Grid>
        </Grid>
      </Container>

      <Dialog open={open}
              onClose={handleClose}
              aria-labelledby={'alert-dialog-title'}
              aria-describedby={'alert-dialog-description'}>
        <DialogTitle id={'alert-dialog-title'}>Formダイアログのタイトル</DialogTitle>
        <DialogContent>
          <DialogContentText id={'alert-dialog-description'}>
            Formはこの下にくる:
          </DialogContentText>

          <TextField autoFocus={true}
                     margin={'dense'}
                     name={'Name'}
                     label={'Your Name'}
                     fullWidth/>
          <TextField margin={'dense'}
                     name={'email'}
                     label={'Email Address'}
                     fullWidth/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color={'primary'} variant={'contained'}>OK</Button>
          <Button onClick={handleClose} color={'primary'} variant={'outlined'}>Cancel</Button>
        </DialogActions>
      </Dialog>


    </div>
  );
};
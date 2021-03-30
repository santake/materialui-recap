import React, {useState} from 'react';
import {
  Button,
  Container,
  Dialog, DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  makeStyles,
  Typography
} from "@material-ui/core";


const useStyles = makeStyles({
  root: {
    marginTop: '2em',
    marginBottom: '2em',
  },
});


export const AlertDialogDemo = () => {
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
        <Typography variant={'h5'}>Alert</Typography>

        <Grid container>
          <Grid item xs>
            <Button variant={'contained'}
                    onClick={handleOpen}>
              Open Alert
            </Button>
          </Grid>
        </Grid>
       </Container>

      <Dialog open={open}
              onClose={handleClose}
              aria-labelledby={'alert-dialog-title'}
              aria-describedby={'alert-dialog-description'}>
        <DialogTitle id={'alert-dialog-title'}>アラートダイアログのタイトル</DialogTitle>
        <DialogContent>
          <DialogContentText id={'alert-dialog-description'}>
            詳細はここに記載される．詳細はここに記載される．詳細はここに記載される．詳細はここに記載される．
            詳細はここに記載される．詳細はここに記載される．詳細はここに記載される．詳細はここに記載される．
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color={'primary'} variant={'contained'}>OK</Button>
          <Button onClick={handleClose} color={'primary'} variant={'outlined'}>Cancel</Button>
        </DialogActions>
      </Dialog>


    </div>
  );
};
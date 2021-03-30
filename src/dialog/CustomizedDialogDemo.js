import React, {useState} from 'react';
import {makeStyles, withStyles, Typography, Container, Grid, Button, Dialog} from "@material-ui/core";

import {
  DialogTitle as MuiDialogTitle,
  DialogContent as MuiDialogContent,
  DialogActions as MuitDialogActions,
  IconButton
} from "@material-ui/core";
import {
  Close as CloseIcon,
} from "@material-ui/icons";


const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  }
});

const DialogTitle = withStyles(styles)( (props) => {
  const {
    children, classes, onClose, ...other
  } = props;
  return (
    <MuiDialogTitle disableTypography={true}
                    className={classes.root}
                    {...other}>
      <Typography variant={'h6'}>{children}</Typography>
      {onClose ? (
        <IconButton aria-label={'close'}
                    className={classes.closeButton}
                    onClick={onClose}>
          <CloseIcon/>
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme)=> ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    backgroundColor: 'yellow',
    padding: theme.spacing(1)
  }
}))(MuitDialogActions);




const useStyles = makeStyles({
  root: {
    marginTop: '2em'
  },
  title: {
    backgroundColor: '#f3ccf3'
  }
});

export const CustomizedDialogDemo = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className={classes.root}>
      <Container maxWidth={'md'}>
        <Typography variant={'h5'}>Customized</Typography>

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
              aria-labelledby={'customized-dialog-title'}
              aria-describedby={'customized-dialog-desc'}>

        <DialogTitle id={'customized-dialog-title'}
                     onClose={handleClose}
                     className={classes.title}>
          失恋レストラン
        </DialogTitle>
        <DialogContent>
          <Typography variant={'subtitle1'}>
            「失恋レストラン」（しつれんレストラン）は、1976年11月21日に発売された清水健太郎のデビューシングル。
          </Typography>
          <Typography gutterBottom variant={'body2'}>
            当時アイドル的存在であった清水健太郎の代表曲である。楽曲提供はつのだひろ（後につのだ☆ひろに改名）。自身のレギュラー番組であった『ぎんざNOW!』から生まれた楽曲である。
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color={'primary'} variant={'contained'}>OK</Button>
          <Button onClick={handleClose} color={'primary'} variant={'outlined'}>Cancel</Button>
        </DialogActions>
      </Dialog>



    </div>
  );
}
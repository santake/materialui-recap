import React, {useState} from 'react';
import {
  Avatar, Button,
  Container,
  Dialog,
  DialogTitle,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles, Typography
} from "@material-ui/core";
import {blue} from "@material-ui/core/colors";
import {Add, Person} from "@material-ui/icons";
import PropTypes from 'prop-types';

const emails = ['user@gmail.com', 'user2@gmail.com'];
const useStyles = makeStyles({
  root: {
    marginTop: '2em',
    marginBottom: '2em',
  },

  avatar: {
    backgroundColor: blue[100],
    color: blue[600]
  },
});

const SimpleDialog = (props) => {
  const classes = useStyles();
  const {
    onClose,
    selectedValue,
    open
  } = props;

  const handleClose = () => onClose(selectedValue);
  const handleListItemClick = (value) => onClose(value);

  return (
    <Dialog onClose={handleClose}
            aria-labelledby={'simpledialog-title'}
            open={open}>
      <DialogTitle id={'simple-dialog-title'}>Set backup account</DialogTitle>
      <List>
        {emails.map((email) => (
          <ListItem button onClick={() => handleListItemClick(email)}
                    key={email}>
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <Person/>
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={email}/>
          </ListItem>
        ))}
        <ListItem button
                  autoFocus
                  onClick={()=> handleListItemClick('addAccount')}>
          <ListItemAvatar>
            <Avatar><Add/></Avatar>
          </ListItemAvatar>
          <ListItemText primary={'Add account'}/>
        </ListItem>
      </List>
    </Dialog>
  );
};

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired
}




export const SimpleDialogDemo = () => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(emails[0]);

  const handleClickOpen = () => setOpen(true);
  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  }

  return (
    <div className={classes.root}>
      <Container maxWidth={'md'}>
        <Typography variant={'h5'}>Simple dialog</Typography>
        <div>
          <Typography variant={'subtitle1'}>Selected: {selectedValue}</Typography>
          <br/>
          <Button variant={'contained'}
                  color={'primary'}
                  onClick={handleClickOpen}>
            Open Simple Dialog!
          </Button>
          <SimpleDialog onClose={handleClose} open={open} selectedValue={selectedValue}/>
        </div>
      </Container>
    </div>
  );



}



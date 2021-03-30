import React from 'react';
import {deepOrange, deepPurple} from "@material-ui/core/colors";
import {Avatar, Badge, Container, Grid, makeStyles, Typography} from "@material-ui/core";
import {Assignment as AssignIcon, Folder as FolderIcon, Pageview as PageviewIcon} from "@material-ui/icons";
import {AvatarGroup} from "@material-ui/lab";

const BASE_URL = 'https://material-ui.com';


const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '2em',
    marginBottom: '2em'
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500]
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500]
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7)
  },
}));

export const Avatars = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth={'md'}>
        <Typography variant={'h4'}>Avatars</Typography>
        <Grid container spacing={2}>

          <Grid item xs={3}>
            <Typography variant={'h6'}>Image</Typography>
            <Avatar alt={'Remy Sharp'} src={BASE_URL + '/static/images/avatar/1.jpg'}/>
          </Grid>

          <Grid item xs={3}>
            <Typography variant={'h6'}>w/ simple Badge</Typography>

            <Badge color={'secondary'} badgeContent={'!'}>
              <Avatar alt={'Remy Sharp'} src={BASE_URL + '/static/images/avatar/1.jpg'}/>
            </Badge>
          </Grid>


          <Grid item xs={3}>
            <Typography variant={'h6'}>Letter</Typography>
            <Avatar>A</Avatar>
            <Avatar className={classes.orange}>N</Avatar>
            <Avatar className={classes.purple}>T.S.</Avatar>
          </Grid>

          <Grid item xs={3}>
            <Typography variant={'h6'}>Sizes</Typography>
            <Avatar alt={'Remy Sharp'} src={BASE_URL + '/static/images/avatar/3.jpg'} className={classes.small}/>
            <Avatar alt={'Remy Sharp'} src={BASE_URL + '/static/images/avatar/3.jpg'}/>
            <Avatar alt={'Remy Sharp'} src={BASE_URL + '/static/images/avatar/3.jpg'} className={classes.large}/>
          </Grid>

          <Grid item xs={3}>
            <Typography variant={'h6'}>Icons</Typography>
            <Avatar><FolderIcon/></Avatar>
            <Avatar className={classes.orange}>
              <PageviewIcon/>
            </Avatar>
            <Avatar className={classes.purple}>
              <AssignIcon/>
            </Avatar>
          </Grid>

          <Grid item xs={3}>
            <Typography variant={'h6'}>Variants</Typography>
            <Grid container spacing={2}>
              <Grid item>
                <Avatar variant={'square'} className={classes.purple}>N</Avatar>
              </Grid>
              <Grid item>
                <Avatar variant={'rounded'} className={classes.purple}>
                  <PageviewIcon/>
                </Avatar>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={5}>
            <Typography variant={'h6'}>Fallback</Typography>
            <p>if it fails to load icons/images, you should see default symbol for the Avatar.</p>
            <div>
              <Avatar alt={'Remy Sharp'} src={BASE_URL + '/BAD_URL.jpg'}/> ... using alt
            </div>
            <div>
              <Avatar src={BASE_URL + '/BAD_URL.jpg'}>BB</Avatar> ... using child text
            </div>
            <div>
              <Avatar src={BASE_URL + '/BAD_URL.jpg'}/> ... not using anything
            </div>
          </Grid>


          <Grid item xs={3}>
            <Typography variant={'h6'}>Grouped</Typography>
            <AvatarGroup max={3}>
              <Avatar>A</Avatar>
              <Avatar alt={'Remy Sharp'} src={BASE_URL + '/static/images/avatar/3.jpg'}/>
              <Avatar variant={'square'} className={classes.purple}>N</Avatar>
              <Avatar className={classes.purple}><AssignIcon/></Avatar>
              <Avatar className={classes.orange}>B</Avatar>
              <Avatar className={classes.purple}>C</Avatar>
            </AvatarGroup>

            <AvatarGroup max={4}>
              <Avatar>A</Avatar>
              <Avatar alt={'Remy Sharp'} src={BASE_URL + '/static/images/avatar/3.jpg'}/>
              <Avatar variant={'square'} className={classes.purple}>N</Avatar>
              <Avatar className={classes.purple}><AssignIcon/></Avatar>
              <Avatar className={classes.orange}>B</Avatar>
              <Avatar className={classes.purple}>C</Avatar>
            </AvatarGroup>

            <AvatarGroup max={6}>
              <Avatar>A</Avatar>
              <Avatar alt={'Remy Sharp'} src={BASE_URL + '/static/images/avatar/3.jpg'}/>
              <Avatar variant={'square'} className={classes.purple}>N</Avatar>
              <Avatar className={classes.purple}><AssignIcon/></Avatar>
              <Avatar className={classes.orange}>B</Avatar>
              <Avatar className={classes.purple}>C</Avatar>
            </AvatarGroup>
          </Grid>


        </Grid>
      </Container>
    </div>
  )
}
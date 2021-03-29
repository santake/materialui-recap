import React, {useState} from 'react';
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia, Collapse,
  Container,
  Grid,
  IconButton,
  makeStyles,
  Typography, useTheme
} from "@material-ui/core";
import {ExpandMore, Favorite, MoreVert, PlayArrow, Share, SkipNext, SkipPrevious} from "@material-ui/icons";
import clsx from "clsx";
import {StylishButton} from "./CustomComponents";


const BASE_URL = 'https://material-ui.com';


const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '2em',
  },
  card: {
    margin: '1em',
    minWidth: 130,
    minHeight: 100,
  },

  avatar: {
    backgroundColor: '#3b770d',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },

  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },

  mRoot: {
    display: 'flex'
  },
  mDetails: {
    display: 'flex',
    flexDirection: 'column'
  },
  mContent: {
    flex: '1 0 auto'
  },
  mCover: {
    width: 151
  },
  mControls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  mPlayIcon: {
    height: 38, width:38
  }
}));

export const Cards = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = (ev) => setExpanded(!expanded);


  return (
    <div className={classes.root}>
      <Container maxWidth={'md'}>
        <Typography variant={'h4'}>Cards </Typography>
        <Grid container spacing={2} alignItems={'flex-start'} wrap>

          <Grid item xs={2}>
            <Card className={classes.card}>
              <CardContent>
                <Typography variant={'subtitle1'}>Default Card</Typography>
              </CardContent>
              <CardActions>
                {/*custom button*/}
                <StylishButton variant={'contained'} color={'primary'}>Detail</StylishButton>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={2}>
            <Card className={classes.card} variant={'outlined'}>
              <CardContent>
                <Typography variant={'subtitle1'}>Outlined</Typography>
              </CardContent>
              <CardActions>
                <Button variant={'contained'} color={'primary'}>Detail</Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={4}>
            <Card className={classes.card}>
              <CardHeader
                title={'日本のバカ'}
                subheader={'総理！総理！総理！'}
                avatar={<Avatar aria-label={'recipe'} className={classes.avatar}>R</Avatar>}
                action={<IconButton aria-label={'settings'}><MoreVert/></IconButton>}/>

              <CardMedia
                className={classes.media}
                image={BASE_URL + '/static/images/cards/paella.jpg'}
                title={'パエリア'}/>
              <CardContent>
                <Typography variant={'body1'}>
                  内閣総理大臣（ないかくそうりだいじん、英: Prime Minister）とは、
                  日本の内閣の首長たる国務大臣である。略称は「総理！」。通称は首相。
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label={'add to favorites'}>
                  <Favorite/>
                </IconButton>
                <IconButton aria-label={'share'}>
                  <Share/>
                </IconButton>
                <IconButton aria-label={'Show more'}
                            onClick={handleExpandClick}
                            className={clsx(classes.expand, {
                              [classes.expandOpen]: expanded
                            })}>
                  <ExpandMore/>
                </IconButton>
              </CardActions>
              {/* hidden 'show more' */}
              <Collapse in={expanded}
                        timeout={'auto'}
                        unmountOnExit>
                <CardContent>
                  <Typography paragraph variant={'subtitle1'}>概説</Typography>
                  <Typography paragraph variant={'body2'}>
                    内閣総理大臣は、行政権の属する内閣の首長で（憲法第66条1項）[4]、その他の国務大臣を任免し（憲法第68条）、内閣を代表して国会に議案を提出し、一般の国務および外交関係を報告し、行政各部を指揮監督する（憲法第72条）。
                  </Typography>
                  <Typography paragraph variant={'body2'}>
                    議院内閣制により、国会議員の中から国会の議決（内閣総理大臣指名選挙。首班指名とも呼ばれる）により指名され（憲法第67条）、これに基づいて天皇は形式的な国事行為として内閣総理大臣を任命する（憲法第6条）[4]。
                  </Typography>
                  <Typography paragraph variant={'body2'}>
                    また、内閣総理大臣は、文民でなければならず（憲法第66条2項）、自衛隊の最高指揮監督権を有する（自衛隊法）。内閣府ほか複数の行政組織の長でもあり、これらは内閣総理大臣が直接所管する。
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>

          <Grid item xs={4}>
            <Card className={classes.card}>
              <CardMedia
                component={'img'}
                alt={'Contemplative Reptile'}
                height={100}
                image={BASE_URL + '/static/images/cards/contemplative-reptile.jpg'}
                title={'まあ要するにトカゲ'}/>
              <CardContent>
                <Typography gutterBottom variant={'h5'} component={'p'}>
                  トカゲ
                </Typography>
                <Typography variant={'body2'}>
                  トカゲについては諸説紛々…トカゲについては諸説紛々…トカゲについては諸説紛々…トカゲについては諸説紛々…
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={5}>
            <Card className={classes.mRoot}>
              <div className={classes.mDetails}>
                <CardContent className={classes.mContent}>
                  <Typography component={'h5'} variant={'h5'}>
                    Live from space
                  </Typography>
                  <Typography variant={'subtitle1'} color={'textSecondary'}>
                    Mac Miller
                  </Typography>
                </CardContent>

                <div className={classes.mControls}>
                  <IconButton>
                    {theme.direction === 'rtl' ? <SkipNext/> : <SkipPrevious/>}
                  </IconButton>
                  <IconButton>
                    <PlayArrow className={classes.mPlayIcon}/>
                  </IconButton>
                  <IconButton>
                    {theme.direction === 'rtl' ?  <SkipPrevious/> : <SkipNext/>}
                  </IconButton>
                </div>

              </div>
              <CardMedia
                className={classes.mCover}
                image={BASE_URL + '/static/images/cards/live-from-space.jpg'}
                title={'Live From Space album cover'} />
            </Card>



          </Grid>


        </Grid>
      </Container>
    </div>
  );
};
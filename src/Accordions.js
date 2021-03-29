import React, {useState} from 'react';
import {
  Container, Grid, Box, makeStyles,
  Accordion,
  Typography, AccordionSummary, AccordionDetails, withStyles, Divider, AccordionActions, Button
} from "@material-ui/core";
import {ExpandMore} from "@material-ui/icons";

import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';



const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '2em'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(14),
    color: theme.palette.text.secondary
  }
}));


// For css customized Accordion(grouping)
const MAccordion = withStyles({
  root: {
    border: '1px solid rgba(0,0,0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display:'none'
    },
    '&$expanded': {
      margin: 'auto'
    }
  },
  expanded: {},
})(MuiAccordion);
const MAccordionSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 100, 100, .09)',
    borderBottom: '1px solid rgba(0,0,0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0'
    },
  },
  expanded: {}
})(MuiAccordionSummary);
const MAccordionDetails = withStyles((theme)=> ({
  root: {
    padding: theme.spacing(2)
  },
}))(MuiAccordionDetails);



export const Accordions = () => {
  const classes = useStyles();

  // these are for (2):
  const [expanded, setExpanded] = useState(false)
  const handleExpand = (panel) => (ev, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  }

  return (
    <div className={classes.root}>
      <Container maxWidth={'md'}>
        <Typography variant={'h4'}>Accordions</Typography>

        {/* (1)  */}
        <Box mx={4} my={4}>
          <Typography variant={'h5'}>Very basic</Typography>
          <Accordion TransitionProps={{unmountOnExit:true}}>
            <AccordionSummary expandIcon={<ExpandMore/>}
                              aria-controls={'panel1a-content'}
                              id={'panel1a-header'}>
              <Typography className={classes.heading}>オスマン帝国</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant={'body1'}>
                オスマン帝国（オスマンていこく、オスマントルコ語: دولتِ عليۀ عثمانيه‎, ラテン文字転写: Devlet-i ʿAliyye-i ʿOs̠māniyye）は、
                テュルク系（後のトルコ人）のオスマン家出身の君主（皇帝）を戴く多民族帝国。英語圏ではオットマン帝国 (Ottoman Empire) と表記される。
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion TransitionProps={{unmountOnExit:true}}>
            <AccordionSummary expandIcon={<ExpandMore/>}
                              aria-controls={'panel2a-content'}
                              id={'panel2a-header'}>
              <Typography className={classes.heading}>東ローマ帝国</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant={'body1'}>
                東ローマ帝国（ひがしローマていこく、英語: Eastern Roman Empire[3]）またはビザンツ帝国[注 1]、
                ビザンティン帝国（英: Byzantine Empire）、ギリシア帝国、ギリシャ帝国は、東西に分割統治されて以降のローマ帝国の東側の領域、国家である。
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>


        {/* (2)  */}
        <Box mx={4} my={4}>
          <Typography variant={'h5'}>Controlled</Typography>
          <Accordion expanded={expanded === 'panel1b'}
                     onChange={handleExpand('panel1b')}
                     TransitionProps={{unmountOnExit:true}}>
            <AccordionSummary expandIcon={<ExpandMore/>}
                              aria-controls={'panel1b-content'}
                              id={'panel1b-header'}>
              <Typography className={classes.heading}>コンスタンティノープル</Typography>
              <Typography className={classes.secondaryHeading}>Constantinople</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant={'body1'}>
                ンスタンティノープル（英: Constantinople、ラテン語: Constantinopolis、古代ギリシア語: Κωνσταντινούπολις、現代ギリシア語では Κωνσταντινούπολη)は、
                東ローマ帝国の首都であった都市で、現在のトルコの都市イスタンブールの前身である。
                強固な城壁の守りで知られ、330年の建設以来、1453年の陥落まで難攻不落を誇り、東西交易路の要衝として繁栄した。
                正教会の中心地ともなり、現在もコンスタンティノープル総主教庁が置かれている。
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion expanded={expanded === 'panel2b'}
                     onChange={handleExpand('panel2b')}
                     TransitionProps={{unmountOnExit:true}}>
            <AccordionSummary expandIcon={<ExpandMore/>}
                              aria-controls={'panel2b-content'}
                              id={'panel2b-header'}>
              <Typography className={classes.heading}>ビュザンティオン</Typography>
              <Typography className={classes.secondaryHeading}>Βυζάντιον</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant={'body1'}>
                ビュザンティオン（古代ギリシャ語: Βυζάντιον、ラテン文字転写: Byzántion）は、ヨーロッパの南東、バルカン半島のトラキアの東端に位置する小さな半島
                （現在のトルコ領イスタンブールの旧市街地区）の先端部分にあった、古代ギリシア人の建設による都市である。アジア側の対岸にはカルケドンがある。
                表記は、ビュザンティオンのほか、ビザンティオン、ビザンティウム、ビザンチウム、とされることもある。 ビュザンティオン、ビザンティオンはギリシア語表記に、
                ビザンティウム（Byzantium）はラテン語表記に由来している。
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>





        {/* (3)  */}
        <Box mx={4} my={4}>
          <Typography variant={'h5'}>Grouped Accordion (customize needed)</Typography>
          <MAccordion expanded={expanded === 'panel1c'}
                      onChange={handleExpand('panel1c')}
                      TransitionProps={{unmountOnExit:true}} >

            <MAccordionSummary expandIcon={<ExpandMore/>}
                              aria-controls={'panel1c-content'}
                              id={'panel1c-header'}>
              <Typography className={classes.heading}>コンスタンティノープル</Typography>
              <Typography className={classes.secondaryHeading}>Constantinople</Typography>
            </MAccordionSummary>
            <MAccordionDetails>
              <Typography variant={'body1'}>
                ンスタンティノープル（英: Constantinople、ラテン語: Constantinopolis、古代ギリシア語: Κωνσταντινούπολις、現代ギリシア語では Κωνσταντινούπολη)は、
                東ローマ帝国の首都であった都市で、現在のトルコの都市イスタンブールの前身である。
                強固な城壁の守りで知られ、330年の建設以来、1453年の陥落まで難攻不落を誇り、東西交易路の要衝として繁栄した。
                正教会の中心地ともなり、現在もコンスタンティノープル総主教庁が置かれている。
              </Typography>
            </MAccordionDetails>
          </MAccordion>

          <MAccordion expanded={expanded === 'panel2c'}
                      onChange={handleExpand('panel2c')}
                      TransitionProps={{unmountOnExit:true}}>
            <MAccordionSummary expandIcon={<ExpandMore/>}
                              aria-controls={'panel2c-content'}
                              id={'panel2c-header'}>
              <Typography className={classes.heading}>ビュザンティオン</Typography>
              <Typography className={classes.secondaryHeading}>Βυζάντιον</Typography>
            </MAccordionSummary>
            <MAccordionDetails>
              <Typography variant={'body1'}>
                ビュザンティオン（古代ギリシャ語: Βυζάντιον、ラテン文字転写: Byzántion）は、ヨーロッパの南東、バルカン半島のトラキアの東端に位置する小さな半島
                （現在のトルコ領イスタンブールの旧市街地区）の先端部分にあった、古代ギリシア人の建設による都市である。アジア側の対岸にはカルケドンがある。
                表記は、ビュザンティオンのほか、ビザンティオン、ビザンティウム、ビザンチウム、とされることもある。 ビュザンティオン、ビザンティオンはギリシア語表記に、
                ビザンティウム（Byzantium）はラテン語表記に由来している。
              </Typography>
            </MAccordionDetails>
          </MAccordion>
        </Box>



        {/* (4) Multiple header lines  */}
        <Box mx={4} my={4}>
          <Typography variant={'h5'}>Multiple Header Lines &amp; footer/options</Typography>
          <Accordion TransitionProps={{unmountOnExit:true}}>
            <AccordionSummary expandIcon={<ExpandMore/>}
                              aria-controls={'panel1d-content'}
                              id={'panel1d-header'}>
              <Typography variant={'h4'}>グリッチアート</Typography>
              <Box display={'flex'} flexDirection={'column'}>
                <Box>
                  <Typography variant={'subtitle1'}>Glitch Art</Typography>
                </Box>
                <Box>
                  <Typography variant={'body2'}>
                    グリッチアートとは、デジタルデータを破壊したり、電子機器を物理的に操作したりすることである．
                  </Typography>
                </Box>
              </Box>
            </AccordionSummary>

            <Divider/>

            <AccordionDetails>
              <Typography variant={'body1'}>
                グリッチアート（英語: glitch art）とは、デジタルデータを破壊したり、電子機器を物理的に操作したりすることで、
                画像・映像・音声のエラー（グリッチ（英語版））を故意に発生させ、それを芸術の目的に利用することである。
                レン・ライ（英語版）の1935年の映画『カラー・ボックス（英語版）』、
                ナム・ジュン・パイクの1965年のビデオスカルプチャー（英語版）『TVマグネット』、
                コーリー・アーキャンジェル（英語版）の2007年のビジュアルアート"Panasonic TH-42PWD8UK Plasma Screen Burn"
                などに登場する[1]。
              </Typography>
            </AccordionDetails>

            <Divider/>

            <AccordionActions>
              <Button variant={'contained'} size={'large'} color={'primary'}>保存スル</Button>
              <Button variant={'contained'} size={'normal'} color={'secondary'}>アップロード</Button>
              <Button variant={'contained'} size={'small'} color={'default'}>削除</Button>
            </AccordionActions>

          </Accordion>
        </Box>

      </Container>
    </div>
  )
}
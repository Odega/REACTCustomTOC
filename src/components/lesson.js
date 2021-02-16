import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import communication from '../communication/communication';
import CircularProgress from '@material-ui/core/CircularProgress';
import IconButton from '@material-ui/core/IconButton';
import LinearProgress from '@material-ui/core/LinearProgress'; 
import { createStyles, makeStyles, withStyles } from '@material-ui/core/styles'
import ScheduleIcon from '@material-ui/icons/Schedule';
import {GiTrophy} from 'react-icons/gi';
import {IconContext} from "react-icons"
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import config from '../config.json';
import { CardHeader, Card, CardActionArea, CardMedia, CardActions, Divider } from '@material-ui/core';
import { icons } from 'react-icons/lib';

const useStyles = makeStyles((theme) =>
    createStyles({
        wrapper: {
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            position: 'relative',
            height: '20rem',
            width: '16rem',
            textAlign: 'center',
            cursor: 'pointer'
        },
        buttonProgress: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            marginTop: -50,
            marginLeft: -50
        },
        media: {
            justifyContent: 'center',

        },
        cardImgCenter: {
            display: 'flex',
            justifyContent: 'center',
            width: '16rem',
            maxWidth: '100rem'
        },
        styleFlex: {
            display: 'flex',
            justifyContent: 'center'
        },
        iconStyle: {
            display: 'flex',
            right: 0,
            position: 'absolute',
        },
        lessonTitle: {
            fontWeight: 'bold',
            maxWidth: 400,
            height: 100

        }
    }),
);
function lessonTime(lesson) {
    function formatDate(ms) {
        const date = new Date(Number(ms))
        return `${date.getUTCHours()}h ${date.getMinutes()}m ${date.getSeconds()}s`
    }

    return (
        <p>
            {formatDate(lesson.time)}
        </p>
    )
}
function LinearProgressWithLabel(props) {
    return (
      <Box display="flex" alignItems="center" lineHeight={100}>
        <Box width="100%" mr={1}>
          <LinearProgress variant="determinate" {...props} />
        </Box>
        <Box minWidth={10}>
          <Typography variant="body2" color="textSecondary">{`${Math.round(
            props.value,
          )}%`}</Typography>
        </Box>
      </Box>
    );
  }

  const BorderLinearProgress = withStyles((theme) => ({
    root: {
      height: 15,
      borderRadius: 5,
      lineHeight: 100,
    },
    colorPrimary: {
      backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
      borderRadius: 5,
      backgroundColor: '#00b300',
    },

  }))(LinearProgressWithLabel);

function Lesson(props) {
    const classes = useStyles();
    const onClick = React.useCallback(() => {
        communication.requestOpenLesson(props.lesson.id);
    }, [props.lesson]);

    return <React.Fragment>
        <Card className={classes.wrapper} onClick={onClick}>
        <div className={classes.iconStyle} >
                <div>
                        <GiTrophy style={{fontSize: '20px'}}/>
                </div>
                </div>
            <CardHeader className={classes.lessonTitle}
            subheader={
                <Typography gutterBottom variant="inherit" variantMapping="h2" align='center'>
                   {props.lesson.name}
                </Typography>}
            ></CardHeader>
            <div className={classes.cardImgCenter}>
                <CardMedia
                    className={classes.media}
                    style={{ width: 130, height: 100, alignContent: 'center' }}
                    image={`${config['APPLICATION_BASE_URL']}${props.lesson.icon}`}
                /></div>
            <CardActions className={classes.wrapper}>
                <div className={classes.styleFlex}>
                    <ScheduleIcon>
                        <ScheduleIcon />
                    </ScheduleIcon>
                    <Typography variant="subtitle2" gutterBottom style={{marginLeft: 5, lineHeight: 0}} >{lessonTime(props.lesson)}</Typography>
                </div>
                <BorderLinearProgress variant='determinate' value={props.lesson.score}/>



                

            </CardActions>


        </Card>
    </React.Fragment>
}


export default Lesson;
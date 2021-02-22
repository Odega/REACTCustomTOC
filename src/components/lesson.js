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
import BorderLinearProgress from './progressBar'

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
            cursor: 'pointer',
            overflow: 'visible'
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
            maxWidth: '100rem',
        },
        styleFlex: {
            display: 'flex',
            justifyContent: 'center'
        },
        iconStyle: {
            display: 'flex',
            color: 'white',
            right: -8,
            top: -5,
            position: 'absolute',
            borderRadius: '60%',
            fontSize: '25px',
            lineHeight: 0,
            backgroundColor: 'grey',
            border: '3px solid grey'
            
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

function Lesson(props) {
    const classes = useStyles();
    const onClick = React.useCallback(() => {
        communication.requestOpenLesson(props.lesson.id);
    }, [props.lesson]);

    return <React.Fragment>
        <Card className={classes.wrapper} onClick={onClick}>
            <CardHeader className={classes.lessonTitle}
            subheader={
                <Typography gutterBottom variant="inherit" variantMapping="h2" align='center'>
                   {props.lesson.name}
                </Typography>}
            ></CardHeader>
            <div className={classes.cardImgCenter}>
                <CardMedia
                    className={classes.media}
                    style={{ width: 130, height: 100, alignContent: 'center', borderRadius: '10%' }}
                    image={`${config['APPLICATION_BASE_URL']}${props.lesson.icon}`}
                /></div>
            <CardActions className={classes.wrapper}>
                <div className={classes.styleFlex}>
                    <ScheduleIcon>
                        <ScheduleIcon />
                    </ScheduleIcon>
                    <Typography variant="subtitle2" gutterBottom style={{marginLeft: 5, lineHeight: 0}} >{lessonTime(props.lesson)}</Typography>
                </div>
                <BorderLinearProgress variant='determinate' value={props.lesson.score} style={{lineHeight: 0}} />



                

            </CardActions>


        </Card>
    </React.Fragment>
}


export default Lesson; 

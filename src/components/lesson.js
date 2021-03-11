import React, { Fragment } from 'react';
import Avatar from '@material-ui/core/Avatar';
import communication from '../communication/communication';
import CircularProgress from '@material-ui/core/CircularProgress';
import IconButton from '@material-ui/core/IconButton';
import LinearProgress from '@material-ui/core/LinearProgress'; 
import { createStyles, makeStyles, withStyles } from '@material-ui/core/styles'
import ScheduleIcon from '@material-ui/icons/Schedule';
import {GiScaleMail, GiTrophy} from 'react-icons/gi';
import {IconContext} from "react-icons"
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import config from '../config.json';
import { CardHeader, Card, CardActionArea, CardMedia, CardActions, Divider } from '@material-ui/core';
import { icons } from 'react-icons/lib';
import BorderLinearProgress from './progressBar'
import LessonTrophy from './lessonTrophy'
import UseTabletStyles from '../styles/stylesTablet'
import UseMobileStyles from '../styles/stylesMobile';
import UseStyles from '../styles/styles';
import { useTabIndex } from 'react-tabindex';

function devicedetect () {
    //onsole.log(window.innerWidth);
    if (window.innerWidth <= 1224) {
        //console.log('tablet');
        return (
            UseTabletStyles()
        )
    }
    else {
        //console.log('vanlig');
        return (
            UseStyles()
        )
    };

}

function lessonTime(lesson) {
    function formatDate(ms) {
        const date = new Date(Number(ms))
        return `${date.getUTCHours()}h ${date.getMinutes()}m ${date.getSeconds()}s`
    }

    return (
        <>
            {formatDate(lesson.time)}
        </>
    )
}

function Lesson(props) {
    const tabIndex = useTabIndex();
    const classes = devicedetect();
    const onClick = React.useCallback(() => {
        communication.requestOpenLesson(props.lesson.id);
    }, [props.lesson]);
    let tried = false;
    if (props.lesson.time > 1000){
        tried = true;
    }
    const onKeyPress = React.useCallback(() => {
        communication.requestOpenLesson(props.lesson.id);
    }, [props.lesson]);
    
    return <React.Fragment >
        <Card className={classes.wrapper} onClick={onClick} tabIndex={0} onKeyPress={onKeyPress} style={!tried ? {opacity:'40%'} : {}}>
        <div className={classes.medaljeStyle} >
                        <LessonTrophy props={props} />
                </div>
            <CardHeader className={classes.lessonTitle}
            subheader={
                <Typography gutterBottom className={classes.lessonNameStyle}>
                   {props.lesson.name}
                </Typography>}
            ></CardHeader>
            <div className={classes.cardImgCenter}>
                <CardMedia
                    className={classes.media}
                    image={`${config['APPLICATION_BASE_URL']}${props.lesson.icon}`}
                /></div>
            <CardActions className={classes.wrapper}>
                <div className={classes.styleFlex}>
                    <ScheduleIcon>
                        <ScheduleIcon />
                    </ScheduleIcon>
                    <Typography className={classes.tidStyle} >{lessonTime(props.lesson)}</Typography>
                </div>
                <BorderLinearProgress value={props.lesson.score} />
            </CardActions>
        </Card>
    </React.Fragment>
}


export default Lesson; 

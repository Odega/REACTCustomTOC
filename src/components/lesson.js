import React, { Fragment } from 'react';
import communication from '../communication/communication';
import ScheduleIcon from '@material-ui/icons/Schedule';
import Typography from '@material-ui/core/Typography';
import config from '../config.json';
import { CardHeader, Card, CardMedia, CardActions } from '@material-ui/core';
import BorderLinearProgress from './progressBar'
import LessonTrophy from './lessonTrophy'
import UseTabletStyles from '../styles/stylesTablet'
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
        <Card className={classes.wrapper} onClick={onClick} tabIndex={0} onKeyPress={onKeyPress} style={!tried ? {filter: 'brightness(80%)'} : {}}>
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

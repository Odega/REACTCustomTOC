import React from 'react';
import Avatar from '@material-ui/core/Avatar';

function LessonTrophy(props) {

    //console.log("ææææææææææææææææææææææææææææææææææææææææææææææææææææææææææææææææ");
    console.log(props);
    
        if(props.props.lesson.score >= 80){
            return (
                <Avatar alt="Gold" src="../../img/gold.svg" />
            )
        }
        if(props.props.lesson.score >= 50 && props.props.lesson.score < 80){
            return (
                <Avatar alt="Silver" src="../../img/silver.svg" />
            )
        }
        if(props.props.lesson.score >= 10 && props.props.lesson.score < 50){
            return (
                <Avatar alt="Bronze" src="../../img/bronze.svg" />
            )
        }
        else {
            return (
                null
            )
        }

}

export default LessonTrophy
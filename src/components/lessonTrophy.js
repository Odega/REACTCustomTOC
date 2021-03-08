import React from 'react';
import Avatar from '@material-ui/core/Avatar';

function LessonTrophy(props) {

    //console.log("ææææææææææææææææææææææææææææææææææææææææææææææææææææææææææææææææ");
    //console.log(props);
    
        if(props.props.lesson.score >= 21){
            return (
                <Avatar alt="Gold" src="../../img/gold.svg" />
            )
        }
        if(props.props.lesson.score >= 14 && props.props.lesson.score < 21){
            return (
                <Avatar alt="Silver" src="../../img/silver.svg" />
            )
        }
        if(props.props.lesson.score >= 1 && props.props.lesson.score < 14){
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
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import imageSrc from './image/bronze.svg';
import imageSrc2 from './image/gold.svg';
import imageSrc3 from './image/silver.svg';

function LessonTrophy(props) {

    //console.log("ææææææææææææææææææææææææææææææææææææææææææææææææææææææææææææææææ");
    //console.log(props);
    
        if(props.props.lesson.score >= 80){
            return (
                <Avatar alt="Gold" src={imageSrc2} />
            )
        }
        if(props.props.lesson.score >= 50 && props.props.lesson.score < 80){
            return (
                <Avatar alt="Silver" src={imageSrc3}  />
            )
        }
        if(props.props.lesson.score >= 20 && props.props.lesson.score < 50){
            return (
                <Avatar alt="Bronze" src={imageSrc}  />
            )
        }
        else {
            return (
                null
            )
        }

}

export default LessonTrophy
import React from 'react';
import Avatar from '@material-ui/core/Avatar';

function Avatars(chapter) {
    var gold = 0;
    var silver = 0;
    var bronze = 0;
    //console.log("ææææææææææææææææææææææææææææææææææææææææææææææææææææææææææææææææ");
    //console.log(chapter.chapter.chapter.lessons);

    chapter.chapter.chapter.lessons.forEach(les => {
        if(les.score >= 80){
            gold++;
        }
        if(les.score >= 50 && les.score < 80){
            silver++;
        }
        if(les.score >= 10 && les.score < 50){
            bronze++;
        } 
    }
    );
    const trophies = [];
 
    for (var y = 0; y < gold; y++) {
        trophies.push(<Avatar alt="Gold" src="../../img/gold.svg" />);
    }
    for (var i = 0; i < silver; i++) {
        trophies.push(<Avatar alt="Silver" src="../../img/silver.svg" />);
    }
    for (var o = 0; o < bronze; o++) {
        trophies.push(<Avatar alt="Bronze" src="../../img/bronze.svg" />);
    }

    return (
        <React.Fragment>{trophies}</React.Fragment>
    )
}

export default Avatars

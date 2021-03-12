import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import imageSrc from './image/bronze.svg';
import imageSrc2 from './image/gold.svg';
import imageSrc3 from './image/silver.svg';

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
        if(les.score >= 20 && les.score < 50){
            bronze++;
        } 
    }
    );
    const trophies = [];
 
    for (var o = 0; o < bronze; o++) {
        trophies.push(<Avatar alt="Bronsemedalje" src={imageSrc} style={{marginLeft: '-30px'}} />);
    }
    for (var i = 0; i < silver; i++) {
        trophies.push(<Avatar alt="Sølvmedalje" src={imageSrc3} style={{marginLeft: '-30px'}} />);
    }
    for (var y = 0; y < gold; y++) {
        trophies.push(<Avatar alt="Gullmedalje" src={imageSrc2} style={{marginLeft: '-30px'}} />);
    }

    return (
        <React.Fragment>{trophies}</React.Fragment>
    )
}

export default Avatars

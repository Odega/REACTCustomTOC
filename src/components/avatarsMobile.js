import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';

function AvatarsM(chapter) {
    var gold = 0;
    var silver = 0;
    var bronze = 0;
    //console.log("ææææææææææææææææææææææææææææææææææææææææææææææææææææææææææææææææ");
    //console.log(chapter.chapter.chapter.lessons);

    chapter.chapter.chapter.lessons.forEach(les => {
        if(les.score >= 21){
            gold++;
        }
        if(les.score >= 14 && les.score < 21){
            silver++;
        }
        if(les.score >= 1 && les.score < 14){
            bronze++;
        } 
    }
    );
    const trophiesGo = [];
    const trophiesSi = [];
    const trophiesBr = [];
 
    for (var o = 0; o < bronze; o++) {
        trophiesBr.push(<Avatar alt="Bronsemedalje" src="../../img/bronze.svg" style={{marginLeft: '-25px', border: 'none', transform: 'scale(1.3)'}} />);
    }
    for (var i = 0; i < silver; i++) {
        trophiesSi.push(<Avatar alt="Sølvmedalje" src="../../img/silver.svg" style={{marginLeft: '-25px', border: 'none', transform: 'scale(1.3)'}} />);
    }
    for (var y = 0; y < gold; y++) {
        trophiesGo.push(<Avatar alt="Gullmedalje" src="../../img/gold.svg" style={{marginLeft: '-25px', border: 'none', transform: 'scale(1.3)'}} />);
    }

    return ( 
        <AvatarGroup max={6} spacing={1} style={{marginRight: 5}} >{trophiesGo} {trophiesSi} {trophiesBr}</AvatarGroup>
    
    )
}

export default AvatarsM

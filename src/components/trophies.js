import React from 'react';

function Trophies(props) {
    let tGold,tSilver,tBronze = 0;

    props.lesson.forEach(lesson => {
        if(lesson.score > 0.9){
            tGold++;
        }
        if(lesson.score > 0.5 && lesson.score < 0.9){
            tSilver++;
        }
        if(lesson.score > 0.1 && lesson.score < 0.5){
            tBronze++;
        }
        
    })

    return <React.Fragment>
    <p>{tGold}{tSilver}{tBronze}</p>
    </React.Fragment>
}


export default Trophies;
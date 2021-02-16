import React from 'react';

function Trophies({cmdr}) {
    let tGold,tSilver,tBronze = 0;
    let scr = 0;
    console.log("----------");
    console.log({cmdr});

    cmdr.forEach(indx =>
            indx.lessons.forEach(indy =>
                console.log(indy.name + " - " + indy.score)
                )
        )
    
    return ( <div> TROPHIES  </div>)

/*
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
    console.log(tGold + " " + tSilver + " " + tBronze);

    return (<React.Fragment>
    <p>{tGold}{tSilver}{tBronze}</p>
    </React.Fragment>);
    */
}


export default Trophies;
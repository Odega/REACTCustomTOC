import React from 'react';

function Trophies({cmdr}) {
    let tGold = 0;
    let tSilver = 0;
    let tBronze = 0;
    let scr = 0;
    console.log("----------");
    console.log({cmdr});

    cmdr.forEach(indx =>
            indx.lessons.forEach(indy =>{
                //console.log(indy.name + " - " + indy.score)
                if(indy.score > 0.9){
                    tGold++;
                }
                if(indy.score > 0.5 && indy.score < 0.9){
                    tSilver++;
                }
                if(indy.score > 0.1 && indy.score < 0.5){
                    tBronze++;
                }
            }
                )
        )
    

    console.log(tGold + " " + tSilver + " " + tBronze);

    return (
    <React.Fragment>
    <p>Gull: {tGold} Sølv: {tSilver} Bronse: {tBronze}</p>
    </React.Fragment>);
}


export default Trophies;
import React from 'react';

function Trophies({cmdr}) {
    let tGold = 0;
    let tSilver = 0;
    let tBronze = 0;
    let totTime = 0;
    let totErr = 0;
    console.log("----------");
    console.log({cmdr});

    cmdr.forEach(indx =>
            indx.lessons.forEach(indy =>{
                //console.log(indy.name + " - " + indy.score)
                if(indy.score >= 90){
                    tGold++;
                }
                if(indy.score > 50 && indy.score < 90){
                    tSilver++;
                }
                if(indy.score >= 10 && indy.score < 50){
                    tBronze++;
                }
                totErr += indy.errors;
                //console.log(formatDate(indy.time));
                //console.log(totTime + " + " + indy.time);
                totTime = totTime + parseInt(indy.time);
                //console.log("Nytid: " + totTime);
            }
                )
        )
        function formatDate(ms) {
            const date = new Date(Number(ms))
            return `${date.getUTCHours()}h ${date.getMinutes()}m ${date.getSeconds()}s`
        }

    console.log(tGold + " " + tSilver + " " + tBronze);
    console.log(totErr);
    console.log(formatDate(totTime));

    return (
    <React.Fragment>
    <p>Gull: {tGold} Sølv: {tSilver} Bronse: {tBronze}</p>
    <p>Total feil: {totErr}</p>
    <p>Total tid: {formatDate(totTime)}</p>
    </React.Fragment>);
}


export default Trophies;
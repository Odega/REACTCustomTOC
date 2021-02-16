import React, { Fragment } from 'react';
import Card from '@material-ui/core/Card';
import {GiTrophy} from 'react-icons/gi';
import Typography from '@material-ui/core/Typography';

function Trophies({cmdr, classes}) {
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
                if(indy.score >= 50 && indy.score < 90){
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
            const date = new Date(Number(ms));
            return `${date.getUTCHours()}h ${date.getMinutes()}m ${date.getSeconds()}s`
        }
    
    //console.log(tGold + " " + tSilver + " " + tBronze);
    //console.log(totErr);
    //console.log(formatDate(totTime));
    return (
    <React.Fragment>
        
            <Typography className={classes.title} color="textprimary" gutterBottom variant="h4">
            Trofeer
            </Typography>
            <div className={classes.iconStyle}>
            
            <Card className={classes.wrapper}>
                <GiTrophy style={{fontSize: '100px', color: "gold", margin: 30, marginTop: 30}}/>
                <GiTrophy style={{fontSize: '100px', color: "silver", margin: 30, marginTop: 30}}/>
                <GiTrophy style={{fontSize: '100px', color: "rgb(205, 127, 50)", margin: 30, marginTop: 30}}/>
                <p>Gull: {tGold} Sølv: {tSilver} Bronse: {tBronze}</p>
                <p>Total feil: {totErr}</p>
                <p>Total tid: {formatDate(totTime)}</p>
            </Card>
            
            </div>
        
    </React.Fragment>
    );
}


export default Trophies;
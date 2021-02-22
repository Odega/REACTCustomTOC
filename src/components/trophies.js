import React, { Fragment } from 'react';
import Card from '@material-ui/core/Card';
import {GiTrophy} from 'react-icons/gi';
import Typography from '@material-ui/core/Typography';
import BorderLinearProgress from './progressBar';

function Trophies({cmdr, classes}) {
    let tGold = 0;
    let tSilver = 0;
    let tBronze = 0;
    let totTime = 0;
    let totErr = 0;
    let totScr = 0;
    //console.log("----------");
    //console.log({cmdr});

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
                totScr += indy.score/100;
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
        <div style={{margin:20}}>
        <Card className={classes.sideWrapper}>
        <Typography className={classes.title} color="textprimary" gutterBottom variant="h4">
            Tid totalt 
            </Typography>
            <p>Total tid: {formatDate(totTime)}</p>



        </Card>
        </div>
        <div style={{margin:20}}>

            <Card className={classes.wrapper}>
            <Typography className={classes.title} color="textprimary" gutterBottom variant="h4">
            Trofeer
            </Typography>
                <GiTrophy style={{fontSize: '100px', color: "gold", margin: 30, marginTop: 30}}>
                    {tGold}
                    </GiTrophy>
                <GiTrophy style={{fontSize: '100px', color: "silver", margin: 30, marginTop: 30}}/>
                <GiTrophy style={{fontSize: '100px', color: "rgb(205, 127, 50)", margin: 30, marginTop: 30}}/>
                <Typography style={{fontSize: '40px', color: "black", margin: 30, wordSpacing: 128, marginLeft: 70, marginTop: 0}}>{tGold} {tSilver} {tBronze}</Typography>
                

            </Card>
            </div>
            <div style={{margin: 20}}>
            <Card className={classes.wrapper}>
                <Typography className={classes.title} color="textprimary" gutterBottom variant="h4">
                 Total progresjon
                </Typography>
                <BorderLinearProgress variant='determinate' value={totScr} style={{lineHeight: 0, margin:20}}/>



        </Card>
        </div>

            <div style={{margin: 20}}>
            <Card className={classes.wrapper}>
                <Typography className={classes.title} color="textprimary" gutterBottom variant="h4">
                 Feil totalt
                </Typography>
                <BorderLinearProgress variant='determinate' value={totErr} style={{lineHeight: 0, margin:20}}/>




        </Card>
        </div>
            

    </React.Fragment>
    );
}


export default Trophies;
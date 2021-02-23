import React, { Fragment } from 'react';
import Card from '@material-ui/core/Card';
import {GiTrophy} from 'react-icons/gi';
import Typography from '@material-ui/core/Typography';
import BorderLinearProgress from './progressBar';
import { Avatar, CardMedia } from '@material-ui/core';
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { CardActions } from '@material-ui/core';

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
                if(indy.score >= 80){
                    tGold++;
                }
                if(indy.score >= 50 && indy.score < 80){
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

        function formatTime(ms) {
            const timer = new Date(Number(ms));
            return `${timer.getUTCHours()}h`
        }

        function formatMinutt(ms) {
            const minutt = new Date(Number(ms));
            return ` ${minutt.getMinutes()}m`
        }

        function formatSekund(ms) {
            const sekund = new Date(Number(ms));
            return `${sekund.getSeconds()}s`
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
            <CardActions style={{width: 500,}}>
            <CircularProgressbarWithChildren value={formatTime(totTime)} maxValue={24}>
        <img
          style={{color: 'green', width: 50, marginTop: 0 }}
          src="../../img/sand-clock.svg"
          alt="timeglass"
        />
        <div style={{ fontSize: 16, marginTop: -5 }}>
          Timer: <strong>{formatTime(totTime)}</strong>
        </div>
      </CircularProgressbarWithChildren>
      <CircularProgressbarWithChildren value={formatMinutt(totTime)} maxValue={60}>
        {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
        <img
          style={{ width: 50, marginTop: 0 }}
          src="../../img/sand-clock.svg"
          alt="timeglass"
        />
        <div style={{ fontSize: 16, marginTop: -5 }}>
          Minutt: <strong>{formatMinutt(totTime)}</strong>
        </div>
      </CircularProgressbarWithChildren>
      <CircularProgressbarWithChildren value={formatSekund(totTime)} maxValue={60}>
        {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
        <img
          style={{ width: 50, marginTop: 0 }}
          src="../../img/sand-clock.svg"
          alt="timeglass"
        />
        <div style={{ fontSize: 16, marginTop: -5 }}>
          Sekund <strong>{formatSekund(totTime)}</strong>
        </div>
      </CircularProgressbarWithChildren>
      </CardActions>



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
        <div style={{margin:20}}>

            <Card className={classes.wrapper}>
            <Typography className={classes.title} color="textprimary" gutterBottom variant="h4">
            Trofeer
            </Typography>
            <div style={{textAlign: 'center'}}>
                <GiTrophy style={{fontSize: '100px', color: "gold", margin: 30, marginTop: 30}}/>
                <GiTrophy style={{fontSize: '100px', color: "silver", margin: 30, marginTop: 30}}/>
                <GiTrophy style={{fontSize: '100px', color: "rgb(205, 127, 50)", margin: 30, marginTop: 30}}/>
                <Typography style={{fontSize: '40px', color: "black", margin: 30, wordSpacing: 128, marginLeft: 40, marginTop: 0}}>{tGold} {tSilver} {tBronze}</Typography>
                </div>

            </Card>
            </div>

    </React.Fragment>
    );
}


export default Trophies;
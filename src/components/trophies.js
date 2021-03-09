import React, { Fragment } from 'react';
import Card from '@material-ui/core/Card';
import {GiTrophy} from 'react-icons/gi';
import Typography from '@material-ui/core/Typography';
import BorderLinearProgress from './progressBar';
import { Avatar, CardMedia } from '@material-ui/core';
import { buildStyles, CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { CardActions } from '@material-ui/core';
import BorderLinearProgressTrophy from './progressbarTrophies';


function Trophies({cmdr, classes}) {
    let tGold = 0;
    let tSilver = 0;
    let tBronze = 0;
    let totTime = 0;
    let totErr = 0;
    let totScr = 0;
    let count = 0;
    //console.log("----------");
    //console.log({cmdr});

    cmdr.forEach(indx =>
            indx.lessons.forEach(indy =>{
                //console.log(indy.name + " - " + indy.score)
                if(indy.score >= 21){
                    tGold++;
                }
                if(indy.score >= 14 && indy.score < 21){
                    tSilver++;
                }
                if(indy.score >= 1 && indy.score < 14){
                    tBronze++;
                }
                count += indy.score;

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
            return `${timer.getUTCHours()}`
        }

        function formatMinutt(ms) {
            const minutt = new Date(Number(ms));
            return ` ${minutt.getMinutes()}`
        }

        function formatDag(ms) {
            var dag = formatTime(ms);
            var antall = 0;
            if (dag >= 24) {
                antall++;
                return (
                    antall
                )
            } else {
                return ('0')
            }
            
        }
        //console.log(totScr)
    //console.log(tGold + " " + tSilver + " " + tBronze);
    //console.log(totErr);
    //console.log(formatDate(totTime));
    return (
    <React.Fragment>
        <div style={{margin:20}}>

            <Card className={classes.trophyWrapper}>
            <Typography className={classes.title} color="textprimary" gutterBottom variant="h4">
            Trofeer og medaljer
            </Typography>
            <view className={classes.trophyView}>
                <view className={classes.trophyViewText}>
                <GiTrophy className={classes.trophyStyle} style={{color: "gold"}}/>
                <strong className={classes.trophyText}>{tGold}</strong>
                </view>
                <view className={classes.trophyViewText}>
                <GiTrophy className={classes.trophyStyle} style={{color: "silver",}}/>
                <strong className={classes.trophyText}>{tSilver}</strong>
                </view>
                <view className={classes.trophyViewText}>
                <GiTrophy className={classes.trophyStyle} style={{ color: "rgb(205, 127, 50)",}}/>
                <strong className={classes.trophyText}>{tBronze}</strong>
                </view>
                </view >
                <div className={classes.medaljeWrapper}>
                <div className={classes.medaljeBarStyle}>
                <Avatar style={{transform: 'scale(1.5)',}} alt="Gullmedalje" src="../../img/gold.svg" />
                <BorderLinearProgressTrophy value={tGold} maxValue={count}/>
                </div>
                <div className={classes.medaljeBarStyle} >
                <Avatar style={{transform: 'scale(1.5)',}} alt="Sølvmedalje" src="../../img/silver.svg" />
                <BorderLinearProgressTrophy value={tSilver} maxValue={count}/>
                </div>
                <div className={classes.medaljeBarStyle}>
                <Avatar style={{transform: 'scale(1.5)',}} alt="Bronsemedalje" src="../../img/bronze.svg" />
                <BorderLinearProgressTrophy value={tBronze} maxValue={count}/>
                </div>
                </div>
                



            </Card>
            </div>

    </React.Fragment>
    );
}


export default Trophies;
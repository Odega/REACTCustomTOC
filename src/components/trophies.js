import React, { Fragment } from 'react';
import Card from '@material-ui/core/Card';
import {GiTrophy} from 'react-icons/gi';
import Typography from '@material-ui/core/Typography';
import { Avatar } from '@material-ui/core';
import "react-circular-progressbar/dist/styles.css";
import BorderLinearProgressTrophy from './progressbarTrophies';
import Tooltip from "@material-ui/core/Tooltip";
import imageSrc from './image/bronze.svg';
import imageSrc2 from './image/gold.svg';
import imageSrc3 from './image/silver.svg';
import TopChapters from './topChapters';
import topChapters from './collection';


function Trophies({cmdr, classes}) {
    let tGold = 0;
    let pokGold = 0;
    let tSilver = 0;
    let pokSilver = 0;
    let tBronze = 0;
    let pokBronze = 0;
    let totTime = 0;
    let totErr = 0;
    let totScr = 0;
    let count = 0;
    //console.log("----------");
    //console.log({cmdr});

    cmdr.forEach(indx =>
            indx.lessons.forEach(indy =>{
                //console.log(indy.name + " - " + indy.score)
                if(indy.score >= 80){
                    tGold++;
                    if (Number.isInteger(tGold/4)) {
                        pokGold ++;
                    }

                }
                if(indy.score >= 50 && indy.score < 80){
                    tSilver++;
                    if (Number.isInteger(tSilver/4)) {
                        pokSilver ++;
                    }

                }
                if(indy.score >= 20 && indy.score < 50){
                    tBronze++;
                    if (Number.isInteger(tBronze/4)) {
                        pokBronze++;
                    }

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
    let pokalG = false;
    let pokalS = false;
    let pokalB = false;
    if (pokGold > 0){
        pokalG = true;
    }
    if (pokSilver > 0){
        pokalS = true;
    }
    if (pokBronze > 0){
        pokalB = true;
    }
    

    return (
    <React.Fragment>
        <div style={{margin:20}}>

            <Card className={classes.trophyWrapper} >
            <Typography className={classes.premieTitle} >
            Min premiesamling
            </Typography>
            <view className={classes.trophyView}>
            <Tooltip classes={{tooltip: classes.tooltipWidth}} tabindex={1} title="For å få en medalje i gull må du ha over 80% riktig i et kapittel. Når du har fått 5 medaljer i gull, får du en gullpokal. " placement="bottom" >
                <view className={classes.trophyViewText} >
                <GiTrophy className={classes.trophyStyle} style={!pokalG ? {color: 'white', stroke: 'black', strokeWidth: 3 } : {color: 'gold', stroke: 'black', strokeWidth: 2}}/>
                <strong className={classes.trophyText} style={!pokalG ? {color: 'white'} : {color: 'black'}}>{pokGold}</strong>
                </view>
                </Tooltip>
                <Tooltip classes={{tooltip: classes.tooltipWidth}} tabindex={1} title="For å få en medalje i sølv må du ha over 50% riktig i et kapittel. Når du har fått 5 medaljer i sølv, får du en sølvpokal. " placement="bottom">
                <view className={classes.trophyViewText} >
                <GiTrophy className={classes.trophyStyle} style={!pokalS ? { color: 'white', stroke: 'black', strokeWidth: 3 } : {color: 'silver', stroke: 'black', strokeWidth: 2}}/>
                <strong className={classes.trophyText} style={!pokalS ? {color: 'white'} : {color: 'black'}}>{pokSilver}</strong>
                </view>
                </Tooltip>
                <Tooltip classes={{tooltip: classes.tooltipWidth}} tabindex={1} title="For å få en medalje i bronse må du ha over 20% riktig i et kapittel. Når du har fått 5 medaljer i bronse, får du en bronsepokal. " placement="bottom" >
                <view className={classes.trophyViewText} >
                <GiTrophy className={classes.trophyStyle} style={!pokalB ? { color: "white", stroke: 'black', strokeWidth: 3 } : {color: "rgb(205, 127, 50)", stroke: 'black', strokeWidth: 2}} />
                <strong className={classes.trophyText} style={!pokalB ? {color: 'white'} : {color: 'black'}}>{pokBronze}</strong>
                </view>
                </Tooltip>
                </view >
                <div className={classes.medaljeWrapper}>
                <div className={classes.medaljeBarStyle}>
                <Avatar style={{transform: 'scale(1.5)',}} alt="Gullmedalje" src={imageSrc2} />
                <BorderLinearProgressTrophy value={tGold} maxValue={5}/>
                </div>
                <div className={classes.medaljeBarStyle} >
                <Avatar style={{transform: 'scale(1.5)',}} alt="Sølvmedalje" src={imageSrc3} />
                <BorderLinearProgressTrophy value={tSilver} maxValue={5}/>
                </div>
                <div className={classes.medaljeBarStyle}>
                <Avatar style={{transform: 'scale(1.5)',}} alt="Bronsemedalje" src={imageSrc} />
                <BorderLinearProgressTrophy value={tBronze} maxValue={5}/>
                </div>
                </div>
                



            </Card>
            </div>

    </React.Fragment>
    );
}


export default Trophies;
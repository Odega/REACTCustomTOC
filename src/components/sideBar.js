import React, {Fragment} from 'react';
import communication from '../communication/communication';
import chapters from './collection';
import { CardHeader, Card, CardActionArea, CardMedia, CardActions, Divider } from '@material-ui/core';
import {GiTrophy} from 'react-icons/gi';
import Typography from '@material-ui/core/Typography';
import Trophies from './trophies';

function SideBar({classes, cmdr}) {
    console.log("-------");
    console.log({cmdr});

    return <React.Fragment>
        
                <Card className={classes.sideBar}>
        <Typography  className={classes.title} color="textprimary" gutterBottom variant="h4">
                        Trofeer
        </Typography>
                <div className={classes.iconStyle}>
                <div>
                <Trophies cmdr={cmdr}/>
                        <GiTrophy style={{fontSize: '100px', color: "gold", margin: 30, marginTop: 30}}/>
                        <GiTrophy style={{fontSize: '100px', color: "silver", margin: 30, marginTop: 30}}/>
                        <GiTrophy style={{fontSize: '100px', color: "rgb(205, 127, 50)", margin: 30, marginTop: 30}}/>
                </div>
                </div>

        </Card>
        </React.Fragment>
    
}

export default SideBar;
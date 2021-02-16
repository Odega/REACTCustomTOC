import React, {Fragment} from 'react';
import communication from '../communication/communication';
import chapters from './collection';
import { CardHeader, Card, CardActionArea, CardMedia, CardActions, Divider } from '@material-ui/core';
import {GiTrophy} from 'react-icons/gi';
import Typography from '@material-ui/core/Typography';
import Trophies from './trophies';


function SideBar({cmdr, classes}) {
    return (
    <React.Fragment>
        <Card className={classes.sideBar}>
            <Trophies cmdr={cmdr} classes={classes}/>   
        </Card> 
    </React.Fragment>
    )
}

export default SideBar;
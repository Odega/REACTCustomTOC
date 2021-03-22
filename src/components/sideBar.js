import React, {Fragment} from 'react';
import { Card } from '@material-ui/core';
import Trophies from './trophies';


function SideBar({cmdr, classes}) {
    return (
    <React.Fragment>
        <Card className={classes.sideBar} >
            <Trophies cmdr={cmdr} classes={classes}/> 
        </Card> 
    </React.Fragment>
    )
}

export default SideBar;
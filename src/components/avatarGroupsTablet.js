import React from 'react'
import AvatarsT from './avatarsTablet';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    lStyleNone: {
       '* #avt':{
           marginLeft: '-30px',
           border: 'none'
   }
   }
});
function AvatarGroupsT(chapter) {
    const classes = useStyles();
    return (
        <AvatarGroup className={classes.lStyleNone.marginLeft}>
            <AvatarsT id="avt" chapter={chapter}/>
        </AvatarGroup>
    )
}

export default AvatarGroupsT
import React from 'react'
import AvatarsM from './avatarsMobile';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import { makeStyles, createStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    lStyleNone: {
       '* #avt':{
           marginLeft: '-30px',
           border: 'none'
   }
   }
});
function AvatarGroupsM(chapter) {
    const classes = useStyles();
    return (
        <AvatarGroup className={classes.lStyleNone.marginLeft}>
            <AvatarsM id="avt" chapter={chapter}/>
        </AvatarGroup>
    )
}

export default AvatarGroupsM

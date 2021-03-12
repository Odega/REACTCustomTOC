import React from 'react'
import Avatars from './avatars';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
     lStyleNone: {
        '* #avt':{
            marginLeft: '-30px',
    }
    }
});
function AvatarGroups(chapter) {
    const classes = useStyles();
    return (
        <AvatarGroup spacing={1} className={classes.lStyleNone.marginLeft}>
            <Avatars id="avt" chapter={chapter}/>
        </AvatarGroup>
    )
}

export default AvatarGroups

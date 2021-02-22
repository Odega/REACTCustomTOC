import React from 'react'
import Avatars from './avatars';
import AvatarGroup from '@material-ui/lab/AvatarGroup';

function AvatarGroups(chapter) {
    return (
        <AvatarGroup>
            <Avatars chapter={chapter}/>
        </AvatarGroup>
    )
}

export default AvatarGroups

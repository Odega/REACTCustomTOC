import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import {isMobile, isIOS} from 'react-device-detect';


function Styledevice() {

const useStyles = makeStyles(() =>
    createStyles({
        lessonsCard: {
            justifyContent: 'flex-end',
            marginBottom: 20,

        },
        lessonsGroup: {
            display: 'flex',
            flexWrap: 'wrap',
            
        },
        row: {
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            margin: 21,

        },
        title: {
            textAlign: 'center',
            marginTop: 21,
            color: "textprimary",

        },
        content : {
            display: 'flex',
            justifyContent: 'center',
            // flex: 1 gjør at siden endres avhengig av max bredde
            paddingLeft: '10%',
            paddingRight: '10%',
            flexDirection: 'row',
            marginBottom: 20,
            color: '#F5F5F5',
        },
        sideContent : {
            flex: 2,
            display: 'flex',
            flexDirection: 'column',
            marginBottom: 20,
            marginTop: 20,
            marginLeft: 20,
            marginRight: 20,
            // backgroundColor: '#F5F5F5',
            backgroundColor: 'white',
            shadowColor: 'rgba(0,0,0, 0.0)',
            shadowOffset: { height: 0, width: 0 },
            shadowOpacity: 0, //default is 1
            shadowRadius: 0,
            borderWidth: 0,
            elevation: 0,
            border: 0,
        },
        sideBar: {
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
            height: '100%',
            marginTop: 20,
            marginBottom: 20,
            marginRight: 20,
            marginLeft: 20,
        },
        iconStyle: {
            display: 'flex',
            justifyContent: 'center',
        },
        avatarGroupsStyle0: {
            marginLeft: 'auto', 
            display: 'flex', 
            flexDirection: 'row'

        },
        avatarGroupsStyle: {
            display: 'flex',
            justifyContent: 'right',
            marginLeft:'10px',
        },
        avatarGroupsStyle2: {
            transform: 'scale(1.6)', 
            marginTop: 10, 
            marginRight: 20
        },
        trophyView: {
            display: 'flex',
            justifyContent: 'center',
            textAlign: 'center',


        },
        trophyViewText: {
            display: 'flex',
            justifyContent: 'center',
            textAlign: 'center',
            verticalAlign: 'middle',


        },
        trophyStyle: {
            display: 'flex',
            justifyContent: 'center',
            fontSize: '105px',  
            marginTop: 10, 
            
        },
        trophyText: {
            display: 'flex',
            justifyContent: 'center',
            fontSize: '40px',
            verticalAlign: 'middle',
            position: 'absolute', 
            marginTop: 15


        },
        trophyWrapper: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            marginLeft: 'auto',
            marginRight: 'auto',
            textAlign: 'center'
        },
        medaljeBarStyle: {
            display: 'flex',
            flex: 1,
            verticalAlign: 'middle',
            flexDirection: 'row',
            margin: 5
        },
        medaljeWrapper: {
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'column',
            justifyContent: 'center',
            marginLeft: 10,
            marginRight: 10,
            textAlign: 'center',
            marginBottom: 20,
            marginTop: 20

        },
    })
)
return (
    useStyles()
)
if (isMobile) {

}
}

    
export default Styledevice
import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile,
    isTablet
  } from "react-device-detect";

const UseMobileStyles = makeStyles(() =>
createStyles({
    lessonsCard: {
        justifyContent: 'center',
        marginBottom: 20,

        
       

    },
    toptopChapHeader: {
        fontSize: '16',
        fontWeight: 'bold',
        variantMapping: 'h4',
        marginLeft: 5,
    },
    topChapHeader: {
        fontSize: '14',
        marginLeft: 8
    },
    lessonsGroup: {
        display: 'flex',
        flexWrap: 'nowrap',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '20%',

        
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
        variantMapping: 'h5',
        fontSize: '12px',

    },
    content : {
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        // flex: 1 gjør at siden endres avhengig av max bredde
        flexDirection: 'column-reverse',
        marginBottom: 20,
        color: '#F5F5F5',
    },
    sideContent : {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',

        // backgroundColor: '#F5F5F5',
    },
    sideBar: {
        display: 'flex',
        flexDirection: 'row',
        height: '100%',
        marginTop: 20,
        marginBottom: 20,
        marginRight: 20,
        marginLeft: 20,
    },
    iconStyle: {
        display: 'flex',
        justifyContent: 'center',
        transform: 'scale(0.5)',
        height: '20%'
    },
    avatarGroupsStyle0: {
        marginLeft: 'auto', 
        display: 'flex', 
        transform: 'scale(0.5)',
        flexDirection: 'row'

    },
    avatarGroupsStyle: {
        display: 'flex',
        justifyContent: 'right',
        marginLeft:'10px',
        transform: 'scale(1.5)',
    },
    avatarGroupsStyle2: {
        transform: 'scale(1)', 
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
        fontSize: '50px',  
        marginTop: 10, 
        
    },
    trophyText: {
        display: 'flex',
        justifyContent: 'center',
        fontSize: '18px',
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
        textAlign: 'center',
        transform: 'scale(1)',
    },
    medaljeBarStyle: {
        display: 'flex',
        flex: 1,
        verticalAlign: 'middle',
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 5,

    },
    medaljeWrapper: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        marginLeft: 10,
        marginRight: 10,
        textAlign: 'center',
        marginBottom: 20,
        marginTop: 20,
        transform: 'scale(0.65)',
        width: '100%'

    },
    
    wrapper: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 20,
        position: 'relative',
        height: '18rem',
        width: '16rem',
        textAlign: 'center',
        cursor: 'pointer',
        overflow: 'visible',
        transform: 'scale(0.8)',
        justifyContent: 'center'
    },
    media: {
        justifyContent: 'center',
        width: 130, height: 100, alignContent: 'center', borderRadius: '10%' 

    },
    cardImgCenter: {
        display: 'flex',
        justifyContent: 'center',
        width: '16rem',
        maxWidth: '50rem',
    },
    styleFlex: {
        display: 'flex',
        justifyContent: 'center'
    },
    iconStyle: {
        display: 'flex',
        color: 'white',
        right: -8,
        top: -5,
        position: 'absolute',
        borderRadius: '60%',
        fontSize: '16px',
        lineHeight: 0,
        backgroundColor: 'grey',
        border: '3px solid grey'
        
    },
    lessonTitle: {
        fontWeight: 'bold',

    },
    lessonNameStyle: {
        display: 'flex',
        variant: "inherit", 
        variantMapping: "h5", 
        align: 'center',
        fontSize: '10px'

    },

    medaljeStyle: {
        display: 'flex',
        right: -10,
        position: 'absolute',
        transform: 'scale(1)',


    },
    tidStyle: {
        variant: "subtitle2",
        marginLeft: 5, 
        lineHeight: 0
    }
}),
)

export default UseMobileStyles
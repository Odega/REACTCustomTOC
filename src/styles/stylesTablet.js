import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile,
    isTablet
  } from "react-device-detect";

  const UseTabletStyles = makeStyles(() =>
createStyles({
    lessonsCard: {
        justifyContent: 'center',
        marginBottom: 20,

    },
    lessonsGroup: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
        
    },
    toptopChapHeader: {
        variantMapping: 'h4',
        marginLeft: 5,
        fontSize: 26,
    },
    topChapHeader: {
        variantMapping: 'h5',
        marginLeft: 10,
        fontSize: 18,

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
        verticalAlign: 'middle',
        justifyContent: 'center',
        display: 'flex'

    },
    titleModul: {
        justifyContent: 'center',
        flex: 1,
        margin: 'auto'


    },
    content : {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        // flex: 1 gjør at siden endres avhengig av max bredde
        flexDirection: 'column',
        marginBottom: 20,
        color: '#F5F5F5',
    },
    sideContent : {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        verticalAlign: 'middle',
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
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 20,
        marginRight: 20,
        marginLeft: 20,
        width: '100%'
    },
    iconStyle: {
        display: 'flex',
        justifyContent: 'center',
    },
    avatarGroupsStyle0: {
        margin: 'auto', 
        display: 'flex', 
        flexDirection: 'row',
 


    },
    avatarGroupsStyle: {
        display: 'flex',
        justifyContent: 'right',
        marginLeft:'10px',
        flexDirection: 'row'
        
        
    },
    avatarGroupsStyle2: {
        transform: 'scale(1)', 
        margin: 'auto',
        display: 'flex',

        
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
        textAlign: 'center',

    },
    medaljeBarStyle: {
        display: 'flex',
        verticalAlign: 'middle',
        flexDirection: 'row',
        marginLeft: 20,
        width: '100%'


    },
    medaljeWrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'center',
        marginBottom: 20,
        marginTop: 20,
        width: '100%'

    },
    
    wrapper: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        position: 'relative',
        height: '20rem',
        width: '16rem',
        textAlign: 'center',
        cursor: 'pointer',
        overflow: 'visible'
    },
    buttonProgress: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -50,
        marginLeft: -50
    },
    media: {
        justifyContent: 'center',
        width: 130, height: 100, alignContent: 'center', borderRadius: '10%' 

    },
    cardImgCenter: {
        display: 'flex',
        justifyContent: 'center',
        width: '16rem',
        maxWidth: '100rem',
    },
    styleFlex: {
        display: 'flex',
        justifyContent: 'center'
    },
    iconStyle: {
        display: 'flex',
        color: 'white',
        right: -8,
        top: -8,
        position: 'absolute',
        borderRadius: '60%',
        fontSize: '25px',
        lineHeight: 0,
        backgroundColor: 'grey',
        border: '3px solid grey'
        
    },
    lessonTitle: {
        fontWeight: 'bold',
        maxWidth: 400,
        height: 100

    },
    lessonNameStyle: {
        variant: "inherit", 
        variantMapping: "h2", 
        align: 'center'

    },

    medaljeStyle: {
        display: 'flex',
        right: -14,
        top: -10,
        position: 'absolute',
        transform: 'scale(1.5)',


    },
    buttonStyle: {
        display: 'flex',
        right: 30,
        top: 30,
        position: 'absolute',
        transform: 'scale(1.5)',


    },
    tidStyle: {
        variant: "subtitle2",
        marginLeft: 5, 
        lineHeight: 0
    },

      buttonWrapper: {
        display: 'flex',
        position: 'fixed',
        borderRadius: '50%',
        height: '100px',
        width: '100px',
        right: '5rem'
    },

    buttonicon: {
        display: 'flex',
        position: 'fixed',
        alignContent: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        height: '50px',
        width: '50px',
        backgroundColor: '#3369ff',
        borderRadius: '50%',
        boxShadow: 'inset 0 -0.6em 0 -0.35em rgba(0,0,0,0.17)',
        






    },
    btnPosition: {
        overflow: 'auto',
        justifyContent: 'center',
        position: 'fixed',
        display: 'flex',
        top: 6,
        right: 33,



    }
}),
)

export default UseTabletStyles
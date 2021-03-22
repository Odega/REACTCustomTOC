import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const UseStyles = makeStyles(() =>
createStyles({
    lessonsCard: {
        justifyContent: 'flex-end',
        marginBottom: 20,
        
        
        //borderStyle: 'groove',
        //backgroundImage: 'linear-gradient(#E7F5FE , #E7F5FE)'

    },
    lessonsGroup: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',

        
    },
    toptopChapHeader: {
        marginLeft: 20,
        marginRight: 8,
        fontSize: 26,
        marginTop: 15,
        marginBottom: 5,
        fontWeight: 'bold',


  
    },
    topChapHeader: {
        marginLeft: 25,
        marginRight: 15,
        fontSize: 22,
        marginBottom: 10,
        



    },
    row: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: '3%',
        marginLeft: '10px',
        marginRight: '10px',
        
        



    },
    title: {
        textAlign: 'center',
        marginTop: 'auto',
        marginBottom: 'auto',
        color: "textprimary",

        
   

    },
    premieTitle: {
        textAlign: 'center',
        variantMapping: 'h4',
        marginBottom: 15,
        marginTop: 21,
        color: "textprimary",
        fontWeight: 'bold',
        fontSize: 26,
        
   

    },
    titleModul: {
        justifyContent: 'center',
        flex: 1,
        margin: 'auto',

    },
    content : {
        display: 'flex',
        justifyContent: 'center',
        // flex: 1 gjør at siden endres avhengig av max bredde
        paddingLeft: '3%',
        paddingRight: '3%',
        flexDirection: 'row',
        marginBottom: 20,
        color: '#F5F5F5',
        overflow: 'hidden',


    },
    sideContent : {
        flex: 2,
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 20,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        //backgroundColor: '#F5F5F5',
        shadowColor: 'black',
        shadowOffset: { height: 2, width: 2 },
        shadowOpacity: 0, //default is 1
        shadowRadius: 0,
        borderWidth: 10,
        elevation: 0,
        overflow: 'hidden',
        //backgroundColor: 'SkyBlue'
        //backgroundImage: 'linear-gradient(hex(#FFECC7), hex())',

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
        overflow: 'hidden',
        backgroundColor: '#006FAF'
        
  
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
        cursor: 'pointer'


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
        borderStyle: 'outset'
    },
    medaljeBarStyle: {
        display: 'flex',
        flex: 1,
        verticalAlign: 'middle',
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 5,
        width: '100%',
        marginLeft: 20
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
    
    wrapper: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        position: 'relative',
        width: '16rem',     
        textAlign: 'center',
        cursor: 'pointer',
        overflow: 'visible',
        marginTop: 'auto',
        


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
        justifyContent: 'center',
        marginTop: 10,
    },
    iconStyle: {
        display: 'flex',
        color: 'white',
        right: -8,
        top: -5,
        position: 'absolute',
        borderRadius: '60%',
        fontSize: '25px',
        lineHeight: 0,
        backgroundColor: 'grey',
        border: '3px solid grey'
        
    },
    lessonTitle: {
        maxWidth: 400,
        height: 100

    },
    lessonNameStyle: {
        variant: "inherit", 
        align: 'center',
        fontWeight: 'bold'

    },

    medaljeStyle: {
        display: 'flex',
        right: -14,
        top: -10,
        position: 'absolute',
        transform: 'scale(2)',


    },
    tidStyle: {
        variant: "subtitle2",
        marginLeft: 5, 
        lineHeight: 1.6,
        display: 'flex',
        marginBottom: 10

    },
    tooltipWidth: {
        maxWidth: '150px'
    }
}),
)


export default UseStyles
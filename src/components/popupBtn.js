import React from "react";
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  popupBox: {
    display: 'flex',
    position: 'fixed',
    flexDirection: 'column',
    width: '100%',
    top: 0,
    left: 0
  },
  closeicon: {
    content: 'x',
    cursor: 'pointer',
    position: 'absolute',
    overflow: 'auto',
    right: '32px',
    top: '30px',
    background: '#AAAAAA',
    width: '25px',
    height: '25px',
    borderRadius: '50%',
    lineHeight: '20px',
    textAlign: 'center',
    border: '1px solid #999',
    fontSize: '16px',
    fontWeight: 'bold'
  
  
  },
});

function Popup (props) {
  const classes = useStyles();
  return (
    <div className={classes.popupBox}>

        <span className={classes.closeicon} onClick={props.handleClose}>x</span>
        {props.content}

    </div>
  );
};

 
export default Popup;
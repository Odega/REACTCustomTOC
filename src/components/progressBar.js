import React from 'react'
import LinearProgress from '@material-ui/core/LinearProgress'; 
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function LinearProgressWithLabel(props) {
    return (
      <Box display="flex" alignItems="center" lineHeight={100} style={{marginBottom: 20}}>
        <Box width="100%" mr={1}>
          <LinearProgress variant="determinate" {...props} />
        </Box>
        <Box minWidth={10}>
          <Typography variant="body2" color="textSecondary">{`${Math.round(
            props.value,
          )}%`}</Typography>
        </Box>
      </Box>
      
    );
  }

 
  const BorderLinearProgress = withStyles((theme) => ({
    root: {
      height: 20,
      borderRadius: 50,
      lineHeight: 1,
    },
    colorPrimary: {
      backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
      borderRadius: 5,
      backgroundColor: '#00b300',
    },

  }))(LinearProgressWithLabel);
  
  export default BorderLinearProgress;

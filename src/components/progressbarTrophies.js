import React from 'react'
import LinearProgress from '@material-ui/core/LinearProgress'; 
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function LinearProgressWithLabel(props) {
    return (
      <Box display="flex" alignItems="center" lineHeight={100} style={{flex: 1}}>
        <Box width={'100%'} mr={-5} >
          <LinearProgress variant="determinate" {...props}/>
        </Box>
        <Box minWidth={100}> 
          <Typography variant="body2" color="textSecondary">
            {props.value}
          </Typography>
        </Box>
      </Box>
      
    );
  }

 
  const BorderLinearProgressTrophy = withStyles((theme) => ({
    root: {
      height: 20,
      borderRadius: 50,
      lineHeight: 1,
      boxShadow: '0px 1px 4px #999'
      
    },
    colorPrimary: {
      backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
      borderRadius: 5,
      backgroundColor: '#00b300',
    
    },

  }))(LinearProgressWithLabel);
  
  export default BorderLinearProgressTrophy;
import React from 'react'
import { createStyles, makeStyles, withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function CircularProgressWithLabel2(props) {

    let score = 0;
    let count = 0;
    let totScore = 0;
    
    //console.log("----------------------------------");
    //console.log(props);
    props.chapter.lessons.forEach(les => {
            score += les.score;
            count++;
    });
    totScore = score/count;

    return (
      <Box position="relative" display="inline-flex">
          <CircularProgress variant="determinate"  value={totScore} {...props}/>
          <Box
            top={0}
            left={0}
            bottom={0}
            right={0}
            position="absolute"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
          <Typography variant="caption" component="div" color="textSecondary">{`${Math.round(totScore)}%`}</Typography>
        </Box>
      </Box>
    );
  }

 
  const ChapterCirc = withStyles((theme) => ({
    root: {
      color: '#000000',
      stroke: '#e0e0e0',
    },
    circle: {
      stroke: '#00b300',
    },
    circleDeterminate: {
      fill: '#e0e0e0',
    },
  }))(CircularProgressWithLabel2);
  
  export default ChapterCirc;

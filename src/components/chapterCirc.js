import React from 'react'
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function ChapterCirc(props) {

    let score = 0;
    let count = 0;
    let totScore = 0;
    
    //console.log("----------------------------------");
    //console.log(props);
    props.chapter.lessons.forEach(les => {
            score += les.score;
            count++;
    });
    totScore = Math.round(score/count);

    return (
      <div style={{width: '55px', margin: 'auto'}}>
      <CircularProgressbarWithChildren value={totScore} strokeWidth={14} styles={buildStyles({pathColor: 'green'})}>
        {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
        <div style={{ fontSize: 15, marginLeft: 5, marginTop: -2}}>
          <strong>{totScore}%</strong>
        </div>
      </CircularProgressbarWithChildren>
      </div>
    );
  }
  
  export default ChapterCirc;

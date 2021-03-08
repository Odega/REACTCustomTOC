import React from 'react';
import { Typography } from '@material-ui/core';


let isUsed = [];
let counter = 0;

function TopChapters({topChapters, chapter, indx, classes}) {
    //console.log(chapters.parent == topChapters.id);
    //console.log("fafafafafafafafafa");
    //console.log(topChapters);
    if(indx == 0) isUsed = [];
    if (topChapters.find(x => x.id === chapter.parent)){
        let index = topChapters.findIndex(x => x.id === chapter.parent);
        let topChap = topChapters[index].title;
        let topChapParent = topChapters[index].parent;

        //console.log({topChap});

        if (topChapParent == null){
            if(!isUsed.includes(topChap)){
                isUsed.push(topChap);
                return (
                    <React.Fragment>
                        <div className={classes.toptopChapHeader}>
                        {topChap}
                        </div>
                        
                    </React.Fragment>
                )
            }else{
                return null
            }
        }else{
            let topTopIndex = topChapters.findIndex(x => x.id === topChapParent);
            let topTopChap = topChapters[topTopIndex].title;

            if(!isUsed.includes(topChap) && !isUsed.includes(topTopChap)){
                isUsed.push(topChap);
                isUsed.push(topTopChap);
                return (
                    <React.Fragment>
                        <div className={classes.toptopChapHeader}>
                        {topTopChap}
                        </div>
                        <div className={classes.topChapHeader}>
                        {topChap}
                        </div>
                    </React.Fragment>
                )
            }else if(!isUsed.includes(topChap) && isUsed.includes(topTopChap)){
                isUsed.push(topChap);
                return(
                    <React.Fragment >
                        <div className={classes.topChapHeader}>
                            {topChap}
                            </div>
                    </React.Fragment>  
                )
            }else if(isUsed.includes(topChap) && isUsed.includes(topTopChap)){
                return null
            }
        }
    }else {return null}

}

export default TopChapters;

import React from 'react';
import { Typography } from '@material-ui/core';


let isUsed = [];
let counter = 0;

function TopChapters({topChapters, chapter, indx, classes}) {
    //console.log(chapters.parent == topChapters.id);
    //console.log("fafafafafafafafafa");
    //console.log(topChapters);
    //console.log("-----------------------------------");
    //console.log(indx + " " + chapter.title + " " + chapter.parent);
    if(chapter.parent == null){
        chapter.parent = "orphan";
    }
    console.log(indx + " " + chapter.title + " " + chapter.parent);
    if(indx == 0) {
        isUsed = [];
        //console.log("-- isUsed RESET --");
    }
    if (topChapters.find(x => x.id === chapter.parent)){
        let index = topChapters.findIndex(x => x.id === chapter.parent);
        let topChap = topChapters[index].title;
        let topChapParent = topChapters[index].parent;
        //console.log("topChap: "+ topChap);
        //console.log("topChapParent: " + topChapParent)

        //console.log({topChap});

        if (topChapParent == null){
            //console.log("Index: "+ indx + " - TopTopChap: " + topChap + " - Parent: "+ topChapParent + " - isUsed: " + isUsed.includes(topChap));
            //console.log(isUsed);
            if(!isUsed.includes(topChap)){
                isUsed.push(topChap);
                //console.log("Pushed: " + topChap);
                return (
                    <React.Fragment>
                        <div className={classes.toptopChapHeader}>
                        {topChap}
                        </div>
                        
                    </React.Fragment>
                )
            }else{
                console.log(topChap);
                return null
            }
        }else{
            //console.log("TOPCHAPPARENT ER  IKKE NULL");
            //console.log("TopTopChap: " + topChap + " - Parent: "+ topChapParent + " - isUsed: " + isUsed.includes(topChap));
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
            }else{
                return null
            }
        }
    }else {
        if(chapter.parent === "orphan"){
            return(
                <React.Fragment>
                <div className={classes.toptopChapHeader}>
                            {chapter.title}
                            </div>
                </React.Fragment>
            )
        }else{
            return null
        }
    }
}

export default TopChapters;

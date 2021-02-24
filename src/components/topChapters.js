import React from 'react';

let isUsed = [];
let counter = 0;

function TopChapters({topChapters, chapter, indx}) {
    //console.log(chapters.parent == topChapters.id);
    console.log("fafafafafafafafafa");
    console.log(topChapters);
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
                    <h4>
                        {topChap}
                    </h4>
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
                    <h4>
                        {topTopChap}
                    </h4>
                    <h5>
                        {topChap}
                    </h5>
                    </React.Fragment>
                )
            }else if(!isUsed.includes(topChap) && isUsed.includes(topTopChap)){
                isUsed.push(topChap);
                return(
                    <React.Fragment>
                        <h5>
                            {topChap}
                        </h5>
                    </React.Fragment>  
                )
            }else if(isUsed.includes(topChap) && isUsed.includes(topTopChap)){
                return null
            }
        }
    }else {return null}

}

export default TopChapters;

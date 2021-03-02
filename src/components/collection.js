import React from 'react';
import communication from '../communication/communication';
import Loader from './loader';
import Card from '@material-ui/core/Card';
import CardView from '@material-ui/core/Card';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {GiTrophy} from 'react-icons/gi';
import Button from '@material-ui/core/Button';
import AvatarGroups from './avatarGroups'
import Lesson from './lesson';
import config from '../config.json';
import { GiAncientColumns } from 'react-icons/gi';
import Collections from './collections';
import SideBar from './sideBar';
import TopChapters from './topChapters';
import M from 'materialize-css';
import ChapterCirc from './chapterCirc';
import BorderLinearProgress from './progressBar';
import UseTabletStyles from '../styles/stylesTablet'
import UseMobileStyles from '../styles/stylesMobile';
import UseStyles from '../styles/styles';
import MyMediaQuery from './deviceDetect';
import {
    isMobile,
    isTablet
  } from "react-device-detect";

const Devicedetect = () => {
    const [width, setWidth] = React.useState(window.innerWidth);

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);
    
        // Return a function from the effect that removes the event listener
        return () => window.removeEventListener("resize", handleWindowResize);
      }, []);
    if (width <= 1224) {
        console.log('tablet');
        return (
            UseTabletStyles()
        )
    }
    else {
        console.log('vanlig');
        return (
            UseStyles()
        )
    };
}


function makeChapter(lessons, chapters, chapt) {
    let toReturn = [];
    const data = {
        title: chapt.title,
        parent: chapt.parent,
        lessons: lessons.filter(lesson => lesson.chapter === chapt.id)
    }
    toReturn.push(data);

    chapters.forEach(chapter => {
        if (chapter.parent === chapt.id) {
            toReturn = toReturn.concat(makeChapter(lessons, chapters, chapter));
        }
    })

    return toReturn;
}

let cmdr;
function Collection(props) {
    const classes =Devicedetect();
    const [collectionDetails, setCollectionDetails] = React.useState(null);
    React.useEffect(() => {
        communication.requestCollectionData(props.collection.id).then(function (data) {
            setCollectionDetails(data.data);
            
        });
    }, []);

    if (!collectionDetails) {
        return <Loader />
    }
    //console.log("----------------------------------------------------");
    console.log(collectionDetails);
    //console.log("----------------------------------------------------");
    let chapters = [];
    const data = {
        title: null,
        lessons: collectionDetails.lessons.filter(lesson => !!!lesson.chapter)
    }
    let topChapters = [];
    
    chapters.push(data)
    collectionDetails.chapters.forEach((chapt) => {
        topChapters.push({"id": chapt.id, "title": chapt.title, "used": false, "parent": chapt.parent});
        if (chapt.parent === null) {
            chapters = chapters.concat(makeChapter(collectionDetails.lessons, collectionDetails.chapters, chapt));
        }
    });
    //console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
    //console.log(topChapters);
    //console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
    // MaterializeCSS Expandable UL
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, false);

    chapters = chapters.filter(chapt => chapt.lessons.length !== 0);
    cmdr = chapters;
    const requestCrossResource = function (definedID, originalId) {
        communication.requestCrossResource(collectionDetails.lessons[0].id, definedID, originalId);
    }

    return <div className={classes.content} >
        <Card className={classes.sideContent}>
            
        {chapters.map((chapter, indx) => {
            //console.log(JSON.stringify({chapter}) + " - " + indx);
            
            return (
                <>
                <TopChapters topChapters={topChapters} chapter={chapter} indx={indx} />
                <ul class="collapsible popout">
                    <li>
                    <div class="collapsible-header" style={{flexDirection: 'row'}}>
                        
                        <Typography className={classes.title} >
                            {chapter.title}
                        </Typography>
                        <div className={classes.avatarGroupsStyle0}>
                            <div id="avatGrp" className={classes.avatarGroupsStyle}>
                                <div className={classes.avatarGroupsStyle2}>
                                    <AvatarGroups chapter={chapter} />
                                </div>
                                <ChapterCirc chapter={chapter} />
                            </div>
                        </div>
                    </div>
                    <div class="collapsible-body">

                <Card key={indx} className={classes.lessonsCard}>
                    
                    <div className={classes.lessonsGroup}>
                        {chapter.lessons.map((lesson, lessonIndex) => {
                            return (
                                <div key={lessonIndex} className={classes.row}>
                                    <Lesson lesson={lesson} />
                                </div>
                            )
                        })}
                    </div>  
                    
                </Card>
                </div>
                    </li>
                </ul>
                </>
        )
        })} 
        </Card>
            <SideBar className={classes.sideBar} classes={classes} chapters={chapters} cmdr={cmdr}/>
        </div>
 {/*       <Button variant="primary" onClick={requestCrossResource.bind(null, config['CROSS_LESSON_DEFINED_ID'], config['CROSS_LESSON_COURSE_ORIGINAL_ID'])}>
            Or see previous course lesson
    </Button> */}
}


export default Collection;
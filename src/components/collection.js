import React, { useState } from 'react';
import communication from '../communication/communication';
import Loader from './loader';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AvatarGroups from './avatarGroups'
import Lesson from './lesson';
import SideBar from './sideBar';
import TopChapters from './topChapters';
import M from 'materialize-css';
import ChapterCirc from './chapterCirc';
import UseTabletStyles from '../styles/stylesTablet'
import UseMobileStyles from '../styles/stylesMobile';
import UseStyles from '../styles/styles';
import AvatarGroupsM from './avatarGrMobile';
import Popup from './popupBtn';
import { useTabIndex } from 'react-tabindex';
import Tooltip from "@material-ui/core/Tooltip";
import imageTrop from './image/winner.png';


const Devicedetect = () => {
    const [width, setWidth] = React.useState(window.innerWidth);

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);
    
        // Return a function from the effect that removes the event listener
        return () => window.removeEventListener("resize", handleWindowResize);
      }, []);
    if (width <= 1224) {
        //console.log('tablet');
        return (
            UseTabletStyles()
        )
    }
    else if (width <=400) {
        return (
            UseMobileStyles()
        )
    }
    else {
        //console.log('vanlig');
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
function Collection(props, onClick) {
    const tabIndex = useTabIndex();
    const classes =Devicedetect();
    const [collectionDetails, setCollectionDetails] = React.useState(null);
    const [isOpen, setIsOpen] = useState(false);
   

    React.useEffect(() => {
        communication.requestCollectionData(props.collection.id).then(function (data) {
            setCollectionDetails(data.data);
            
        });
    }, []);

    if (!collectionDetails) {
        return <Loader />
    }
    //console.log("----------------------------------------------------");
    //console.log(collectionDetails);
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
    const togglePopup = () => {
        setIsOpen(!isOpen);
      }

        if (window.innerWidth <= 1224) {
            return <div className={classes.content} style={{overflow: 'hidden'}}>
           
            <Card className={classes.sideContent}>
                
            {chapters.map((chapter, indx) => {
                //console.log(JSON.stringify({chapter}) + " - " + indx);
                return (
                    <>
                    <TopChapters topChapters={topChapters} chapter={chapter} indx={indx} classes={classes}/>
                    <ul class="collapsible popout">
                        <li>
                        <div class="collapsible-header" >
                            
                            <Typography className={classes.titleModul}>
                                {chapter.title}
                            </Typography>
                            <div className={classes.avatarGroupsStyle0}>
                                <div id="avatGrp" className={classes.avatarGroupsStyle}>
                                    <div className={classes.avatarGroupsStyle2}>
                                        <AvatarGroupsM chapter={chapter} />
                                    </div>
                                    <ChapterCirc chapter={chapter} style={{margin: 'auto', justifycontent: 'center'}}/>
                                </div>
                            </div>
                        </div>
                        <div class="collapsible-body">
    
                    <Card key={indx} className={classes.lessonsCard} >
                        
                        
                            <ul className={classes.lessonsGroup}>
                            {chapter.lessons.map((lesson, lessonIndex) => {
                                return (
                                    <li className={classes.row} key={lessonIndex}>
                                        <Lesson lesson={lesson}/>
                                    </li>
                                )
                            })}
                            </ul>
                                         
                        
                    </Card>
                    </div>
                        </li>
                    </ul>
                    </>
            )
            })} 
            </Card>
             <Card>
                <div className={classes.btnPosition}>
                <Tooltip placement="left" title="Totaloversikt over medaljer og pokaler">
                <Button className={classes.buttonicon} tabIndex={1} onClick={togglePopup} alt="Knapp for medaljer"> <img src={imageTrop} style={{height: 45, width: 45}} /> </Button>
                </Tooltip>
                {isOpen && <Popup
                    content={<>
                    <SideBar className={classes.sideBar} classes={classes} chapters={chapters} cmdr={cmdr}/>
                    </>}
                    handleClose={togglePopup}
                />}
                    </div>
            </Card>
            </div>

        }
        else {
            return <div className={classes.content} style={{overflow: 'hidden'}} >
            <Card className={classes.sideContent}>
                
            {chapters.map((chapter, indx) => {
                console.log(JSON.stringify({chapter}) + " - " + indx);
                
                return (
                    <>
                    <TopChapters topChapters={topChapters} chapter={chapter} indx={indx} classes={classes} />
                    <ul class="collapsible popout">
                        <li >
                        <div class="collapsible-header" >
                            
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
                        
                        <ul className={classes.lessonsGroup}>
                            {chapter.lessons.map((lesson, lessonIndex) => {
                                return (
                                    <li className={classes.row}>
                                    <div key={lessonIndex} >
                                        <Lesson lesson={lesson}/>
                                    </div>
                                    </li>
                                )
                            })}
                        </ul>  
                        
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

        } 
    }



export default Collection;
import React from 'react';
import communication from '../communication/communication';
import Loader from './loader';
import Card from '@material-ui/core/Card';
import CardView from '@material-ui/core/Card';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {GiTrophy} from 'react-icons/gi';
import Button from '@material-ui/core/Button';
import Lesson from './lesson';
import config from '../config.json';
import { GiAncientColumns } from 'react-icons/gi';
import Collections from './collections';
import SideBar from './sideBar';
import TopChapters from './topChapters';

const useStyles = makeStyles(() =>
    createStyles({
        lessonsCard: {
            width: '100%',
            marginBottom: 20,
        },
        lessonsGroup: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        row: {
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            margin: 21,
            marginLeft: 'auto',
            marginRight: 'auto'
        },
        title: {
            textAlign: 'center',
            marginTop: 21
        },
        content : {
            display: 'flex',
            flexDirection: 'row',
            marginBottom: 20,
            justifyContent: 'space-between',
            color: '#F5F5F5',
        },
        sideContent : {
            display: 'flex',
            flexDirection: 'column',
            marginBottom: 20,
            width: '55%',
            marginTop: 20,
            marginLeft: 20,
            marginRight: 20,
            backgroundColor: '#F5F5F5',
            shadowColor: 'rgba(0,0,0, 0.0)',
            shadowOffset: { height: 0, width: 0 },
            shadowOpacity: 0, //default is 1
            shadowRadius: 0,
            borderWidth: 0,
            elevation: 0,
            border: 0
        },
        sideBar: {
            display: 'flex',
            flexDirection: 'column',
            width: '42%',
            marginTop: 20,
            marginBottom: 20,
            marginRight: 20,
            marginLeft: 20,
        },
        iconStyle: {
            display: 'flex',
            justifyContent: 'center',
        },
    }),
);

function makeChapter(lessons, chapters, chapt) {
    let toReturn = [];
    const data = {
        title: chapt.title,
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
    const classes = useStyles();
    const [collectionDetails, setCollectionDetails] = React.useState(null);
    React.useEffect(() => {
        communication.requestCollectionData(props.collection.id).then(function (data) {
            setCollectionDetails(data.data);
            
        });
    }, []);

    if (!collectionDetails) {
        return <Loader />
    }
    console.log("----------------------------------------------------");
    console.log(collectionDetails);
    console.log("----------------------------------------------------");
    let chapters = [];
    const data = {
        title: null,
        lessons: collectionDetails.lessons.filter(lesson => !!!lesson.chapter)
    }
    let topChapters = [];
    
    chapters.push(data)
    collectionDetails.chapters.forEach((chapt) => {
        if (chapt.parent === null) {
            topChapters.push({"id": chapt.id, "title": chapt.title, "used": false});
            chapters = chapters.concat(makeChapter(collectionDetails.lessons, collectionDetails.chapters, chapt));
        }
    });
    console.log("xxxxxxxxxxxxxxxxx");
    console.log(topChapters);
    console.log("xxxxxxxxxxxxxxxxx");
    chapters = chapters.filter(chapt => chapt.lessons.length !== 0);
    cmdr = chapters;
    const requestCrossResource = function (definedID, originalId) {
        communication.requestCrossResource(collectionDetails.lessons[0].id, definedID, originalId);
    }

    return <div className={classes.content} >
        <Card className={classes.sideContent}>
            
        {chapters.map((chapter, indx) => {
            console.log(chapter);
            return (
                <>
                <TopChapters topChapters={topChapters} chapter={chapter}/>
                <Card key={indx} className={classes.lessonsCard}>
                    <Typography className={classes.title} color="textprimary" gutterBottom variant="h4">
                        {chapter.title}
                    </Typography>
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
import React from 'react'

import BlogsTrailer from '../components/blogs-trailer';
import firebase from '../components/firebase';

import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));
function Blogs() {
    const classes = useStyles();
    const [blogs, setBlogs] = React.useState([]);
    const [open, setOpen] = React.useState(true);

    React.useEffect(() => {
        document.querySelectorAll('.tabs a').forEach((e, index) => {
            if (index !== 1)
                e.classList.remove('open');
            else
                e.classList.add('open');
        });

        firebase.database().ref("stories").once("value").then(snap => {
            let firebaseBlogs = [];
            for (var i in snap.val()) {
                let story = snap.val();
                firebaseBlogs.push(story[i]);
            }
            setOpen(false);
            setBlogs(firebaseBlogs);
        })
    }, []);

    return (
        <div className="blogs-page">
            <h1>Stories</h1>
            {(blogs) ? (
                blogs.map(item => (
                    <BlogsTrailer key={item.link} name={item.title} desc={item.previewDesc} thumbnail={item.bg} date={item.date} link={"/" + item.link} />
                ))
            ) : ("")}
            <Backdrop className={classes.backdrop} open={open}>
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>
    )
}

export default Blogs;

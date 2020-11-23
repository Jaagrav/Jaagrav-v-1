import React from 'react';

import { useHistory } from 'react-router-dom';

import firebase from '../components/firebase'

import { Link } from 'react-router-dom'

import marked from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/dracula.css';

import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));
function BlogPage(props) {
    const classes = useStyles();
    let history = useHistory();
    const [srcDoc, setSrcDoc] = React.useState('');
    const [open, setOpen] = React.useState(true);

    const [title, setTitle] = React.useState(''), [date, setDate] = React.useState(''), [bg, setBG] = React.useState('');

    React.useEffect(() => {
        let markdownString = '';

        console.log(props);
        firebase.database().ref(`stories/${props.match.params.storyName}`).once('value').then((snap) => {
            console.log(snap.val());
            setOpen(false);
            setTitle(snap.val().title);
            setDate(snap.val().date);
            markdownString = snap.val().desc;
            setSrcDoc(marked(markdownString));
            setBG(snap.val().bg);
        })

        marked.setOptions({
            highlight: function (code, lang) {
                return hljs.highlight(lang, code).value;
            },
            breaks: true,
            langPrefix: 'lang ',
            pedantic: false,
            gfm: true,
            tables: true,
            smartLists: true,
            smartypants: true,
            // sanitize: true,
        })
    }, []);

    let goToBlogsPage = () => {
        history.push('/stories')
    }

    return (
        <div className="blog-page">
            <div className="blog">
                <div className="blog-background" style={{ background: `url('${bg}')` }}></div>
                <div className="blog-container">
                    <Link to="/stories" className="back-btn">
                        <i className="fas fa-arrow-left"></i>  Back
                    </Link>
                    <div className="blog-title">
                        {title}
                    </div>
                    <div className="blog-postdate">{date}</div>
                    <br />
                    <div className="blog-content" dangerouslySetInnerHTML={{ __html: srcDoc }}></div>
                    <div className="footer">
                        Written by Jaagrav
                    </div>
                </div>
            </div>
            <Backdrop className={classes.backdrop} open={open}>
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>
    )
}

export default BlogPage;
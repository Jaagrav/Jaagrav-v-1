import React from 'react';

import { useHistory } from 'react-router-dom';

import firebase from '../components/firebase'

import marked from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/dracula.css';

function BlogPage(props) {
    let history = useHistory();
    const [srcDoc, setSrcDoc] = React.useState('');

    const [title, setTitle] = React.useState(''), [date, setDate] = React.useState(''), [bg, setBG] = React.useState('');

    React.useEffect(() => {
        let markdownString = '';

        console.log(props);
        firebase.database().ref(`stories/${props.match.params.storyName}`).once('value').then((snap) => {
            console.log(snap.val());
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
                    <div className="back-btn" onClick={goToBlogsPage}>
                        <i className="fas fa-arrow-left"></i>  Back
                    </div>
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
        </div>
    )
}

export default BlogPage;
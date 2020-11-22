import React from 'react'

import BlogsTrailer from '../components/blogs-trailer';
import firebase from '../components/firebase';

function Blogs() {
    const [blogs, setBlogs] = React.useState([]);
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
            setBlogs(firebaseBlogs);
        })
    }, []);

    React.useEffect(() => {
        console.log(blogs)
    }, [blogs])
    return (
        <div className="blogs-page">
            <h1>Stories</h1>
            {(blogs) ? (
                blogs.map(item => (
                    <BlogsTrailer key={item.link} name={item.title} desc={item.previewDesc} thumbnail={item.bg} date={item.date} link={"/" + item.link} />
                ))
            ) : ("")}
        </div>
    )
}

export default Blogs;

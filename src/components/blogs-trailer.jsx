import React from 'react';
import { Link } from 'react-router-dom';

function BlogsTrailer(props) {
    return (
        <div className="blog-trailer">
            <div className="blog-trailer-thumbnail" style={{ background: `url("${props.thumbnail}")`, backgroundSize: "cover", backgroundPosition: "center" }}></div>
            <div className="blog-trailer-info">
                <div className="blog-trailer-date">{props.date}</div>
                <div className="blog-trailer-name">{props.name}</div>
                <div className="blog-trailer-desc">{props.desc}</div>
                <Link className="blog-trailer-link" to={props.link}>Read more 🡢</Link>
            </div>
        </div>
    )
}

export default BlogsTrailer;
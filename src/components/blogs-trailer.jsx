import React from 'react';
import { Link } from 'react-router-dom';

function BlogsTrailer(props) {
    return (
        <div className="blog-trailer">
            <Link className="blog-trailer-link" to={"/stories" + props.link}><div className="blog-trailer-thumbnail" style={{ background: `url("${props.thumbnail}")`, backgroundSize: "cover", backgroundPosition: "center" }}></div></Link>
            <div className="blog-trailer-info">
                <div className="blog-trailer-date">{props.date}</div>
                <Link className="blog-trailer-link" to={"/stories" + props.link}><div className="blog-trailer-name">{props.name}</div></Link>
                <div className="blog-trailer-desc">{props.desc}</div>
                <Link className="blog-trailer-link" to={"/stories" + props.link}>
                    Read more →
                </Link>
            </div>
        </div>
    )
}

export default BlogsTrailer;
import React from 'react';

import { useHistory } from 'react-router-dom';

import marked from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/srcery.css';

function BlogPage() {
    let history = useHistory();
    const [srcDoc, setSrcDoc] = React.useState('');

    React.useEffect(() => {
        let markdownString = '';
        let textarea = document.createElement('textarea');
        textarea.value = `And here we are, 2020 is almost over. The cool wintery breeze have begun, the world has once again started to lose it’s colors with the tender green leaves of trees that once had so many colorful fruits clung to them. 
Although there’s going to be less colors but theirs something beautiful about the gloomy and misty winter mornings that increases my fascination towards nature even more. And also who doesn’t like to sleep more and better wrapped in their cozy blankets.
> "What good is the warmth of summer, without the cold of winter to give it sweetness."
\`\`\`javascript
console.log('Hello World!');
let i = 5;
//This is a comment
\`\`\`
![Golden Doodle](https://poodles2doodles.com/wp-content/uploads/2019/01/cute-teddybear-goldendoodle-on-bed-with-collar.jpg)

        `;
        markdownString = textarea.value;

        marked.setOptions({
            highlight: function (code, lang) {
                return hljs.highlight(lang, code).value;
            },
            breaks: true,
            langPrefix: 'lang-',
            pedantic: false,
            gfm: true,
            tables: true,
            smartLists: true,
            smartypants: true,
            // sanitize: true,
        })
        setSrcDoc(marked(markdownString));
    }, []);

    let goToBlogsPage = () => {
        history.push('/stories')
    }

    return (
        <div className="blog-page">
            <div className="blog">
                <div className="blog-background" style={{ background: `url('https://dev-to-uploads.s3.amazonaws.com/i/3yydrio04a44gy967lq0.png')`, backgroundSize: 'cover', filter: 'brightness(0.5)', backgroundPosition: 'center' }}></div>
                <div className="blog-container">
                    <div className="back-btn" onClick={goToBlogsPage}>
                        <i className="fas fa-arrow-left"></i>  Back
                    </div>
                    <div className="blog-title">
                        Winter An End And A New Beginning
                    </div>
                    <div className="blog-postdate">Posted on November 13, 2020 by Jaagrav</div>
                    <br />
                    <div className="blog-content" dangerouslySetInnerHTML={{ __html: srcDoc }}></div>
                </div>
            </div>
        </div>
    )
}

export default BlogPage;
import React from 'react'

import BlogsTrailer from '../components/blogs-trailer';

function Blogs() {
    document.title = "Stories by Jaagrav";

    const blogs = [{
        name: 'Capture Still Images on Browser using JavaScript',
        desc: 'Before we begin here is the link to what you\'ll be able to create once you read this whole article. Yes, indeed, it is possible to capture images on the browser. Well, it is true that with the power of JavaScript, we can do almost anything but on a browser.',
        thumbnail: 'https://res.cloudinary.com/practicaldev/image/fetch/s--FxH_dQg_--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/yyt1k3qi8y1ccxqlp8da.jpg',
        date: 'November 13, 2020',
        url: 'https://dev.to/jaagrav/capture-still-images-on-browser-using-javascript-2di8',
    }, {
        name: 'How I made Xper - A RealTime Code Deployer and Code Editor',
        desc: 'In the world of Web Development, I have always faced one major/irritating problem which is responsiveness of a website. Everytime when I am developing a website, I make a quick change and push it in order to quickly check how it looks on my phone.',
        thumbnail: 'https://res.cloudinary.com/practicaldev/image/fetch/s--oS_E52pG--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/vlmrtjp4qg8nb6scdt0c.png',
        date: 'November 4, 2020',
        url: 'https://dev.to/jaagrav/how-i-made-xper-a-realtime-code-deployer-and-code-editor-53d2',
    }];
    React.useEffect(() => {
        document.querySelectorAll('.tabs a').forEach((e, index) => {
            if (index !== 0)
                e.classList.remove('open');
            else
                e.classList.add('open');
        })
    }, []);
    return (
        <div className="blogs-page">
            {blogs.map(item => (
                <BlogsTrailer key={item.name} name={item.name} desc={item.desc} thumbnail={item.thumbnail} date={item.date} link={item.url} />
            ))}
        </div>
    )
}

export default Blogs;

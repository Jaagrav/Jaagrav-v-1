import React from 'react'

function About() {
    document.title = "Who is Jaagrav?";
    React.useEffect(() => {
        document.querySelectorAll('.tabs a').forEach((e, index) => {
            if (index !== 2)
                e.classList.remove('open');
            else
                e.classList.add('open');
        })
    }, [])
    return (
        <div className="about-page">
            THIS IS THE ABOUT PAGE
        </div>
    )
}

export default About;

import React from 'react'

function Projects() {
    React.useEffect(() => {
        document.querySelectorAll('.tabs a').forEach((e, index) => {
            if (index !== 1)
                e.classList.remove('open');
            else
                e.classList.add('open');
        })
    }, [])
    return (
        <div className="projects-page">
            This is projects page
        </div>
    )
}

export default Projects;
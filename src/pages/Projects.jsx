import React from 'react'

import ProjectsTrailer from '../components/projects-trailer';

function Projects() {
    React.useEffect(() => {
        document.title = "Projects - Book Of Jaagrav";
        document.querySelectorAll('.tabs a').forEach((e, index) => {
            if (index !== 0)
                e.classList.remove('open');
            else
                e.classList.add('open');
        })
    }, [])
    let projects = [{
        projectname: 'Xper',
        projectthumbnail: 'https://dev-to-uploads.s3.amazonaws.com/i/ion9y9l2677xtks6thzz.png',
        projectdesc: 'Xper is a realtime code editor where you can both write and save your code in realtime!',
        github: 'https://github.com/Jaagrav/Xper',
        website: 'https://xperbycoder.netlify.app',
        tools: ['FirebaseJS', 'ReactJS', 'AceJS', 'MaterialUI'],
    }, {
        projectname: 'CodeX',
        projectthumbnail: 'https://camo.githubusercontent.com/3e7eda558193d190d18013a9acbcccb0f030e5747ab96c96699bc025d3997001/68747470733a2f2f6465762d746f2d75706c6f6164732e73332e616d617a6f6e6177732e636f6d2f692f3666306c37306437337366376d3772617a786d742e706e67',
        projectdesc: 'CodeX is an online compiler for various languages like Java, C++, Python, etc. Execute code in various languages on your own website for free with the CodeX API!!!',
        github: 'https://github.com/Jaagrav/CodeX',
        website: 'https://codexweb.netlify.app/',
        tools: ['ReactJS', 'AceJS', 'REST API', 'Online-Compiler'],
    }, {
        projectname: 'Fragments',
        projectthumbnail: 'https://dev-to-uploads.s3.amazonaws.com/i/vmtimz4599ns399258gg.png',
        projectdesc: 'Fragments is a light weight code editor which supports multiple languages, store your code/snippets here for future use.',
        github: 'https://github.com/Jaagrav/Fragments',
        website: 'https://fragmentsbycoder.netlify.app',
        tools: ['VanillaJS', 'AceJS', 'LocalStorage'],
    }, {
        projectname: 'Scissor',
        projectthumbnail: 'https://dev-to-uploads.s3.amazonaws.com/i/a4reysg757efm6ulcyfv.png',
        projectdesc: 'An online image compressor that runs locally on your browser to quickly compress your images effectively faster than many other online image compressors out there.',
        github: 'https://github.com/Jaagrav/Scissor',
        website: 'https://scissor.netlify.app',
        tools: ['DownloadJS', 'VanillaJS', 'CompressJS'],
    }, {
        projectname: 'Converse Chat',
        projectthumbnail: 'https://dev-to-uploads.s3.amazonaws.com/i/5s9k5e9o4u6ydk5ytk2f.png',
        projectdesc: 'A Fun Chat App where you can see what your friend types even before he/she sends the text.',
        github: 'https://github.com/Jaagrav/ConverseChat',
        website: 'https://conversechatv2.netlify.app',
        tools: ['ReactJS', 'FirebaseJS'],
    }, {
        projectname: 'Poler',
        projectthumbnail: 'https://dev-to-uploads.s3.amazonaws.com/i/jl6af8qk5f6tmxvu8m7t.png',
        projectdesc: 'Poler is a React based PWA where people can easily create polls and share it with their friends. The results get updated in real-time.',
        github: 'https://github.com/Jaagrav/Poler',
        website: 'https://poler.netlify.app',
        tools: ['ReactJS', 'FirebaseJS', 'MaterialUI'],
    }, {
        projectname: '2DO',
        projectthumbnail: 'https://user-images.githubusercontent.com/52719271/97878268-6b4b2300-1d44-11eb-85a6-00700094bae6.jpg',
        projectdesc: '2DO is a Simple Todo List PC/Android/Web app which supports basic Todo list functions like Creating/Editing/Deleting Tasks and also striking them when a specific task is done.',
        github: 'https://github.com/Jaagrav/2DO-React-Native',
        website: 'https://2do-electron.netlify.app',
        tools: ['ElectronJS', 'LocalStorage', 'React Native', 'Drag and Drop'],
    }, {
        projectname: 'SnapShot',
        projectthumbnail: 'https://res.cloudinary.com/practicaldev/image/fetch/s--J3nLCnnj--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/lpv2g4bzy7r28xsc8xbh.jpg',
        projectdesc: 'An online Camera that uses your camera to take images, which you can immediately edit with quick edit and also download on your device.',
        github: 'https://github.com/Jaagrav/Snapshot',
        website: 'https://snapshotcam.netlify.app',
        tools: ['Image Manipulation', 'DownloadJS', 'UserMedia'],
    }, {
        projectname: 'iOS Calculator Clone for Android',
        projectthumbnail: 'https://dev-to-uploads.s3.amazonaws.com/i/uupxx44sgboxyxksfmij.jpg',
        projectdesc: 'An iOS Calculator App developed with Java for Android phones, because we all drool over iPhones.',
        github: 'https://github.com/Jaagrav',
        website: 'https://drive.google.com/file/d/1-4NHa-_BlEW1Ll3dTiAqUpPiYpkiGkjf/view?usp=drivesdk',
        tools: ['Android', 'Java', 'Android Studio'],
    }, {
        projectname: 'Sorting Visualizer',
        projectthumbnail: 'https://dev-to-uploads.s3.amazonaws.com/i/50smr4wx73019jijgn92.png',
        projectdesc: 'Visualize sorting methods like Bubble Sort, Selection Sort and Merge Sort',
        github: 'https://github.com/Jaagrav/SortingVisualizer',
        website: 'https://jaagrav.github.io/SortingVisualizer/',
        tools: ['JavaScript', 'Sorting Algorithms'],
    }, {
        projectname: 'Calculator',
        projectthumbnail: 'https://dev-to-uploads.s3.amazonaws.com/i/kuv9c0u826w9xdjy2oof.png',
        projectdesc: 'A simple JS Calculator with hopefully no eval function bugs, if there are, please create an issue.',
        github: 'https://github.com/Jaagrav/Calculator',
        website: 'https://calculatorbyjaagrav.netlify.app',
        tools: ['JavaScript'],
    }]
    return (
        <div className="projects">
            <h1>Projects</h1>
            <div className="projects-page">
                {projects.map(item => (
                    <ProjectsTrailer key={item.github} projectname={item.projectname} projectthumbnail={item.projectthumbnail} projectdesc={item.projectdesc} github={item.github} website={item.website} tools={item.tools} />
                ))}
            </div>
        </div>
    )
}

export default Projects;
import React from 'react'

import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-dracula";

function About() {
  const [fontSize, setFontSize] = React.useState(24);

  React.useEffect(() => {
    document.title = "About Me - Book Of Jaagrav";
    document.querySelectorAll('.tabs a').forEach((e, index) => {
      if (index !== 2)
        e.classList.remove('open');
      else
        e.classList.add('open');
    })
    if (window.innerWidth < 768)
      setFontSize(14);
  }, []);

  window.addEventListener('resize', e => {
    if (window.innerWidth < 768)
      setFontSize(14);
    else
      setFontSize(24)
  })

  const codeText = document.createElement('textarea');
  codeText.value = `class JaagravSeal{
  // I love challenges
  // I completed all the projects I planned to build in 2020
  constructor(){
    this.name = "Jaagrav Seal";
    this.age = 1065360600; //5th October 2003
    this.email = "jaagravseal03@gmail.com"
  }
  workExperience() {
    return [
      { 'May 2020 - Present': 'React Intern at CoronaTracker.in' },
      { 'November 2020 - Present': 'SWE Intern at WebDevGoa' },
      { 'August 2020 - October 2020': 'GirlScript YAY Ambassador Program' },
    ]
  }
  education() {
    return [
      'Present - 2022': 'High School, National English School, Kolkata',
    ]
  }
  certificates() {
    return [
      { 'SoloLearn': 'Completion of React-Redux, HTML/CSS/JS and NodeJS Course' },
      { 'Google Code-In': 'Completed 20 Tasks in contributing to Open Source' },
      { 'Certificate of Merit': 'CodeJam, Salt Lake CA' },
    ]
  }
  skills() {
    return [ 'HTML/CSS/JS', 'JQuery' ,'ReactJS', 'Redux', 'React Native', 'SASS/SCSS' , 'Material-UI/Bootstrap' , 'npm/yarn' , 'PWA' , 'GIT/GitHub CLI' , 'ElectronJS' , 'UI/UX' , 'Figma Design' , 'Firebase' , 'Web Sockets' , 'Ionic' , 'Java' , 'Android Studio' , 'Photoshop' , 'AceJS' , 'HighlightJS' , 'APIs/Frameworks' ]
  }
  hobbies() {
    return [ 'Photography' , 'Journaling' , 'Blogging' , 'Reading Harry Potter Books' , 'Sculpting' , 'Skating' , 'Bicycling' , ];
  }
}`;

  const code = codeText.value;

  return (
    <div className="about-page">
      <h1>About Me</h1>
      <AceEditor
        className="about-code"
        mode="javascript"
        theme="dracula"
        name="UNIQUE_ID_OF_DIV"
        editorProps={{ $blockScrolling: true }}
        wrapEnabled={true}
        showGutter={false}
        showPrintMargin={false}
        maxLines={100}
        fontSize={fontSize}
        setOptions={{
          readOnly: true,
        }}
        value={code}
      />
      <h1>Stalk Me</h1>
      <div className="socials">
        <a href="https://github.com/Jaagrav" target="_blank"><abbr title="My Github" className="fab fa-github"></abbr></a>
        <a href="https://dev.to/jaagrav" target="_blank"><abbr title="My Dev" className="fab fa-dev"></abbr></a>
        <a href="https://linkedin.com/in/Jaagrav" target="_blank"><abbr title="My LinkedIn" className="fab fa-linkedin"></abbr></a>
        <a href="https://instagram.com/xJaagrav" target="_blank"><abbr title="My Instagram" className="fab fa-instagram"></abbr></a>
        <a href="https://twitter.com/xJaagrav" target="_blank"><abbr title="My Twitter" className="fab fa-twitter"></abbr></a>
        <a href="mailto:jaagravseal03@gmail.com" target="_blank"><abbr title="My Email Address" className="fas fa-envelope"></abbr></a>
      </div>
    </div>
  )
}

export default About;

import './App.css';
import { useEffect, useState } from 'react';
import Project from './features/Project';
import projects from './projects';

function App() {

  const age = new Date().getFullYear() - 2002

  const [infoText, setInfoText] = useState(`
    I'm Fudayl Cavus, ${age} years-old <strong>Computer Engineering Student</strong>. 
    I started coding with web programming and now I'm Junior Full-Stack Engineer.
    As a student, I want to explore this field as much as I can and especially dive into ML. 
    If you have question, idea or project, all contact platforms on the bottom :) Waiting for your message!`)

  const handleScroll = ({ target }) => {
    let elementId = target.innerText.toLowerCase().split(" ").join("") //About Me => aboutme
    const element = document.getElementById(elementId)
    let positionTop = element.getBoundingClientRect().top + window.scrollY
    let viewportHeight = window.visualViewport.height
    console.log(positionTop)
    window.scrollTo(0, positionTop - (8 / 100 * viewportHeight) - 80)
  }

  var TxtRotate = function (el) {
    this.el = el;
    this.txt = '';
    this.tick();
  };

  const copyToClipboard = ({ target }) => {
    navigator.clipboard.writeText("Fudayl Cavus#4586").then(function () {
      target.classList.add('copied');
      setTimeout(() => {
        target.classList.remove('copied')
      }, 1000);
    }, function () {
      console.error('Problem on writing text to the clipboard!')
    });
  }

  TxtRotate.prototype.tick = function () {
    this.txt = infoText.substring(0, this.txt.length + 1);
    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';
    var that = this;
    var delta = 60 - Math.random() * 50;
    if (this.txt !== infoText) {
      setTimeout(function () {
        that.tick();
      }, delta);
    }
  };

  useEffect(() => {
    var typewriterElement = document.getElementsByClassName('txt-rotate')[0];
    const rtTxt = new TxtRotate(typewriterElement);
    var header = document.querySelector('header');
    const revealText = () => {
      rtTxt.txt = infoText;
      header.removeEventListener('click', revealText);
    }
    header.addEventListener('click', revealText)

  }, [])

  return (
    <div className="App">
      <nav>
        <h1>Fudayl Cavus</h1>
        <div>
          <span onClick={handleScroll}>About Me</span>
          <span onClick={handleScroll}>Projects</span>
        </div>
      </nav>
      <header id="aboutme">
        <div class="header-text">
          <h2>Hello! <p style={{ display: "inline", fontSize: "0.8rem" }}>(click to reveal)</p></h2>
          <p class="typewriter"><span class="txt-rotate"></span></p>
        </div>
        <img src="memoji_cropped.png" alt="computer memoji" />
      </header>
      <main>
        <div class="skills-container">
          <div class="title">Skills</div>
          <div class="skills">
            <div class="skill">
              <h4 class="title">Full-Stack Engineer</h4>
              <p>To learn according to certain curriculum, I started and finished full-stack carrer path of <a href="http://www.codecademy.com">codecademy</a></p>
              <p>Things learned:</p>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JS</li>
                <li>React</li>
                <li>Redux</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>SQL</li>
                <li>Postgres</li>
                <li>TDD</li>
                <li>Web Security</li>
                <li>Data Structures</li>
              </ul>
            </div>
            <div class="skill">
              <h4 class="title">Other</h4>
              <p>All other stuff that I learned time by time without specific source:</p>
              <ul>
                <li>Python</li>
                <li>sklearn</li>
                <li>pandas</li>
                <li>matplotlib</li>
                <li>Java</li>
                <li>RegExp</li>
                <li>TypeScript</li>
                <li>Git</li>
              </ul>
            </div>
          </div>
        </div>
        <hr style={{ width: "80%", marginTop: "3rem" }} />
        <h2 id="projects">
          Projects
        </h2>
        <div class="project-list">
          {projects.map(project => <Project project={project} />)}
        </div>
        <hr style={{ width: "80%", marginTop: "3rem" }} />
      </main>
      <footer>
        <a class="social-icons" href="https://www.linkedin.com/in/fudaylcavus/" aria-label="linked-in"><i class="fab fa-linkedin-in"></i></a>
        <button class="social-icons" onClick={copyToClipboard}><i class="fab fa-discord"></i></button>
        <a class="social-icons" href="https://1drv.ms/w/s!Ap90-bHyQDyi22W5KlGGnVtgdasT?e=lQao6h"><i class="fas fa-file"></i></a>
        <a class="social-icons" href="mailto:fudaylc@gmail.com"><i class="fas fa-envelope"></i></a>
        <a class="social-icons" href="https://www.github.com/fudaylcavus"><i class="fab fa-github"></i></a>
      </footer>
    </div>
  )
}


export default App
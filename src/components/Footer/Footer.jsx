import React from 'react'
import './Footer.css'
import github_icon from '../../assets/github_icon.png'
import linkedin_icon from '../../assets/linkedin_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-icons">
          <a href="https://www.linkedin.com/in/abdel-zahri-61093367/" target="_blank" rel="noopener noreferrer"> 
            <img src={linkedin_icon} alt="LinkedIn" />
            </a>
            <a href="https://github.com/AbdelZahri-dev?tab=repositories" target="_blank" rel="noopener noreferrer">
            <img src={github_icon} alt="GitHub" />
            </a>
        </div>
        <h2>Compétences</h2> <br />
        <ul>
        <li>HTML5, CSS3</li>
        <li>Javascript</li>
        <li>React.js</li>
        <li>Node.js</li>
        <li>SQL</li>
        <li>Jobs</li>
        <li>Adobe</li>
        <li>Figma</li>
        <li>Canva</li>
        <li>Blender</li>
       

        </ul>
        <div className="copyright-text"></div>
        <p className='copyright-text'>© 1997-2025 Netflix, Inc.</p>
    </div>
  )
}

export default Footer
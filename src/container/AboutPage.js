import React, { Component } from 'react'
import ResumeLink from '../component/ResumeLink'
import TechnologiesLister from './TechnologiesLister'

export default class AboutPage extends Component {

  constructor(props){
    super(props)
    this.state = {

    }
  }

  render(){
    return <div className="about-content top-page-item fade-in">
      <h1 className="about-title">About Me</h1>
      <div className="about-resume">
        <ResumeLink downloadText="Download My Resume"/>
      </div>
      <img src="profile_picture_for_now.jpg" className="about-picture" alt="About page main banner"/>
      <div className="about-text">
        If I have one true talent, it's my ability to learn. Since I was a kid I've latched on to every idea, every theory, every scrap of knowledge I could lay hands on. To my mind, the only answer to "Would you like to see how it's done?" is "Yes, yes, a thousand times yes." As a result, I posess a diverse set of skills. From software engineering to writing, from crisis counseling to wildlife care, I've made it a point to learn what I can, and integrate those skills into a human who is more than the sum of his many parts. I delight in being an active member of any team, always seeking how to improve both myself and the environment around me, striving to bring out the strengths in every peer in order to build something we can all be proud of.
      </div>    
      <TechnologiesLister />

    </div>
  }
}

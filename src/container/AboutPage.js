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
        Five years of engineering have made me into someone who appreciates an application developed with a future in mind. I am an avid learner, and nothing thrills me more than learning how to write more beautiful code, things that are easily understood and tested. This drive has served me well during my time in Amazon’s Prime Video Android org, where I have simplified our language acquisition processes, lead a team to redesign our landing pages, and reworked our app’s basic frameworks to bring the app to a more modern, extensible state.</div>
      <div className="about-text">
        I also believe it is important to be more than just an engineer. In my free time I climb mountains, write and edit books, and have a passion for volunteering that has seen me working in wildlife rehab, crisis counseling, and journalism. To me, the most valuable thing a person can bring to a team is passion, and the ability to create a work environment that is as friendly as it is cohesive and productive, where the people matter and that makes the product matter.</div>    
      <TechnologiesLister />

    </div>
  }
}

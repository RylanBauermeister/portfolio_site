import React, { Component } from 'react'
import SocialLinks from '../component/SocialLinks'

export default class ContactPage extends Component {

  constructor(props){
    super(props)
    this.state = {

    }
  }

  render(){
    return <div className="fade-in top-page-item">
      <h1 className="contact-banner">Well hi there.</h1>
      <div className="contact-subheader">Want to conect? Reach out on any social media platform! I'd love to chat about jobs, life, or just about anything you can think of.</div>
      <SocialLinks />
    </div>;
  }
}

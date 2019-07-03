import React, { Component } from 'react'

export default class MainBanner extends Component {

  constructor(props){
    super(props)
    this.state = {

    }
  }

  render(){
    return <div className="main-banner">
      <img className="banner-img" src="code_background_placeholder.jpg" alt="banner background"/>
      <div className="banner-text">
        Welcome
      </div>
    </div>;
  }
}

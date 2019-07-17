import React, { Component } from 'react'

export default class ProjectDisplay extends Component {

  constructor(props){
    super(props)
    this.state = {

    }
  }

  projectLink(){
    return <a className="project-link" href={this.props.link} target="_blank" rel="noopener noreferrer">
      <img className="project-image" src={this.props.imgsrc} alt={this.props.name + " link"}/>
    </a>
  }

  render(){
    return <div className={"project-display slide-in-" + this.props.direction}>
      {this.props.direction === "left" && this.projectLink()}
      <div className="project-description site-text">
        <h1 className="site-header">{this.props.name}</h1>
        <div>{this.props.description}</div>
      </div>


        {this.props.direction === "right" && this.projectLink()}

    </div>;
  }
}

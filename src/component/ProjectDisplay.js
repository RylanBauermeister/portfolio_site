import React, { Component } from 'react'

export default class ProjectDisplay extends Component {

  constructor(props){
    super(props)
    this.state = {

    }
  }

  render(){
    return <div className={"project-display slide-in-" + this.props.direction}>
      {this.props.direction === "left" && <img className="project-image" src={this.props.imgsrc}/>}
      <div className="project-description">
        <h2>{this.props.name}</h2>
        <div>{this.props.description}</div>
      </div>

      {this.props.direction === "right" && <img className="project-image" src={this.props.imgsrc}/>}

    </div>;
  }
}

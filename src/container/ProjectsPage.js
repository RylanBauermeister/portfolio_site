import React, { Component } from 'react'
import ProjectDisplay from '../component/ProjectDisplay'
import projectInfo from '../helperFiles/projectinfo'

export default class ProjectsPage extends Component {

  constructor(props){
    super(props)
    this.state = {

    }
  }

  generateDisplays() {
    return projectInfo.map((project, index) => {
      return <ProjectDisplay direction={index%2 === 0 ? "right" : "left"}
                              description={project.description}
                              imgsrc="favicon.ico"
                              name={project.name}
                            />

    })
  }

  render(){
    return <div className="top-page-item fade-in">
      {this.generateDisplays()}
    </div>
  }
}

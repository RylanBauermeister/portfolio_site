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
      return <div>
        <hr/>
        <ProjectDisplay direction={index%2 === 0 ? "right" : "left"}
                                description={project.description}
                                imgsrc={project.imgsrc || "favicon.ico"}
                                link={project.link}
                                name={project.name}
                              />
      </div>

    })
  }

  render(){
    return <div className="top-page-item fade-in">
      <h1 className="title">My Projects</h1>
      {this.generateDisplays()}
    </div>
  }
}

import React, { Component } from 'react'
import ProjectDisplay from '../component/ProjectDisplay'
import projectInfo from '../helperFiles/projectinfo'

export default class ProjectsPage extends Component {

  constructor(props){
    super(props)
    this.state = {

    }
  }

  generateWorkProjectDisplays() {
    return this.generateProjects('workProjectInfo')
  }

  generateSchoolProjectDisplays() {
    return this.generateProjects('schoolProjectInfo')
  }

  generateProjects(project) {
    return projectInfo[project].map((project, index) => {
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
      <h1 className="title">My Work Projects</h1>
      {this.generateWorkProjectDisplays()}
      <br/>
      <h1 className="title">My School Projects</h1>
      {this.generateSchoolProjectDisplays()}
    </div>
  }
}

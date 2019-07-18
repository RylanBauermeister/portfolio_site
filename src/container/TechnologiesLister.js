import React, { Component } from 'react'
import technologies from '../helperFiles/technologies'
import TechSelector from '../component/TechSelector'

export default class TechnologiesLister extends Component {

  constructor(props){
    super(props)
    this.state = {
      selected: null
    }

    this.setSelected = this.setSelected.bind(this)
  }

  renderTechnologies(){
    return technologies.filter(tech => {
      return this.state.selected === null ? true : tech.stack.includes(this.state.selected)
    }).map(tech => <img className="about-tech-logo" src={"logos/tools/"+tech.logo} alt={tech.name}/>)
  }

  setSelected(selected){
    if(this.state.selected === selected){
      this.setState({selected: null})
    } else {
      this.setState({selected})
    }

  }

  render(){
    return <div className="about-technologies">
      <h2 className="subheader">Technologies</h2>
      <div className="tech-selector-container">
        <TechSelector type="front" setSelected={this.setSelected} selected={this.state.selected} text="Front End" />
        <TechSelector type="back" setSelected={this.setSelected} selected={this.state.selected} text="Back End" />
        <TechSelector type="framework" setSelected={this.setSelected} selected={this.state.selected} text="Frameworks" />
      </div>
      {this.renderTechnologies()}
    </div>;
  }
}

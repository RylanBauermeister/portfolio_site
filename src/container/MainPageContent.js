import React, { Component } from 'react'
import ProjectSlider from './ProjectSlider'
import BlogSlider from './BlogSlider'
import GetInTouch from '../component/GetInTouch'
import TrackVisibility from 'react-on-screen';

export default class COMPONENT_NAME extends Component {

  constructor(props){
    super(props)
    this.state = {

    }
  }

  render(){
    return <div className="main-content">
      <TrackVisibility once partialVisibility>
        {<ProjectSlider />}
      </TrackVisibility>
      <TrackVisibility once partialVisibility>
        <BlogSlider />
      </TrackVisibility>
      <TrackVisibility once partialVisibility>
        <GetInTouch />
      </TrackVisibility>

    </div>;
  }
}

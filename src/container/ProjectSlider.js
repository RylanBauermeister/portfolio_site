import React from 'react'

const ProjectSlider = (props) => {
    return <div className="slider-holder">
      { props.isVisible && <div className={"slider" + (props.isVisible ? " info-slide-in info-slide-in-right" : "")}>
      <div className="slider-text slider-content">
        <h2 className="slider-header">Projects</h2>
        <div className="description">
          View my projects!
        </div>
      </div>
      <div className="slider-image slider-content">
        IMAGE PLACEHOLDER
      </div>
    </div>}
  </div>
}

export default ProjectSlider

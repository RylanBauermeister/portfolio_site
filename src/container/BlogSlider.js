import React from 'react'

const BlogSlider = (props) => {
    return <div className="slider-holder">
      { props.isVisible && <div className={"slider" + (props.isVisible ? " slide-in slide-in-left" : "")}>
      <div className="slider-image slider-content">
        {props.isVisible ? "Hi!" : "Mrrr"}
      </div>
      <div className="slider-text slider-content">
        <h2 className="slider-header">My Blog</h2>
        <div className="description">
          Read my posts!
        </div>
      </div>
    </div> }
  </div>
}

export default BlogSlider

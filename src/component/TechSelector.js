import React from 'react'

 const TechSelector = (props) => {
  return <div
    className={"subheader tech-selector " + (props.selected === props.type || props.selected === null ? '' : 'faded')}
    onClick={() => props.setSelected(props.type)}>
    {props.text}
  </div>;
}

export default TechSelector

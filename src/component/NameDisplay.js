import React from 'react'

 const NameDisplay = (props) => {
    return <div className="nameContainer">
      <div className="nametext">
        <div className="firstNameHeader">{props.firstname}</div>
        <div className="lastNameHeader">{props.lastname}</div>
      </div>
    </div>;
}

export default NameDisplay;

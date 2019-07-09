import React from 'react'
import {Switch, Link} from 'react-router-dom'

 const NameDisplay = (props) => {
    return <Switch>
      <div className="nameContainer">
        <div className="nametext">
          <Link to="/">
            <div className="name-header firstNameHeader">{props.firstname}</div>
            <div className="name-header lastNameHeader">{props.lastname}</div>
          </Link>
        </div>
      </div>
    </Switch>
}

export default NameDisplay;

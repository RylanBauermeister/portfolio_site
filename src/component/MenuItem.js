import React from 'react'
import {Switch, NavLink} from 'react-router-dom'

const MenuItem = ({item}) => {

    return <Switch>
      <div className={"menu-link " + `menu-${item}`}>
        <NavLink to={"/" + item.toLowerCase()} className="menu-anchor" activeClassName="selected-menu-item">{item}</NavLink>
      </div>
    </Switch>
}

export default MenuItem

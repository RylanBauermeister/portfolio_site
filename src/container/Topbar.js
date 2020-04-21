import React, { Component } from 'react'
import NameDisplay from '../component/NameDisplay'
import MenuItem from '../component/MenuItem'
import SidebarMenu from '../component/SidebarMenu'

export default class Topbar extends Component {

  constructor(props) {
    super(props)
  }

  render(){
    return <div className="topbar">
      <NameDisplay firstname="Rylan" lastname="Bauermeister"/>
      {this.props.menuItems.map(menuItem => <MenuItem item={menuItem}/>)}
    </div>;
  }
}

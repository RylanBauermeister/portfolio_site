import React, { Component } from 'react'
import { Button} from 'semantic-ui-react'

export default class COMPONENT_NAME extends Component {

  constructor(props){
    super(props)
    this.state = {
      visible: false
    }

    this.sidebar = React.createRef()
    this.showSidebar = this.showSidebar.bind(this)
    this.hideSidebar = this.hideSidebar.bind(this)
  }

  showSidebar(){
    this.setState({visible: true})
    this.sidebar.current.style.right = "0";
  }

  hideSidebar(){
    this.setState({visible: false})
    this.sidebar.current.style.right = "-50vw";
  }

  render(){

    let {visible} = this.state;

    return (
      <div>
        <Button onClick={visible ? this.hideSidebar : this.showSidebar}>Hello</Button>
        <div ref={this.sidebar} className="sidebar-menu">
          <Button>Go somewhere else!</Button>
        </div>
      </div>
    )
  }
}

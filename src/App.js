import React from 'react'
import Topbar from './container/Topbar'
import MainPage from './container/MainPage'
import AboutPage from './container/AboutPage'
import ProjectsPage from './container/ProjectsPage'
import { Switch, Route } from "react-router-dom";

import './App.css'

const MENU_ITEMS = ["Contact", "Blog", "Projects", "About"]

function App() {
  return (
    <div className="App">
      <Topbar menuItems={MENU_ITEMS}/>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/about" component={AboutPage}/>
        <Route exact path="/projects" component={ProjectsPage}/>
      </Switch>
    </div>
  );
}

export default App;

import React from 'react'
import Topbar from './container/Topbar'
import MainBanner from './container/MainBanner'
import MainPageContent from './container/MainPageContent'

import './App.css'

const MENU_ITEMS = ["Contact", "Blog", "Projects", "About"]

function App() {
  return (
    <div className="App">
      <Topbar menuItems={MENU_ITEMS}/>
      <MainBanner />
      <MainPageContent />
    </div>
  );
}

export default App;

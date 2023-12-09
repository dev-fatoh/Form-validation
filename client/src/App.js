import { useState } from 'react';

import Home from "./components/Home";
import Profile from "./components/Profile.jsx";
import "./main.scss";

const App = () => {
  return (
    <div className='app'>

      <Home />
      <Profile />

    </div>
  )
}

export default App

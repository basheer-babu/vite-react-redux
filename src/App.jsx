import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { CakeView } from "./features/cake/cakeView";
import { IcecreamView } from "./features/icecream/IcecreamView";
import { UserView } from "./features/user/UserView";

function App() {
  
  return (
    <>
      <CakeView />
      <IcecreamView />
      <UserView />
    </>
  )
}

export default App

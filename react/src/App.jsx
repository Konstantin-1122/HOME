import { createContext, useState } from 'react'
import './App.css'
import UseRefComponent from './component/UseRefComponent'
import ContextProvider from './component/ContextProvider'
import UserStatus from './component/UserStatus'


function App() {


  return (
    <>

      <ContextProvider>
  <div>
    <UserStatus/>
  </div>
</ContextProvider>
     <UseRefComponent></UseRefComponent>
    </>
  )
}

export default App

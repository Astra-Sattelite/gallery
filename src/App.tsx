import { useState } from 'react'
import './App.sass'
import { TestComp } from './components/testComp/testComp'

const App: React.FC = () => {

  return (
    <div className="App">
      <TestComp />
    </div>
  )
}

export default App

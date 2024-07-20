import React from 'react'
import Navbar from './components/Navbar'
import "./App.css"
import AddTodo from './components/AddTodo'
const App = () => {
  return (
    <div>
      <Navbar/>
      <AddTodo/>
    </div>
  )
}

export default App
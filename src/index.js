import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import App from './App'
import UserInformation from './UserInformation'
import SearchBar from './components/SearchBar/SearchBar'

const ReactRouterSetup = () => {
  return (
  <div>
    <Router>
      <Routes>
        <Route exact path = '/' element={<App />} />
        <Route path = '/user/:username' element={<UserInformation />} />
      </Routes>
    </Router>
  </div>
  )
}

ReactDom.render(<ReactRouterSetup/>, document.getElementById('root'));

export default ReactRouterSetup
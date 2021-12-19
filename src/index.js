import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import App from './App'
import UserInformation from './UserInformation'
import NotFoundPage from './NotFoundPage'

const ReactRouterSetup = () => {
  return (
  <div>
    <Router>
      <Routes>
        <Route exact path = '/' element={<App />} />
        <Route path = '/user/:username' element={<UserInformation />} />
        <Route path = '/404' element={<NotFoundPage />} />
      </Routes>
    </Router>
  </div>
  )
}

ReactDom.render(<ReactRouterSetup/>, document.getElementById('root'));

export default ReactRouterSetup
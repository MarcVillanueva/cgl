import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom'
import App from './App'
import Leagues from './Leagues'

const ReactRouterSetup = () => {
  return <Router>
    <Routes>
      <Route exact path = '/' element={<App />} />
      <Route path = '/leagues/:userId' element={<Leagues />} />
    </Routes>
  </Router>
}

ReactDom.render(<ReactRouterSetup/>, document.getElementById('root'));

export default ReactRouterSetup
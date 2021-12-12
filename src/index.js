import React from 'react'
import ReactDom from 'react-dom'
import PlayerSearch from "./components/PlayerSearch/PlayerSearch";

function Greeting(){
  return <PlayerSearch></PlayerSearch>
  // return <h4>This is John and this is my first component</h4>
}

ReactDom.render(<Greeting/>, document.getElementById('root'));
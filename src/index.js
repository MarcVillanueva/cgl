import React from 'react'
import ReactDom from 'react-dom'
import PlayerSearch from "./components/PlayerSearch/PlayerSearch";

function Greeting(){
  return <PlayerSearch></PlayerSearch>
}

ReactDom.render(<Greeting/>, document.getElementById('root'));
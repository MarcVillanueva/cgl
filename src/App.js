import React, {Component} from 'react'
import FormPlayerSearch from './components/FormPlayerSearch/FormPlayerSearch'

class App extends Component {
    state = {
        playerInfo: []
    }

    render() {
    return (
        <FormPlayerSearch></FormPlayerSearch>
    );
    }


}

export default App;
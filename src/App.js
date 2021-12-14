import React, {Component} from 'react';
import FormPlayerSearch from "./components/FormPlayerSearch/FormPlayerSearch";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends Component {
    state = {
        playerInfo: []
    }

    render() {
    return (
        <Router>
            <FormPlayerSearch></FormPlayerSearch>
        </Router>
    );
    }


}

export default App;
import React, {Component} from 'react';
import PlayerSearch from "./components/PlayerSearch/PlayerSearch";

class App extends Component {
    state = {
        playerInfo: []
    }

    componentDidMount() {
        console.log('componentDidMount() lifecycle');
        fetch('https://api.sleeper.app/v1/user/marcvillanueva')
        .then(res => res.json())
        .then((data) => {
            this.setState({ playerInfo: data })
            console.log(data)
        })
        .catch(console.log)
    }

    render() {
    return (
        <PlayerSearch></PlayerSearch>
    );
    }


}

export default App;
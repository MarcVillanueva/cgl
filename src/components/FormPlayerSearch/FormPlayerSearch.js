import React from 'react'

export default class FormPlayerSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    username: ""
  }
  }

  render() {
    return  (
      <div>
        <input type="text" value={this.state.username} onChange={this.handleInputChanged.bind(this)} onKeyDown={this.handleKeyDown.bind(this)}/>
        <button onClick={this.handleSubmit.bind(this)}>
          Submit
        </button>
      </div>
    );
  }

  handleInputChanged(event) {
    this.setState({
      username: event.target.value
    });
  }


  handleSubmit() {
    var username = this.state.username;

    fetch('https://api.sleeper.app/v1/user/' + username)
    .then(res => res.json())
    .then((data) => {
        this.setState({ playerInfo: data })
        console.log(data)
    })
    .catch(console.log)
  }

    handleKeyDown(event) {
    if (event.key === 'Enter') {
      this.handleSubmit();
    }
  }

}
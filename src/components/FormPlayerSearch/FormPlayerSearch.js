import React from 'react';

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
        <input type="text" value={this.state.username} onChange={this.handleInputChanged.bind(this)}/>
        <button>
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

}
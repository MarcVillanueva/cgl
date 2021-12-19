import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './FormPlayerSearch.css'
import SearchBar from '../SearchBar/SearchBar'
import SleeperBackgroundImage from '../../assets/sleeper_background.png'

class FormPlayerSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    username: ""
  }
  }

  render() {
      return  (
        <div>
          <SearchBar navigation={this.props.navigation} params={this.props.params}></SearchBar>
          <br />
          <img
            src={SleeperBackgroundImage}
            alt="new"
            className="landing-background"
          />
        </div>
    );
  }
  
}
// Wrapping FormPlayerSearch class in a function component to use useNavigate hook. 
// TODO: Might need to update this code. See https://reactnavigation.org/docs/use-navigation/ 
export default function(props) {
  const navigation = useNavigate();
  const params = useParams();
  return <FormPlayerSearch {...props} navigation={navigation} params={params}/>;
}
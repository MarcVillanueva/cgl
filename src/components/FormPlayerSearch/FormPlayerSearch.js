import React from 'react'
import { useNavigate } from "react-router-dom"
import "./FormPlayerSearch.css"
import SearchBar from '../SearchBar/SearchBar'

class FormPlayerSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    username: ""
  }
  }

  render() {
      return  (
        <SearchBar navigation={this.props.navigation}></SearchBar>
    );
  }
  
}
// Wrapping FormPlayerSearch class in a function component to use useNavigate hook. 
// TODO: Might need to update this code. See https://reactnavigation.org/docs/use-navigation/ 
export default function(props) {
  const navigation = useNavigate();
  return <FormPlayerSearch {...props} navigation={navigation} />;
}
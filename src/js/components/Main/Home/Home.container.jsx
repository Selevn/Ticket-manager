import React from 'react';
import Home from './Home.jsx'


class HomeContainer extends React.Component {

  constructor() {
    super();
    this.state = {inputText: "", concerts: [], helpList: []};
    this.onInputChange = this.onInputChange.bind(this);
  }

  componentDidMount() {
    this.props.getConcerts(this.getConcerts.bind(this));
  }

  getConcerts(c) {
    this.setState({
      concerts: c
    })
  }

  similarConcerts(val) {
    if (val.length > 1) {
      return val ?
          this.state.concerts.filter((i) => i.band.toUpperCase().includes(val.toUpperCase())) :
          []
    } else {
      return val ?
          this.state.concerts.filter((i) => i.band.toUpperCase().startsWith(val.toUpperCase())) :
          []
    }
  }

  onInputChange(event) {
    this.setState({
      inputText: event.target.value,
      helpList: this.similarConcerts(event.target.value)
    });
  }

  render() {
    return (
        <Home searchText={this.state.inputText} onInputChange={this.onInputChange} concerts={this.state.helpList}/>)
  }


}

export default HomeContainer;
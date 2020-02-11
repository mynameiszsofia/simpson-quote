import React from 'react';
import './App.css';
import Simpson from './components/Simpson';
import axios from 'axios';

const sampleQuote = {
  image:'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FFrankGrimes.png?1497567511887',
  quote: 'I live in a single room above a bowling alley...and below another bowling alley.',
  character: 'Frank Grimes'
};
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: sampleQuote
    };
    this.getQuote = this.getQuote.bind(this);
  }
  getQuote() {
    // Send the request
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes?count=3')
      // Extract the DATA from the received response
      .then(response => response.data)
      // Use this data to update the state
      .then(data => {
        console.log(data);
        this.setState({
          quote: data[0],
        });
    });
  }
  render() {
    return (
      <div className="App">
        <Simpson quote={this.state.quote} />
        <button type="button" onClick={this.getQuote}>Get quote</button>
      </div>
    );
  }
}

export default App;

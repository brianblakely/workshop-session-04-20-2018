import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";

import Presentation from './Presentation'

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentDogImage: ""
    }
  }

  downloadDogImage = () => {
    axios.get('https://dog.ceo/api/breeds/image/random')
      .then(response => {
        this.setState({ currentDogImage: response.data.message })
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  componentDidMount() {
    this.downloadDogImage();
  }

  render() {
    return (
      <div className="App">
          <Presentation imageUrl={this.state.currentDogImage} />
          <button onClick={this.downloadDogImage}>reload</button>
      </div>
    );
  }
}

export default App;

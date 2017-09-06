import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from './Header';
import Sidebar from './Sidebar';
import ImageCollection from './ImageCollection';
import ImageDetail from './ImageDetail';

const ImageCollectionWrapper = (props) => (
  <ImageCollection images={props.images} />
)

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      images: []
    }
  }

  componentDidMount() {
    // make API calls here

  fetch('http://circuslabs.net/~ryan.rodd/php/project16/api/?data=allimages')
        .then(response => response.json())
    .then(data => {
      this.setState({
        images: data
      })
    })
  }

  render() {

    return (
      <BrowserRouter>

      <div className="App">
       
        <Header />
       
        <Sidebar />

        <div className="App-Main">
            <Switch>
              <Route path="/" exact 
                component={() => ImageCollectionWrapper(this.state.images)} />
              <Route path="/image/:id" component={ImageDetail} />
            </Switch>
        </div>

      </div>
      </BrowserRouter>
      
    );
  }
}

export default App;

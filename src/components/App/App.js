import React, { Component } from 'react';
import './App.css';
import '../Header/Header';
import '../About/About';
import '../Contact/Contact';
import '../Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;

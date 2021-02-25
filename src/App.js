import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from './pages/main';
//import Col from './components/Col';
//import Display from './components/Display';
//import SearchForm from './components/SeachForm';
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
//import API from './utils/API';
import "./App.css";


class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Wrapper>
            <Navbar />
            <Route exact path="/" component={Main} />
            <Route exact path="/main" component={Main} />
          </Wrapper>
        </div>
      </Router>
    );
  }
}

export default App;
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from './pages/main';
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
import "./App.css";

function App() {
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

export default App;
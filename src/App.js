import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {Route, Link} from 'react-router-dom'

const HatsPage = (props) => (
  <div>
    <Link to={`${props.match.url}/13`}>Topics</Link>
    <h1>HATS PAGE</h1>
  </div>
)

const HatsPageDetail = (props) => (
  <div>
    <Link to={`${props.match.url}/17`}>Topics</Link>
    <h1>HATS PAGE {props.match.params.topicid}</h1>
  </div>
)

function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/hats' component={HatsPage} />
      <Route exact path='/hats/:topicid' component={HatsPageDetail} />
    </div>
  );
}

export default App;

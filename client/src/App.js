import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import Landing from './components/landing/landing';
import Store from './store';
import Projects from './components/projects/projects';
import Contact from './components/contact/contact';

function App() {
  return (
    <Router>
      <Store>
        <div className = 'App'>

          <Route path =  '/'  exact strict component = { Landing } />

          <Route path =  '/projects'  exact strict component = { Projects } />

          <Route path =  '/contact'  exact strict component = { Contact } />

        </div>
      </Store>
    </Router>
  );
}

export default App;

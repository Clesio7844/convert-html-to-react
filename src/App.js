import React from 'react';

import './App.css';
import Home from './pages/Homes';
import About from './pages/About';
import Services from './pages/Service';
import Single from './pages/Single';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/service' component={Services} />
          <Route exact path='/single' component={Single} />
          <Route exact path='/gallery' component={Gallery} />
          <Route exact path='/contat' component={Contact} />
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;

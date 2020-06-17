import React from 'react';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import './Assets/css/default.min.css';

import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Homepage from './components/pages/homePage';
import Books from './components/pages/books';

function App() {
  return (
    <Router>
    <div className="App">
    <Header />
        <Route exact path="/" component={Homepage} />
        <Route exact path="/books" component={Books} />
    <Footer />
    </div>
    </Router>
  );
}

export default App;

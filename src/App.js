
import './App.css';
import React from 'react'
import MovieCard from './components/movies/MovieCard';
import Movies from './components/pages/Movies';
import Header from './components/interface/Header'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import List from './components/movies/List'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Erreur from './components/pages/Erreur'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
 


  return (
    
    <Router>
      <div className='App'>
        <Header />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/List' component={List}/>
          <Route exact path='/Movies' component={Movies}/>
          <Route exact path='/Details' component={MovieCard}/>
          <Route exact path='/about' component={About}/>
          <Route component={Erreur}/>
        </Switch>
        
      </div>
    </Router>
    
  );
}
  


export default App;

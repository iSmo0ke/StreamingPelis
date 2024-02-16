import React, { useState } from 'react';
import './App.css';
import { Provider } from 'react'; 
import store from "./redux/store";
import Header from './components/shared/header/header';
import Footer from './components/shared/footer/footer';
import Home from './components/screens/Home/home';
import PopularSeries from './components/screens/series/series';
import PopularMovies from './components/screens/movies/movies';

function App() {

  const [currentScreen, setCurrentScreen] = useState('home');

  const handleHomeClick = () => {
    setCurrentScreen('home');
  }

  const handleSeriesClick = () => {
    setCurrentScreen('series');
  };

  const handleMoviesClick = () => {
    setCurrentScreen('movies');
  }


  return (
    <Provider store={store}>
    <div className="App">
      <Header handleHomeClick={handleHomeClick}/>
      
      {currentScreen === 'home' && <Home handleSeriesClick={handleSeriesClick} handleMoviesClick={handleMoviesClick}/>}
      {currentScreen === 'series' && <PopularSeries/>}
      {currentScreen === 'movies' && <PopularMovies/>} 
      

      <Footer/>
    </div>
    </Provider>
  );
}

export default App;

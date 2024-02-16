import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/shared/header';
import Footer from './components/shared/footer';
import LoadingScreen from './components/screens/loadingScreen';
import ErrorScreen from './components/screens/errorScreen';
import Home from './components/screens/home';
import Series from './components/screens/series';
import Movies from './components/screens/movies';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/series" component={Series} />
          <Route exact path="/movies" component={Movies} />
          <Route path="/loading" component={LoadingScreen} />
          <Route path="/error" component={ErrorScreen} />
          <Route component={ErrorScreen} /> {/* Ruta predeterminada para manejar rutas no encontradas */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

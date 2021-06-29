import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Body from './Components/Body';
import Footer from './Components/Footer';
import Register from './Components/Registration';
import Login from './Components/Login';
import Profile from './Components/Profile';
import Admin from './Components/Admin';
import MovieByID from './Components/MovieByID';

import ROUTES from './Const/Routes';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Switch>
            <Route exact path={ROUTES.HOME}>
              <Body />
            </Route>
            <Route exact path={ROUTES.REGISTER}>
              <Register />
            </Route>
            <Route exact path={ROUTES.LOGIN}>
              <Login />
            </Route>
            <Route exact path={ROUTES.PROFILE}>
              <Profile />
            </Route>
            <Route exact path={ROUTES.ADMIN}>
              <Admin />
            </Route>
            <Route exact path={ROUTES.MOVIE_ID}>
              <MovieByID />
            </Route>
          </Switch>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;

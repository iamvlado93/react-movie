import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Body from './Components/Body';
import Footer from './Components/Footer';
import Register from './Components/Registration';
import Login from './Components/Login';
import Profile from './Components/Profile';

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
            <Route path={ROUTES.REGISTER}>
              <Register />
            </Route>
            <Route path={ROUTES.LOGIN}>
              <Login />
            </Route>
            <Route path={ROUTES.PROFILE}>
              <Profile />
            </Route>
          </Switch>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;

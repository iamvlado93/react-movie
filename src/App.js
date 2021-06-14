import './App.css';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';

import ROUTES from './Const/Routes';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className='content'>
          <Switch>
            <Route exact path={ROUTES.HOME}>
              <Body />
            </Route>
            <Route path={ROUTES.SIGN_UP}>
              <SignUp />
            </Route>
            <Route path={ROUTES.SIGN_IN}>
              <SignIn />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

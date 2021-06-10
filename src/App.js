import './App.css';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className='content'>
          <Switch>
            <Route exact path='/'>
              <Body />
            </Route>
            <Route path='/signup'>
              <SignUp />
            </Route>
            <Route path='/signin'>
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

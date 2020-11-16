import './App.css';
import './style/bootstrap.min.css';
import logo from './assets/logo-brimo.png';
import Login from './component/login';
import Home from './pages/bpba/home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route path="/bpba/home">
              <Home />
            </Route>
            <Route path="/">
              <img src={logo} className="login-logo" alt="Brimo"/>
              <div className="auth-wrapper">
                <div className="auth-inner">
                  <Login />
                </div>
              </div>
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

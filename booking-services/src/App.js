import './App.css';
import './style/bootstrap.min.css';
import BPBAHome from './pages/bpba/bpba-home';
import Login from './pages/login';
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
              <BPBAHome />
            </Route>
            <Route path="/">
              <Login />
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

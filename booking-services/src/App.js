import './App.css';
import './style/bootstrap.min.css';
import BPBAHome from './pages/bpba/bpba-home';
import DetailPCu from './pages/bpba/detail-user-pcu';
import DetailPBA from './pages/bpba/detail-user-pba';
import DetailPBAM from './pages/bpba/detail-user-pbam';
import TambahUser from './pages/bpba/tambahUser';
import EditUser from './pages/bpba/editUser';
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

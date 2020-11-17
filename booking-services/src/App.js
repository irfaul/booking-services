import './App.css';
import './style/bootstrap.min.css';
import BPBAHome from './pages/bpba/bpba-home';
import DetailPCu from './pages/bpba/detail-user-pcu';
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
            <Route path="/bpba/detailpcu">
              <DetailPCu />
            </Route>
            <Route path="/bpba/edituser">
              <EditUser />
            </Route>
            <Route path="/bpba/tambahuser">
              <TambahUser />
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

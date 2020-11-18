import "./App.css";
import BPBAHome from "./pages/bpba/bpba-home";
import Login from "./pages/login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DetailUserPba from "./pages/bpba/detail-user-pba";
import Tambah from "./pages/bpba/tambahUser";
import TambahLibur from "./pages/bpba/tambah-libur";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/bpba/tambah-libur" exact>
            <TambahLibur />
          </Route>
          <Route path="/bpba/tambah-user" exact>
            <Tambah />
          </Route>
          <Route path="/bpba/detail-user/:id" exact>
            <DetailUserPba />
          </Route>
          <Route path="/bpba/home" exact>
            <BPBAHome />
          </Route>
          <Route path="/" exact>
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

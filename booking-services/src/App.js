import "./App.css";
import BPBAHome from "./pages/bpba/bpba-home";
import Login from "./pages/login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Tambah from "./pages/bpba/tambahUser";
import TambahLibur from "./pages/bpba/tambah-libur";
import DetailUserPbam from "./pages/bpba/detail-user-pbam";
import Edit from "./pages/bpba/editUser";
import DaftarLibur from "./pages/bpba/daftar-libur";
import EditLibur from "./pages/bpba/edit-libur";
import AturJadwal from "./pages/pbam/atur-jadwal"
import PBAMHome from "./pages/pbam/pbam-home";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/bpba/edit-libur/:id" exact component={EditLibur} />
          <Route path="/bpba/daftar-libur" exact component={DaftarLibur} />
          <Route
            path="/bpba/detail-user/edit-user/:id"
            exact
            component={Edit}
          />
          <Route path="/bpba/tambah-libur" exact component={TambahLibur} />
          <Route path="/bpba/tambah-user" exact component={Tambah} />
          <Route
            path="/bpba/detail-user/:id"
            exact
            component={DetailUserPbam}
          />
          <Route path="/bpba/home" exact component={BPBAHome} />
          <Route path="/" exact component={Login} />
          <Route path="/pbam/home" exact component={PBAMHome} />
          <Route path="/pbam/atur-jadwal" exact component={AturJadwal} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

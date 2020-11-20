import "./App.css";
import BPBAHome from "./pages/bpba/bpba-home";
import Login from "./pages/login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DetailUserPba from "./pages/bpba/detail-user-pba";
import Tambah from "./pages/bpba/tambahUser";
import TambahLibur from "./pages/bpba/tambah-libur";
import AturLibur from "./pages/bpba/atur-libur";
import EditLibur from './pages/bpba/edit-libur';
import AturJadwal from './pages/pbam/atur-jadwal';
import HomePBAM from './pages/pbam/pbam-home';
import LaporanPBA from './pages/pbam/laporan-kinerja-pba';

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
          <Route path="/bpba/atur-libur" exact>
            <AturLibur />
          </Route>
          <Route path="/bpba/edit-libur/:id" exact>
            <EditLibur />
          </Route>
          <Route path="/pbam/atur-jadwal" exact>
            <AturJadwal />
          </Route>
          <Route path="/pbam/home" exact>
            <HomePBAM />
          </Route>
          <Route path="/pbam/laporan-pba" exact>
            <LaporanPBA />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

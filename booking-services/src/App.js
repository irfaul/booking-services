import "./App.css";
import BPBAHome from "./pages/bpba/bpba-home";
import Login from "./pages/login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Tambah from "./pages/bpba/tambahUser";
import TambahLibur from "./pages/bpba/tambah-libur";
<<<<<<< HEAD
import DetailUserPbam from "./pages/bpba/detail-user-pbam";
import Edit from "./pages/bpba/editUser";
import DaftarLibur from "./pages/bpba/daftar-libur";
import EditLibur from "./pages/bpba/edit-libur";
=======
import AturLibur from "./pages/bpba/atur-libur";
import EditLibur from './pages/bpba/edit-libur';
import AturJadwal from './pages/pbam/atur-jadwal';
import HomePBAM from './pages/pbam/pbam-home';
import LaporanPBA from './pages/pbam/laporan-kinerja-pba';
>>>>>>> 481aac36a9f0f8a8a9617954810861f93bf9ea05

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
<<<<<<< HEAD
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
=======
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
>>>>>>> 481aac36a9f0f8a8a9617954810861f93bf9ea05
        </Switch>
      </Router>
    </div>
  );
}

export default App;

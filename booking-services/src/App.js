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
import AturPba from "./pages/pbam/atur-pba";
import PBAHome from "./pages/pba/pba-home";
import LaporanKinerjaPba from "./pages/pbam/laporan-kinerja-pba";
import PCUHome from "./pages/pcu/pcu-home";
import TambahBooking from "./pages/pcu/formulir-booking";
import Pemberitahuan from "./pages/pba/pemberitahuan"
import RiwayatPertemuan from "./pages/pba/detail-riwayat-pertemuan";
import DetailPertemuan from "./pages/pcu/detail-pertemuan";
import EditPertemuan from "./pages/pcu/edit-pertemuan";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          {/*Route BPBA*/}
          <Route path="/bpba/home" exact component={BPBAHome} />
          <Route path="/bpba/tambah-user" exact component={Tambah} />
          <Route path="/bpba/detail-user/:id" exact component={DetailUserPbam}/>
          <Route path="/bpba/detail-user/edit-user/:id" exact component={Edit} />
          <Route path="/bpba/daftar-libur" exact component={DaftarLibur} />
          <Route path="/bpba/tambah-libur" exact component={TambahLibur} />
          <Route path="/bpba/edit-libur/:id" exact component={EditLibur} />
          


          {/*Route PBAM*/}
          <Route path="/pbam/home" exact component={PBAMHome} />
          <Route path="/pbam/atur-jadwal" exact component={AturJadwal} />
          <Route path="/pbam/laporan-kinerja-pba" exact component={LaporanKinerjaPba} />
          <Route path="/pbam/atur-pba" exact component={AturPba} />

          {/*Route PBA*/}
          <Route path="/pba/home" exact component={PBAHome} />
          <Route path="/pba/riwayat-pertemuan" exact component={RiwayatPertemuan}/>
          <Route path="/pba/pemberitahuan" exact component={Pemberitahuan} />

          {/*Route PCU*/}
          <Route path="/pcu/home" exact component={PCUHome}/>
          <Route path="/pcu/tambah-booking" exact component={TambahBooking}/>
          <Route path="/pcu/detail-pertemuan" exact component={DetailPertemuan}/>
          <Route path="/pcu/edit-pertemuan" exact component={EditPertemuan} />


          {/*Login*/}
          <Route path="/" exact component={Login} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;

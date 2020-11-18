import React, {Component} from 'react';
import '../../style/bpba-tambah.css';

class EditLibur extends Component {
    render() {

       return (
        <div>
            <h3>Edit Libur</h3>
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <form>
                        <div className="form-group">
                            <label>Nama</label>
                            <input type="text" className="form-control" placeholder="Masukkan email" />
                        </div>

                        <div className="form-group">
                            <label>Tanggal Mulai</label>
                            <input type="date" className="form-control" placeholder="Masukkan password" />
                        </div>

                        <div className="form-group">
                            <label>Tanggal Selesai</label>
                            <input type="date" className="form-control" placeholder="Masukkan password" />
                        </div>

                        <button className="btn btn-login">Simpan</button>
                    </form>
                </div>
            </div>
        </div>
       )
    }
}

export default EditLibur;
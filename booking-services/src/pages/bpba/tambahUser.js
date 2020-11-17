import React, {Component} from 'react';
import Select from 'react-select';
import '../../style/bpba-tambah.css';

class Tambah extends Component {
    render() {
        const options = [
            { value: 'pbam', label: 'PBAM' },
            { value: 'pba', label: 'PBA' },
            { value: 'pcu', label: 'PCU' }
        ]

       return (
        <div>
            <h3>Tambah User</h3>
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <form>
                        <div className="form-group">
                            <label>Nama</label>
                            <input type="email" className="form-control" placeholder="Masukkan email" />
                        </div>

                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" placeholder="Masukkan password" />
                        </div>

                        <div className="form-group">
                            <label>Tipe User</label>
                            <Select options={options} />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Masukkan password" />
                        </div>

                        <button className="btn btn-login">Simpan</button>
                    </form>
                </div>
            </div>
        </div>
       )
    }
}

export default Tambah;
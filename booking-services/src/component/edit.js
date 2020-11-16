import React, {Component} from 'react';

class Edit extends Component {
    render() {
       return (
        <div>
            <h3>Edit User</h3>
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <form>
                        <div className="form-group">
                            <label>Nama</label>
                            <input type="email" className="form-control" placeholder="Masukkan email" />
                        </div>

                        <div className="form-group">
                            <label>Email</label>
                            <input type="password" className="form-control" placeholder="Masukkan password" />
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

export default Edit;

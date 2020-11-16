import React, {Component} from 'react';

class Login extends Component {

    render() {
       return (
        <form>
            <h3>Login</h3>

            <div className="form-group">
                <label>Emailku</label>
                <input type="email" className="form-control" placeholder="Masukkan email" />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Masukkan password" />
            </div>

            <button className="btn btn-login">Login</button>
        </form>
       )
    }
}

export default Login;
import React, {Component} from 'react';

class LoginForm extends Component {

    render() {
       return (
        <form>
            <h3>Login</h3>

            <div className="form-group">
                <label>Email</label>
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

export default LoginForm;
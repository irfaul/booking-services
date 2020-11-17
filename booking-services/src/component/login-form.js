import React, {Component} from 'react';
import axios from 'axios';

class LoginForm extends Component {

    handleSubmit = e => {
        e.preventDefault();
        
        const data = {
            email: this.email,
            password: this.password
        }

        axios.post('guest/login', data)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    };

    render() {
       return (
        <form onSubmit={this.handleSubmit}>
            <h3>Login</h3>

            <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" placeholder="Masukkan email" 
                    onChange= {e => this.email = e.target.value}/>
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Masukkan password" 
                    onChange= {e => this.password = e.target.value}/>
            </div>

            <button className="btn btn-login">Login</button>
        </form>
       )
    }
}

export default LoginForm;
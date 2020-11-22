import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import localforage from 'localforage';
import swal from 'sweetalert';

const LoginForm = (props) => {

    let history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            email: email,
            password: password
        };

        axios.post('guest/login', data)
            .then(res => {
                console.log(res);
                localforage.setItem('token', res.data.token).then(() => {
                        if (res.data.role === 'BPBA') {
                            history.push('/bpba/home');
                        }else if (res.data.role === 'PBAM'){
                            history.push('/pbam/home');
                        }else if (res.data.role === 'PBA'){
                            history.push('/pba/home');
                        }else if (res.data.role === 'PCU'){
                            history.push('/pcu/home');
                        }else {
                            history.push('/pcu/home');
                        }
                    }
                );
            })
            .catch(err => {
                // console.log(err)
                swal({
                    title: 'Login Salah',
                    text: null,
                    icon: 'error',
                    button: 'close',
                });
            });

    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Login</h3>

            <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" placeholder="Masukkan email"
                       onChange= {e => setEmail(e.target.value)}/>
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Masukkan password"
                       onChange= {e => setPassword(e.target.value)}/>
            </div>

            <button className="btn btn-login">Login</button>
        </form>
    )
};

export default LoginForm;
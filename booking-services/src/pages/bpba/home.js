import React, {Component} from 'react';
import logo from '../../assets/logo-brimo.png' 

class Home extends Component {

    render() {
       return (
        <div>
            <nav className="navbar sticky-top justify-content-center">
                <a class="navbar-brand" href="/bpba/home">
                    <img src={logo} className="account-logo" alt="Brimo" loading="lazy" />
                </a>
            </nav>
        </div>
       )
    }
}

export default Home;
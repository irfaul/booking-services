import React, {Component} from 'react';
import '../../style/bpba-home.css';
import logo from '../../assets/logo-brimo.png';
import hero from '../../assets/hero-brimo.jpg';
import Container from '@material-ui/core/Container';
import UserTabs from '../../component/tab';

class BPBAHome extends Component {

    render() {
       return (
        <div>
            <nav className="navbar sticky-top justify-content-center">
                <a className="navbar-brand" href="/bpba/home">
                    <img src={logo} className="account-logo" alt="Brimo" loading="lazy" />
                </a>
            </nav>
            <img src={hero} className="account-hero" alt="Hero Brimo" loading="lazy" />
            <button className="btn btn-add">Tambah User</button>
            <Container maxWidth="md" className="user-list">
                <h5>Daftar User</h5>

                <div className="line"></div>

                <UserTabs />
            </Container>
        </div>
       )
    }
}

export default BPBAHome;
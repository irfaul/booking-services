import React, {Component} from 'react';
import '../../style/bpba-home.css';

import Container from '@material-ui/core/Container';
import UserTabs from '../../component/tab';

import Nav from '../../component/nav';
import Hero from '../../component/hero';

class BPBAHome extends Component {

    render() {
       return (
        <div>
            <Nav />
            <Hero />
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
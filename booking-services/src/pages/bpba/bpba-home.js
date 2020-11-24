import React, {Component} from 'react';
import '../../style/bpba-home.css';

import Container from '@material-ui/core/Container';
import UserData from '../../component/user-data';

import Nav from '../../component/nav';
import Hero from '../../component/hero';

class BPBAHome extends Component {

    render() {
       return (
        <div>
            <Nav />
            <Hero />
            <Container maxWidth="md" className="user-list-bpba">
                <h5>Daftar User</h5>

                <div className="line-bpba"></div>

                <UserData />
            </Container>
        </div>
       )
    }
}

export default BPBAHome;
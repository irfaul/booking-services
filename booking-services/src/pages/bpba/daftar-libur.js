import React, {Component} from 'react';
import '../../style/bpba-home.css';

import Container from '@material-ui/core/Container';
import HolidayData from '../../component/holiday-data';

class DaftarLibur extends Component {

    render() {
       return (
        <div>
            <Container maxWidth="md" className="user-list">
                <h5>Daftar Libur</h5>

                <div className="line"></div>

                <HolidayData />
            </Container>
        </div>
       )
    }
}

export default DaftarLibur;
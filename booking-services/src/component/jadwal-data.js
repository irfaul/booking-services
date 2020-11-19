import React, {Component} from 'react';
import JadwalTable from './jadwal-table';

export default class JadwalData extends Component {
    state = {
        schedules : [
          {
            id : 1,
            name : "Revi",
            time : "08.00 - 12.00"
          },
          {
            id : 2,
            name : "Ani",
            time : "08.00 - 12.00"
          },
          {
            id : 3,
            name : "Adi",
            time : "08.00 - 12.00"
          },
        ]
    }

    render() {
        return (
            <JadwalTable schedules={this.state.schedules}/>
        )
    }
}


import React, {Component} from 'react';
import LiburTable from './libur-table';

export default class UserData extends Component {
    state = {
        holidays : [
          {
            id : 1,
            name : "Idul Adha",
            start : "2/2/2222",
            end : "2/2/2222"
          },
          {
            id : 2,
            name : "Idul Fitri",
            start : "2/2/2222",
            end : "2/2/2222"
          },
          {
            id : 3,
            name : "Natal",
            start : "2/2/2222",
            end : "2/2/2222"
          },
        ]
    }

    render() {
        return (
            <LiburTable holidays={this.state.holidays}/>
        )
    }
}


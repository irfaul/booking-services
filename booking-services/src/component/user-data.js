import React, {Component} from 'react';
import UserTable from './user-table';

export default class UserData extends Component {
    state = {
        users : [
          {
            id : 1,
            name : "Astuti",
            role : "PCu"
          },
          {
            id : 2,
            name : "Revi",
            role : "PBA"
          },
          {
            id : 3,
            name : "Budi",
            role : "PBAM"
          },
        ]
    }

    render() {
        return (
            <UserTable users={this.state.users}/>
        )
    }
}


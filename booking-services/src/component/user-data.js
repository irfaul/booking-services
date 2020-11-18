import React, {useState, useEffect} from 'react';
import UserTable from './user-table';
import axios from "axios";
import localforage from "localforage";

const UserData = () => {

    const [state, setState] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const token = await localforage.getItem('token');
            console.log(token);

            axios.get('bpba/users', {
                headers: {
                    'Authorization': `${token}`
                }
            })
                .then(res => {
                    console.log(res);
                    setState(res.data.data);
                })
                .catch(err => {
                    console.log(err)
                });
        };
        getData();
    }, []);


    return (
        <UserTable users={state} />
    )

};

export default  UserData;


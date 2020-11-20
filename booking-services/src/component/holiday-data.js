import React, {useState, useEffect} from 'react';
import HolidayTable from './holiday-table';
import axios from "axios";
import localforage from "localforage";

const UserData = () => {

    const [state, setState] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const token = await localforage.getItem('token');
            console.log(token);

            axios.get('bpba/view-holiday', {
                headers: {
                    'Authorization': `${token}`
                }
            })
                .then(res => {
                    console.log(res);
                    setState(res.data);
                })
                .catch(err => {
                    console.log(err)
                });
        };
        getData();
    }, []);


    return (
        <HolidayTable holidays={state} />
    )

};

export default  UserData;
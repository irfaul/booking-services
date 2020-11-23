import React, {Component} from 'react';
import axios from "axios";
import localforage from "localforage";
import Table from 'react-bootstrap/Table'
import StarIcon from '@material-ui/icons/Star';

export default class RangkingPba extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            token: "",
        };
        
        // this.handleClick = this.handleClick.bind(this);
        // this.handlePBAM = this.handlePBAM.bind(this);
      }
    componentDidMount() {
        const getData = async () => {
            const token = await localforage.getItem("token");
            this.setState({ token: token });
            console.log(this.state.token)
      
            axios
              .get("pbam/pba-rank",{
                headers: {
                  Authorization: `${this.state.token}`,
                },
              })
              .then((res) => {
                this.setState({ data: res.data});
                // console.log(this.state.data);
              })
              .catch((err) => {
                console.log(err);
              });
          };
          getData();
        }
    render() {
        return (
            <Table responsive style={{marginTop:'2em'}}>
                <thead>
                    <tr>
                    <th>Rank.</th>
                    <th>Nama</th>
                    <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                {this.state.data.map((info) => (  
                    <tr>
                    <td></td>
                    <td>{info.pba.name}</td>
                    <td><StarIcon/> {info.avg_rating}</td>
                    </tr>
                    
                ))}
                </tbody>
            </Table> 
            
            
        )
      }
    }

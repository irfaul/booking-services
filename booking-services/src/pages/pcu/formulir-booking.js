import React, {Component} from 'react';
import '../../style/form-bookingPCU.css';
import {  Form, Label, Input, FormGroup } from 'reactstrap';

import SweetAlert from 'react-bootstrap-sweetalert';



class Formulir extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          alert: null
        };
      } 
    
      deleteThisGoal() {
        const getAlert = () => (
          <SweetAlert 
            success 
            title="Sukses !" 
            onConfirm={() => this.hideAlert()}
          >
            Pertemuan Berhasil di Jadwalkan
          </SweetAlert>
        );
    
        this.setState({
          alert: getAlert()
        });
      }
    
      hideAlert() {
        console.log('Hiding alert...');
        this.setState({
          alert: null
        });
      }
      
    render () {
        return (
            <div>
                <h3>Formulir Booking</h3>
                <div className="auth-wrapper">
                    <div className="auth-inner"> 
                        <Form>
                            <FormGroup>
                                <Label for ="Date">Tanggal</Label>
                                <Input type="date" name="date" id="Date" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="Time">Waktu</Label>
                                <Input type="time" name="time" id="Time" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="Office">Kantor Cabang</Label>
                                <Input type="select" name="select" id="Office">
                                    <option>BRI KC Kramat Jakarta</option>
                                    <option>BRI KC Tanah Abang</option>
                                    <option>BRI KC Gunung Sahari</option>
                                    <option>BRI KC Priok</option>
                                    <option>BRI KC Pondok Indah</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for ="PBA">PBA</Label>
                                <Input type="select" name="select" id="PBA">
                                    <option>Revi</option>
                                    <option>Jeni</option>
                                    <option>Jiso</option>
                                    <option>Haryanto</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleText">Keperluan</Label>
                                <Input type="textarea" name="text" id="exampleText" />
                            </FormGroup>
                            <FormGroup>
                                <Label for ="Place">Tempat Bertemu</Label>
                                <Input type="text" name="text" id="place" />
                            </FormGroup>
                        </Form>
                        <div className= "btn-detail">
                            <button type="button"  className="btn btn-outline" style={{backgroundColor: '#F37024'}} >Batal</button> 
                            <button type= "button" className="btn btn-outline" style={{backgroundColor: '#2467A8'}} 
                                onClick={() => this.deleteThisGoal()}
                                className='btn btn-danger'>
                                    <i className="fa fa-trash" aria-hidden="true"></i>
                                    Simpan</button> {this.state.alert}
                        </div> 
                    </div>
                </div>
            </div>
        );
    }
}

export default Formulir;
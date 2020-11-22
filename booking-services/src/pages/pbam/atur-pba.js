import React, {Component} from 'react';
import '../../style/bpba-tambah.css';
import TableAturPBa from '../../component/table-aturPba';



class AturPBA extends Component {
    render() {

       return (
        <div>
            <h3>ATUR PBA</h3>
            <div className="auth-wrapper">
            <div className="auth-inner">
                <TableAturPBa />
                <div className= "btn-detail">
                <button type="button"  className="btn btn-outline" style={{backgroundColor: '#2568A9'}} >Simpan</button> 
                <button type= "button" className="btn btn-outline" style={{backgroundColor: '#2568A9'}} >Batal</button>
                </div> 
                    
                </div>
            </div>
        </div>
       )
    }
}

export default AturPBA;
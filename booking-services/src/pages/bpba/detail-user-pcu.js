import React, {Component} from 'react';
import '../style/bpba-detail-user.css';

class DetailUserPcu extends Component {

    render() {
       return (
        <div className="container">
        <h3 style={{marginBottom:'20px'}}>Detail User</h3>
        <div className="row">
            <div className="col-md-4">
                <img alt="" style={{width:'200'}} title="" className="img-circle img-thumbnail isTooltip rounded" src="https://bootdey.com/img/Content/avatar/avatar7.png" data-original-title="Usuario"/> 
            </div>
            <div className="col-md-6 text-left">
                <strong>Revi</strong><br></br>
                <p>revi123@gmail.com</p>
            </div>
            <div className="col-md-4">PCu</div>
        </div>

        <div className="row rounded" style={{borderStyle: 'solid', borderWidth: 'thin', borderColor:'Gainsboro',marginTop:'20px'}}>
        <table className="table table-borderless">
        <tbody>
            <tr>
                <th className="font-weight-bold">ID User</th>
                <td>1175014</td>   
            </tr>
            <tr>
                <th className="font-weight-bold">Token</th>
                <td>**********</td>
            </tr>
        </tbody>
        </table>
        </div>
        <div className="radio">
            <label><input type="radio" name="optradio" checked/>Enable</label>
            <label><input type="radio" name="optradio"/>Disable</label>
        </div>

        <div className="btn-detail"> 
            <button type="button" className="btn btn-outline" style={{backgroundColor: '#E14C4C'}}>Hapus</button>
            <button type="button" className="btn btn-outline" style={{backgroundColor: '#F37024'}}>Ubah</button>
            <button type="button" className="btn btn-outline" style={{backgroundColor: '#06529C'}}>Simpan</button>
        </div>
        </div>
       )
    }
}

export default DetailUserPcu;

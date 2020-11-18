import React, {Component} from 'react';
import '../../style/bpba-detail-user.css';


class DetailUserPba extends Component {
    constructor() {
        super();   
        this.state = {
          dropDownValue: "Pilih PBAM"
        }
      }
         
      changeValue(text) {
        this.setState({dropDownValue: text})
      }
    state = { showing: true };
    render() {
        const { showing } = this.state;
       return (
        <div className="container detail-frame">
        <h3 style={{marginBottom:'20px'}}>Detail User</h3>
        <div className="row">
            <div className="col-md-4">
                <img alt="" style={{width:'200'}} title="" className="img-circle img-thumbnail isTooltip rounded" src="https://bootdey.com/img/Content/avatar/avatar7.png" data-original-title="Usuario"/> 
            </div>
            <div className="col-md-6 text-left">
                <strong>Kevin</strong><br></br>
                <p>kevin123@bri.co.id</p>
            </div>
            <div className="col-md-4">PBA</div>
        </div>

        <div className="row rounded" style={{borderStyle: 'solid', borderWidth: 'thin', borderColor:'Gainsboro',margin:'20px 0 20px 0'}}>
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
        {/* dropdown menu */}
        <div className="dropdown btn-light">
            <button className="btn dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {this.state.dropDownValue}
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                <button className="dropdown-item" type="button" onClick={(e) => this.changeValue(e.target.textContent)}>PBAM 1</button>
                <button className="dropdown-item" type="button" onClick={(e) => this.changeValue(e.target.textContent)}>PBAM 2</button>
                <button className="dropdown-item" type="button" onClick={(e) => this.changeValue(e.target.textContent)}>PBAM 3</button>
            </div>
        </div>
        {/* radio enable disable */}
        <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" onChange={() => this.setState({ showing: false })}/>
            <label className="form-check-label" for="inlineRadio1">Enable</label>
        </div>
        <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" onChange={() => this.setState({ showing: true })}/>
            <label className="form-check-label" for="inlineRadio2">Disable</label>
        </div>
        
        <div className="form-group" style={{marginTop:'20px'}}>
        { showing 
            ?<input type="text" className="form-control" id="inputText" aria-describedby="textAlasan" placeholder="Alasan disable"/> 
            :<p className="text-left font-weight-light">Placeholder Alasan</p>
        }
        </div>
        {/* button ubah */}
        <div className="btn-detail"> 
            <button type="button" className="btn btn-outline" style={{backgroundColor: '#F37024'}} onClick={() => this.setState({ showing: false })}>Ubah</button>
        </div>
        </div>
       )
    }
}

export default DetailUserPba;
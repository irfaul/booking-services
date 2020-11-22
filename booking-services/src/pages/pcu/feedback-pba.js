import React, { Component } from "react";
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


export default function FeedbackPBA() {
    const [value, setValue] = React.useState(0);
    return(
    <div className="container detail-frame" style={{borderStyle: 'solid', borderWidth: 'thin', borderColor:'Gainsboro',margin:'20px 0 20px 0', textAlign:'center' }}>
        <h3
        style={{
            marginBottom: "50px",
            textAlign: "center",
            fontWeight: "bold",
        }}>
        Berikan Rating Pertemuan
        </h3>
        <textarea type="text" placeholder="Komentar Saya..." 
            style={{width: '75%', height:'150px'}}
        ></textarea>
        <br/>
        <br/>

        <div>
            <Box component="fieldset" mb={3} borderColor="transparent">
                <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                />
            </Box>
        </div>
    </div>
    );
}

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import React from 'react';

const Switchbutton = ({handlemode}) => {
  
    return (
        <FormGroup >
          <FormControlLabel control={<Switch defaultChecked onClick={handlemode} />} style={{paddingTop:"0"}} />
        
        </FormGroup>
      );
}
export default Switchbutton;

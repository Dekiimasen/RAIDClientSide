import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';


export default function CreateUserInput() {
    const [UserInput,SetUserInput] = useState({
        Input: '',
        Name: 'NIL'
    });

    const createUserInput = () => {
        axios.post('http://localhost:5000/UserInputs', UserInput).then( () => {
        window.alert("User Input " + UserInput.Input + " by User " + UserInput.Name + " Created!");
        window.location.reload(false); 
        //reloads the page.
        })
    }  

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 2, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      textAlign='center'
    >
      <h2>Add Into Table</h2>
      <div style = {{width: '75%' }}>
        <TextField
          required
          id="outlined-required"
          label="User Input"
          value={UserInput.UserInput} onChange={(event) => {
            SetUserInput({...UserInput, Input: event.target.value})
        }}
        />
        <TextField
          id="outlined-basic"
          label="Name"
          value={UserInput.Name} onChange={(event) => {
              SetUserInput({...UserInput, Name: event.target.value})
          }}
        />
        <Button variant="contained" onClick={createUserInput}>Submit</Button>
        </div>
    </Box>
    
  );
}

import * as React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Paper } from '@mui/material';
import { Table,TableBody,TableContainer,TableHead,TableRow,TableCell } from '@mui/material';

const columns = [
  { field: 'UserInput', headerName: 'User Input', width: 200 },
  { field: 'UserName', headerName: 'User Name', width: 130 },
];

const rows = [
  {UserInput: ShowUserInput.UserInput, UserName: ShowUserInput.UserName}
];

export default function ShowUserInput() {
  const [UserInputList, setUserInputList] = useState([])
  useEffect(() => {
    axios.get('http://localhost:5000/UserInputs').then( (allUserInputs) => {
      setUserInputList(allUserInputs.data);
    })
  }, [])
  return (
      <><h2>User Inputs</h2>
    <div style={{ height: 400, width: '100%'}}>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>User Input</TableCell>
              <TableCell align='right'>User Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {UserInputList.map((UserInput,key) => (
              <TableRow key={key}>
                <TableCell component="th" scope="row">
                  {UserInput.Input}
                </TableCell>
                <TableCell align='right'>{UserInput.Name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </TableContainer>
    </div>
    </>
  );
}

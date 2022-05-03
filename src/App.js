import logo from './logo.svg';
import './App.css';
import { Container, AppBar, Typography, Grow, Grid} from '@mui/material';
import UserInput from './components/showuserinput/ShowUserInput.js';
import CreateUserInput from './components/createuserinput/CreateUserInput.js';
import useStyles from './styles'

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Container maxwidth="lg">
          <Typography className={classes.heading} variant='h2' align='center'>RAiD App</Typography>

          <Container>
            <Grid container justify='space-between'>
              
              <Grid item xs={12} sm={7}>
                  <UserInput />
              </Grid>

              <Grid item xs={12} sm={4}>
                <CreateUserInput />
              </Grid>

            </Grid>
          </Container>
      </Container>
    </div>
  );
}

export default App;

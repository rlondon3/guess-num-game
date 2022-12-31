import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Numbers from './numbers';


const Game = ({ alert, alert2, round, winningNum, numberArr, count, setCount, binarySearch, attempt, playAgain }) => {

const theme = createTheme();

function Github(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'© Binary Search Game '}
        <Link color="inherit" href="https://github.com/rlondon3/guess-num-game">
          GitHub
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  function handleChange(e) {
    e.preventDefault();
    if (winningNum === parseInt(e.target.value)) {
        console.log(winningNum, " is the winning number")
    }
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    
    binarySearch(numberArr, parseInt(e.target[0].value));
    attempt()
  }


  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Numbers
          attempt={attempt}
          alert={alert}
          alert2={alert2}
          round={round}
          numbers={numberArr}
          count={count}
           />
          <Box component="form" onSubmit={(e) => handleSubmit(e)} noValidate sx={{ mt: 1 }}>
            <TextField
              onChange={handleChange}
              margin="normal"
              required
              fullWidth
              id="guess"
              label="Enter Your Guess"
              name="guess"
              autoComplete="guess"
              autoFocus
            />
          </Box>
        </Box>
        <Button
              id='playAgain'
              onClick={playAgain}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, backgroundColor: '#9c27b0' }}
            >
              Play Again
        </Button>
        <Github sx={{ mt: 2, mb: 2 }} />
      </Container>
    </ThemeProvider>
  );
}

export default Game;
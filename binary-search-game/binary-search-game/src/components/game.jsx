import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Filter1Icon from '@mui/icons-material/Filter1';
import Filter3Icon from '@mui/icons-material/Filter3';
import LooksTwoSharpIcon from '@mui/icons-material/LooksTwoSharp';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

const numberArr1 = [
    Math.floor(Math.random() * 11, Math.floor(Math.random() * 10)), 
    Math.floor(Math.random() * 9), Math.floor(Math.random() * 8), Math.floor(Math.random() * 7),
    Math.floor(Math.random() * 6), Math.floor(Math.random() * 5), Math.floor(Math.random() * 4),
    Math.floor(Math.random() * 3), Math.floor(Math.random() * 2), Math.floor(Math.random() * 1)
]; // Create array with random numbers

const numberArr = [...new Set(numberArr1)].sort(); // Remove duplicates and sort the array
const winningNum = Math.floor(Math.random() * numberArr.length); //Establish a winning number


function BinarySearch(arr, item ) {
    console.log(numberArr1, 'orginal array')
    console.log(numberArr[winningNum], 'winning number')
    console.log(numberArr, 'array')
    let low = 0; // Establish the lowest number in the array that can be guessed
    let high = numberArr.length; //Establish the highest number in the array that can be guessed.
    do { //Loop until the number is found
        let mid = Math.floor((low + high) / 2); // This is to check the middle number
        const answer = arr[mid]; //Finds the number in the array if it exists
        if (answer === item) {
            console.log(mid, 'index') //index of winning number
            console.log(answer, 'answer') //winning number
            return mid;
        } 
        if (answer > item) {
            high = mid - 1; //Guess was too high, so update high
        } else {
            low = mid + 1; // Guess was too low. so update low
        } 
    } while (low <= high) 
}

function Github(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'© Binary Search Game '}
        <Link color="inherit" href="https://mui.com/">
          GitHub
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

export default function SignIn() {
  const handleSubmit = (e) => {
    e.preventDefault();
    
    BinarySearch(numberArr, parseInt(e.target[0].value));
  };

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
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main', width: '20%' }}>
            <Filter1Icon />
            <LooksTwoSharpIcon />
            <Filter3Icon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Enter a number
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="guess"
              label="Guess A Number"
              name="guess"
              autoComplete="guess"
              autoFocus
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Guess
            </Button>
            <FormControlLabel
              control={<Checkbox value="playAgain" color="primary" />}
              label="Play Again!"
            />
          </Box>
        </Box>
        <Github sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
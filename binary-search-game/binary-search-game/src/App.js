import * as React from 'react';
import MuiAlert from '@mui/material/Alert';
import Game from './components/game'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Filter1Icon from '@mui/icons-material/Filter1';
import Filter3Icon from '@mui/icons-material/Filter3';
import LooksTwoSharpIcon from '@mui/icons-material/LooksTwoSharp';
import './App.css';

function App() {
  const [open, setOpen] = React.useState(false);
  const [count, setCount] = React.useState(0);
  const [round, setRound] = React.useState(true);
  const [alert, setAlert] = React.useState(false);
  const [alert2, setAlert2] = React.useState(false);

  const numberArr1 = [
    Math.floor(Math.random() * 11, Math.floor(Math.random() * 10)), 
    Math.floor(Math.random() * 9), Math.floor(Math.random() * 8), Math.floor(Math.random() * 7),
    Math.floor(Math.random() * 6), Math.floor(Math.random() * 5), Math.floor(Math.random() * 4),
    Math.floor(Math.random() * 3), Math.floor(Math.random() * 2), Math.floor(Math.random() * 1)
  ]; // Create array with random numbers

  const numberArr = [...new Set(numberArr1)].sort(sorter); // Remove duplicates and sort the array
  const winningNum = get_random(numberArr); //Establish a winning number
  const newGame = <MuiAlert elevation={6} variant="outlined" sx={{ mb: 3}}>New Game Starting...</MuiAlert>;

function get_random (arr) {
    return arr[Math.floor((Math.random()*arr.length))];
  }

function sorter(a, b){
    return a - b;
  }

const attempt = (e) => {
    setCount(count + 1);
    if (count === 2) {
        setAlert(true);
        setCount(count + 1);
        setRound(false);
    } else if (count < 2) {
        if (parseInt(document.getElementById('guess').value) === winningNum) {
            setAlert2(true)
            setRound(false);
            return;
        }
        if (parseInt(e.target.innerHTML) === winningNum) {
            setAlert2(true)
            setRound(false);
            return;
        }
    }
  }

function binarySearch(arr, item ) {
    let low = 0; // Establish the lowest number in the array that can be guessed
    let high = numberArr.length; //Establish the highest number in the array that can be guessed.
    do { //Loop until the number is found
        let mid = Math.floor((low + high) / 2); // This is to check the middle number
        const answer = arr[mid]; //Finds the number in the array if it exists
        if (answer === item) {
            return mid;
        } 
        if (answer > item) {
            high = mid - 1; //Guess was too high, so update high
        } else {
            low = mid + 1; // Guess was too low. so update low
        } 
    } while (low <= high) 
  }


  function playAgain() {
    setOpen(true)
    setTimeout(() => {
      window.location.reload(false);
    }, 1000)
  }

  return (
    <>
    {open === true && newGame}
    <Container component="main" maxWidth="xs">
      <Box
          sx={{
            marginTop: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
        
        <Avatar sx={{ mb: 3, bgcolor: 'secondary.main', width: '20%' }}>
              <Filter1Icon />
              <LooksTwoSharpIcon />
              <Filter3Icon />
        </Avatar>
        <Typography sx={{ mt: 3}} component="h1" variant="h5">
            Guess A Number From Below
        </Typography>
        <Game
        alert={alert}
        alert2={alert2}
        round={round}
        winningNum={winningNum}
        numberArr={numberArr}
        count={count}
        playAgain={playAgain}
        attempt={attempt}
        setCount={setCount}
        binarySearch={binarySearch}
        />
     </Box>
    </Container>
    </>
  );
}

export default App;

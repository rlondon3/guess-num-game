import * as React from 'react';
import Card from '@mui/material/Card';
import Alert from '@mui/material/Alert';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Numbers = ({alert, alert2, round, numbers, count, winningNum, attempt}) => {
    const [index, setIndex] = React.useState(0);
    

    React.useEffect(() => {
        const idx = () => setIndex(i => i + 1);
        const change = setInterval(idx, 2000);
        if (round === false) {
            return clearInterval(change);
        }
        return () => clearInterval(change)
    }, [round]);

    const border = (alert === true) ? '1px solid red' : (alert2 === true) ? '1px solid green' : ""

    return (
        <> 
        <Card sx={{ maxWidth: 345 }} id='numberCard' style={{border: border }}>
        {alert === true && <Alert variant="filled" severity="error" sx={{justifyContent: "center"}} >
            Sorry, you've lost!
        </Alert>}
        {alert2 === true && <Alert variant="outlined" severity="success" sx={{justifyContent: "center"}}>
            You won!
        </Alert>}
            <CardActionArea
            onClick={(e) => attempt(e)}
            >
            <Typography id='numberChoices' sx={{ fontSize: 75}} align='center' color="text.secondary" >
            {(alert === true || alert2 === true) ? winningNum : numbers[index % numbers.length]}
            </Typography>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" align='center'>
                Guess 1 of the {numbers.length} numbers.
                </Typography>
                <Typography variant="body2" color="text.secondary">
                You have three attempts to choose the number picked. You may click this card 
                or enter a guess below for a hint.
                Good luck!
                </Typography>
            </CardContent>
            </CardActionArea>
        </Card>
        <Typography sx={{ mt: 3, fontSize: 15}}>Attempts: {count}</Typography>
        </>
     );
}
 
export default Numbers;
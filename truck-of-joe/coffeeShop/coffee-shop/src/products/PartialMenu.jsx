import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/esm/Button';

const PartialMenu = ({ photos }) => {
    
    return ( 
    <Container>
        <CardGroup>
      {photos.map((photo, index) => (
            <Card
        key={index}
        className='cards'
        style={{borderBottom: '0px'}}
        >
            <Card.Title>Coffee #{index + 1}</Card.Title>
            <Card.Img variant="top" src={photo.url} />
            <Card.Body className='bg-light'>
            
                <Card.Text>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                </Card.Text>
            </Card.Body>
            <Card.Footer className='bg-light' style={{borderTop: '0px'}}> 
                <Button className='orderButton'>Order</Button>
            </Card.Footer>
        </Card>
      ))}
        </CardGroup>
    </Container>
     );
}
 
export default PartialMenu;
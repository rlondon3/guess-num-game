import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const ImgCard = ({ img, text }) => {
    return ( 
        <Card
        bg='light'
        className='card-border'
        >
        <Card.Img
        src={img}
        className="d-block w-100"
        />
            <Card.ImgOverlay>
                <Card.Body style={{height: '200px'}}>
                </Card.Body>
                <Card.Footer style={{borderTop: 'none', backgroundColor: 'none'}}>
                        <Card.Text className='text-white' style={{ fontSize: '30px', textShadow: '1px 1px 4px black'}}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur eveniet alias aliquid 
                            voluptatum quisquam, velit hic eum voluptatem asperiores distinctio voluptatibus nulla praesentium, 
                            molestias unde exercitationem iusto adipisci fugit modi.
                        </Card.Text>
                        <br />
                        <br />
                        <Button variant="info" className='button'>{text}</Button>
                </Card.Footer>
            </Card.ImgOverlay>
        </Card>
     );
}
 
export default ImgCard;
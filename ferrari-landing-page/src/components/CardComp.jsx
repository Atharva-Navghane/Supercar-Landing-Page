import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './CardCSS.css';

function CardComp(props) {
  return (
    <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src={props.imgSrc} style={{ height: '12rem'}} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.text}
        </Card.Text>
        <Button variant="primary">Know More</Button>
      </Card.Body>
    </Card>
  );
}

export default CardComp;
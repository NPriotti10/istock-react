import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './styles.css'

const Item = ({title, description, price, image}) => {
  return (
    <Card className='card-container' style={{ width: '16rem' }}>
      <Card.Img variant="top" src={image} width={150} />
      <Card.Body>
        <Card.Title className='card-title'>{title}</Card.Title>
        <Card.Body>
          <Card.Text className='card-description'>{description}</Card.Text>
          <Card.Text>${price}usd</Card.Text>
        </Card.Body>
        <Button variant="primary">Ver más</Button>
      </Card.Body>
    </Card>   
  ) 
}

export default Item
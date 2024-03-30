
import './styles.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// HornedBeast component
// eslint-disable-next-line react/prop-types
function HornedBeast ({title, imageUrl, description, votes, onBeastClick, handleVotes}) {
    
    const increaseVotes = () => handleVotes(title);
    
    return (
      <>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src= {imageUrl} onClick={onBeastClick} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button onClick={increaseVotes} variant="primary">❤️ : {votes}</Button>
        </Card.Body>
      </Card></>
        );
  }

  export default HornedBeast;
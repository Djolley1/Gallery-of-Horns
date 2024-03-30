
import './styles.css';
import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// HornedBeast component
// eslint-disable-next-line react/prop-types
function HornedBeast ({title, imageUrl, description, onBeastClick}) {
    const [favoriteCount, setFavoriteCount] = useState(0);
    const increaseFavorites = () => setFavoriteCount(favoriteCount + 1);
   
    return (
      <>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src= {imageUrl} onClick={onBeastClick} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button onClick={increaseFavorites} variant="primary">❤️ : {favoriteCount}</Button>
        </Card.Body>
      </Card></>
        );
  }

  export default HornedBeast;
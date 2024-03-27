import './styles.css';
import {useState} from 'react';
// eslint-disable-next-line no-unused-vars
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Beasts from './data.json';

// HornedBeast component
// eslint-disable-next-line react/prop-types
function HornedBeast ({title, imageUrl, description}) {
  const [favoriteCount, setFavoriteCount] = useState(0);

  const increaseFavorites = () => setFavoriteCount(favoriteCount + 1);
  return (
    <>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src= {imageUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button onClick={increaseFavorites} variant="primary">❤️ : {favoriteCount}</Button>
      </Card.Body>
    </Card></>
      );
}

// Gallery component
function Gallery() {
  return(
    <Container>
      <Row>
        {Beasts.map((beast, index) =>(
          <Col key={index} md={4}>
            <HornedBeast
            title={beast.title}
            imageUrl={beast.image_url}
            description= {beast.description}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );

    }

export default Gallery;

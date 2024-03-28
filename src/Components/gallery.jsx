/* eslint-disable react/prop-types */
import './styles.css';
import {useState} from 'react';
// eslint-disable-next-line no-unused-vars
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';
import Beasts from './data.json';

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

// Gallery component
function Gallery({onBeastClick, filterFunction}) {
  const filteredBeasts = filterFunction ? Beasts.filter(filterFunction) : Beasts;
  
  return(
    <Container>
      <Row>
        {filteredBeasts.map((beast, index) =>(
          <Col key={index} md={4}>
            <HornedBeast
            onBeastClick={() => onBeastClick(beast)}
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

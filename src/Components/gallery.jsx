
import './styles.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';
import Beasts from './data.json';
import HornedBeast from './Hornedbeast';

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

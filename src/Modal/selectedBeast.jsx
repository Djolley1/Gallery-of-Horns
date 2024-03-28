/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const SelectedBeast = ({selectedBeast, showModal, handleCloseModal}) => {
  return (
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          {/* <Modal.Title>{selectedBeast && selectedBeast.title}</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
        <img src={selectedBeast.image_url} alt={selectedBeast.title} style={{maxWidth: '100%'}}/>
          <p>{selectedBeast.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
  );
  }
export default SelectedBeast;
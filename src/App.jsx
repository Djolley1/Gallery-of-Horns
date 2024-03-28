import {useState} from 'react';
import Header from './Components/header';
import Gallery from './Components/gallery';
import Footer from './Components/footer';
import SelectedBeast from './Modal/selectedBeast';
import Form from 'react-bootstrap/Form';



function App() {

  const [showModal, setShowModal] = useState(false);
  const [selectedBeast, setSelectedBeast] = useState({});
  const [filterValue, setFilterValue] = useState(null);

  const handleBeastClick = (selectedBeast) => {
    setSelectedBeast(selectedBeast);
    setShowModal(true);
    console.log(selectedBeast)
  };

  const handleCloseModal = () => setShowModal(false);

  const filterBeasts = (beast) => {
    if (filterValue === null) {
      return true;
    }
    return beast.horns === filterValue;
  };
  
  return (
    <>
      <Header title="Horned Beasts" />

      <Form.Select aria-label="Default select example" onChange={(e) => setFilterValue(parseInt(e.target.value))}>
        <option>Open this select menu</option>
        <option value="1">One Horn</option>
        <option value="2">Two Horns</option>
        <option value="3">Three Horns</option>
      </Form.Select>

      <Gallery selectedBeast={selectedBeast} onBeastClick={handleBeastClick} filterFunction={filterBeasts}/>
      <SelectedBeast selectedBeast={selectedBeast} showModal={showModal} handleCloseModal={handleCloseModal}/>
      <Footer />
    </>
  )
}

export default App

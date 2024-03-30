import {useState} from 'react';
import Header from './Components/Header';
import Gallery from './Components/Gallery';
import Footer from './Components/Footer';
import SelectedBeast from './Modal/SelectedBeast';
import Form from 'react-bootstrap/Form';
import Beasts from './Components/data.json';


function App() {

  const [showModal, setShowModal] = useState(false);
  const [selectedBeast, setSelectedBeast] = useState({});
  const [filterValue, setFilterValue] = useState(null);
  const [allBeastsWithVotes, setAllBeastsWithVotes] = useState(Beasts);

  const handleBeastClick = (selectedBeast) => {
    console.log(selectedBeast)
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
  
  const handleVotes = (beastClicked) => {
    let beastsAfterVotes = allBeastsWithVotes.map((beastObj, index) => {
      if (beastObj.title === beastClicked) {
        beastObj.votes++;
        return beastObj;
      }
      return beastObj;
    });
    setAllBeastsWithVotes(beastsAfterVotes);
  }

  return (
    <>
      <Header title="Horned Beasts" />

      <Form.Select aria-label="Default select example" onChange={(e) => setFilterValue(parseInt(e.target.value))}>
        <option>Open this select menu</option>
        <option value="1">One Horn</option>
        <option value="2">Two Horns</option>
        <option value="3">Three Horns</option>
      </Form.Select>

      <Gallery 
        // selectedBeast={selectedBeast} 
        onBeastClick={handleBeastClick}
        filterFunction={filterBeasts}
        Beasts={Beasts}
        handleVotes={handleVotes}
      />
      <SelectedBeast selectedBeast={selectedBeast} showModal={showModal} handleCloseModal={handleCloseModal}/>
      <Footer />
    </>
  )
}

export default App

import {useState} from 'react';
import Header from './Components/header';
import Gallery from './Components/gallery';
import Footer from './Components/footer';
import SelectedBeast from './Modal/selectedBeast';


function App() {

  const [showModal, setShowModal] = useState(false);
  const [selectedBeast, setSelectedBeast] = useState({});

  // const handleOpenModal =(beast) => {
  //   setSelectedBeast(beast);
  //   setShowModal(true);
  // };

  const handleBeastClick = (selectedBeast) => {
    setSelectedBeast(selectedBeast);
    setShowModal(true);
    console.log(selectedBeast)
  };

  const handleCloseModal = () => setShowModal(false);
  
  return (
    <>
      <Header title="Horned Beasts" />
      <Gallery selectedBeast={selectedBeast} onBeastClick={handleBeastClick}/>
      <SelectedBeast selectedBeast={selectedBeast} showModal={showModal} handleCloseModal={handleCloseModal}/>
      <Footer />
    </>
  )
}

export default App

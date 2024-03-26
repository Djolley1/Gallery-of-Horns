
// HornedBeast component
const HornedBeast = ( title, imageUrl, description ) => {
  return (
    <div>
      <h2>{title}</h2> {/* Display the title passed from props */}
      <img src={imageUrl} alt={title} title={title} />
      <p>{description}</p>
    </div>
  );
};

// Gallery component
const Gallery = () => {
  return (
    <div>
      {HornedBeast ('Bull', 'https://st.depositphotos.com/1364759/3356/i/450/depositphotos_33567715-stock-photo-bull-on-white-background.jpg', 'This is a bull' )}
      
      {HornedBeast ('Ram', 'https://t4.ftcdn.net/jpg/03/20/08/05/360_F_320080506_GMvdSHk6T6a5ctRVpnonBaCIKSj22Fv9.jpg', 'Thats a ram' )}
   </div>
    
  );
};

export default Gallery;

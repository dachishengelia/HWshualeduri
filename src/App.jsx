// import './App.css';
// import React, { useState } from 'react';

// function App() {
//   const [quantity, setQuantity] = useState(0);
//   const [cart, setCart] = useState([]);
//   const [showCart, setShowCart] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [mainImg, setMainImg] = useState('1.png');

//   const itemPrice = 250;
//   const discountPrice = 125;

//   const images = ['1.png', '2.png', '3.png', '4.png'];

//   const increaseQuantity = () => setQuantity(quantity + 1);
//   const decreaseQuantity = () => setQuantity(quantity > 0 ? quantity - 1 : 0);

//   const addToCart = () => {
//     if (quantity === 0) return;
//     const existingItem = cart.find(item => item.id === "sneakers");
//     if (existingItem) {
//       const updatedCart = cart.map(item =>
//         item.id === "sneakers" ? { ...item, quantity: item.quantity + quantity, price: (item.quantity + quantity) * discountPrice } : item
//       );
//       setCart(updatedCart);
//     } else {
//       const newItem = { id: "sneakers", quantity, price: quantity * discountPrice };
//       setCart([...cart, newItem]);
//     }
//     setQuantity(0);
//   };

//   const removeFromCart = (id) => {
//     setCart(cart.filter(item => item.id !== id));
//   };

//   const openModal = (img) => {
//     setMainImg(img);
//     setShowModal(true);
//   };

//   const closeModal = () => setShowModal(false);

//   const goToNextImage = () => {
//     const currentIndex = images.indexOf(mainImg);
//     setMainImg(images[(currentIndex + 1) % images.length]);
//   };

//   const goToPreviousImage = () => {
//     const currentIndex = images.indexOf(mainImg);
//     setMainImg(images[(currentIndex - 1 + images.length) % images.length]);
//   };

//   const totalItemsInCart = cart.reduce((total, item) => total + item.quantity, 0);

//   return (
//     <>
//       <header className="header">
//         <div className="navbar">
//           <div className="navbar-logo">sneakers</div>
//           <div className="navbar-links">
//             <a>Collections</a>
//             <a>Men</a>
//             <a>Women</a>
//             <a>About</a>
//             <a>Contact</a>
//           </div>
//         </div>
//         <button className="cart-button" onClick={() => setShowCart(!showCart)}>
//           <span className="cart-text">Cart</span>
//           {totalItemsInCart > 0 && <span className="cart-count">({totalItemsInCart})</span>}
//         </button>
//       </header>

//       <div className="container">
//         <div className="image-section">
//           <img src={`assets/${mainImg}`} alt="Main" className="main-image" onClick={() => openModal(mainImg)} />
//           <div className="thumbnail-container">
//             {images.map((img, index) => (
//               <img
//                 key={index}
//                 src={`assets/${img}`}
//                 alt={`Thumbnail ${index}`}
//                 className={`thumbnail ${mainImg === img ? 'active' : ''}`}
//                 onClick={() => setMainImg(img)}
//               />
//             ))}
//           </div>
//         </div>

//         <div className="details-section">
//           <h2 className="title">Fall Limited Edition Sneakers</h2>
//           <p className="description">
//             These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole,
//             they’ll withstand everything the weather can offer.
//           </p>
//           <div className="price-container">
//             <span className="discount-price">${discountPrice}.00</span>
//             <span className="original-price">${itemPrice}.00</span>
//             <span className="discount-badge">50%</span>
//           </div>
//           <div className="quantity-container">
//             <button onClick={decreaseQuantity} className="quantity-btn">-</button>
//             <span className="quantity">{quantity}</span>
//             <button onClick={increaseQuantity} className="quantity-btn">+</button>
//           </div>
//           <button className="add-to-cart-btn" onClick={addToCart}>Add to cart</button>
//           <h3 className="maswavlebels">გაუმარჯოს მასწავლებელო :)</h3>
//         </div>
//       </div>

//       {showCart && (
//         <div className="cart">
//           <h3>Your Cart</h3>
//           {cart.length === 0 ? (
//             <p>Your cart is empty.</p>
//           ) : (
//             cart.map((item, index) => (
//               <div key={index} className="cart-item">
//                 <span>Sneakers x {item.quantity}</span>
//                 <span>${item.price}</span>
//                 <button onClick={() => removeFromCart(item.id)}>Remove</button>
//               </div>
//             ))
//           )}
//         </div>
//       )}

//       {showModal && (
//         <div className="modal" onClick={closeModal}>
//           <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//             <img src={`assets/${mainImg}`} alt="Modal" className="modal-image" />
//             <button className="modal-close" onClick={closeModal}>×</button>
//             <div className="modal-navigation">
//               <button onClick={goToPreviousImage}>&lt;</button>
//               <button onClick={goToNextImage}>&gt;</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default App;


import './App.css';
import React, { useState } from 'react';

function App() {
  const [quantity, setQuantity] = useState(0);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [mainImg, setMainImg] = useState('1.png');

  const itemPrice = 250;
  const discountPrice = 125;

  const images = ['1.png', '2.png', '3.png', '4.png'];

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(quantity > 0 ? quantity - 1 : 0);

  const addToCart = () => {
    if (quantity === 0) return;
    const existingItem = cart.find(item => item.id === "sneakers");
    if (existingItem) {
      const updatedCart = cart.map(item =>
        item.id === "sneakers" ? { ...item, quantity: item.quantity + quantity, price: (item.quantity + quantity) * discountPrice } : item
      );
      setCart(updatedCart);
    } else {
      const newItem = { id: "sneakers", quantity, price: quantity * discountPrice };
      setCart([...cart, newItem]);
    }
    setQuantity(0);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const openModal = (img) => {
    setMainImg(img);
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  const goToNextImage = () => {
    const currentIndex = images.indexOf(mainImg);
    setMainImg(images[(currentIndex + 1) % images.length]);
  };

  const goToPreviousImage = () => {
    const currentIndex = images.indexOf(mainImg);
    setMainImg(images[(currentIndex - 1 + images.length) % images.length]);
  };

  const totalItemsInCart = cart.reduce((total, item) => total + item.quantity, 0);

  const handleImageError = (e) => {
    e.target.src = '/assets/default.png';
  };

  return (
    <>
      <header className="header">
        <div className="navbar">
          <div className="navbar-logo">sneakers</div>
          <div className="navbar-links">
            <a>Collections</a>
            <a>Men</a>
            <a>Women</a>
            <a>About</a>
            <a>Contact</a>
          </div>
        </div>
        <button className="cart-button" onClick={() => setShowCart(!showCart)}>
          <span className="cart-text">Cart</span>
          {totalItemsInCart > 0 && <span className="cart-count">({totalItemsInCart})</span>}
        </button>
      </header>

      <div className="container">
        <div className="image-section">
          <img src={`/assets/${mainImg}`} alt="Sneaker Image" className="main-image" onClick={() => openModal(mainImg)} onError={handleImageError} loading="lazy" />
          <div className="thumbnail-container">
            {images.map((img, index) => (
              <img
                key={index}
                src={`/assets/${img}`}
                alt={`Thumbnail ${index}`}
                className={`thumbnail ${mainImg === img ? 'active' : ''}`}
                onClick={() => setMainImg(img)}
                onError={handleImageError}
              />
            ))}
          </div>
        </div>

        <div className="details-section">
          <h2 className="title">Fall Limited Edition Sneakers</h2>
          <p className="description">
            These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole,
            they’ll withstand everything the weather can offer.
          </p>
          <div className="price-container">
            <span className="discount-price">${discountPrice}.00</span>
            <span className="original-price">${itemPrice}.00</span>
            <span className="discount-badge">50%</span>
          </div>
          <div className="quantity-container">
            <button onClick={decreaseQuantity} className="quantity-btn">-</button>
            <span className="quantity">{quantity}</span>
            <button onClick={increaseQuantity} className="quantity-btn">+</button>
          </div>
          <button className="add-to-cart-btn" onClick={addToCart}>Add to cart</button>
          <h3 className="maswavlebels">გაუმარჯოს მასწავლებელო :)</h3>
        </div>
      </div>

      {showCart && (
        <div className="cart">
          <h3>Your Cart</h3>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cart.map((item, index) => (
              <div key={index} className="cart-item">
                <span>Sneakers x {item.quantity}</span>
                <span>${item.price}</span>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            ))
          )}
        </div>
      )}

      {showModal && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={`/assets/${mainImg}`} alt="Modal" className="modal-image" onError={handleImageError} />
            <button className="modal-close" onClick={closeModal}>×</button>
            <div className="modal-navigation">
              <button onClick={goToPreviousImage}>&lt;</button>
              <button onClick={goToNextImage}>&gt;</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;

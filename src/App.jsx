import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Loader } from './components/Loader';
import { ScrollToTop } from './components/ScrollToTop';

import { Home } from './pages/Home';
import { Rooms } from './pages/Rooms';
import { RoomDetails } from './pages/RoomDetails';
import { Booking } from './pages/Booking';
import { Dining } from './pages/Dining';
import { Menu } from './pages/Menu';
import { FoodBooking } from './pages/FoodBooking';
import { TableReservation } from './pages/TableReservation';
import { Offers } from './pages/Offers';
import { Gallery } from './pages/Gallery';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { BookingConfirmation } from './pages/BookingConfirmation';

export default function App() {
  const [cartItems, setCartItems] = useState([
    {
      id: 'truffle-pasta',
      name: 'Truffle Tagliatelle Pasta',
      category: 'DINNER',
      price: 650,
      currency: '₹',
      image: '/src/assets/images/vexmo_gourmet_pasta_1791082435271.jpg',
      quantity: 1
    },
    {
      id: 'chocolate-lava-cake',
      name: 'Valrhona Chocolate Lava Cake',
      category: 'DESSERTS',
      price: 320,
      currency: '₹',
      image: '/src/assets/images/vexmo_double_cheeseburger_1791082383743.jpg',
      quantity: 2
    }
  ]);

  const handleAddToCart = (food) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === food.id);
      if (existing) {
        return prev.map((item) =>
          item.id === food.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...food, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (foodId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== foodId));
  };

  const handleUpdateQuantity = (foodId, delta) => {
    setCartItems((prev) => {
      return prev
        .map((item) => {
          if (item.id === foodId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean);
    });
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  return (
    <Router>
      <Loader />
      <ScrollToTop />
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <main className="flex-grow-1">
          <Routes>
            <Route
              path="/"
              element={<Home onAddToCart={handleAddToCart} cartItems={cartItems} />}
            />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/rooms/:id" element={<RoomDetails />} />
            <Route path="/booking" element={<Booking />} />
            <Route
              path="/dining"
              element={<Dining onAddToCart={handleAddToCart} cartItems={cartItems} />}
            />
            <Route
              path="/menu"
              element={<Menu onAddToCart={handleAddToCart} cartItems={cartItems} />}
            />
            <Route
              path="/food-booking"
              element={
                <FoodBooking
                  cartItems={cartItems}
                  onAddToCart={handleAddToCart}
                  onRemoveFromCart={handleRemoveFromCart}
                  onUpdateQuantity={handleUpdateQuantity}
                  onClearCart={handleClearCart}
                />
              }
            />
            <Route path="/table-reservation" element={<TableReservation />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/booking-confirmation" element={<BookingConfirmation />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

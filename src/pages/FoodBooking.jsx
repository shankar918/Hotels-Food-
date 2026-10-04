import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FOOD_ITEMS } from '../data/foods';
import { SectionTitle } from '../components/SectionTitle';
import { Modal } from '../components/Modal';
import {
  FaPlus,
  FaMinus,
  FaTrash,
  FaCheckCircle,
  FaUtensils,
  FaConciergeBell,
  FaArrowLeft
} from 'react-icons/fa';

export const FoodBooking = ({
  cartItems,
  onAddToCart,
  onRemoveFromCart,
  onUpdateQuantity,
  onClearCart
}) => {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [roomNumber, setRoomNumber] = useState('Suite 402');
  const [guestName, setGuestName] = useState('Alexander Sterling');
  const [diningTime, setDiningTime] = useState('As soon as ready (30-40 mins)');
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  const categories = [
    { id: 'ALL', label: 'All Items' },
    { id: 'BREAKFAST', label: 'Breakfast' },
    { id: 'LUNCH', label: 'Lunch' },
    { id: 'DINNER', label: 'Dinner' },
    { id: 'DESSERTS', label: 'Desserts' },
    { id: 'BEVERAGES', label: 'Beverages' }
  ];

  const filteredFoods = selectedCategory === 'ALL'
    ? FOOD_ITEMS
    : FOOD_ITEMS.filter((f) => f.category === selectedCategory);

  // Financial calculations
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const serviceCharge = Math.round(subtotal * 0.05);
  const taxes = Math.round(subtotal * 0.05);
  const grandTotal = subtotal + serviceCharge + taxes;

  const handleConfirmOrder = (e) => {
    e.preventDefault();
    if (cartItems.length === 0) {
      alert('Your food selection is empty. Please add items before confirming.');
      return;
    }
    const orderId = 'DIN-' + Math.floor(1000 + Math.random() * 9000);
    setOrderNumber(orderId);
    setOrderConfirmed(true);
  };

  const handleCloseSuccess = () => {
    setOrderConfirmed(false);
    onClearCart();
  };

  return (
    <div style={{ backgroundColor: 'var(--warm-white)', minHeight: '100vh', paddingTop: '7rem', paddingBottom: '6rem' }}>
      <div className="container">
        {/* Header */}
        <div className="text-center mb-4">
          <SectionTitle
            subtitle="IN-ROOM & SALON GASTRONOMY"
            title="Gourmet Food Ordering"
            description="Select culinary creations to be served fresh with silver cloche service in your suite or private dining salon."
          />
        </div>

        <div className="row g-4">
          {/* Left Column: Menu Items Selection */}
          <div className="col-12 col-lg-7 col-xl-8">
            <div className="p-3 p-md-4 rounded-1 bg-white border border-light shadow-sm mb-4">
              {/* Category Filter Tabs */}
              <div className="d-flex flex-wrap gap-2 mb-4 border-bottom border-light pb-3">
                {categories.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setSelectedCategory(c.id)}
                    className={`py-1 px-3 border-0 text-uppercase ${
                      selectedCategory === c.id ? 'btn-gold' : 'bg-transparent text-secondary'
                    }`}
                    style={{
                      fontSize: '0.75rem',
                      letterSpacing: '0.12em',
                      fontWeight: '600',
                      borderRadius: '2px',
                      transition: 'var(--transition-smooth)'
                    }}
                  >
                    {c.label}
                  </button>
                ))}
              </div>

              {/* Items List */}
              <div className="row g-3">
                {filteredFoods.map((food) => {
                  const inCart = cartItems.find((ci) => ci.id === food.id);
                  return (
                    <div key={food.id} className="col-12 col-md-6">
                      <div
                        className="p-3 rounded-1 h-100 d-flex flex-column justify-content-between"
                        style={{
                          backgroundColor: 'var(--warm-white)',
                          border: inCart ? '1px solid var(--gold)' : '1px solid var(--border)'
                        }}
                      >
                        <div className="d-flex gap-3 align-items-center mb-2">
                          <img
                            src={food.image}
                            alt={food.name}
                            style={{
                              width: '70px',
                              height: '70px',
                              objectFit: 'cover',
                              borderRadius: '2px'
                            }}
                          />
                          <div className="flex-grow-1">
                            <h5 style={{ fontFamily: 'var(--font-serif)', fontSize: '0.98rem', margin: 0, fontWeight: '600' }}>
                              {food.name}
                            </h5>
                            <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--primary)' }}>
                              {food.currency}{food.price}
                            </span>
                            <span style={{ fontSize: '0.68rem', color: 'var(--muted)', display: 'block' }}>
                              {food.prepTime} · {food.category}
                            </span>
                          </div>
                        </div>

                        <div className="d-flex align-items-center justify-content-between pt-2 border-top border-light">
                          <p style={{ fontSize: '0.75rem', color: 'var(--muted)', margin: 0, maxWidth: '170px' }} className="text-truncate">
                            {food.description}
                          </p>
                          <button
                            onClick={() => onAddToCart(food)}
                            className="btn-gold py-1 px-2"
                            style={{ fontSize: '0.72rem' }}
                          >
                            <FaPlus className="me-1" /> Add
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Selected Food Order Summary & Room Details */}
          <div className="col-12 col-lg-5 col-xl-4">
            <div
              className="p-4 rounded-1 sticky-top"
              style={{
                backgroundColor: 'var(--dark)',
                color: 'var(--warm-white)',
                border: '1px solid rgba(201, 164, 92, 0.35)',
                boxShadow: 'var(--shadow-elevated)',
                top: '90px'
              }}
            >
              <div className="d-flex justify-content-between align-items-center mb-3 border-bottom border-secondary pb-3">
                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', color: 'var(--warm-white)', margin: 0 }}>
                  Your Order Cart
                </h4>
                {cartItems.length > 0 && (
                  <button
                    onClick={onClearCart}
                    className="btn btn-sm btn-link text-muted p-0 text-decoration-none"
                    style={{ fontSize: '0.75rem' }}
                  >
                    Clear All
                  </button>
                )}
              </div>

              {/* Cart Items List */}
              {cartItems.length === 0 ? (
                <div className="text-center py-4">
                  <FaUtensils style={{ fontSize: '2rem', color: 'rgba(201, 164, 92, 0.3)', marginBottom: '0.75rem' }} />
                  <p style={{ color: '#B5ADA4', fontSize: '0.85rem', marginBottom: 0 }}>
                    Your tray is currently empty. Select dishes from the left to begin your order.
                  </p>
                </div>
              ) : (
                <div className="mb-4" style={{ maxHeight: '280px', overflowY: 'auto' }}>
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="d-flex align-items-center justify-content-between py-2 border-bottom border-secondary"
                    >
                      <div className="d-flex align-items-center gap-2">
                        <img
                          src={item.image}
                          alt={item.name}
                          style={{ width: '40px', height: '40px', objectFit: 'cover', borderRadius: '2px' }}
                        />
                        <div>
                          <div style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--warm-white)', maxWidth: '140px' }} className="text-truncate">
                            {item.name}
                          </div>
                          <div style={{ fontSize: '0.75rem', color: 'var(--gold)' }}>
                            ₹{item.price} each
                          </div>
                        </div>
                      </div>

                      {/* Quantity Controls */}
                      <div className="d-flex align-items-center gap-2">
                        <div
                          className="d-flex align-items-center rounded-1"
                          style={{ backgroundColor: 'var(--secondary-dark)', border: '1px solid rgba(201, 164, 92, 0.3)' }}
                        >
                          <button
                            onClick={() => onUpdateQuantity(item.id, -1)}
                            className="btn btn-sm text-light p-1"
                            style={{ fontSize: '0.65rem' }}
                          >
                            <FaMinus />
                          </button>
                          <span style={{ fontSize: '0.82rem', fontWeight: 'bold', padding: '0 0.4rem' }}>
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, 1)}
                            className="btn btn-sm text-light p-1"
                            style={{ fontSize: '0.65rem' }}
                          >
                            <FaPlus />
                          </button>
                        </div>

                        <div style={{ fontSize: '0.85rem', fontWeight: '600', minWidth: '55px', textAlign: 'right' }}>
                          ₹{(item.price * item.quantity).toLocaleString()}
                        </div>

                        <button
                          onClick={() => onRemoveFromCart(item.id)}
                          className="btn btn-sm text-danger p-1"
                          style={{ fontSize: '0.75rem' }}
                          title="Remove item"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Delivery Details Inputs */}
              <div className="mb-3 pt-2">
                <div className="row g-2 mb-2">
                  <div className="col-6">
                    <label style={{ fontSize: '0.68rem', letterSpacing: '0.1em', color: 'var(--gold)', textTransform: 'uppercase', display: 'block' }}>
                      Suite / Room No.
                    </label>
                    <input
                      type="text"
                      value={roomNumber}
                      onChange={(e) => setRoomNumber(e.target.value)}
                      style={{
                        backgroundColor: 'rgba(255,255,255,0.06)',
                        border: '1px solid rgba(201, 164, 92, 0.3)',
                        color: 'var(--warm-white)',
                        width: '100%',
                        padding: '0.4rem 0.6rem',
                        fontSize: '0.8rem',
                        outline: 'none',
                        borderRadius: '2px'
                      }}
                    />
                  </div>
                  <div className="col-6">
                    <label style={{ fontSize: '0.68rem', letterSpacing: '0.1em', color: 'var(--gold)', textTransform: 'uppercase', display: 'block' }}>
                      Guest Name
                    </label>
                    <input
                      type="text"
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                      style={{
                        backgroundColor: 'rgba(255,255,255,0.06)',
                        border: '1px solid rgba(201, 164, 92, 0.3)',
                        color: 'var(--warm-white)',
                        width: '100%',
                        padding: '0.4rem 0.6rem',
                        fontSize: '0.8rem',
                        outline: 'none',
                        borderRadius: '2px'
                      }}
                    />
                  </div>
                </div>

                <div className="mb-2">
                  <label style={{ fontSize: '0.68rem', letterSpacing: '0.1em', color: 'var(--gold)', textTransform: 'uppercase', display: 'block' }}>
                    Serving Timing
                  </label>
                  <select
                    value={diningTime}
                    onChange={(e) => setDiningTime(e.target.value)}
                    style={{
                      backgroundColor: 'var(--secondary-dark)',
                      border: '1px solid rgba(201, 164, 92, 0.3)',
                      color: 'var(--warm-white)',
                      width: '100%',
                      padding: '0.4rem 0.6rem',
                      fontSize: '0.8rem',
                      outline: 'none',
                      borderRadius: '2px'
                    }}
                  >
                    <option>As soon as ready (30-40 mins)</option>
                    <option>In 1 hour</option>
                    <option>Dinner service at 20:00</option>
                    <option>Late night at 22:30</option>
                  </select>
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="border-top border-secondary pt-3 mb-4">
                <div className="d-flex justify-content-between py-1" style={{ fontSize: '0.82rem' }}>
                  <span style={{ color: '#B5ADA4' }}>Food Subtotal</span>
                  <span>₹{subtotal.toLocaleString()}</span>
                </div>
                <div className="d-flex justify-content-between py-1" style={{ fontSize: '0.82rem' }}>
                  <span style={{ color: '#B5ADA4' }}>In-Room Service Charge (5%)</span>
                  <span>₹{serviceCharge.toLocaleString()}</span>
                </div>
                <div className="d-flex justify-content-between py-1" style={{ fontSize: '0.82rem' }}>
                  <span style={{ color: '#B5ADA4' }}>Taxes & Levies (5%)</span>
                  <span>₹{taxes.toLocaleString()}</span>
                </div>
                <div className="d-flex justify-content-between pt-2 border-top border-secondary" style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: '700', color: 'var(--gold)' }}>
                  <span>Grand Total</span>
                  <span>₹{grandTotal.toLocaleString()}</span>
                </div>
              </div>

              <button
                onClick={handleConfirmOrder}
                disabled={cartItems.length === 0}
                className="btn-gold w-100 justify-content-center py-3"
                style={{ opacity: cartItems.length === 0 ? 0.5 : 1 }}
              >
                <FaConciergeBell className="me-2" /> Confirm Food Booking
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      <Modal
        isOpen={orderConfirmed}
        onClose={handleCloseSuccess}
        title="Food Order Dispatched to Kitchen"
      >
        <div className="text-center py-2">
          <div
            className="d-inline-flex align-items-center justify-content-center mb-3"
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              backgroundColor: 'rgba(201, 164, 92, 0.15)',
              color: 'var(--gold)',
              fontSize: '1.8rem'
            }}
          >
            <FaCheckCircle />
          </div>

          <div style={{ color: 'var(--gold)', fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 'bold' }}>
            ORDER PASS #{orderNumber}
          </div>

          <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--warm-white)', fontSize: '1.6rem', marginTop: '0.25rem' }}>
            White-Glove Service Initiated
          </h3>

          <p style={{ color: '#D5CDC4', fontSize: '0.85rem', lineHeight: '1.7', maxWidth: '420px', margin: '0 auto 1.5rem auto' }}>
            Your order of {cartItems.length} items has been received by Executive Chef de Cuisine. It will be served with silver cloche presentation to <strong>{roomNumber}</strong> for <strong>{guestName}</strong>.
          </p>

          <div className="p-3 rounded-1 mb-4 text-start" style={{ backgroundColor: 'var(--secondary-dark)', border: '1px solid rgba(201, 164, 92, 0.3)', fontSize: '0.8rem' }}>
            <div className="d-flex justify-content-between mb-1">
              <span className="text-muted">Target Serving:</span>
              <span className="text-white font-weight-bold">{diningTime}</span>
            </div>
            <div className="d-flex justify-content-between">
              <span className="text-muted">Total Billed to Room:</span>
              <span style={{ color: 'var(--gold)', fontWeight: 'bold' }}>₹{grandTotal.toLocaleString()}</span>
            </div>
          </div>

          <button onClick={handleCloseSuccess} className="btn-gold px-4">
            Done & Return to Menu
          </button>
        </div>
      </Modal>
    </div>
  );
};

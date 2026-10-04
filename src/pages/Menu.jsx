import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SectionTitle } from '../components/SectionTitle';
import { FoodCard } from '../components/FoodCard';
import { FOOD_ITEMS } from '../data/foods';
import { FaUtensils, FaShoppingBag, FaSearch } from 'react-icons/fa';

export const Menu = ({ onAddToCart, cartItems }) => {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'ALL', label: 'Complete Menu' },
    { id: 'BREAKFAST', label: 'Breakfast' },
    { id: 'LUNCH', label: 'Lunch & Hearth' },
    { id: 'DINNER', label: 'Dinner & Degustation' },
    { id: 'DESSERTS', label: 'Desserts & Pâtisserie' },
    { id: 'BEVERAGES', label: 'Beverages & Reserve' }
  ];

  const filteredFoods = FOOD_ITEMS.filter((item) => {
    const matchesCategory = selectedCategory === 'ALL' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const cartCount = cartItems?.reduce((acc, curr) => acc + curr.quantity, 0) || 0;

  return (
    <div style={{ backgroundColor: 'var(--warm-white)', minHeight: '100vh', paddingTop: '7rem', paddingBottom: '6rem' }}>
      <div className="container">
        {/* Header */}
        <div className="text-center mb-4">
          <SectionTitle
            subtitle="GASTRONOMIC SELECTIONS"
            title="The Grand Restaurant Menu"
            description="Prepared by our master brigade with heritage techniques, slow-simmered stocks, and single-origin ingredients."
          />
        </div>

        {/* Search & Category Filter Navigation */}
        <div className="p-3 p-md-4 rounded-1 mb-5" style={{ backgroundColor: 'var(--cream)', border: '1px solid var(--border)' }}>
          <div className="row g-3 align-items-center justify-content-between">
            <div className="col-12 col-md-5">
              <div className="input-group">
                <span className="input-group-text bg-white border-end-0" style={{ border: '1px solid var(--border)' }}>
                  <FaSearch style={{ color: 'var(--gold)' }} />
                </span>
                <input
                  type="text"
                  placeholder="Search dishes, ingredients, or pairings..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="form-control border-start-0"
                  style={{ border: '1px solid var(--border)', fontSize: '0.85rem' }}
                />
              </div>
            </div>

            <div className="col-12 col-md-7 text-md-end">
              <Link to="/food-booking" className="btn-dark-luxury py-2 px-3">
                <FaShoppingBag className="me-2 text-gold" />
                View Order Cart ({cartCount})
              </Link>
            </div>
          </div>

          {/* Categories Tab Row */}
          <div className="d-flex flex-wrap gap-2 mt-3 pt-3 border-top border-light">
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
        </div>

        {/* Dishes Grid */}
        <div className="row g-4">
          {filteredFoods.map((food) => (
            <div key={food.id} className="col-12 col-md-6 col-lg-3">
              <FoodCard
                food={food}
                onAddToCart={onAddToCart}
                isInCart={cartItems?.some((i) => i.id === food.id)}
              />
            </div>
          ))}
        </div>

        {/* Floating Cart Reminder on Mobile */}
        {cartCount > 0 && (
          <div
            className="d-md-none position-fixed bottom-0 start-0 end-0 p-3 z-3"
            style={{ backgroundColor: 'rgba(23,19,15,0.95)', borderTop: '1px solid var(--gold)' }}
          >
            <div className="d-flex align-items-center justify-content-between">
              <div>
                <span style={{ color: 'var(--light-gold)', fontSize: '0.8rem' }}>{cartCount} Items Selected</span>
              </div>
              <Link to="/food-booking" className="btn-gold py-2 px-3" style={{ fontSize: '0.75rem' }}>
                Review & Place Order
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

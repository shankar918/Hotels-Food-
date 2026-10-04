import React, { useState } from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { RoomCard } from '../components/RoomCard';
import { AnimatedSection } from '../components/AnimatedSection';
import { ROOMS_DATA } from '../data/rooms';
import { FaFilter, FaSearch, FaSlidersH } from 'react-icons/fa';

export const Rooms = () => {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [searchTerm, setSearchTerm] = useState('');
  const [maxPrice, setMaxPrice] = useState(40000);
  const [guestsFilter, setGuestsFilter] = useState('ALL');

  const categories = [
    { id: 'ALL', label: 'All Rooms & Suites' },
    { id: 'DELUXE ROOM', label: 'Deluxe Rooms' },
    { id: 'PREMIUM ROOM', label: 'Premium Rooms' },
    { id: 'EXECUTIVE SUITE', label: 'Executive Suites' },
    { id: 'PRESIDENTIAL SUITE', label: 'Presidential Suites' }
  ];

  const filteredRooms = ROOMS_DATA.filter((room) => {
    const matchesCategory = selectedCategory === 'ALL' || room.category === selectedCategory;
    const matchesSearch = room.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          room.shortDesc.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = room.price <= maxPrice;
    const matchesGuests = guestsFilter === 'ALL' || room.guests >= parseInt(guestsFilter, 10);
    return matchesCategory && matchesSearch && matchesPrice && matchesGuests;
  });

  return (
    <div className="page-transition" style={{ backgroundColor: 'var(--warm-white)', minHeight: '100vh', paddingTop: '7rem', paddingBottom: '5rem' }}>
      <div className="container">
        {/* Header Banner */}
        <AnimatedSection animation="fadeUp">
          <div className="text-center py-2 mb-4">
            <SectionTitle
              subtitle="ROYAL ACCOMMODATIONS"
              title="Rooms & Grand Suites"
              description="Eight meticulously designed sanctuaries appointed with handcrafted Italian walnut, private balconies, and marble rain baths."
            />
          </div>
        </AnimatedSection>

        {/* Filter Bar */}
        <AnimatedSection animation="fadeUp" delay={100}>
          <div
            className="p-3 p-md-4 rounded-1 mb-5"
            style={{
              backgroundColor: 'var(--dark)',
              color: 'var(--warm-white)',
              border: '1px solid rgba(201, 164, 92, 0.3)'
            }}
          >
            <div className="row g-3 align-items-center">
              {/* Search Input */}
              <div className="col-12 col-md-4">
                <label style={{ fontSize: '0.68rem', letterSpacing: '0.15em', color: 'var(--gold)', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
                  <FaSearch className="me-1" /> Search Suites
                </label>
                <input
                  type="text"
                  placeholder="Search by name or feature..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(201, 164, 92, 0.3)',
                    color: 'var(--warm-white)',
                    width: '100%',
                    padding: '0.55rem 0.8rem',
                    fontSize: '0.85rem',
                    outline: 'none',
                    borderRadius: '2px'
                  }}
                />
              </div>

              {/* Guests Filter */}
              <div className="col-12 col-sm-6 col-md-4">
                <label style={{ fontSize: '0.68rem', letterSpacing: '0.15em', color: 'var(--gold)', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
                  <FaFilter className="me-1" /> Minimum Guests
                </label>
                <select
                  value={guestsFilter}
                  onChange={(e) => setGuestsFilter(e.target.value)}
                  style={{
                    backgroundColor: 'var(--secondary-dark)',
                    border: '1px solid rgba(201, 164, 92, 0.3)',
                    color: 'var(--warm-white)',
                    width: '100%',
                    padding: '0.55rem 0.8rem',
                    fontSize: '0.85rem',
                    outline: 'none',
                    borderRadius: '2px'
                  }}
                >
                  <option value="ALL">Any Guest Count</option>
                  <option value="2">2+ Guests</option>
                  <option value="3">3+ Guests</option>
                  <option value="4">4+ Guests</option>
                  <option value="6">6 Guests (Palace)</option>
                </select>
              </div>

              {/* Price Slider */}
              <div className="col-12 col-sm-6 col-md-4">
                <div className="d-flex justify-content-between">
                  <label style={{ fontSize: '0.68rem', letterSpacing: '0.15em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '4px' }}>
                    <FaSlidersH className="me-1" /> Max Rate / Night
                  </label>
                  <span style={{ fontSize: '0.75rem', color: 'var(--gold)', fontWeight: 'bold' }}>
                    ₹{maxPrice.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="6500"
                  max="40000"
                  step="1000"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="form-range"
                  style={{ accentColor: 'var(--gold)' }}
                />
              </div>
            </div>

            {/* Category Tabs */}
            <div className="d-flex flex-wrap gap-2 mt-3 pt-3 border-top border-secondary">
              {categories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setSelectedCategory(c.id)}
                  className={`py-1 px-3 border-0 text-uppercase ${
                    selectedCategory === c.id ? 'btn-gold' : 'bg-transparent text-light opacity-75'
                  }`}
                  style={{
                    fontSize: '0.72rem',
                    letterSpacing: '0.12em',
                    fontWeight: '600',
                    borderRadius: '2px'
                  }}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Results Counter */}
        <div className="d-flex justify-content-between align-items-center mb-4 text-muted" style={{ fontSize: '0.82rem' }}>
          <span>Showing <strong>{filteredRooms.length}</strong> luxurious accommodations</span>
          {selectedCategory !== 'ALL' && (
            <span style={{ color: 'var(--gold)', cursor: 'pointer' }} onClick={() => setSelectedCategory('ALL')}>
              Reset Filter
            </span>
          )}
        </div>

        {/* Room Grid */}
        <div className="row g-4">
          {filteredRooms.length > 0 ? (
            filteredRooms.map((room, idx) => (
              <div key={room.id} className="col-12 col-md-6 col-lg-4">
                <AnimatedSection animation="fadeUp" delay={idx * 80}>
                  <RoomCard room={room} />
                </AnimatedSection>
              </div>
            ))
          ) : (
            <div className="col-12 text-center py-5">
              <h4 style={{ fontFamily: 'var(--font-serif)', color: 'var(--dark)' }}>No suites match your criteria</h4>
              <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>Try broadening your search or resetting the price filter.</p>
              <button
                onClick={() => { setSelectedCategory('ALL'); setSearchTerm(''); setMaxPrice(40000); setGuestsFilter('ALL'); }}
                className="btn-gold mt-2"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

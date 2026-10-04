import React, { useState } from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { GalleryCard } from '../components/GalleryCard';
import { Modal } from '../components/Modal';
import { GALLERY_ITEMS } from '../data/offers';

export const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [activeModalItem, setActiveModalItem] = useState(null);

  const categories = [
    { id: 'ALL', label: 'All Photographs' },
    { id: 'Architecture', label: 'Grand Architecture' },
    { id: 'Lobby', label: 'Lobby & Salons' },
    { id: 'Rooms', label: 'Suites & Chambers' },
    { id: 'Dining', label: 'Gastronomy' },
    { id: 'Wellness', label: 'Pool & Spa' }
  ];

  const filteredItems = activeCategory === 'ALL'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div style={{ backgroundColor: 'var(--warm-white)', minHeight: '100vh', paddingTop: '7rem', paddingBottom: '6rem' }}>
      <div className="container">
        <div className="text-center mb-5">
          <SectionTitle
            subtitle="VISUAL ARCHIVE"
            title="Moments of Unrivaled Elegance"
            description="Explore our palatial facade, crystal-lit lobbies, serene thermal waters, and Michelin-inspired culinary presentations."
          />

          {/* Category Tabs */}
          <div className="d-flex flex-wrap justify-content-center gap-2 mt-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`py-1 px-3 border-0 text-uppercase ${
                  activeCategory === cat.id ? 'btn-gold' : 'bg-transparent text-secondary'
                }`}
                style={{
                  fontSize: '0.75rem',
                  letterSpacing: '0.12em',
                  fontWeight: '600',
                  borderRadius: '2px',
                  transition: 'var(--transition-smooth)'
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="row g-3">
          {filteredItems.map((item) => (
            <div key={item.id} className="col-12 col-md-6 col-lg-4">
              <GalleryCard item={item} onClick={(it) => setActiveModalItem(it)} />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <Modal
        isOpen={!!activeModalItem}
        onClose={() => setActiveModalItem(null)}
        title={activeModalItem?.title}
        maxWidth="850px"
      >
        {activeModalItem && (
          <div className="text-center">
            <img
              src={activeModalItem.image}
              alt={activeModalItem.title}
              className="w-100 rounded-1 mb-3"
              style={{ maxHeight: '560px', objectFit: 'cover' }}
            />
            <div style={{ color: 'var(--gold)', fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
              {activeModalItem.category} · Captured at VEXMO Grand Palace
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

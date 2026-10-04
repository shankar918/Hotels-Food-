import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SectionTitle } from '../components/SectionTitle';
import { BookingWidget } from '../components/BookingWidget';
import { RoomCard } from '../components/RoomCard';
import { FoodCard } from '../components/FoodCard';
import { OfferCard } from '../components/OfferCard';
import { ServiceCard } from '../components/ServiceCard';
import { ReviewCard } from '../components/ReviewCard';
import { GalleryCard } from '../components/GalleryCard';
import { Modal } from '../components/Modal';
import { ROOMS_DATA } from '../data/rooms';
import { FOOD_ITEMS } from '../data/foods';
import { OFFERS_DATA, SERVICES_DATA, REVIEWS_DATA, GALLERY_ITEMS } from '../data/offers';
import {
  FaArrowRight,
  FaCalendarAlt,
  FaUtensils,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaClock,
  FaChevronLeft,
  FaChevronRight,
  FaAward
} from 'react-icons/fa';

export const Home = ({ onAddToCart, cartItems }) => {
  const [roomFilter, setRoomFilter] = useState('ALL');
  const [reviewIndex, setReviewIndex] = useState(0);
  const [selectedGalleryItem, setSelectedGalleryItem] = useState(null);

  const filteredRooms = roomFilter === 'ALL'
    ? ROOMS_DATA.slice(0, 4)
    : ROOMS_DATA.filter((r) => r.category === roomFilter).slice(0, 4);

  const featuredFoods = FOOD_ITEMS.filter((f) =>
    ['Truffle Tagliatelle Pasta', 'Heritage Slow-Cooked Butter Chicken', 'Forest Truffle Mushroom Risotto', 'Valrhona Chocolate Lava Cake'].includes(f.name)
  );

  const handlePrevReview = () => {
    setReviewIndex((prev) => (prev === 0 ? REVIEWS_DATA.length - 1 : prev - 1));
  };

  const handleNextReview = () => {
    setReviewIndex((prev) => (prev === REVIEWS_DATA.length - 1 ? 0 : prev + 1));
  };

  return (
    <div>
      {/* ============================================================ */}
      {/* 1. CINEMATIC HOTEL HERO SECTION                              */}
      {/* ============================================================ */}
      <section
        className="position-relative d-flex align-items-center justify-content-center text-center overflow-hidden"
        style={{
          minHeight: '100vh',
          backgroundColor: '#17130F',
          paddingTop: '6rem',
          paddingBottom: '8rem'
        }}
      >
        {/* Background Hotel Image with subtle luxury slow zoom */}
        <div
          className="position-absolute inset-0 w-100 h-100 anim-hero-zoom"
          style={{
            backgroundImage: `url('/src/assets/images/luxury_hotel_exterior_1791083042114.jpg')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            filter: 'brightness(0.68) saturate(1.1)',
            zIndex: 1
          }}
        />

        {/* Cinematic Vignette Overlay */}
        <div
          className="position-absolute inset-0 w-100 h-100"
          style={{
            background: 'linear-gradient(180deg, rgba(23,19,15,0.7) 0%, rgba(23,19,15,0.35) 50%, rgba(23,19,15,0.92) 100%)',
            zIndex: 2
          }}
        />

        {/* Hero Content */}
        <div className="container position-relative z-3 anim-fade-up">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10 col-xl-9">
              {/* Small Label */}
              <div
                className="luxury-subtitle mb-3"
                style={{ color: '#E4C98A', letterSpacing: '0.3em' }}
              >
                WELCOME TO VEXMO GRAND PALACE
              </div>

              {/* Main Heading (Editorial Serif) */}
              <h1
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(2.5rem, 5.5vw, 4.8rem)',
                  color: 'var(--warm-white)',
                  fontWeight: 600,
                  lineHeight: 1.15,
                  marginBottom: '1.5rem',
                  textShadow: '0 4px 30px rgba(0,0,0,0.5)'
                }}
              >
                Stay Somewhere <br className="d-none d-sm-inline" />
                <span style={{ fontStyle: 'italic', color: '#E4C98A' }}>Worth Remembering</span>
              </h1>

              {/* Description */}
              <p
                className="lead mx-auto mb-5"
                style={{
                  color: '#EFEAE2',
                  fontSize: 'clamp(1rem, 1.3vw, 1.25rem)',
                  maxWidth: '680px',
                  fontWeight: 300,
                  lineHeight: 1.8
                }}
              >
                Experience refined hospitality, beautiful rooms, exceptional dining, and unforgettable moments in the heart of the royal heritage district.
              </p>

              {/* Action Buttons */}
              <div className="d-flex flex-wrap align-items-center justify-content-center gap-3">
                <Link to="/booking" className="btn-gold py-3 px-4">
                  <FaCalendarAlt className="me-2" /> Book a Room
                </Link>
                <Link to="/dining" className="btn-outline-gold py-3 px-4" style={{ borderColor: 'rgba(228, 201, 138, 0.6)', color: '#FFFDF8' }}>
                  <FaUtensils className="me-2 text-gold" /> Explore Dining
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Booking Panel anchored to the bottom */}
        <div
          className="position-absolute start-50 translate-middle-x w-100 px-3 px-md-4"
          style={{ bottom: '-35px', zIndex: 10, maxWidth: '1140px' }}
        >
          <BookingWidget />
        </div>
      </section>

      {/* Spacer for floating booking widget */}
      <div style={{ height: '70px' }}></div>

      {/* ============================================================ */}
      {/* 2. HOTEL ROOMS SECTION ("Find Your Perfect Stay")            */}
      {/* ============================================================ */}
      <section className="py-5" style={{ backgroundColor: 'var(--warm-white)' }}>
        <div className="container py-md-5">
          <SectionTitle
            subtitle="ACCOMMODATIONS & SUITES"
            title="Find Your Perfect Stay"
            description="From serene garden retreats to palatial executive suites, every accommodation is appointed with handcrafted Italian furnishings and marble baths."
          />

          {/* Room Category Tabs */}
          <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
            {[
              { id: 'ALL', label: 'All Suites' },
              { id: 'DELUXE ROOM', label: 'Deluxe Rooms' },
              { id: 'PREMIUM ROOM', label: 'Premium Rooms' },
              { id: 'EXECUTIVE SUITE', label: 'Executive Suites' },
              { id: 'PRESIDENTIAL SUITE', label: 'Presidential Suites' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setRoomFilter(tab.id)}
                className={`px-4 py-2 border-0 text-uppercase ${
                  roomFilter === tab.id
                    ? 'btn-gold'
                    : 'bg-transparent text-secondary'
                }`}
                style={{
                  fontSize: '0.75rem',
                  letterSpacing: '0.15em',
                  fontWeight: '600',
                  borderRadius: '2px',
                  transition: 'var(--transition-smooth)'
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Room Cards Grid */}
          <div className="row g-4">
            {filteredRooms.map((room) => (
              <div key={room.id} className="col-12 col-md-6 col-lg-6 col-xl-3">
                <RoomCard room={room} />
              </div>
            ))}
          </div>

          <div className="text-center mt-5">
            <Link to="/rooms" className="btn-dark-luxury">
              <span>View All 8 Suites & Rooms</span>
              <FaArrowRight className="btn-arrow ms-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. EXPERIENCE EDITORIAL SECTION ("More Than a Stay")         */}
      {/* ============================================================ */}
      <section className="py-5" style={{ backgroundColor: 'var(--cream)' }}>
        <div className="container py-md-5">
          <div className="row align-items-center g-5">
            <div className="col-12 col-lg-6">
              <div className="position-relative">
                <img
                  src="/src/assets/images/luxury_hotel_lobby_1791083064391.jpg"
                  alt="VEXMO Grand Palace Lobby"
                  className="w-100 rounded-1 shadow-lg"
                  style={{ maxHeight: '520px', objectFit: 'cover' }}
                />
                {/* Overlapping small badge */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '-25px',
                    right: '-20px',
                    backgroundColor: 'var(--dark)',
                    border: '1px solid var(--gold)',
                    padding: '1.5rem',
                    color: 'var(--warm-white)',
                    maxWidth: '220px',
                    borderRadius: '2px',
                    boxShadow: 'var(--shadow-elevated)'
                  }}
                  className="d-none d-sm-block text-center"
                >
                  <FaAward style={{ color: 'var(--gold)', fontSize: '1.8rem', marginBottom: '0.5rem' }} />
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontWeight: '600' }}>
                    Century of Grace
                  </div>
                  <div style={{ fontSize: '0.68rem', color: 'var(--light-gold)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                    Est. 1926 · Royal Heritage
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6 ps-lg-5">
              <div className="luxury-subtitle">OUR TIMELESS HERITAGE</div>
              <h2
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(2.2rem, 3.8vw, 3rem)',
                  lineHeight: 1.2,
                  marginBottom: '1.5rem',
                  fontWeight: '600'
                }}
              >
                More Than a Stay. <br />
                <span style={{ fontStyle: 'italic', color: 'var(--primary)' }}>A Living Tradition.</span>
              </h2>

              <p style={{ fontSize: '0.98rem', color: 'var(--muted)', lineHeight: '1.8', marginBottom: '1.25rem' }}>
                VEXMO Grand Palace represents the epitome of high European architecture woven together with the warmth of Indian royal hospitality. Nestled in tranquil manicured grounds, our halls have welcomed dignitaries, artists, and discerning travelers for generations.
              </p>

              <p style={{ fontSize: '0.98rem', color: 'var(--muted)', lineHeight: '1.8', marginBottom: '2rem' }}>
                Every touchpoint—from our sommelier-curated cellars to our Roman thermal spa—is orchestrated to turn your stay into a timeless memory.
              </p>

              <div className="d-flex flex-wrap gap-3">
                <Link to="/about" className="btn-dark-luxury">
                  <span>Discover Our Story</span>
                  <FaArrowRight className="btn-arrow ms-2" />
                </Link>
                <Link to="/gallery" className="btn-outline-gold" style={{ borderColor: 'var(--primary)', color: 'var(--primary)' }}>
                  View Photo Gallery
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. DINING & RESTAURANT SECTION                               */}
      {/* ============================================================ */}
      <section className="py-5" style={{ backgroundColor: 'var(--warm-white)' }}>
        <div className="container py-md-5">
          <SectionTitle
            subtitle="GASTRONOMY & RESTAURANTS"
            title="Exceptional Dining, Thoughtfully Served"
            description="Our kitchens celebrate Michelin-starred culinary craft, sourcing single-origin spices, hand-churned dairy, and prime ingredients for unforgettable tasting experiences."
          />

          <div className="row g-4 mb-5">
            {featuredFoods.map((food) => (
              <div key={food.id} className="col-12 col-md-6 col-lg-3">
                <FoodCard
                  food={food}
                  onAddToCart={onAddToCart}
                  isInCart={cartItems?.some((item) => item.id === food.id)}
                />
              </div>
            ))}
          </div>

          <div className="p-4 p-md-5 rounded-1 bg-dark text-white position-relative overflow-hidden" style={{ border: '1px solid rgba(201, 164, 92, 0.3)' }}>
            <div className="row align-items-center g-4">
              <div className="col-12 col-lg-8">
                <div style={{ color: 'var(--gold)', fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.5rem', fontWeight: '600' }}>
                  TABLE RESERVATION & IN-ROOM DINING
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: 'var(--warm-white)' }}>
                  Reserve Your Culinary Experience
                </h3>
                <p style={{ color: '#C5BEB5', fontSize: '0.9rem', marginBottom: 0, lineHeight: '1.7' }}>
                  Enjoy candlelit indoor dining in our Royal Salon, open-air terrace seating, or instant white-glove in-room food delivery.
                </p>
              </div>
              <div className="col-12 col-lg-4 text-lg-end d-flex flex-wrap gap-2 justify-content-lg-end">
                <Link to="/table-reservation" className="btn-gold">
                  Reserve a Table
                </Link>
                <Link to="/menu" className="btn-outline-gold" style={{ color: '#FFFDF8', borderColor: 'rgba(255,255,255,0.4)' }}>
                  Full Menu
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. HOTEL SERVICES                                            */}
      {/* ============================================================ */}
      <section className="py-5" style={{ backgroundColor: 'var(--cream)' }}>
        <div className="container py-md-5">
          <SectionTitle
            subtitle="IMPERIAL AMENITIES"
            title="Curated Services for Pure Ease"
            description="Our dedicated concierges, sommeliers, wellness therapists, and private chauffeurs stand ready to accommodate every request."
          />

          <div className="row g-4">
            {SERVICES_DATA.map((service) => (
              <div key={service.id} className="col-12 col-sm-6 col-lg-3">
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. OFFERS & PACKAGES                                         */}
      {/* ============================================================ */}
      <section className="py-5" style={{ backgroundColor: 'var(--warm-white)' }}>
        <div className="container py-md-5">
          <SectionTitle
            subtitle="EXCLUSIVE EXPERIENCES"
            title="Curated Offers & Seasonal Privileges"
            description="Enjoy bespoke stays with complimentary dining, spa access, and champagne arrivals curated for couples, families, and long-term residents."
          />

          <div className="row g-4">
            {OFFERS_DATA.slice(0, 3).map((offer) => (
              <div key={offer.id} className="col-12 col-md-4">
                <OfferCard offer={offer} />
              </div>
            ))}
          </div>

          <div className="text-center mt-5">
            <Link to="/offers" className="btn-dark-luxury">
              <span>View All 6 Special Offers</span>
              <FaArrowRight className="btn-arrow ms-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 7. CUSTOMER REVIEWS (SLIDER / CAROUSEL)                      */}
      {/* ============================================================ */}
      <section className="py-5" style={{ backgroundColor: '#17130F', color: '#FFFDF8' }}>
        <div className="container py-md-5">
          <SectionTitle
            subtitle="GUEST TESTIMONIALS"
            title="Voices of Our Discerning Guests"
            description="A testament to a century of genuine hospitality and refined comfort."
            light={true}
          />

          <div className="row justify-content-center">
            <div className="col-12 col-lg-8">
              <div className="position-relative">
                <ReviewCard review={REVIEWS_DATA[reviewIndex]} />

                {/* Slider Controls */}
                <div className="d-flex align-items-center justify-content-between mt-4">
                  <div style={{ fontSize: '0.8rem', color: 'var(--gold)', letterSpacing: '0.15em', fontWeight: '600' }}>
                    0{reviewIndex + 1} / 0{REVIEWS_DATA.length}
                  </div>

                  <div className="d-flex gap-2">
                    <button
                      onClick={handlePrevReview}
                      className="btn-outline-gold p-2"
                      style={{ width: '42px', height: '42px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                      aria-label="Previous review"
                    >
                      <FaChevronLeft />
                    </button>
                    <button
                      onClick={handleNextReview}
                      className="btn-gold p-2"
                      style={{ width: '42px', height: '42px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                      aria-label="Next review"
                    >
                      <FaChevronRight />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 8. GALLERY PREVIEW SECTION                                   */}
      {/* ============================================================ */}
      <section className="py-5" style={{ backgroundColor: 'var(--warm-white)' }}>
        <div className="container py-md-5">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end mb-5">
            <div>
              <div className="luxury-subtitle">MOMENTS OF OPULENCE</div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', margin: 0, fontWeight: '600' }}>
                Visual Elegance
              </h2>
            </div>
            <Link to="/gallery" className="luxury-link mt-3 mt-md-0">
              View Complete Gallery (12 Images)
            </Link>
          </div>

          <div className="row g-3">
            {GALLERY_ITEMS.slice(0, 6).map((item) => (
              <div key={item.id} className="col-12 col-md-6 col-lg-4">
                <GalleryCard
                  item={item}
                  onClick={(it) => setSelectedGalleryItem(it)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 9. LOCATION & CONTACT SNAPSHOT                               */}
      {/* ============================================================ */}
      <section className="py-5" style={{ backgroundColor: 'var(--cream)', borderTop: '1px solid var(--border)' }}>
        <div className="container py-md-4">
          <div className="row g-5 align-items-center">
            <div className="col-12 col-lg-5">
              <div className="luxury-subtitle">CENTRAL ROYAL LOCATION</div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.4rem', marginBottom: '1.5rem', fontWeight: '600' }}>
                Finding VEXMO Grand Palace
              </h2>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: '1.8', marginBottom: '2rem' }}>
                Strategically positioned in the historical embassy quarter, 25 minutes from the international airport with immediate access to luxury promenades, cultural heritage monuments, and financial centers.
              </p>

              <div className="d-flex flex-column gap-3 mb-4" style={{ fontSize: '0.85rem' }}>
                <div className="d-flex align-items-start gap-3">
                  <FaMapMarkerAlt style={{ color: 'var(--gold)', marginTop: '4px', fontSize: '1.1rem' }} />
                  <div>
                    <strong>Address</strong>
                    <div style={{ color: 'var(--muted)' }}>14 Grand Boulevard, Royal Heritage Quarter, Mumbai 400001</div>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-3">
                  <FaPhoneAlt style={{ color: 'var(--gold)', fontSize: '1rem' }} />
                  <div>
                    <strong>Direct Concierge</strong>
                    <div style={{ color: 'var(--muted)' }}>+91 22 8840 5000 / 5001</div>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-3">
                  <FaClock style={{ color: 'var(--gold)', fontSize: '1rem' }} />
                  <div>
                    <strong>Reception & Check-In</strong>
                    <div style={{ color: 'var(--muted)' }}>24/7 Attended Chauffeur & Reception</div>
                  </div>
                </div>
              </div>

              <Link to="/contact" className="btn-dark-luxury">
                <span>Contact Concierge Desk</span>
                <FaArrowRight className="btn-arrow ms-2" />
              </Link>
            </div>

            <div className="col-12 col-lg-7">
              {/* Stylized Luxury Map Graphic Frame */}
              <div
                className="p-4 p-md-5 rounded-1 text-center position-relative overflow-hidden"
                style={{
                  backgroundColor: 'var(--dark)',
                  border: '1px solid rgba(201, 164, 92, 0.35)',
                  minHeight: '380px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundImage: `radial-gradient(circle at center, rgba(201, 164, 92, 0.12) 0%, rgba(23, 19, 15, 0.95) 75%)`
                }}
              >
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    border: '1px solid var(--gold)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--gold)',
                    fontSize: '1.6rem',
                    marginBottom: '1rem',
                    backgroundColor: 'rgba(23, 19, 15, 0.8)'
                  }}
                >
                  <FaMapMarkerAlt />
                </div>

                <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--warm-white)', fontSize: '1.6rem', marginBottom: '0.5rem' }}>
                  VEXMO Grand Palace & Residences
                </h3>
                <p style={{ color: '#D5CDC4', fontSize: '0.85rem', maxWidth: '380px', marginBottom: '1.5rem' }}>
                  Chauffeur airport pickup can be arranged immediately upon flight confirmation.
                </p>

                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-gold"
                >
                  Get GPS Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal for Gallery */}
      <Modal
        isOpen={!!selectedGalleryItem}
        onClose={() => setSelectedGalleryItem(null)}
        title={selectedGalleryItem?.title}
        maxWidth="800px"
      >
        {selectedGalleryItem && (
          <div className="text-center">
            <img
              src={selectedGalleryItem.image}
              alt={selectedGalleryItem.title}
              className="w-100 rounded-1 mb-3"
              style={{ maxHeight: '500px', objectFit: 'cover' }}
            />
            <div style={{ color: 'var(--gold)', fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
              {selectedGalleryItem.category} · VEXMO Grand Palace Collection
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

"use client";

import { useState, useEffect } from 'react';
import styles from './Hero.module.css';
import Link from 'next/link';
import Image from 'next/image';

const slideProducts = [
  { image: '/canon-ir-advance-4035.jpg', name: 'Canon IR ADVANCE 4035 / 4235 / 4245' },
  { image: '/canon-ir-advance-400.jpg', name: 'Canon IR ADVANCE 400' },
  { image: '/canon-ir-advance-6055.jpg', name: 'Canon IR ADVANCE 6075' },
  { image: '/canon-ir-3035.jpg', name: 'Canon IR 3025 / 3035 / 3045 / 3570' }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return; // Pause slideshow rotation when hovered
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideProducts.length);
    }, 4000); // Auto-slide every 4 seconds
    return () => clearInterval(timer);
  }, [isPaused]);

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % slideProducts.length);
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev - 1 + slideProducts.length) % slideProducts.length);
  };

  const handleTagClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const slideToProductIdMap = [2, 1, 3, 4];
    const targetId = slideToProductIdMap[currentSlide];
    
    // 1. Scroll smoothly to the #products section (exactly like clicking the 'Daftar Produk' navbar link!)
    const catalogSection = document.getElementById('products');
    if (catalogSection) {
      catalogSection.scrollIntoView({ behavior: 'smooth' });
    }
    
    // 2. Dispatch custom event with target product ID to pulse the targeted card
    const event = new CustomEvent('highlight-product', { detail: { id: targetId } });
    window.dispatchEvent(event);
  };

  return (
    <section id="home" className={`${styles.hero} section`}>
      {/* Dynamic background glow */}
      <div className={styles.glowBg}></div>
      
      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.heroGrid}>
          {/* Left Column: Copywriting, Corporate Checklist & CTAs */}
          <div className={`${styles.heroTextSide} animate-fade-in`}>
            <h1 className="h1">
              Solusi Mesin Fotocopy <span className={styles.highlight}>Terbaik</span> untuk Bisnis Anda
            </h1>
            <div className={styles.badge}>Spesialis Mesin Fotocopy Rekondisi USA</div>
            <p className="p-large">
              <strong>Yabesh Tronic</strong> – Partner terpercaya Anda dalam urusan mesin fotocopy untuk <strong>Perkantoran, Pabrik, Professional (Notaris & Advokat)</strong>, dan Usaha lainnya untuk daerah <strong>Tangerang-Jakarta dan Sekitarnya</strong>.
            </p>
            
            {/* Trust Checklist arranged gorgeously as vertical list */}
            <div className={styles.checklist}>
              <div className={styles.checkItem}>
                <div className={styles.checkIcon}>✔</div>
                <div className={styles.checkText}>
                  <strong>Garansi Service 1x24 Jam</strong> – Panggil hari ini, besok teknisi datang!
                </div>
              </div>
              <div className={styles.checkItem}>
                <div className={styles.checkIcon}>✔</div>
                <div className={styles.checkText}>
                  <strong>Bisa Tukar Mesin</strong> jika mesin bermasalah, tanpa biaya tambahan!
                </div>
              </div>
              <div className={styles.checkItem}>
                <div className={styles.checkIcon}>✔</div>
                <div className={styles.checkText}>
                  <strong>Gratis</strong> isi Toner dan Jasa Service berkala!
                </div>
              </div>
            </div>
            
            <div className={styles.ctaGroup}>
              <Link href="#products" className="btn btn-primary" style={{ padding: '0.85rem 1.75rem', whiteSpace: 'nowrap' }}>
                Pilih Mesin Anda Sekarang
              </Link>
              <a 
                href="https://wa.me/6282151176188?text=Halo%20Tim%20Yabesh%20Tronic,%20saya%20tertarik%20untuk%20menanyakan%20terkait%20harga%20dan%20penawaran%20khusus%20terbaru%20mesin%20fotocopy.%20Boleh%20bantu%20kirimkan%20informasinya?" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-outline"
                style={{ padding: '0.85rem 1.75rem', whiteSpace: 'nowrap' }}
              >
                Dapatkan Penawaran Khusus
              </a>
            </div>
          </div>
          
          {/* Right Column: Premium Dynamic Auto-Slideshow */}
          <div className={styles.heroVisualSide}>
            <div 
              className={styles.imageCard}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {slideProducts.map((prod, idx) => (
                <div 
                  key={prod.image}
                  className={styles.slideItem}
                  style={{ 
                    opacity: idx === currentSlide ? 1 : 0,
                    zIndex: idx === currentSlide ? 5 : 1,
                    pointerEvents: idx === currentSlide ? 'auto' : 'none'
                  }}
                >
                  <Image 
                    src={prod.image} 
                    alt={prod.name} 
                    fill
                    sizes="(max-width: 768px) 300px, 400px"
                    className={styles.slideImage}
                    priority={idx === 0}
                  />
                  {/* Floating model tag at the bottom of the active image */}
                  <div 
                    className={styles.modelTag}
                    onClick={handleTagClick}
                    style={{ cursor: 'pointer' }}
                    title="Klik untuk melihat unit ini di katalog"
                  >
                    <span className={styles.brandName}>{prod.name.split(' ')[0]}</span>{' '}
                    <span className={styles.modelName}>{prod.name.split(' ').slice(1).join(' ')}</span>
                  </div>
                </div>
              ))}
              
              {/* Sleek navigation chevrons showing up on hover */}
              <button 
                className={`${styles.navBtn} ${styles.prevBtn}`}
                onClick={prevSlide}
                aria-label="Previous image"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              
              <button 
                className={`${styles.navBtn} ${styles.nextBtn}`}
                onClick={nextSlide}
                aria-label="Next image"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
              
              {/* Modern Dot Indicators (Stretch to pill when active) */}
              <div className={styles.indicators}>
                {slideProducts.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`${styles.indicatorDot} ${idx === currentSlide ? styles.activeDot : ''}`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
            
            {/* Radial ambient glow behind card */}
            <div className={styles.visualGlow}></div>
          </div>
        </div>
      </div>
    </section>
  );
}

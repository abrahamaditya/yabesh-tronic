"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/data/products';
import styles from './ProductDetail.module.css';

export default function ProductDetailClient({ initialId }: { initialId: number }) {
  // Use React state to drive the UI instantly without reloading the page
  const [currentId, setCurrentId] = useState(initialId);
  const product = products.find(p => p.id === currentId);

  // Sync state if server initialId changes (e.g. true browser navigation)
  useEffect(() => {
    setCurrentId(initialId);
  }, [initialId]);

  // Listen to browser Back/Forward buttons to keep URL and UI perfectly in sync
  useEffect(() => {
    const handlePopState = () => {
      const match = window.location.pathname.match(/\/product\/(\d+)/);
      if (match) {
        setCurrentId(parseInt(match[1]));
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  if (!product) return null;

  const baseName = product.name.split('(')[0];
  const bracketName = product.name.split('(')[1] ? `(${product.name.split('(')[1]}` : '';

  // Intercept the click to change state and URL instantly without a Next.js network reload
  const handleThumbnailClick = (e: React.MouseEvent, id: number) => {
    e.preventDefault();
    setCurrentId(id);
    window.history.pushState(null, '', `/product/${id}`);
  };

  return (
    <main className={styles.detailPage}>
      {/* Sticky Top Header */}
      <header className={styles.topBar}>
        <Link href="/#products" className={styles.backBtn}>
          <svg className={styles.backIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          <div className={styles.headerTextGroup}>
            <span className={styles.headerTitle}>Katalog Produk</span>
            <span className={styles.headerSubtitle}>{product.name.split('(')[0]}</span>
          </div>
        </Link>
      </header>

      {/* Massive Visual Area */}
      <section className={styles.heroVisual}>
        <div 
          className={styles.ambientBlur}
          style={{ backgroundImage: `url(${product.image})` }}
        />
        <Image 
          src={product.image} 
          alt={product.name} 
          width={800} 
          height={800} 
          className={styles.mainImage}
          priority
        />
      </section>

      {/* Detailed Specifications Content */}
      <section className={styles.contentWrapper}>
        {/* Marketplace-style Other Products Scroll */}
        <div className={styles.thumbnailScrollArea}>
          <h3 className={styles.thumbnailHeading}>Pilihan Mesin Lainnya:</h3>
          <div className={styles.thumbnailRow}>
            {products.map(otherProduct => (
              <a 
                href={`/product/${otherProduct.id}`} 
                key={otherProduct.id} 
                onClick={(e) => handleThumbnailClick(e, otherProduct.id)}
                className={`${styles.thumbnailCard} ${otherProduct.id === currentId ? styles.thumbnailCardActive : ''}`}
              >
                <div className={styles.thumbnailImage}>
                  <Image src={otherProduct.image} alt={otherProduct.name} fill sizes="90px" style={{ objectFit: 'contain', padding: '0.25rem' }} />
                </div>
              </a>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: '1.25rem' }}>
          <Image src="/logo-canon.png" alt="Canon Logo" width={85} height={28} style={{ objectFit: 'contain', height: 'auto' }} />
        </div>
        
        <h1 className={styles.title}>
          {baseName}
          {bracketName && (
            <span style={{ fontWeight: 400, color: '#64748b', display: 'block', fontSize: '1.1rem', marginTop: '0.4rem' }}>
              {bracketName}
            </span>
          )}
        </h1>
        
        <div className={styles.divider}></div>
        
        <h2 className={styles.specsHeading}>Spesifikasi Lengkap Unit:</h2>
        <ul className={styles.specList}>
          {product.specs.map((spec, index) => (
            <li key={index} className={styles.specItem}>
              <span className={styles.checkmark}>✔</span>
              {spec}
            </li>
          ))}
        </ul>
      </section>

      {/* Persistent Call To Action */}
      <div className={styles.stickyCta}>
        <a 
          href={`https://wa.me/62895410774936?text=Halo%20PT%20Yabesh%20Tronic,%20saya%20ingin%20memesan%20/%20menyewa%20unit%20mesin%20fotocopy%20*${encodeURIComponent(product.name)}*%20untuk%20kebutuhan%20bisnis%20saya.%20Mohon%20informasi%20prosedur%20pemesanan%20dan%20langkah%20selanjutnya.%20Terima%20kasih.`} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.btnPrimary}
        >
          Pesan Sekarang via WhatsApp
        </a>
      </div>
    </main>
  );
}

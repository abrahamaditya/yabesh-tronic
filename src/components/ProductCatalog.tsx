"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { products, Product } from '@/data/products';
import styles from './ProductCatalog.module.css';

export default function ProductCatalog() {
  const router = useRouter();
  const [highlightedProductId, setHighlightedProductId] = useState<number | null>(null);
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Monitor viewport width to decide routing vs modal strategy
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile(); // Check immediately on client mount
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Lock body scroll only if desktop modal is active
  useEffect(() => {
    if (activeProduct && !isMobile) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [activeProduct, isMobile]);

  useEffect(() => {
    const handleHighlight = (e: Event) => {
      const customEvent = e as CustomEvent;
      const productId = customEvent.detail.id;
      setHighlightedProductId(productId);
      
      setTimeout(() => {
        setHighlightedProductId(null);
      }, 3500);
    };

    window.addEventListener('highlight-product', handleHighlight);
    return () => window.removeEventListener('highlight-product', handleHighlight);
  }, []);

  const handleProductClick = (product: Product) => {
    if (isMobile) {
      // On Mobile: Route to dedicated detail page for perfect UX
      router.push(`/product/${product.id}`);
    } else {
      // On Desktop: Open cinematic popup modal
      setActiveProduct(product);
    }
  };

  return (
    <section id="products" className={`${styles.catalog} section`}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className="h2">Katalog Produk Pilihan</h2>
          <p className="p-large">Jajaran mesin fotocopy unggulan yang siap menunjang kebutuhan Anda.</p>
        </div>
        
        <div className={styles.grid}>
          {products.map((product) => (
            <div 
              key={product.id} 
              id={`product-card-${product.id}`}
              className={`${styles.card} ${highlightedProductId === product.id ? styles.highlightedCard : ''}`}
            >
              {/* Clickable Image Wrapper with Zoom Indicator */}
              <div 
                className={styles.imageWrapper} 
                onClick={() => handleProductClick(product)}
                title="Klik untuk melihat detail lengkap unit"
                style={{ cursor: 'pointer' }}
              >
                <Image 
                  src={product.image} 
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className={styles.image}
                  priority={product.id <= 2}
                />
                <div className={styles.zoomOverlay}>
                  <span className={styles.zoomIcon}>🔍 Lihat Detail Unit</span>
                </div>
              </div>
              
              <div className={styles.content}>
                <div 
                  className={styles.cardHeader}
                  onClick={() => handleProductClick(product)}
                  style={{ cursor: 'pointer' }}
                  title="Klik untuk detail lengkap mesin"
                >
                  <div style={{ marginBottom: '0.5rem' }}>
                    <Image src="/logo-canon.png" alt="Canon Logo" width={60} height={20} style={{ objectFit: 'contain', height: 'auto' }} />
                  </div>
                  <h3 className={styles.title}>
                    {product.name.split('(')[0]}
                    <span style={{ fontWeight: 300, color: '#000000' }}>({product.name.split('(')[1]}</span>
                  </h3>
                </div>

                <div className={styles.divider} style={{ margin: '1rem 0' }}></div>
                
                <ul 
                  className={styles.specList}
                  onClick={() => handleProductClick(product)}
                  style={{ cursor: 'pointer' }}
                  title="Klik untuk detail lengkap mesin"
                >
                  {product.specs.slice(0, 4).map((spec, index) => (
                    <li key={index} className={styles.specItem}>
                      <span className={styles.checkmark}>✔</span>
                      {spec}
                    </li>
                  ))}
                </ul>
                <div className={styles.action}>
                  <button 
                    onClick={() => handleProductClick(product)}
                    className="btn btn-outline" 
                    style={{ width: '100%', whiteSpace: 'nowrap', padding: '0.75rem 0.5rem', fontSize: '0.85rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                    title="Klik untuk melihat spesifikasi lengkap dan pemesanan"
                  >
                    Lihat Selengkapnya
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modern Glassmorphic Detail Split Modal (Desktop Only) */}
      {activeProduct && !isMobile && (
        <div className={styles.modalOverlay} onClick={() => setActiveProduct(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={() => setActiveProduct(null)} aria-label="Tutup modal">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            
            <div className={styles.modalBody}>
              {/* Left Column: Image wrapper */}
              <div className={styles.modalImageWrapper}>
                {/* Ambient Blurred Background Image Effect */}
                <div 
                  style={{
                    position: 'absolute',
                    top: '-10%',
                    left: '-10%',
                    width: '120%',
                    height: '120%',
                    backgroundImage: `url(${activeProduct.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'blur(20px)',
                    opacity: 0.35,
                    zIndex: 0
                  }}
                />
                
                {/* Main Product Image */}
                <Image 
                  src={activeProduct.image} 
                  alt={activeProduct.name} 
                  width={650} 
                  height={520} 
                  style={{ objectFit: 'contain', width: '100%', height: '100%', position: 'relative', zIndex: 1, filter: 'drop-shadow(0 15px 25px rgba(0,0,0,0.15))' }}
                  priority
                />
              </div>
              
              {/* Right Column: Detailed Info card */}
              <div className={styles.modalInfoWrapper}>
                <div className={styles.modalScrollBody}>
                  <div style={{ marginBottom: '0.75rem' }}>
                    <Image src="/logo-canon.png" alt="Canon Logo" width={65} height={22} style={{ objectFit: 'contain', height: 'auto' }} />
                  </div>
                  <h3 className={styles.modalTitle}>
                    {activeProduct.name.split('(')[0]}
                    <span style={{ fontWeight: 300, color: '#000000' }}>({activeProduct.name.split('(')[1]}</span>
                  </h3>
                  
                  <div className={styles.divider}></div>
                  
                  <h4 className={styles.modalSpecsHeading}>Spesifikasi Lengkap Unit:</h4>
                  <ul className={styles.modalSpecList}>
                    {activeProduct.specs.map((spec, index) => (
                      <li key={index} className={styles.modalSpecItem}>
                        <span className={styles.modalCheckmark}>✔</span>
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className={styles.modalAction}>
                  <a 
                    href={`https://wa.me/6282151176188?text=Halo%20PT%20Yabesh%20Tronic,%20saya%20ingin%20memesan%20/%20menyewa%20unit%20mesin%20fotocopy%20*${encodeURIComponent(activeProduct.name)}*%20untuk%20kebutuhan%20bisnis%20saya.%20Mohon%20informasi%20prosedur%20pemesanan%20dan%20langkah%20selanjutnya.%20Terima%20kasih.`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-primary" 
                    style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', whiteSpace: 'nowrap', padding: '0.85rem 1rem', fontSize: '0.9rem' }}
                  >
                    Pesan Sekarang via WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

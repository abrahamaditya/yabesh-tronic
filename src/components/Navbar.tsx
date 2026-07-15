"use client";

import Link from 'next/link';
import styles from './Navbar.module.css';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  // Prevent scrolling and manage global classes when sidebar is open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('sidebar-open');
    } else {
      document.body.style.overflow = 'unset';
      document.body.classList.remove('sidebar-open');
    }
  }, [isSidebarOpen]);
  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navContainer}`}>
        {/* Left: Logo Emblem + Company Name & Tagline Text */}
        <Link href="/" className={styles.logoContainer}>
          <Image 
            src="/logo-company.png" 
            alt="PT Yabesh Tronic Emblem" 
            width={48} 
            height={48} 
            style={{ objectFit: 'contain', height: '48px', width: 'auto' }} 
            priority
          />
          <div className={styles.logoTextGroup}>
            <span className={styles.logoText}>PT YABESH TRONIC</span>
            <span className={styles.logoSubtitle}>Pusat Sewa Mesin Fotocopy</span>
          </div>
        </Link>
        
        {/* Right: Links & CTA Button */}
        <div className={styles.rightMenu}>
          <div className={`${styles.navLinks} ${styles.desktopNav}`}>
            <a 
              href="#home" 
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                window.history.pushState(null, '', '#home');
              }}
              className={styles.link}
            >
              Home
            </a>
            <Link href="#products" className={styles.link}>Daftar Produk</Link>
            <Link href="#about" className={styles.link}>Tentang Kami</Link>
          </div>
          
          <a 
            href="https://wa.me/62895410774936?text=Halo%20Tim%20Yabesh%20Tronic,%20saya%20ingin%20konsultasi%20mengenai%20mesin%20fotocopy." 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.ctaBtn}
          >
            Konsultasi Gratis <span className={styles.arrow}>→</span>
          </a>

          {/* Hamburger Menu Button */}
          <button className={styles.hamburgerBtn} onClick={toggleSidebar} aria-label="Toggle menu">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      <div 
        className={`${styles.sidebarOverlay} ${isSidebarOpen ? styles.overlayOpen : ''}`} 
        onClick={closeSidebar}
      ></div>

      {/* Mobile Sidebar */}
      <div className={`${styles.sidebar} ${isSidebarOpen ? styles.sidebarOpen : ''}`}>
        <div className={styles.sidebarHeader}>
          <div className={styles.sidebarLogoContainer}>
            <Image 
              src="/logo-company.png" 
              alt="PT Yabesh Tronic Logo" 
              width={64} 
              height={64} 
              style={{ objectFit: 'contain' }} 
              priority
            />
            <div className={styles.sidebarLogoTextGroup}>
              <span className={styles.sidebarLogoText}>PT YABESH TRONIC</span>
              <span className={styles.sidebarLogoSubtitle}>Pusat Sewa Mesin Fotocopy</span>
            </div>
          </div>
          <button className={styles.closeSidebarBtn} onClick={closeSidebar} aria-label="Close menu">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Scrollable Container inside Sidebar */}
        <div className={styles.sidebarScrollBody}>
          {/* Section 1: Navigation Links */}
          <div className={styles.sidebarLinksSection}>
            <span className={styles.sidebarSectionLabel}>Menu</span>
            <a href="#home" onClick={(e) => { closeSidebar(); e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); window.history.pushState(null, '', '#home'); }} className={styles.sidebarLink}>Home</a>
            <Link href="#products" onClick={closeSidebar} className={styles.sidebarLink}>Daftar Produk</Link>
            <Link href="#about" onClick={closeSidebar} className={styles.sidebarLink}>Tentang Kami</Link>
          </div>

          {/* Section 2: Contact Information */}
          <div className={styles.sidebarInfoSection}>
            <span className={styles.sidebarSectionLabel}>Informasi</span>
            
            {/* Address */}
            <div className={styles.infoItem}>
              <span className={styles.infoEmoji}>📍</span>
              <div>
                <strong className={styles.infoTitle}>Alamat</strong><br />
                <span className={styles.infoContentText}>Jl Raya Serpong Km.7 No. A-388, Kel.Serpong Utara Tangerang</span>
              </div>
            </div>

            {/* Phone */}
            <div className={styles.infoItem}>
              <span className={styles.infoEmoji}>📞</span>
              <div>
                <strong className={styles.infoTitle}>Telepon Kantor</strong><br />
                <a href="tel:0215396996" className={styles.chatLink}>(021) 53-96996</a>
              </div>
            </div>

            {/* WhatsApp */}
            <div className={styles.infoItem}>
              <span className={styles.infoEmoji} style={{ display: 'inline-flex', alignItems: 'center' }}>
                <svg 
                  className={styles.waIcon} 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
              </span>
              <div>
                <strong className={styles.infoTitle}>WhatsApp</strong><br />
                <a 
                  href="https://wa.me/62895410774936?text=Halo%20Pak%20Hendra,%20saya%20ingin%20konsultasi%20mengenai%20mesin%20fotocopy." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.chatLink}
                >
                  0895-4107-74936
                </a>
              </div>
            </div>

            {/* Working Hours */}
            <div className={styles.infoItem}>
              <span className={styles.infoEmoji}>📅</span>
              <div>
                <strong className={styles.infoTitle}>Hari &amp; Jam Kerja</strong><br />
                <span className={styles.infoContentText}>Senin – Jumat (08.00 AM – 17.00 PM)</span><br />
                <span className={styles.infoStatusClosed}>Sabtu, Minggu, Libur Nasional Tutup</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.sidebarFooter}>
          <a 
            href="https://wa.me/62895410774936?text=Halo%20Tim%20Yabesh%20Tronic,%20saya%20ingin%20konsultasi%20mengenai%20mesin%20fotocopy." 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.sidebarCtaBtn}
          >
            Konsultasi Gratis <span className={styles.arrow}>→</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

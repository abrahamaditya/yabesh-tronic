"use client";

import styles from './AboutUs.module.css';

export default function AboutUs() {
  return (
    <section id="about" className={`${styles.aboutUs} section`}>
      <div className="container">
        
        {/* Title and Subtitle Centered like other sections */}
        <div className={styles.header}>
          <h2 className="h2">Tentang Kami</h2>
          <p className="p-large">Partner andalan untuk efisiensi operasional dan produktivitas kerja tanpa hambatan.</p>
        </div>

        <div className={styles.grid}>
          
          {/* Kiri: Profil & Hubungi Tim */}
          <div className={styles.leftCol}>
            <div className={styles.profileCard}>
              <div className={styles.badgeRow}>
                <span className={styles.trustBadge}>
                  <span className={styles.trustBadgeIcon}>🏆</span> Mitra B2B Terpercaya Sejak 2011
                </span>
              </div>
              
              <p className={styles.profileTextLead}>
                <strong>PT Yabesh Tronic</strong> adalah spesialis penyedia jasa <strong>sewa mesin fotocopy berkualitas</strong> dengan <strong>biaya kompetitif</strong> untuk kebutuhan <strong>bisnis, perkantoran, dan perusahaan</strong>.
              </p>
              
              <p className={styles.profileTextDesc}>
                Kami juga melayani <strong>penjualan suku cadang (spare parts) lengkap</strong> serta <strong>layanan servis profesional</strong> untuk unit mesin fotocopy <strong>baru maupun rekondisi</strong>.
              </p>
              
              <div className={styles.pillarsRow}>
                <span className={styles.pillarTag}>
                  <span className={styles.pillarIcon}>📄</span> Sewa &amp; Rental
                </span>
                <span className={styles.pillarTag}>
                  <span className={styles.pillarIcon}>⚙️</span> Servis Profesional
                </span>
                <span className={styles.pillarTag}>
                  <span className={styles.pillarIcon}>🛠️</span> Suku Cadang Resmi
                </span>
              </div>
            </div>

            <h3 className={styles.contactTitle}>Kontak Informasi</h3>
            <div className={styles.contactInfo}>
              <div className={styles.infoItem}>
                <span>📍</span> 
                <div>
                  <strong>Alamat</strong><br />
                  Jl Raya Serpong Km.7 No. A-388, Serpong Utara, Tangerang
                </div>
              </div>
              <div className={styles.infoItem}>
                <span>📞</span> 
                <div>
                  <strong>Telepon Kantor</strong><br />
                  (021) 53-96996
                </div>
              </div>
              <div className={styles.infoItem}>
                <span style={{ display: 'inline-flex', alignItems: 'center' }}>
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
                  <strong>Hengky</strong><br />
                  <a 
                    href="https://wa.me/62811431376?text=Halo%20Pak%20Hengky,%20saya%20ingin%20konsultasi%20mengenai%20mesin%20fotocopy." 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.chatLink}
                  >
                    0811-431-376
                  </a>
                </div>
              </div>
              <div className={styles.infoItem}>
                <span style={{ display: 'inline-flex', alignItems: 'center' }}>
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
                  <strong>Hendra</strong><br />
                  <a 
                    href="https://wa.me/6282151176188?text=Halo%20Pak%20Hendra,%20saya%20ingin%20konsultasi%20mengenai%20mesin%20fotocopy." 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.chatLink}
                  >
                    0821-5117-6188
                  </a>
                </div>
              </div>
              <div className={styles.infoItem}>
                <span>✉️</span> 
                <div>
                  <strong>Email</strong><br />
                  pt_ybt@yahoo.com
                </div>
              </div>
            </div>
          </div>

          {/* Kanan: Google Maps */}
          <div className={styles.rightCol}>
            <div className={styles.mapContainer}>
              <iframe 
                src="https://maps.google.com/maps?q=PT%20Yabesh%20Tronic,%20Jl.%20Raya%20Serpong%20Km.7%20No.%20A-388,%20Pakualam,%20Serpong%20Utara,%20Tangerang%20Selatan&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=addr&amp;output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location PT Yabesh Tronic"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

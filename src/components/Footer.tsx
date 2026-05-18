"use client";

import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.container}>
          <div className={styles.copyright}>
            &copy; {currentYear} <strong>PT Yabesh Tronic</strong>. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

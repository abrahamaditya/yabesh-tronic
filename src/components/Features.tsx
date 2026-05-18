import styles from './Features.module.css';

export default function Features() {
  const features = [
    {
      title: "Kualitas Terjamin",
      desc: <>Mesin fotocopy rekondisi <strong>grade A</strong> dari USA yang telah melewati <strong>Quality Control ketat</strong> untuk performa setara mesin baru.</>,
      icon: "🏆"
    },
    {
      title: "Teknisi Ahli",
      desc: <>Didukung oleh tim <strong>teknisi profesional</strong> yang responsif dan siap menangani segala kendala operasional mesin Anda.</>,
      icon: "⚙️"
    },
    {
      title: "Harga Terbaik",
      desc: <>Solusi sewa dan jual dengan harga yang <strong>transparan dan kompetitif</strong>, disesuaikan dengan skala bisnis Anda.</>,
      icon: "💰"
    }
  ];

  return (
    <section className={`${styles.features} section`}>
      <div className="container">
        <div className={styles.header}>
          <h2 className="h2">Kenapa Puluhan Bisnis Mempercayakan Kami?</h2>
          <p className="p-large">Berdedikasi memberikan pelayanan prima demi kelancaran operasional dan efisiensi bisnis Anda.</p>
        </div>
        <div className={styles.grid}>
          {features.map((feature, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.icon}>{feature.icon}</div>
              <h3 className={styles.title}>{feature.title}</h3>
              <p className={styles.desc}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export type Product = {
  id: number;
  name: string;
  image: string;
  bestSeller: boolean;
  specs: string[];
};

export const products: Product[] = [
  {
    id: 1,
    name: 'Canon IR ADVANCE 400 (Rekondisi USA)',
    image: '/canon-ir-advance-400.jpg',
    bestSeller: false,
    specs: [
      'Kecepatan cetak: 40/50 Cpm A4',
      'Otomatis bolak-balik (Duplex)',
      'Copy & Print Hitam Putih, Scan Warna',
      'Scan & Print USB Flashdisk langsung colok di mesin',
      'Maksimal ukuran kertas Folio',
      'Koneksi antar muka: Wifi, LAN, USB 2.0',
      'Dimensi: 565 x 708 x 1157 mm',
      'Sistem Pemanasan: Element & Fuser Film',
      'RAM 1.5GB & HDD 160GB',
      'Konsumsi listrik: 1.600 Watt',
      'Voltase: 110V (Gratis Stavolt/Trafo)'
    ]
  },
  {
    id: 2,
    name: 'Canon IR ADVANCE 4035 / 4235 / 4245 (Rekondisi USA)',
    image: '/canon-ir-advance-4035.jpg',
    bestSeller: true,
    specs: [
      'Kecepatan cetak: 25/35/45/51 Cpm A4',
      'Otomatis bolak-balik (Duplex)',
      'Copy & Print Hitam Putih, Scan Warna',
      'Scan & Print USB Flashdisk colok di Mesin',
      'Maksimal ukuran kertas A3',
      'Koneksi antar muka: LAN, USB 2.0',
      'Dimensi: 565 x 708 x 1157 mm',
      'Sistem Pemanasan: Element & Fuser Film',
      'RAM 1GB+256MB & HDD 80GB',
      'Voltase: 110V (Gratis Stavolt/Trafo)'
    ]
  },
  {
    id: 3,
    name: 'Canon IR ADVANCE 6075 (Rekondisi USA)',
    image: '/canon-ir-advance-6055.jpg',
    bestSeller: false,
    specs: [
      'Functions: Copy B/W, Print B/W, Scan Color',
      'Paper Size: Legal, Letter, Letter-R, Executive, Statement-R, Custom Size',
      'Copy Speed: 55/65/75 ppm',
      'Resolution: Up to 1200 x 1200 dpi',
      'Device Memory: 1.5 GB / 2 GB',
      'Hard Drive: Max 1 TB',
      'Duplex: Yes (Bolak-balik otomatis)',
      'Network Interface: 10Base-T/100Base-TX/1000Base-T',
      'Other Interface: USB 2.0 (Host) x2, USB 2.0 (Device)',
      'Power Consumption: Max 1.92kW (Sleep: 0.9W or Less)',
      'Warm-Up Time: 30 Seconds or Less',
      'Engine Resolution: 1200 x 1200 dpi'
    ]
  },
  {
    id: 4,
    name: 'Canon IR 3025 / 3035 / 3045 / 3570 (Rekondisi USA)',
    image: '/canon-ir-3035.jpg',
    bestSeller: false,
    specs: [
      'Copy & Print Hitam Putih (Koneksi LAN)',
      'Kecepatan Copy: 30/35/45 cpm',
      'Maksimal ukuran kertas A3',
      'Memory: 512MB & HDD: 20GB',
      'Resolusi Copy: 1200 x 600 dpi',
      'Resolusi Print: 2400 x 600 dpi',
      'Output Size: A5R, A4, A4R, A3',
      'Halftone: 256 gradations of Gray',
      'Multy Copy: 1 to 99 sheets',
      'Zoom Ratio: 25% – 400% (1% increments)',
      'Power Consumption: 1.300 Watt or less',
      'Dimensi: 761mm x 565mm x 700mm',
      'Warm-Up Time (Pemanasan): 29 Detik'
    ]
  }
];

import { notFound } from 'next/navigation';
import { products } from '@/data/products';
import { Metadata } from 'next';
import ProductDetailClient from './ProductDetailClient';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const product = products.find(p => p.id === parseInt(id));
  if (!product) return { title: 'Produk Tidak Ditemukan | Yabesh Tronic' };
  
  return {
    title: `${product.name} | Yabesh Tronic`,
    description: `Spesifikasi lengkap dan penawaran terbaik untuk ${product.name}. Dapatkan mesin fotocopy unggulan untuk kebutuhan bisnis Anda.`,
  };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    notFound();
  }

  return <ProductDetailClient initialId={parseInt(id)} />;
}

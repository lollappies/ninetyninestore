// ===== STORE (Homepage) =====
export function StoreJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ClothingStore",
    "name": "Ninetynine",
    "description": "Ninetynine adalah toko fashion wanita terpercaya di Madiun, Jawa Timur. Menjual dress, blouse, tunic, outer, sweater, pants, dan skirt dengan harga terjangkau mulai IDR 69.000. Pengiriman ke seluruh Indonesia.",
    "url": "https://ninetyninestore-nine.vercel.app/",
    "image": "https://ninetyninestore-nine.vercel.app/og-image.jpg",
    "telephone": "+6281335579050",
    "priceRange": "IDR 69.000 - 325.000",
    "currenciesAccepted": "IDR",
    "paymentAccepted": "Cash, Transfer Bank",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jl. Cokroaminoto No.35",
      "addressLocality": "Madiun",
      "addressRegion": "Jawa Timur",
      "postalCode": "63133",
      "addressCountry": "ID"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -7.6298,
      "longitude": 111.5239
    },
    "openingHours": "Mo-Su 09:00-21:00",
    "hasMap": "https://maps.google.com/?q=Ninetynine+Madiun",
    "areaServed": ["Madiun", "Ponorogo", "Jombang", "Kediri", "Nganjuk", "Blitar", "Tulungagung", "Sidoarjo"]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

// ===== PRODUCT (Halaman detail produk) =====
interface ProductJsonLdProps {
  name: string;
  description?: string;
  price: string;
  image: string;
  id: string;
  category: string;
}

export function ProductJsonLd({ name, description, price, image, id, category }: ProductJsonLdProps) {
  const priceNumber = price?.replace(/[^0-9]/g, '') || '0';

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": name,
    "description": description || `${name} - Fashion wanita dari Ninetynine Madiun`,
    "image": image,
    "sku": id,
    "category": category,
    "brand": {
      "@type": "Brand",
      "name": "Ninetynine"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "IDR",
      "price": priceNumber,
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Ninetynine"
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

// ===== CATEGORY (Halaman kategori) =====
interface CategoryJsonLdProps {
  categoryName: string;
  url: string;
}

export function CategoryJsonLd({ categoryName, url }: CategoryJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": `${categoryName} Wanita — Ninetynine Madiun`,
    "description": `Koleksi ${categoryName} wanita terkini dari Ninetynine. Tersedia berbagai pilihan model dengan harga terjangkau, pengiriman ke seluruh Indonesia.`,
    "url": url,
    "isPartOf": {
      "@type": "WebSite",
      "name": "Ninetynine",
      "url": "https://ninetyninestore-nine.vercel.app"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
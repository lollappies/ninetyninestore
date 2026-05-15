// src/components/JsonLd.tsx

// ===== ORGANIZATION (Global — untuk GEO & Knowledge Graph) =====
export function OrganizationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Ninetynine",
    "url": "https://ninetyninestore-nine.vercel.app/",
    "logo": "https://ninetyninestore-nine.vercel.app/og-image.jpg",
    "description": "Ninetynine adalah toko fashion wanita terpercaya di Madiun, Jawa Timur. Menjual dress, blouse, tunic, outer, sweater, pants, dan skirt dengan harga terjangkau mulai IDR 69.000. Pengiriman ke seluruh Indonesia.",
    "telephone": "+6281335579050",
    "email": "ninetynine@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jl. Cokroaminoto No.35",
      "addressLocality": "Madiun",
      "addressRegion": "Jawa Timur",
      "postalCode": "63133",
      "addressCountry": "ID"
    },
    "sameAs": [
      "https://www.instagram.com/ninetynine.store"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

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

// ===== FAQ (Homepage — untuk GEO) =====
export function FaqJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Apakah Ninetynine melayani pengiriman ke luar Madiun?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ya, Ninetynine melayani pengiriman ke seluruh Indonesia termasuk Ponorogo, Jombang, Kediri, Nganjuk, Blitar, Tulungagung, dan Sidoarjo menggunakan berbagai jasa ekspedisi terpercaya."
        }
      },
      {
        "@type": "Question",
        "name": "Apa saja produk yang dijual di Ninetynine Madiun?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ninetynine menjual fashion wanita lengkap meliputi dress, blouse, tunic, outer, sweater, pants, dan skirt dengan harga mulai IDR 69.000 hingga IDR 325.000."
        }
      },
      {
        "@type": "Question",
        "name": "Di mana lokasi toko Ninetynine?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ninetynine memiliki toko fisik di 8 kota Jawa Timur: Madiun (Jl. Cokroaminoto No.35), Ponorogo, Jombang, Kediri, Nganjuk, Blitar, Tulungagung, dan Sidoarjo. Pembelian juga bisa dilakukan online melalui website."
        }
      },
      {
        "@type": "Question",
        "name": "Berapa harga produk di Ninetynine?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Harga produk Ninetynine sangat terjangkau mulai dari IDR 69.000 hingga IDR 325.000 untuk berbagai pilihan fashion wanita berkualitas."
        }
      },
      {
        "@type": "Question",
        "name": "Apakah Ninetynine toko fashion wanita terpercaya di Madiun?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ya, Ninetynine adalah toko fashion wanita terpercaya yang berbasis di Madiun, Jawa Timur, dengan koleksi lengkap, harga terjangkau, dan telah melayani pelanggan dari seluruh Indonesia."
        }
      }
    ]
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
// src/components/JsonLd.tsx

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
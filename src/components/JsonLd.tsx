// src/components/JsonLd.tsx

import React from "react";

/* ================= ORGANIZATION ================= */

export function OrganizationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Ninetynine",
    url: "https://ninetyninestore-nine.vercel.app/",
    logo: "https://ninetyninestore-nine.vercel.app/og-image.jpg",
    description:
      "Ninetynine adalah toko fashion wanita terpercaya di Madiun, Jawa Timur.",
    telephone: "+6281335579050",
    email: "ninetynine@gmail.com",

    sameAs: [
      "https://www.instagram.com/99outfitstore",
      "https://www.tiktok.com/@always.ninetynine",
      "https://id.shp.ee/RHtRFQfp",
      "https://api.whatsapp.com/send/?phone=6281335579050"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd)
      }}
    />
  );
}


/* ================= STORE ================= */

export function StoreJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ClothingStore",

    name: "Ninetynine",

    description:
      "Toko fashion wanita modern di Madiun.",

    url:
      "https://ninetyninestore-nine.vercel.app/",

    image:
      "https://ninetyninestore-nine.vercel.app/og-image.jpg",

    telephone:
      "+6281335579050",

    priceRange:
      "IDR 69.000 - 325.000",

    currenciesAccepted:
      "IDR",

    paymentAccepted:
      "Cash, Transfer",

    address: {
      "@type": "PostalAddress",

      streetAddress:
        "Jl. Cokroaminoto No.35",

      addressLocality:
        "Madiun",

      addressRegion:
        "Jawa Timur",

      postalCode:
        "63133",

      addressCountry:
        "ID"
    },

    geo: {
      "@type": "GeoCoordinates",

      latitude: -7.6298,
      longitude: 111.5239
    },

    openingHours:
      "Mo-Su 09:00-21:00"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd)
      }}
    />
  );
}


/* ================= WEBSITE ================= */

export function WebsiteJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",

    "@type": "WebSite",

    name: "Ninetynine",

    url:
      "https://ninetyninestore-nine.vercel.app",

    description:
      "Fashion wanita modern",

    inLanguage:
      "id-ID"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd)
      }}
    />
  );
}


/* ================= WEBPAGE ================= */

export function WebPageJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",

    "@type": "WebPage",

    name:
      "NineTynine Store | Fashion Wanita Modern",

    url:
      "https://ninetyninestore-nine.vercel.app",

    datePublished:
      "2024-01-01",

    dateModified:
      new Date()
        .toISOString()
        .split("T")[0]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd)
      }}
    />
  );
}


/* ================= FAQ ================= */

export function FaqJsonLd() {
  const jsonLd = {
    "@context":
      "https://schema.org",

    "@type":
      "FAQPage",

    mainEntity: [
      {
        "@type":
          "Question",

        name:
          "Apakah Ninetynine melayani pengiriman seluruh Indonesia?",

        acceptedAnswer: {
          "@type":
            "Answer",

          text:
            "Ya. Ninetynine melayani pengiriman ke seluruh Indonesia."
        }
      },

      {
        "@type":
          "Question",

        name:
          "Produk apa yang dijual?",

        acceptedAnswer: {
          "@type":
            "Answer",

          text:
            "Dress, blouse, tunic, sweater, outer, skirt, dan pants."
        }
      },

      {
        "@type":
          "Question",

        name:
          "Berapa harga produk Ninetynine?",

        acceptedAnswer: {
          "@type":
            "Answer",

          text:
            "Harga mulai dari IDR 69.000."
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd)
      }}
    />
  );
}


/* ================= SPEAKABLE ================= */

export function SpeakableJsonLd() {

  const jsonLd = {
    "@context":
      "https://schema.org",

    "@type":
      "WebPage",

    speakable: {
      "@type":
        "SpeakableSpecification",

      cssSelector: [
        ".ai-summary"
      ]
    },

    url:
      "https://ninetyninestore-nine.vercel.app/"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd)
      }}
    />
  );
}
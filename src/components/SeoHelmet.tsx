import { Helmet } from 'react-helmet-async';

interface SeoHelmetProps {
  title: string;
  description: string;
  keywords?: string;
  url: string;
  image: string;
}

export function SeoHelmet({
  title,
  description,
  keywords,
  url,
  image
}: SeoHelmetProps) {

  return (
    <Helmet>

      {/* BASIC */}
      <title>{title}</title>

      <meta
        name="description"
        content={description}
      />

      <meta
        name="keywords"
        content={keywords}
      />

      <meta
        name="robots"
        content="index, follow"
      />

      <meta
        name="googlebot"
        content="index, follow"
      />

      <meta
        name="bingbot"
        content="index, follow"
      />

      <link
        rel="canonical"
        href={url}
      />

      {/* OPEN GRAPH */}
      <meta
        property="og:type"
        content="website"
      />

      <meta
        property="og:title"
        content={title}
      />

      <meta
        property="og:description"
        content={description}
      />

      <meta
        property="og:url"
        content={url}
      />

      <meta
        property="og:image"
        content={image}
      />

      {/* TWITTER */}
      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta
        name="twitter:title"
        content={title}
      />

      <meta
        name="twitter:description"
        content={description}
      />

      <meta
        name="twitter:image"
        content={image}
      />

    </Helmet>
  );
}
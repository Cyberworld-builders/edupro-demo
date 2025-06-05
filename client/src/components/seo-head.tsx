import { useEffect } from "react";
import { SEOProps, defaultSEO } from "@/lib/seo";

interface SEOHeadProps extends SEOProps {
  structuredData?: string;
}

export default function SEOHead({ 
  title = defaultSEO.title,
  description = defaultSEO.description,
  keywords = defaultSEO.keywords,
  image = defaultSEO.image,
  url = defaultSEO.url,
  type = defaultSEO.type,
  structuredData
}: SEOHeadProps) {
  useEffect(() => {
    // Update document title
    document.title = title!;
    
    // Update meta tags
    updateMetaTag('description', description!);
    updateMetaTag('keywords', keywords!);
    
    // Update Open Graph tags
    updateMetaTag('og:title', title!, 'property');
    updateMetaTag('og:description', description!, 'property');
    updateMetaTag('og:image', image!, 'property');
    updateMetaTag('og:url', url!, 'property');
    updateMetaTag('og:type', type!, 'property');
    
    // Update Twitter Card tags
    updateMetaTag('twitter:title', title!, 'name');
    updateMetaTag('twitter:description', description!, 'name');
    updateMetaTag('twitter:image', image!, 'name');
    updateMetaTag('twitter:card', 'summary_large_image', 'name');
    
    // Add structured data if provided
    if (structuredData) {
      let script = document.querySelector('script[type="application/ld+json"]');
      if (!script) {
        script = document.createElement('script');
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.textContent = structuredData;
    }
  }, [title, description, keywords, image, url, type, structuredData]);

  return null;
}

function updateMetaTag(name: string, content: string, attribute: 'name' | 'property' = 'name') {
  let meta = document.querySelector(`meta[${attribute}="${name}"]`);
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute(attribute, name);
    document.head.appendChild(meta);
  }
  meta.setAttribute('content', content);
}

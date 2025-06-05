export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

export const defaultSEO: SEOProps = {
  title: "EduPro - Premium Online Education Platform",
  description: "Transform your future with EduPro's comprehensive online courses. Expert-led training in technology, business, design and more with industry-recognized certificates.",
  keywords: "online courses, education, learning, professional development, certification, web development, data science, digital marketing",
  image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630",
  url: "https://edupro.com",
  type: "website"
};

export function generatePageTitle(pageTitle?: string): string {
  if (!pageTitle) return defaultSEO.title!;
  return `${pageTitle} | EduPro`;
}

export function generateStructuredData(type: string, data: any) {
  const baseData = {
    "@context": "https://schema.org",
    "@type": type,
    ...data
  };
  
  return JSON.stringify(baseData);
}

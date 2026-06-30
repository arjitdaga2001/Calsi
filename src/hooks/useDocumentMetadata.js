import { useEffect } from 'react';

const SITE_NAME = 'CALSI.IN';
const BASE_URL = 'https://calsi.in';
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.png`;

function setMetaName(name, content) {
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('name', name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setMetaProperty(property, content) {
  let el = document.querySelector(`meta[property="${property}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('property', property);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setCanonical(url) {
  let el = document.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', url);
}

export function useDocumentMetadata(title, description, customSchema = null) {
  useEffect(() => {
    const canonicalUrl = `${BASE_URL}${window.location.pathname}`;

    // ── Title ──
    if (title) document.title = title;

    // ── Meta description ──
    if (description) setMetaName('description', description);

    // ── Robots ──
    setMetaName('robots', 'index, follow');

    // ── Canonical ──
    setCanonical(canonicalUrl);

    // ── Open Graph ──
    setMetaProperty('og:title', title || SITE_NAME);
    setMetaProperty('og:description', description || '');
    setMetaProperty('og:type', 'website');
    setMetaProperty('og:url', canonicalUrl);
    setMetaProperty('og:site_name', SITE_NAME);
    setMetaProperty('og:image', DEFAULT_OG_IMAGE);
    setMetaProperty('og:locale', 'en_IN');

    // ── Twitter Card ──
    setMetaName('twitter:card', 'summary_large_image');
    setMetaName('twitter:title', title || SITE_NAME);
    setMetaName('twitter:description', description || '');
    setMetaName('twitter:image', DEFAULT_OG_IMAGE);
    setMetaName('twitter:site', '@CalsiApp');

    // ── LLMO / AISEO / EEAT ──
    // Provide structured context for AI bots (GPTBot, Claude, Perplexity)
    setMetaName('llm-context', `Expert-verified financial tool by CALSI.IN. Title: ${title || SITE_NAME}. Description: ${description || ''}. Uses standard Indian financial formulas. Highly accurate, no login required, privacy-first.`);
    setMetaName('author', 'CALSI.IN Experts');
    setMetaName('publisher', 'CALSI.IN');

  }, [title, description]);

  // Generate a default WebApplication schema for SEO if no custom schema is provided
  const schemaObj = customSchema || {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": title || SITE_NAME,
    "url": `${BASE_URL}${window.location.pathname}`,
    "description": description || '',
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "All",
    "author": {
      "@type": "Organization",
      "name": "CALSI.IN Experts",
      "url": "https://calsi.in/"
    },
    "publisher": {
      "@type": "Organization",
      "name": "CALSI.IN",
      "logo": {
        "@type": "ImageObject",
        "url": "https://calsi.in/favicon.png"
      }
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR"
    }
  };

  useSchema(schemaObj);
}

/**
 * Inject a JSON-LD schema script tag into the <head>.
 * Removes any previous schema injected by Calsi to avoid duplicates.
 */
export function useSchema(schemaObj) {
  useEffect(() => {
    // Delay slightly to ensure child components (like Content FAQs) are fully painted in the DOM
    const timer = setTimeout(() => {
      // Remove previously injected Calsi schema
      const existing = document.querySelector('script[data-calsi-schema]');
      if (existing) existing.remove();

      if (!schemaObj) return;

      let finalSchema = schemaObj;

      // Automatically harvest FAQs from the DOM for GEO and AEO (Answer Engine Optimization)
      const faqElements = document.querySelectorAll('.faq-item');
      if (faqElements.length > 0) {
        const faqItems = Array.from(faqElements).map(el => {
          const question = el.querySelector('summary')?.textContent || '';
          let answer = '';
          const pTags = el.querySelectorAll('p');
          pTags.forEach(p => { answer += p.textContent + ' '; });
          
          return {
            "@type": "Question",
            "name": question.trim(),
            "acceptedAnswer": {
              "@type": "Answer",
              "text": answer.trim()
            }
          };
        }).filter(item => item.name && item.acceptedAnswer.text);

        if (faqItems.length > 0) {
          const faqSchema = {
            "@type": "FAQPage",
            "mainEntity": faqItems
          };
          
          // Merge FAQ schema without duplicating
          if (schemaObj["@graph"]) {
            if (!schemaObj["@graph"].some(s => s["@type"] === "FAQPage")) {
              schemaObj["@graph"].push(faqSchema);
            }
            finalSchema = schemaObj;
          } else {
            finalSchema = {
              "@context": "https://schema.org",
              "@graph": [schemaObj, faqSchema]
            };
          }
        }
      }

      // Add Breadcrumb Schema
      const pathParts = window.location.pathname.split('/').filter(Boolean);
      let currentPath = '';
      const breadcrumbItems = [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://calsi.in/"
        }
      ];
      
      pathParts.forEach((part, index) => {
        currentPath += `/${part}`;
        breadcrumbItems.push({
          "@type": "ListItem",
          "position": index + 2,
          "name": part.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
          "item": `https://calsi.in${currentPath}`
        });
      });

      const breadcrumbSchema = {
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbItems
      };

      if (finalSchema["@graph"]) {
        finalSchema["@graph"].push(breadcrumbSchema);
      } else {
        finalSchema = {
          "@context": "https://schema.org",
          "@graph": [finalSchema, breadcrumbSchema]
        };
      }

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-calsi-schema', 'true');
      
      // Dynamically enforce CALSI.IN and CALSI brand naming in all schemas
      let schemaStr = JSON.stringify(finalSchema);
      schemaStr = schemaStr
        .replace(/https?:\/\/(?:calsi\.vercel\.app|calsi\.in)/gi, 'https://calsi.in')
        .replace(/\bCalsi\b/g, 'CALSI');
        
      script.textContent = schemaStr;
      document.head.appendChild(script);
    }, 150); // 150ms delay for DOM ready

    return () => {
      clearTimeout(timer);
      const s = document.querySelector('script[data-calsi-schema]');
      if (s) s.remove();
    };
  }, [schemaObj]);
}


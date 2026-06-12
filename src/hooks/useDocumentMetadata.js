import { useEffect } from 'react';

const SITE_NAME = 'Calsi';
const BASE_URL = 'https://calsi.vercel.app';
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

export function useDocumentMetadata(title, description) {
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

  }, [title, description]);
}

/**
 * Inject a JSON-LD schema script tag into the <head>.
 * Removes any previous schema injected by Calsi to avoid duplicates.
 */
export function useSchema(schemaObj) {
  useEffect(() => {
    // Remove previously injected Calsi schema
    const existing = document.querySelector('script[data-calsi-schema]');
    if (existing) existing.remove();

    if (!schemaObj) return;

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-calsi-schema', 'true');
    script.textContent = JSON.stringify(schemaObj);
    document.head.appendChild(script);

    return () => {
      const s = document.querySelector('script[data-calsi-schema]');
      if (s) s.remove();
    };
  }, [schemaObj]);
}

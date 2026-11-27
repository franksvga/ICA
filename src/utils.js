import { ICON_DROPLETS } from './icons.js';

export function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export function renderImage({ src, alt, className = '', fallbackLabel = 'Infraestructura Hidráulica ICA' }) {
  return `
    <img
      src="${escapeHtml(src)}"
      alt="${escapeHtml(alt)}"
      referrerpolicy="no-referrer"
      class="${escapeHtml(className)}"
      data-fallback-label="${escapeHtml(fallbackLabel)}"
    />
  `;
}

export function bindImageFallbacks(container) {
  const images = container.querySelectorAll('img[data-fallback-label]');
  images.forEach((img) => {
    img.addEventListener('error', () => {
      const label = img.getAttribute('data-fallback-label') || 'Infraestructura Hidráulica ICA';
      const alt = img.getAttribute('alt') || label;
      const fallback = document.createElement('div');
      fallback.setAttribute('role', 'img');
      fallback.setAttribute('aria-label', alt);
      fallback.className = 'image-fallback';
      fallback.innerHTML = `${ICON_DROPLETS}<span>${escapeHtml(label)}</span>`;
      img.replaceWith(fallback);
    }, { once: true });
  });
}

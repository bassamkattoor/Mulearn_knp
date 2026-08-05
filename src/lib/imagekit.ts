// ImageKit configuration
export const IK_URL = import.meta.env.VITE_IMAGEKIT_URL as string;
export const IK_PUBLIC_KEY = import.meta.env.VITE_IMAGEKIT_PUBLIC_KEY as string;

/**
 * Build an optimised ImageKit URL from a path stored in the media library.
 * Falls back gracefully if the path is already an absolute URL (e.g. Unsplash).
 *
 * @param path    e.g. "/execom/LEAD.png"  or  "https://..." (returned as-is)
 * @param options Transformation params
 */
export function ikUrl(
  path: string,
  options: { w?: number; h?: number; q?: number; f?: string } = {}
): string {
  // Already absolute URL — return unchanged
  if (path.startsWith('http')) return path;
  // Empty path — return empty
  if (!path) return '';

  const tr: string[] = [];
  if (options.w) tr.push(`w-${options.w}`);
  if (options.h) tr.push(`h-${options.h}`);
  if (options.q) tr.push(`q-${options.q}`);
  tr.push(`f-${options.f ?? 'auto'}`); // auto = WebP/AVIF where supported

  const base = IK_URL.replace(/\/$/, '');
  const filePath = path.startsWith('/') ? path : `/${path}`;
  return `${base}/tr:${tr.join(',')}${filePath}`;
}

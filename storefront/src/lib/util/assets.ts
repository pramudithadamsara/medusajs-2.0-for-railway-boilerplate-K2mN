export function getAssetUrl(path: string): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // In production, we need absolute URLs from domain root
  if (typeof window !== 'undefined') {
    // Client-side: use current origin
    return `${window.location.origin}/${cleanPath}`;
  }
  
  // Server-side: use environment variable or fallback
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || '';
  return `${baseUrl}/${cleanPath}`;
}

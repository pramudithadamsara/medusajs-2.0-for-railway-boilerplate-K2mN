export const getBaseURL = () => {
  return process.env.NEXT_PUBLIC_BASE_URL || "https://localhost:8000"
}

export const getStaticAssetPath = (path: string) => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  return `/${cleanPath}`
}

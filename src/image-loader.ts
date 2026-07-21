"use client";

interface ImageLoaderProps {
  src: string;
  width: number;
  quality?: number;
}

export default function imageLoader({ src }: ImageLoaderProps): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  
  // If the path starts with a slash, prepend the basePath
  if (src.startsWith("/")) {
    return `${basePath}${src}`;
  }
  
  return src;
}

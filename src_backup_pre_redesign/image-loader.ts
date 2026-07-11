"use client";

interface ImageLoaderProps {
  src: string;
  width: number;
  quality?: number;
}

export default function imageLoader({ src }: ImageLoaderProps): string {
  const basePath = "/salonwebsitepreview.github.io";
  
  // If the path starts with a slash, prepend the basePath
  if (src.startsWith("/")) {
    return `${basePath}${src}`;
  }
  
  return src;
}

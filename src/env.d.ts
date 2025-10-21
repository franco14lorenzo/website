/// <reference types="astro/client" />
/// <reference types="@astrojs/tailwind" />

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

// Astro assets module declaration
declare module "astro:assets" {
  export interface ImageProps {
    src: string | ImageMetadata;
    alt: string;
    width?: number;
    height?: number;
    class?: string;
    loading?: "lazy" | "eager";
    quality?: "low" | "mid" | "high" | "max" | number;
    draggable?: boolean | "true" | "false";
  }
  
  export const Image: (props: ImageProps) => any;
}

// Image asset declarations
declare module "*.webp" {
  const src: string;
  export default src;
}

declare module "*.png" {
  const src: string;
  export default src;
}

declare module "*.jpg" {
  const src: string;
  export default src;
}

declare module "*.jpeg" {
  const src: string;
  export default src;
}

declare module "*.gif" {
  const src: string;
  export default src;
}

declare module "*.svg" {
  const src: string;
  export default src;
}

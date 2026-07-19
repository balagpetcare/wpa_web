"use client";

import Image from "next/image";
import { useState } from "react";

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  label: string;
  className?: string;
  imgClassName?: string;
  sizes?: string;
}

export function ImageWithFallback({
  src,
  alt,
  label,
  className = "",
  imgClassName = "",
  sizes = "100vw",
}: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`image-slot ${className}`.trim()}>
      {!hasError ? (
        <Image
          src={src}
          alt={alt}
          fill
          unoptimized
          sizes={sizes}
          className={`image-slot__img ${imgClassName}`.trim()}
          onError={() => setHasError(true)}
        />
      ) : (
        <div className="image-slot__placeholder" role="img" aria-label={`${alt}. Placeholder shown until ${label} is added.`}>
          <span className="image-slot__eyebrow">Image Slot</span>
          <strong className="image-slot__label">{label}</strong>
          <span className="image-slot__path">{src}</span>
        </div>
      )}
    </div>
  );
}

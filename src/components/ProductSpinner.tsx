"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import "./ProductSpinner.css";

const SPINNER_IMAGES: string[] = Array.from(
  { length: 32 },
  (_, i) => `/images/product-spinner-v2/4J0A${2933 + i}.webp`
);

const COUNT = SPINNER_IMAGES.length;

export default function ProductSpinner() {
  // React state only for things that require a re-render (happens once)
  const [hasInteracted, setHasInteracted] = useState(false);

  // Refs for direct DOM manipulation during drag — no React re-renders
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const progressFillRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  const indexRef = useRef(0);
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartIndexRef = useRef(0);
  const hasInteractedRef = useRef(false);

  // Preload and pre-decode all frames on mount so they're GPU-ready
  useEffect(() => {
    SPINNER_IMAGES.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.decode().catch(() => {});
    });
  }, []);

  const updateFrame = useCallback((next: number) => {
    indexRef.current = next;
    if (imgRef.current) imgRef.current.src = SPINNER_IMAGES[next];
    if (progressFillRef.current) {
      progressFillRef.current.style.width = `${((next + 1) / COUNT) * 100}%`;
    }
    if (progressBarRef.current) {
      progressBarRef.current.setAttribute("aria-valuenow", String(next + 1));
    }
  }, []);

  const markInteracted = useCallback(() => {
    if (hasInteractedRef.current) return;
    hasInteractedRef.current = true;
    setHasInteracted(true);
  }, []);

  const goPrev = useCallback(() => {
    markInteracted();
    updateFrame((indexRef.current - 1 + COUNT) % COUNT);
  }, [markInteracted, updateFrame]);

  const goNext = useCallback(() => {
    markInteracted();
    updateFrame((indexRef.current + 1) % COUNT);
  }, [markInteracted, updateFrame]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") { e.preventDefault(); goPrev(); }
    else if (e.key === "ArrowRight") { e.preventDefault(); goNext(); }
  }, [goPrev, goNext]);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    markInteracted();
    isDraggingRef.current = true;
    dragStartXRef.current = e.clientX;
    dragStartIndexRef.current = indexRef.current;
    containerRef.current?.classList.add("product-spinner--dragging");
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  }, [markInteracted]);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    const dx = dragStartXRef.current - e.clientX;
    const delta = Math.round(dx / 18);
    const next = ((dragStartIndexRef.current + delta) % COUNT + COUNT) % COUNT;
    updateFrame(next);
  }, [updateFrame]);

  const handlePointerUp = useCallback(() => {
    isDraggingRef.current = false;
    containerRef.current?.classList.remove("product-spinner--dragging");
  }, []);

  return (
    <div
      ref={containerRef}
      className="product-spinner"
      tabIndex={0}
      aria-label="Trailer Dr. 360° product view. Use left and right arrow keys to rotate."
      onKeyDown={handleKeyDown}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      <div className="product-spinner__frame">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          ref={imgRef}
          src={SPINNER_IMAGES[0]}
          alt="Trailer Dr. interactive 360° product view"
          className="product-spinner__image"
          draggable={false}
        />
      </div>

      <div className="product-spinner__controls">
        <button
          type="button"
          className="product-spinner__btn product-spinner__btn--prev"
          onClick={(e) => { e.stopPropagation(); goPrev(); }}
          aria-label="Previous view"
        >
          <span className="material-symbols-outlined" aria-hidden>arrow_back</span>
        </button>
        <button
          type="button"
          className="product-spinner__btn product-spinner__btn--next"
          onClick={(e) => { e.stopPropagation(); goNext(); }}
          aria-label="Next view"
        >
          <span className="material-symbols-outlined" aria-hidden>arrow_forward</span>
        </button>
      </div>

      <div className="product-spinner__footer">
        {hasInteracted ? (
          <div
            ref={progressBarRef}
            className="product-spinner__progress"
            role="progressbar"
            aria-valuemin={1}
            aria-valuemax={COUNT}
            aria-valuenow={1}
            aria-label={`View 1 of ${COUNT}`}
          >
            <div ref={progressFillRef} className="product-spinner__progress-fill" style={{ width: `${(1 / COUNT) * 100}%` }} />
          </div>
        ) : (
          <span className="product-spinner__rotate-badge" aria-label="Drag to rotate">
            <span className="material-symbols-outlined product-spinner__rotate-icon" aria-hidden>rotate_right</span>
          </span>
        )}
      </div>
    </div>
  );
}

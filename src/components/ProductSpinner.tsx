import { useCallback, useState } from "react";
import "./ProductSpinner.css";

const productSpinnerGlob = import.meta.glob<{ default: string }>(
  "../assets/images/product-spinner-v2/*.{webp,jpg,jpeg,png}",
  { eager: true, query: "?url", import: "default" }
);
const fallbackGlob = import.meta.glob<{ default: string }>(
  "../assets/images/4J0A*.webp",
  { eager: true, query: "?url", import: "default" }
);

function getSpinnerUrls(): string[] {
  const glob = Object.keys(productSpinnerGlob).length > 0 ? productSpinnerGlob : fallbackGlob;
  const entries = Object.entries(glob);
  if (entries.length === 0) return [];
  return entries
    .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
    .map(([, url]) => (typeof url === "string" ? url : (url as { default: string }).default));
}

const SPINNER_IMAGES = getSpinnerUrls();

export default function ProductSpinner() {
  const [index, setIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragStartIndex, setDragStartIndex] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);

  const count = SPINNER_IMAGES.length;
  const hasImages = count > 0;

  const markInteracted = () => setHasInteracted(true);

  const goPrev = useCallback(() => {
    markInteracted();
    setIndex((i) => (i - 1 + count) % count);
  }, [count]);

  const goNext = useCallback(() => {
    markInteracted();
    setIndex((i) => (i + 1) % count);
  }, [count]);

  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      if (!hasImages) return;
      markInteracted();
      setIsDragging(true);
      setDragStartX(e.clientX);
      setDragStartIndex(index);
      (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    },
    [hasImages, index]
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging || !hasImages) return;
      const dx = dragStartX - e.clientX;
      const delta = Math.round(dx / 18);
      const next = (dragStartIndex + delta % count + count) % count;
      setIndex(next);
    },
    [isDragging, hasImages, dragStartX, dragStartIndex, count]
  );

  const handlePointerUp = useCallback(() => setIsDragging(false), []);

  if (!hasImages) {
    return (
      <div className="product-spinner product-spinner--empty">
        <span>No spin images found.</span>
      </div>
    );
  }

  const progressPct = ((index + 1) / count) * 100;

  return (
    <div
      className={`product-spinner${isDragging ? " product-spinner--dragging" : ""}`}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      <div
        className={`product-spinner__frame${index === 14 ? " product-spinner__frame--frame-15" : ""}`}
      >
        <img
          src={SPINNER_IMAGES[index]}
          alt={`Trailer Dr. interactive 360° product view`}
          className="product-spinner__image"
          draggable={false}
        />
      </div>

      {/* Left / right arrows */}
      <div className="product-spinner__controls" aria-hidden={!hasInteracted}>
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

      {/* Rotate badge pre-interaction, progress bar after */}
      <div className="product-spinner__footer">
        {hasInteracted ? (
          <div className="product-spinner__progress" role="progressbar" aria-valuemin={1} aria-valuemax={count} aria-valuenow={index + 1} aria-label={`View ${index + 1} of ${count}`}>
            <div className="product-spinner__progress-fill" style={{ width: `${progressPct}%` }} />
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

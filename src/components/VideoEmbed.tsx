"use client";

import { useEffect, useRef, useState } from "react";
import "./VideoEmbed.css";

interface VideoEmbedProps {
  youtubeId: string;
  title: string;
  className?: string;
}

export default function VideoEmbed({ youtubeId, title, className }: VideoEmbedProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const posterVideoRef = useRef<HTMLVideoElement>(null);

  // Pause the looping poster clip when it's scrolled out of view.
  useEffect(() => {
    const el = posterVideoRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [isPlaying]);

  return (
    <div className={`video-embed${className ? ` ${className}` : ""}`}>
      {isPlaying ? (
        <iframe
          className="video-embed__iframe"
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          className="video-embed__poster"
          onClick={() => setIsPlaying(true)}
          aria-label={`Play video: ${title}`}
        >
          <video
            ref={posterVideoRef}
            className="video-embed__bg"
            autoPlay
            loop
            muted
            playsInline
            aria-hidden="true"
          >
            <source src="/videos/Trailer-Dr-Logo.webm" type="video/webm" />
            <source src="/videos/Trailer-Dr-Logo.mp4" type="video/mp4" />
          </video>
          <span className="video-embed__scrim" aria-hidden="true" />
          <span className="video-embed__play" aria-hidden="true">
            <span className="material-symbols-outlined">play_arrow</span>
          </span>
        </button>
      )}
    </div>
  );
}

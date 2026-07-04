"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { works, type WorkCategory, type WorkItem } from "@/lib/content";

type Filter = "all" | WorkCategory;

const filters: { value: Filter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "artwork", label: "Artwork" },
  { value: "client", label: "Client work" },
];

const categoryLabel: Record<WorkCategory, string> = {
  artwork: "Personal artwork",
  client: "Client work",
};

function Lightbox({
  item,
  onClose,
  onPrev,
  onNext,
}: {
  item: WorkItem;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/95 p-4 backdrop-blur-sm sm:p-10"
      role="dialog"
      aria-modal="true"
      aria-label={`${item.title} — ${item.context}`}
      onClick={onClose}
    >
      <button
        className="absolute right-5 top-5 z-10 p-2 text-2xl leading-none text-dim hover:text-bone"
        onClick={onClose}
        aria-label="Close viewer"
      >
        ×
      </button>
      <button
        className="absolute left-2 top-1/2 z-10 -translate-y-1/2 p-3 text-3xl text-dim hover:text-bone sm:left-6"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        aria-label="Previous work"
      >
        ←
      </button>
      <figure
        className="flex max-h-full max-w-4xl flex-col items-center gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative min-h-0 flex-1">
          {item.video ? (
            <video
              src={item.src}
              controls
              autoPlay
              playsInline
              className="max-h-[80vh] w-auto border border-line object-contain"
            />
          ) : (
            <Image
              src={item.src}
              alt={`${item.title} — ${item.context}`}
              width={item.width}
              height={item.height}
              sizes="90vw"
              className="max-h-[80vh] w-auto border border-line object-contain"
              priority
            />
          )}
        </div>
        <figcaption className="text-center">
          <span className="font-display text-lg uppercase tracking-wide">
            {item.title}
          </span>
          <span className="mx-3 text-dim" aria-hidden>
            —
          </span>
          <span className="text-sm text-dim">{item.context}</span>
        </figcaption>
      </figure>
      <button
        className="absolute right-2 top-1/2 z-10 -translate-y-1/2 p-3 text-3xl text-dim hover:text-bone sm:right-6"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        aria-label="Next work"
      >
        →
      </button>
    </div>
  );
}

export default function WorkGallery() {
  const [filter, setFilter] = useState<Filter>("all");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const visible =
    filter === "all" ? works : works.filter((w) => w.category === filter);

  const prev = useCallback(
    () =>
      setOpenIndex((i) =>
        i === null ? null : (i - 1 + visible.length) % visible.length,
      ),
    [visible.length],
  );
  const next = useCallback(
    () => setOpenIndex((i) => (i === null ? null : (i + 1) % visible.length)),
    [visible.length],
  );

  return (
    <div>
      <div
        className="mb-10 flex flex-wrap gap-3"
        role="group"
        aria-label="Filter work by category"
      >
        {filters.map((f) => {
          const active = filter === f.value;
          return (
            <button
              key={f.value}
              onClick={() => {
                setFilter(f.value);
                setOpenIndex(null);
              }}
              aria-pressed={active}
              className={`border px-4 py-2 text-xs uppercase tracking-[0.18em] transition-colors ${
                active
                  ? "border-bone bg-bone text-ink"
                  : "border-line text-dim hover:border-bone hover:text-bone"
              }`}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
        {visible.map((w, i) => (
          <button
            key={w.slug}
            onClick={() => setOpenIndex(i)}
            className="work-card group mb-5 block w-full break-inside-avoid text-left"
            aria-label={`View ${w.title} — ${w.context}`}
          >
            <div className="relative overflow-hidden border border-line bg-panel">
              {w.video ? (
                <>
                  <video
                    src={`${w.src}#t=0.1`}
                    muted
                    playsInline
                    preload="metadata"
                    className="h-auto w-full"
                  />
                  <span
                    className="absolute inset-0 flex items-center justify-center"
                    aria-hidden
                  >
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-ink/70 pl-1 text-xl text-bone backdrop-blur-sm">
                      ▶
                    </span>
                  </span>
                </>
              ) : (
                <Image
                  src={w.src}
                  alt={`${w.title} — ${w.context}`}
                  width={w.width}
                  height={w.height}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  quality={60}
                  className="h-auto w-full"
                />
              )}
            </div>
            <div className="flex items-baseline justify-between gap-3 pt-3">
              <div>
                <p className="font-display text-base uppercase tracking-wide text-bone">
                  {w.title}
                </p>
                <p className="pt-1 text-xs text-dim">{w.context}</p>
              </div>
              <span className="eyebrow shrink-0 group-hover:text-bone">
                {categoryLabel[w.category]}
              </span>
            </div>
          </button>
        ))}
      </div>

      {openIndex !== null && visible[openIndex] && (
        <Lightbox
          item={visible[openIndex]}
          onClose={() => setOpenIndex(null)}
          onPrev={prev}
          onNext={next}
        />
      )}
    </div>
  );
}

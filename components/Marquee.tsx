import { disciplines } from "@/lib/content";

function Row({ prefix }: { prefix: string }) {
  return (
    <>
      {disciplines.map((d) => (
        <span key={`${prefix}-${d}`} className="flex shrink-0 items-center gap-6">
          <span className="font-display text-2xl uppercase tracking-wide text-bone/90 sm:text-3xl">
            {d}
          </span>
          <span aria-hidden className="spectrum-text text-xl">
            ✦
          </span>
        </span>
      ))}
    </>
  );
}

export default function Marquee() {
  return (
    <div
      className="overflow-hidden border-y border-line py-5"
      aria-label={`Disciplines: ${disciplines.join(", ")}`}
    >
      <div className="marquee-track flex w-max gap-6" aria-hidden>
        <Row prefix="a" />
        <Row prefix="b" />
      </div>
    </div>
  );
}

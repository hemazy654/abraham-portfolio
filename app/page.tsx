import Image from "next/image";
import Nav from "@/components/Nav";
import Marquee from "@/components/Marquee";
import Reveal from "@/components/Reveal";
import WorkGallery from "@/components/WorkGallery";
import { contact, education, experience } from "@/lib/content";

function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="mb-12">
      <p className="eyebrow mb-3">{eyebrow}</p>
      <h2 className="font-display text-4xl uppercase leading-none tracking-wide sm:text-5xl">
        {title}
      </h2>
      <div className="spectrum-stroke mt-5 h-2 w-28" aria-hidden />
    </div>
  );
}

export default function Home() {
  return (
    <div id="top">
      <Nav />

      <main>
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-5 pb-16 pt-28 sm:px-8 sm:pt-36">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <Reveal>
                <p className="eyebrow mb-6">
                  Abstract artist &amp; graphic designer — {contact.location}
                </p>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="font-display text-[13vw] uppercase leading-[0.95] tracking-wide sm:text-7xl lg:text-8xl">
                  Visual stories in{" "}
                  <span className="spectrum-text">color</span>,
                  simplicity &amp; imagination
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-8 max-w-md text-base leading-relaxed text-dim">
                  I&apos;m Abraham Gbadamosi. I paint abstract portraits, build
                  brand visuals, and turn creative visions into work people
                  remember.
                </p>
              </Reveal>
              <Reveal delay={240}>
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <a
                    href="#work"
                    className="bg-bone px-6 py-3 text-xs uppercase tracking-[0.18em] text-ink transition-opacity hover:opacity-85"
                  >
                    View the work
                  </a>
                  <a
                    href="#contact"
                    className="border border-line px-6 py-3 text-xs uppercase tracking-[0.18em] transition-colors hover:border-bone"
                  >
                    Get in touch
                  </a>
                </div>
              </Reveal>
            </div>
            <Reveal delay={160} className="relative">
              <div className="relative mx-auto max-w-sm lg:max-w-none">
                <Image
                  src="/work/portrait.webp"
                  alt="Abraham Gbadamosi in his studio"
                  width={719}
                  height={822}
                  sizes="(max-width: 1024px) 90vw, 40vw"
                  priority
                  className="w-full border border-line"
                />
                <div className="spectrum-stroke mt-1 h-2.5 w-full" aria-hidden />
                <p className="mt-3 flex items-baseline justify-between text-xs text-dim">
                  <span>Abraham Gbadamosi — Ocenstar Artworks</span>
                  <span className="eyebrow">Available for commissions</span>
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <Marquee />

        {/* Work */}
        <section id="work" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24 sm:px-8">
          <Reveal>
            <SectionHeading eyebrow="Selected work" title="The gallery" />
          </Reveal>
          <Reveal delay={100}>
            <WorkGallery />
          </Reveal>
        </section>

        {/* About */}
        <section
          id="about"
          className="scroll-mt-20 border-y border-line bg-panel"
        >
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <div className="relative mx-auto max-w-xs lg:max-w-none">
                <Image
                  src="/work/profile.webp"
                  alt="Portrait of Abraham Gbadamosi"
                  width={634}
                  height={900}
                  sizes="(max-width: 1024px) 80vw, 35vw"
                  className="w-full border border-line"
                />
                <div className="spectrum-stroke mt-1 h-2.5 w-full" aria-hidden />
              </div>
            </Reveal>
            <div>
              <Reveal>
                <SectionHeading eyebrow="About me" title="Abraham Gbadamosi" />
              </Reveal>
              <Reveal delay={100}>
                <div className="space-y-5 text-base leading-relaxed text-dim">
                  <p>
                    I&apos;m a creative abstract artist and graphic designer who
                    blends color, simplicity, and emotion to craft meaningful
                    visual experiences. My work is inspired by nature and guided
                    by a clean, intentional design approach — abstract art,
                    digital graphics, and visual content that communicate
                    clearly and connect with audiences.
                  </p>
                  <p>
                    I bring creativity, detail, and originality to every
                    project, whether I&apos;m designing for brands, creating
                    personal art pieces, or supporting young creatives on their
                    design journey.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={180}>
                <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-line pt-8 sm:grid-cols-3">
                  <div>
                    <dt className="eyebrow mb-2">Based in</dt>
                    <dd className="text-sm">{contact.location}</dd>
                  </div>
                  <div>
                    <dt className="eyebrow mb-2">Focus</dt>
                    <dd className="text-sm">Abstract art &amp; branding</dd>
                  </div>
                  <div>
                    <dt className="eyebrow mb-2">Studio</dt>
                    <dd className="text-sm">Ocenstar Artworks</dd>
                  </div>
                </dl>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section
          id="experience"
          className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24 sm:px-8"
        >
          <Reveal>
            <SectionHeading eyebrow="Where I've worked" title="Experience" />
          </Reveal>
          <ol className="border-t border-line">
            {experience.map((job, i) => (
              <li key={job.org} className="border-b border-line">
                <Reveal delay={i * 60}>
                  <div className="grid gap-2 py-8 sm:grid-cols-[8rem_1fr_1fr] sm:gap-8">
                    <p className="eyebrow pt-1">{job.period}</p>
                    <div>
                      <h3 className="font-display text-xl uppercase tracking-wide">
                        {job.org}
                      </h3>
                      <p className="pt-1 text-sm text-bone/80">{job.role}</p>
                    </div>
                    <p className="text-sm leading-relaxed text-bone">
                      {job.notes}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
          <Reveal delay={120}>
            <div className="mt-10 flex flex-wrap items-baseline gap-x-8 gap-y-2">
              <p className="eyebrow">Education</p>
              <p className="text-sm">
                {education.degree}, {education.school}
                <span className="text-dim"> · {education.period}</span>
              </p>
            </div>
          </Reveal>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="scroll-mt-20 border-t border-line"
        >
          <div className="mx-auto max-w-6xl px-5 py-28 text-center sm:px-8">
            <Reveal>
              <p className="eyebrow mb-6">
                Have a project in mind? Currently open to commissions,
                internships &amp; collaborations
              </p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-display mx-auto max-w-4xl text-5xl uppercase leading-[0.95] tracking-wide sm:text-7xl">
                Let&apos;s bring your vision to{" "}
                <span className="relative inline-block">
                  <span className="spectrum-text">life</span>
                  <span
                    className="spectrum-stroke absolute -bottom-2 left-0 h-2.5 w-full sm:-bottom-3 sm:h-3"
                    aria-hidden
                  />
                </span>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <a
                href={`mailto:${contact.email}`}
                className="mt-12 inline-block bg-bone px-8 py-4 text-sm uppercase tracking-[0.18em] text-ink transition-opacity hover:opacity-85"
              >
                {contact.email}
              </a>
              <p className="mt-6 text-sm text-dim">
                <a
                  href={contact.phoneHref}
                  className="transition-colors hover:text-bone"
                >
                  {contact.phone}
                </a>
                <span className="mx-3" aria-hidden>
                  ·
                </span>
                {contact.location}
              </p>
              <Image
                src="/work/logo.png"
                alt=""
                aria-hidden
                width={680}
                height={396}
                className="mx-auto mt-14 h-16 w-auto opacity-70"
              />
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-8 sm:px-8">
          <p className="text-xs text-dim">
            © {new Date().getFullYear()} Abraham Gbadamosi · Ocenstar Artworks
          </p>
          <p className="text-xs text-dim">
            Visual stories through simplicity, color &amp; imagination
          </p>
        </div>
      </footer>
    </div>
  );
}

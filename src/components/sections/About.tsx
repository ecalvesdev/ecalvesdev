import { SplitText } from "@/components/SplitText";
import Image from "next/image";
import { MediaEdgeBlend } from "@/components/MediaEdgeBlend";
import { Parallax } from "@/components/Parallax";
import { Reveal } from "@/components/Reveal";
import { about } from "@/content/site";

const photoGlow =
  "radial-gradient(circle at 50% 42%, color-mix(in srgb, #005BFF 34%, transparent), transparent 68%)";

export function About() {
  return (
    <section id="sobre" className="section relative overflow-hidden">
      <div className="atmosphere opacity-50 max-lg:hidden" aria-hidden />
      <div className="container-site relative grid items-start gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16 xl:gap-24">
        <div className="order-1 space-y-7 lg:space-y-9">
          <Reveal variant="up">
            <div className="space-y-5 md:space-y-6">
              <p className="label-tech text-spark">{about.label}</p>
              <h2 className="text-section max-w-[20ch] text-ink md:max-w-[26ch] lg:max-w-[28ch]">
                <SplitText
                  parts={[
                    { text: about.titleBefore },
                    { text: about.titleHighlight, className: "text-lilac" },
                  ]}
                />
              </h2>
            </div>
          </Reveal>

          <Reveal variant="up" delay={0.16} className="lg:hidden">
            <div className="relative mx-auto w-full max-w-sm">
              <div
                className="pointer-events-none absolute inset-x-[8%] inset-y-[12%] blur-2xl"
                style={{ background: photoGlow }}
                aria-hidden
              />
              <MediaEdgeBlend
                variant="portrait"
                className="relative aspect-[3/4] w-full overflow-hidden"
              >
                <Image
                  src="/brand/elias-castro-about-hd.png"
                  alt="Retrato profissional de Elias de Castro Alves"
                  fill
                  sizes="(max-width: 1024px) 180vw, 840px"
                  quality={92}
                  className="object-contain object-bottom"
                  priority={false}
                />
              </MediaEdgeBlend>
            </div>
          </Reveal>

          <div className="prose-site space-y-6 text-muted">
            {about.paragraphs.map((paragraph, index) => (
              <Reveal
                key={paragraph.slice(0, 32)}
                variant="up"
                delay={0.22 + index * 0.08}
              >
                <p>{paragraph}</p>
              </Reveal>
            ))}
          </div>

          <Reveal variant="fade" delay={0.48}>
            <ul className="flex flex-wrap gap-x-5 gap-y-3 pt-1">
              {about.tags.map((tag) => (
                <li key={tag} className="label-tech rounded-full bg-white/[0.06] px-3.5 py-1.5 text-muted">
                  {tag}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal
          variant="right"
          delay={0.1}
          className="relative order-2 hidden lg:block"
        >
          <div
            className="pointer-events-none absolute -inset-6 blur-3xl"
            style={{ background: photoGlow }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -left-2 top-8 hidden h-24 w-px bg-gradient-to-b from-transparent via-violet/50 to-transparent xl:block"
            aria-hidden
          />
<Parallax distance={40} scale={[1.05, 1]}>
          <MediaEdgeBlend
            variant="portrait"
            className="relative aspect-[3/4] w-full max-w-md overflow-hidden lg:ml-auto"
          >
            <Image
              src="/brand/elias-castro-about-hd.png"
              alt="Retrato profissional de Elias de Castro Alves"
              fill
              sizes="(max-width: 1280px) 80vw, 840px"
              quality={92}
              className="object-contain object-bottom"
              priority={false}
            />
          </MediaEdgeBlend>
</Parallax>
        </Reveal>
      </div>
    </section>
  );
}

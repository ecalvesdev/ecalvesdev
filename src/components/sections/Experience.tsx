import { SplitText } from "@/components/SplitText";
import { TimelineFill } from "@/components/TimelineFill";
import { KitIcon } from "@/components/KitIcon";
import { Reveal } from "@/components/Reveal";
import { SceneBackdrop } from "@/components/SceneBackdrop";
import { SpotCard } from "@/components/SpotCard";
import { experience } from "@/content/site";
import {
  experienceChapters,
  getScene,
  milestoneKitIcon,
} from "@/content/storyboard";
import { cn } from "@/lib/cn";

export function Experience() {
  const fullStack = experience.highlights.find((item) =>
    item.title.toLowerCase().includes("full-stack"),
  );

  return (
    <section id="experiencia" className="section relative overflow-hidden">
      <div className="container-site relative space-y-14 md:space-y-20">
        <Reveal className="max-w-[44rem] space-y-5">
          <p className="label-tech text-spark">02 / Experiência</p>
          <h2 className="text-section text-ink"><SplitText parts={experience.title} /></h2>
          <p className="prose-site text-muted">{experience.intro}</p>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {experienceChapters.map((chapter, index) => {
            const scene = getScene(chapter.sceneId);
            const icon = scene.icons[0];
            const featured = "featured" in chapter && chapter.featured === true;
            return (
              <Reveal
                key={chapter.sceneId}
                delay={index * 0.08}
                className={cn(featured && "md:col-span-2 lg:col-span-1")}
              >
                <SpotCard
                  as="article"
                  className="h-full p-7 md:p-8"
                >
                  <SceneBackdrop background={scene.background} opacity={0.14} />
                  <div className="relative flex h-full flex-col gap-6">
                    <div className="flex items-start justify-between">
                      {icon ? <KitIcon name={icon} size="lg" /> : <span />}
                      <span className="big-index text-6xl" aria-hidden>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="space-y-3">
                      <h3 className="font-display text-2xl font-bold leading-tight tracking-tight text-ink">
                        {chapter.title}
                      </h3>
                      <p className="text-[0.9375rem] leading-relaxed text-muted">
                        {chapter.description}
                      </p>
                    </div>
                  </div>
                </SpotCard>
              </Reveal>
            );
          })}
        </div>

        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
          <div className="space-y-8 lg:sticky lg:top-28 lg:self-start">
            {fullStack ? (
              <Reveal>
                <article className="space-y-4 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-white/[0.02] p-7">
                  <KitIcon name="architecture" size="md" />
                  <h3 className="font-display text-2xl font-bold tracking-tight text-ink">
                    {fullStack.title}
                  </h3>
                  <p className="text-[0.9375rem] leading-relaxed text-muted">
                    {fullStack.description}
                  </p>
                </article>
              </Reveal>
            ) : null}
          </div>

          <ol className="relative space-y-1 border-l border-[var(--border-subtle)] pl-8">
            <TimelineFill />
            {experience.milestones.map((item, index) => (
              <Reveal key={item.label} variant="left" delay={0.04 + index * 0.05}>
                <li className="group relative py-5">
                  <span
                    className="absolute -left-[2.45rem] top-[1.7rem] h-3 w-3 rounded-full border-2 border-spark bg-void transition group-hover:bg-spark"
                    aria-hidden
                  />
                  <div className="flex gap-4">
                    <KitIcon name={milestoneKitIcon(item.label)} size="sm" />
                    <div>
                      <h3 className="font-display text-xl font-bold text-ink">{item.label}</h3>
                      <p className="mt-1 text-[0.9375rem] leading-relaxed text-muted">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

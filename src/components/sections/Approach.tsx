import { SplitText } from "@/components/SplitText";
import { KitIcon } from "@/components/KitIcon";
import { Reveal } from "@/components/Reveal";
import { SceneBackdrop } from "@/components/SceneBackdrop";
import { SpotCard } from "@/components/SpotCard";
import { ScrollScene } from "@/components/ScrollScene";
import {
  approachIconLabels,
  approachKitIcons,
  getScene,
} from "@/content/storyboard";
import { approach } from "@/content/site";

const scene = getScene("architecture");

export function Approach() {
  return (
    <section
      id="abordagem"
      className="section relative overflow-hidden border-y border-[var(--border-subtle)]"
    >
      <SceneBackdrop background={scene.background} opacity={0.22} />

      <div className="container-site relative space-y-12 md:space-y-14">
        <ScrollScene>
          <Reveal className="max-w-[40rem] space-y-4">
            <p className="label-tech text-spark">04 / Abordagem</p>
            <h2 className="text-section text-ink"><SplitText parts={approach.title} /></h2>
            <p className="prose-site text-muted">{scene.copy}</p>
          </Reveal>
        </ScrollScene>

        <ul className="grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-10">
          {approachKitIcons.map((name, index) => (
            <Reveal key={name} variant="scale" delay={0.05 + index * 0.06}>
              <li className="flex flex-col items-start gap-3">
                <KitIcon name={name} size="md" />
                <span className="font-display text-sm font-semibold tracking-wide text-ink">
                  {approachIconLabels[name]}
                </span>
              </li>
            </Reveal>
          ))}
        </ul>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {approach.pillars.map((pillar, index) => (
            <Reveal
              key={pillar}
              variant={index % 2 === 0 ? "up" : "scale"}
              delay={0.04 + index * 0.05}
            >
              <SpotCard as="article" className="h-full p-5">
                <p className="big-index text-3xl">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="font-display mt-4 text-lg font-bold leading-snug text-ink">{pillar}</h3>
              </SpotCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

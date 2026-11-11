import { SplitText } from "@/components/SplitText";
import { Reveal } from "@/components/Reveal";
import { SceneBackdrop } from "@/components/SceneBackdrop";
import { ScrollScene } from "@/components/ScrollScene";
import { TechMarquee } from "@/components/TechMarquee";
import { getScene } from "@/content/storyboard";
import { stack, stackItems, stackTracks } from "@/content/site";

const scene = getScene("development");

export function Stack() {
  return (
    <section
      id="tecnologias"
      className="section relative overflow-hidden border-y border-[var(--border-subtle)]"
    >
      <SceneBackdrop background={scene.background} opacity={0.22} edgeBlend />
      {/* Continuity: iluminação azul discreta alinhada ao cinematic */}
      <div
        className="pointer-events-none absolute inset-0 opacity-90"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 18% 30%, color-mix(in srgb, #005BFF 16%, transparent), transparent 70%), radial-gradient(ellipse 45% 40% at 82% 70%, color-mix(in srgb, #00BFFF 10%, transparent), transparent 72%)",
        }}
      />
      <div className="relative space-y-10">
        <ScrollScene className="container-site">
          <Reveal variant="up" className="max-w-[40rem] space-y-4">
            <p className="label-tech text-spark">01 / Tecnologias</p>
            <h2 className="text-section text-ink"><SplitText parts={stack.title} /></h2>
            <p className="prose-site text-muted">{stack.note}</p>
          </Reveal>
        </ScrollScene>
        <Reveal variant="fade" delay={0.12} className="w-full">
          <div className="container-site">
            <TechMarquee tracks={stackTracks} allItems={stackItems} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

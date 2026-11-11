import { SplitText } from "@/components/SplitText";
import type { Metadata } from "next";
import Link from "next/link";
import { KitIcon } from "@/components/KitIcon";
import { Reveal } from "@/components/Reveal";
import { SceneBackdrop } from "@/components/SceneBackdrop";
import { SpotCard } from "@/components/SpotCard";
import { serviceKitIcon } from "@/content/storyboard";
import { contact, services, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Desenvolvimento de sistemas, automação, APIs, logística e soluções com IA — engenharia aplicada ao negócio.",
  openGraph: {
    title: `Serviços · ${site.brand}`,
    description: services.intro,
  },
};

export default function ServicosPage() {
  return (
    <div className="relative overflow-hidden pt-24 md:pt-28">
      <SceneBackdrop background="blue_grid" opacity={0.2} />

      <section className="section relative pb-10">
        <div className="container-site relative space-y-6 [&>*]:max-w-[52rem]">
          <Reveal>
            <h1 className="text-hero text-ink"><SplitText parts={services.title} /></h1>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="prose-site text-muted">{services.intro}</p>
          </Reveal>
        </div>
      </section>

      <section className="relative pb-[clamp(4rem,10vw,7.5rem)]">
        <div className="container-site relative">
          <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.items.map((item, index) => {
              const icon = serviceKitIcon(item.title);
              return (
                <Reveal
                  key={item.title}
                  delay={Math.min(index * 0.05, 0.3)}
                  className={index === 0 || index === services.items.length - 1 ? "lg:col-span-2" : undefined}
                >
                  <SpotCard as="li" className="flex h-full flex-col gap-6 p-7 md:p-8">
                    <div className="flex items-start justify-between">
                      <span className="flex h-16 w-16 items-center" aria-hidden>
                        {icon ? <KitIcon name={icon} size="md" /> : null}
                      </span>
                      <span className="big-index text-5xl" aria-hidden>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="space-y-3">
                      <h2 className="font-display text-2xl font-bold leading-tight tracking-tight">
                        {item.title}
                      </h2>
                      <p className="text-[0.9375rem] leading-relaxed text-muted">
                        {item.description}
                      </p>
                    </div>
                  </SpotCard>
                </Reveal>
              );
            })}
          </ul>

          <Reveal className="mt-14 flex flex-wrap gap-3" delay={0.12}>
            <Link
              href={contact.pageCta.href}
              className="btn btn-primary"
            >
              {contact.pageCta.label}
            </Link>
            <Link
              href="/#experiencia"
              className="btn btn-ghost"
            >
              Ver experiência
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

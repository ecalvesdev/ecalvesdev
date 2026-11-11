import { SplitText } from "@/components/SplitText";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { homeCta } from "@/content/site";
import { kitDecor } from "@/content/storyboard";


export function HomeCta() {
  return (
    <section id="cta" className="section relative overflow-hidden">
      <div className="container-site relative">
        <Reveal variant="scale">
          <div className="relative overflow-hidden rounded-[28px] bg-[linear-gradient(135deg,#0a2a8f_0%,#005bff_55%,#00a8ff_120%)] px-7 py-14 md:px-16 md:py-20">
            <Image
              src={kitDecor.circuit_lines}
              alt=""
              fill
              sizes="100vw"
              className="pointer-events-none object-cover opacity-20 mix-blend-screen"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-spark/30 blur-3xl"
              aria-hidden
            />
            <div className="relative flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
              <div className="max-w-[36rem] space-y-5">
                <h2 className="text-section text-white"><SplitText parts={homeCta.title} /></h2>
                <p className="text-lg leading-relaxed text-white/80">{homeCta.body}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href={homeCta.primaryCta.href} className="btn btn-primary">
                  {homeCta.primaryCta.label}
                  <ArrowRight size={18} className="btn-arrow" aria-hidden />
                </Link>
                <Link
                  href={homeCta.secondaryCta.href}
                  className="btn bg-white/15 text-white hover:bg-white/25"
                >
                  {homeCta.secondaryCta.label}
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

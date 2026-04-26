import { projects } from "@/lib/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { Hero } from "@/components/Hero";
import { Articles } from "@/components/Articles";
import { PublishedApps } from "@/components/PublishedApps";
import { OpenSource } from "@/components/OpenSource";
import { About } from "@/components/About";

export default function Home() {
  return (
    <>
      <Hero />

      <About />

      <section id="work" className="bg-canvas py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mb-14 flex items-end justify-between gap-8">
            <div className="max-w-2xl">
              <span className="inline-block rounded-full bg-accent-soft px-3 py-1 text-[12px] font-semibold tracking-[0.125px] text-accent-text">
                Projects
              </span>
              <h2 className="display-48 mt-4 text-ink">Things I've <span className="text-accent">built</span></h2>
              <p className="lead mt-4">
                Here are my little projects I've been working on. From every of those I've learned
                something new and the more I do, the more I want to build!
              </p>
            </div>
            <div className="hidden text-[13px] font-medium text-ink-mute md:block">
              {projects.length.toString().padStart(2, "0")} projects
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      <Articles />
      <PublishedApps />
      <OpenSource />
    </>
  );
}

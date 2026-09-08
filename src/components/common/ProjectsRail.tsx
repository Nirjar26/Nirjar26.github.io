import { projects } from "@/data/home"
import { Container } from "../layout/Container"
import { CarouselTrack } from "./CarouselTrack"
import { ProjectCard } from "./ProjectCard"

interface ProjectsRailProps {
  bgClass?: string
  cardBgClass?: string
  id?: string
  featuredCount?: number
}

export function ProjectsRail({
  bgClass = "bg-canvas",
  cardBgClass = "bg-surface-alt",
  id = "work",
  featuredCount = 4,
}: ProjectsRailProps) {
  const featured = projects.slice(0, featuredCount)
  const more = projects.slice(featuredCount)

  return (
    <section id={id} className={`scroll-mt-12 overflow-hidden py-14 sm:py-18 ${bgClass}`}>
      <Container className="mb-6 sm:mb-8 reveal-on-scroll">
        <h2 className="t-display">Featured Work.</h2>
      </Container>

      {/* Featured Projects — Apple-style Horizontal Carousel */}
      <div className="reveal-on-scroll">
        <CarouselTrack>
          {featured.map((project) => (
            <ProjectCard key={project.title} project={project} cardBgClass={cardBgClass} />
          ))}
        </CarouselTrack>
      </div>

      {/* More Works Carousel */}
      {more.length > 0 && (
        <div className="mt-12 sm:mt-16 w-full reveal-on-scroll">
          <Container className="mb-6 sm:mb-8">
            <h3 className="t-caption-strong text-ink tracking-normal text-lg min-[375px]:text-xl sm:text-2xl font-medium">
              More works
            </h3>
          </Container>
          <CarouselTrack>
            {more.map((project) => (
              <ProjectCard key={project.title} project={project} cardBgClass={cardBgClass} />
            ))}
          </CarouselTrack>
        </div>
      )}
    </section>
  )
}

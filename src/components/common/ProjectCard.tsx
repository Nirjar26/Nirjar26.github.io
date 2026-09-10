import { Project } from "@/data/home"
import { externalProps } from "@/utils/helpers"
import { ArrowUpRight } from "./Icons"

interface ProjectCardProps {
  project: Project
  cardBgClass?: string
  isFeatured?: boolean
}

export function ProjectCard({
  project,
  cardBgClass = "bg-surface-alt",
  isFeatured = Boolean(project.projectLink),
}: ProjectCardProps) {
  const url = project.projectLink ?? project.link

  const cardContent = (
    <>
      <div>
        <p className="t-caption-strong text-muted text-xs min-[375px]:text-sm mb-3 sm:mb-4">
          {project.category}
        </p>
        <h3 className="t-tagline text-ink text-lg min-[375px]:text-xl sm:text-2xl leading-tight">
          {project.title}
        </h3>
        <p className="t-body mt-1.5 sm:mt-2 text-muted text-sm sm:text-base leading-relaxed">
          {project.description}
        </p>
      </div>

      <div className={`mt-4 sm:mt-6 flex items-center ${url ? "justify-between" : "justify-end"}`}>
        {url ? (
          isFeatured ? (
            <span className="inline-flex items-center justify-center rounded-full bg-accent text-white px-4 py-2 text-xs sm:text-[13px] font-normal leading-none border-0 border-none outline-none select-none">
              Learn more
            </span>
          ) : (
            <ArrowUpRight className="shrink-0 text-accent" />
          )
        ) : null}
        {project.year && (
          <span className="text-[11px] min-[375px]:text-xs text-muted font-medium">
            {project.year}
          </span>
        )}
      </div>
    </>
  )

  const cardClasses = `w-[280px] min-[375px]:w-[320px] min-[480px]:w-[360px] min-[577px]:w-[420px] md:w-[480px] lg:w-[520px] shrink-0 snap-start rounded-[20px] p-6 min-[375px]:p-7 sm:p-9 h-[360px] min-[375px]:h-[380px] sm:h-[350px] min-h-[360px] min-[375px]:min-h-[380px] sm:min-h-[350px] flex flex-col justify-between apple-card-hover border-0 ${cardBgClass}`

  if (url) {
    return (
      <a
        href={url}
        {...externalProps(url)}
        aria-label={`${project.title} — ${project.category}`}
        className={cardClasses}
      >
        {cardContent}
      </a>
    )
  }

  return (
    <div
      aria-label={`${project.title} — ${project.category}`}
      className={`${cardClasses} cursor-default`}
    >
      {cardContent}
    </div>
  )
}

import projectInfo from "@/app/data/project-info";
import Project from "../ui/Project";
export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-300 mx-auto space-y-12 lg:space-y-16">
        <div className="space-y-8">
          <div className="flex flex-col items-center gap-2">
            <h3 className="text-xl text-center font-semibold">Projects</h3>
            <div className="w-6 h-0.5 bg-[#d7e6fe]" />
          </div>
          <h2 className="text-[39px] md:text-[49px] leading-[120%] font-bold text-center">
            Websites I've Built
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {projectInfo.map((project, id) => (
            <Project key={id} title={project.title} link={project.link} image={project.image} tag={project.tag}/>
          ))}
        </div>
      </div>
    </section>
  );
}

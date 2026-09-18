import projectInfo from "@/app/data/project-info";
import Project from "../ui/Project";
import SectionHeader from "../ui/SectionHeader";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-20 px-6">
      <div className="max-w-300 mx-auto space-y-12 lg:space-y-16">
        <SectionHeader title="Project" subtitle="Websites I've Built"/>
        <div className="grid md:grid-cols-2 gap-6">
          {projectInfo.map((project, id) => (
            <Project key={id} title={project.title} link={project.link} image={project.image} tag={project.tag}/>
          ))}
        </div>
      </div>
    </section>
  );
}

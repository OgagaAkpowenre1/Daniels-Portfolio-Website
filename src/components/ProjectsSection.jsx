import { ExternalLink, Github, ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Linkhub Bookmark Manager",
    description:  "A modern bookmark management tool that lets users organize, store, and access their favorite links with ease. Built with React and Supabase for authentication and database support, featuring a clean and responsive UI for seamless productivity.",
    img: "/projects/linkhub-project.png",
    tags: ["React", "Supabase", "CSS"],
    demoUrl: "https://linkhub-bookmark-manager.vercel.app/",
    githubUrl: "https://github.com/OgagaAkpowenre1/Linkhub-Bookmark-Manager",
  },
  {
    id: 2,
    title: "Lyriks (Spotify Clone)",
    description: "A Spotify-inspired music streaming web app powered by RapidAPI. It allows users to explore trending tracks, search for songs or artists, and enjoy an interactive UI. Built with React, Tailwind CSS, and Redux for smooth state management and responsive design.",
    img: "/projects/spotify-clone.png",
    tags: ["React", "RapidAPI", "Tailwind", "Redux"],
    demoUrl: "https://www.danmusic.netlify.app",
    githubUrl: "https://github.com/OgagaAkpowenre1/Spotify-Clone-v2",
  },
  {
    id: 3,
    title: "React Dashboard",
    description: "Lorem ipsum dolor et sum",
    img: "/projects/dashboard.png",
    tags: ["React", "Kaban", "Tailwind"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis aliquam
          architecto, magni quia modi alias quisquam nisi nostrum quibusdam
          nulla?
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card overflow-hidden rounded-lg shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  src={project.img}
                  alt={project.title}
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, key) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/8 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/8 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#" target="_blank" className="cosmic-button w-fit flex items-center mx-auto gap-2">
            Check my Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;

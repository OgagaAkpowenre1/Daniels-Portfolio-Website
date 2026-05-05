import { ExternalLink, Github, ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Linkhub Bookmark Manager",
    description: "A modern bookmark management tool that lets users organize, store, and access their favorite links with ease. Built with React and Supabase for authentication and database support, featuring a clean and responsive UI for seamless productivity.",
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
    description: "A dynamic and responsive admin dashboard featuring data visualization, user management, and theme customization. Built with React and Tailwind CSS, it demonstrates clean state management for handling complex UI components efficiently.",
    img: "/projects/dashboard.png",
    tags: ["React", "Kaban", "Tailwind"],
    demoUrl: "https://themed-dashboard.vercel.app/",
    githubUrl: "https://github.com/OgagaAkpowenre1/themed-dashboard",
  },
  {
    id: 4,
    title: "Pixel Art Editor",
    description: "An interactive web-based canvas for creating pixel art from scratch. This tool provides a customizable grid, a color palette picker, and essential drawing tools, empowering users to easily design their digital artwork.",
    img: "/projects/pixel-art-editor.png",
    tags: ["HTML", "CSS", "Javascript", "Canvas API"],
    demoUrl: "https://ogagaakpowenre1.github.io/Pixel-Art-Editor/",
    githubUrl: "https://github.com/OgagaAkpowenre1/Pixel-Art-Editor",
  },
  {
    id: 5,
    title: "Towers of Hanoi",
    description: "A digital implementation of the classic Towers of Hanoi puzzle. It features a clean, intuitive interface, a move counter, and interactive disk dragging, providing a smooth and engaging brain-teasing experience.",
    img: "/projects/towers-of-hanoi.png",
    tags: ["HTML", "CSS", "Javascript"],
    demoUrl: "https://ogagaakpowenre1.github.io/towers-of-hanoi/",
    githubUrl: "https://github.com/OgagaAkpowenre1/towers-of-hanoi",
  },
  {
    id: 6, // Fixed duplicate ID here (was also 5)
    title: "Maze Pathfinding Visualizer",
    description: "An educational tool that visually demonstrates how different pathfinding algorithms navigate through a maze. Users can build their own walls and watch as the algorithm explores the grid in real-time.",
    img: "/projects/maze-visualizer.png",
    tags: ["HTML", "CSS", "Javascript", "Canvas API"],
    demoUrl: "https://ogagaakpowenre1.github.io/Maze-Pathfinding-Visualizer/",
    githubUrl: "https://github.com/OgagaAkpowenre1/Maze-Pathfinding-Visualizer",
  },
  {
    id: 7, 
    title: "Movie Database",
    description: "A dynamic movie discovery platform powered by the IMDB API. Users can search for titles, view trending films, and access detailed information through a responsive, modern interface.",
    img: "/projects/movie-database.png",
    tags: ["HTML", "Javascript", "React", "IMBD API", "Tailwind CSS"],
    demoUrl: "https://movie-database-lake.vercel.app/",
    githubUrl: "https://github.com/OgagaAkpowenre1/MovieDatabase",
  },

  {
    id: 8, 
    title: "Recipe Database WebApp",
    description: "A culinary search engine that allows users to explore a vast collection of recipes. Features a clean UI for browsing ingredients and cooking instructions for various cuisines.",
    img: "/projects/recipe app.png",
    tags: ["HTML", "Javascript", "React", "Tailwind CSS"],
    demoUrl: "https://recipe-app-theta-nine.vercel.app/",
    githubUrl: "https://github.com/OgagaAkpowenre1/recipe-app",
  },

  {
    id: 9, 
    title: "Shopping Cart WebApp",
    description: "A fully functional e-commerce simulation featuring complex state management. Users can add products to a cart, adjust quantities, and see real-time price updates.",
    img: "/projects/Mock Shopping Cart.png",
    tags: ["HTML", "Javascript", "React", "Tailwind CSS"],
    demoUrl: "https://shopping-cart-kohl-three.vercel.app/",
    githubUrl: "https://github.com/OgagaAkpowenre1/shopping-cart",
  },

  {
    id: 10, 
    title: "Weather Forecast WebApp",
    description: "A real-time weather application that fetches live data from a weather API. It provides users with current conditions and extended forecasts for locations worldwide.",
    img: "/projects/weather-app.png",
    tags: ["HTML", "Javascript", "React", "Tailwind CSS"],
    demoUrl: "https://weatherappbranch.vercel.app/",
    githubUrl: "https://github.com/OgagaAkpowenre1/weatherappbranch",
  },

  {
    id: 11, // Adjusted ID for uniqueness
    title: "Tenzies Web Game",
    description: "A fast-paced interactive dice game built to master React hooks and state. Players roll to match all dice numbers as quickly as possible with a satisfying win state.",
    img: "/projects/tenzies.png",
    tags: ["HTML", "Javascript", "React", "Tailwind CSS"],
    demoUrl: "https://tenzies-three-rust.vercel.app/",
    githubUrl: "https://github.com/OgagaAkpowenre1/tenzies",
  },

  {
    id: 12, // Adjusted ID for uniqueness
    title: "Financial Expense Tracker",
    description: "A personal finance tool designed to track income and spending. Features a history of transactions and a real-time calculation of total balance to help users manage their budget.",
    img: "/projects/expense-tracker.png",
    tags: ["HTML", "Javascript", "React", "Tailwind CSS"],
    demoUrl: "https://expense-tracker-blush-one.vercel.app/",
    githubUrl: "https://github.com/OgagaAkpowenre1/expense-tracker",
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
          Take a look at just a few of some the projects I've worked on. These showcase both my skills and
          my interests.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card overflow-hidden rounded-lg shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <a href={project.demoUrl}>
                  <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  src={project.img}
                  alt={project.title}
                />
                </a>
                
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, key) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <a href={project.demoUrl}>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                </a>
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
          <a href="https://github.com/OgagaAkpowenre1" target="_blank" className="cosmic-button w-fit flex items-center mx-auto gap-2">
            Check my Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;

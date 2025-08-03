import React from "react";
import { Briefcase, Code, User } from "lucide-react";

const aboutInfo = [
  {
    title: "Web Development",
    description:
      "Experienced in building responsive, accessible, and scalable web applications using modern stacks.",
    icon: <Code className="h-6 w-6 text-primary" />,
  },
  {
    title: "Client Collaboration",
    description:
      "Skilled in working closely with clients and teams to bring digital ideas to life and solve real-world problems.",
    icon: <User className="h-6 w-6 text-primary" />,
  },
  {
    title: "Professional Experience",
    description:
      "Hands-on experience with real-world projects, freelance gigs, and continuous learning in tech spaces.",
    icon: <Briefcase className="h-6 w-6 text-primary" />,
  },
];

function AboutSection() {
  return (
    <section id="about" className="relative px-4 py-24">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Passionate Web Dev</h3>
            <p className="text-muted-foreground">
              I enjoy turning ideas into real-life digital experiences. With a
              love for clean code and pixel-perfect design, I focus on creating
              user-friendly, high-performance web applications.
            </p>
            <p className="text-muted-foreground">
              Whether collaborating with teams or tackling solo projects, I’m
              always learning, building, and refining.
            </p>
            <div className="flex sm:flex-row flex-col gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href="/your-cv.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right side: mapped info */}
          <div className="grid grid-cols-1 gap-6">
            {aboutInfo.map((item, index) => (
              <div key={index} className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="rounded-full p-3 bg-primary/10">
                    {item.icon}
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">{item.title}</h4>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;

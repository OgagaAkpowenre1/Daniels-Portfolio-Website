import React from "react";
import { Briefcase, Code, User } from "lucide-react";

function AboutSection() {
  return (
    <section id="about" className="relative px-4 py-24 ">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side of grid */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Passionate web dev</h3>
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Suscipit, maxime?
            </p>
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              totam commodi id nostrum maxime praesentium modi veritatis
              accusantium itaque corrupti!
            </p>
            <div className="flex sm:flex-row flex-col gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right side */}
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="rounded-full p-3 bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Delectus laborum sed porro quam!
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="rounded-full p-3 bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Delectus laborum sed porro quam!
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="rounded-full p-3 bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Delectus laborum sed porro quam!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;

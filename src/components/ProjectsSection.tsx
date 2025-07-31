import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Bank Marketing Campaign Prediction",
      description: "Machine learning project using Python to predict customer responses to bank marketing campaigns. Implemented multiple algorithms including ID3, CART, and Naive Bayes for comparison and optimization.",
      technologies: ["Python", "Scikit-learn", "ID3", "CART", "Naive Bayes", "Data Analysis"],
      githubLink: "#",
      demoLink: "#",
      featured: true
    },
    
    {
      title: "Timeslotter",
      description: "A responsive booking platform for appointments built with vanilla web technologies. Features an intuitive interface for scheduling and managing time slots efficiently.",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      githubLink: "https://github.com/Jamilisiddhu/Timeslotter.git",
      demoLink: "https://jamilisiddhu.github.io/Timeslotter/helo.html",
      featured: false
    },
    {
      title: "Spanish Time Translator",
      description: "Interactive web application that converts time to Spanish with audio pronunciation. Perfect tool for language learners to practice Spanish time expressions.",
      technologies: ["HTML", "CSS", "JavaScript", "Web Audio API"],
      githubLink: "https://github.com/Jamilisiddhu/Spanish-time-translator.git",
      demoLink: "https://jamilisiddhu.github.io/Spanish-time-translator/",
      featured: false
    },
    {
      title: "Tic Tac Toe Game",
      description: "Classic two-player Tic Tac Toe game with clean UI and smooth gameplay. Features game state management and winner detection logic.",
      technologies: ["HTML", "CSS", "JavaScript", "Game Logic"],
      githubLink: "https://github.com/Jamilisiddhu/Tic-Tac-Toe.git",
      demoLink: "https://jamilisiddhu.github.io/Tic-Tac-Toe/",
      featured: false
    },
    {
      title: "Mini ATM System",
      description: "Console-based ATM simulation built in Java demonstrating object-oriented programming principles. Includes account management and transaction processing.",
      technologies: ["Java", "OOP", "Console Application"],
      githubLink: "https://github.com/Jamilisiddhu/mini-ATM-.git",
      demoLink: "#",
      featured: false
    }
  ];

  return (
    <section id="projects" className="section-spacing bg-muted/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient-text animate-fade-in">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my development journey from web applications to machine learning implementations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className={`p-6 hover-lift bg-card border-border animate-slide-up ${
                project.featured ? 'lg:col-span-2 border-primary/20' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-card-foreground mb-2">{project.title}</h3>
                    {project.featured && (
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
                        Featured Project
                      </Badge>
                    )}
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                  {project.description}
                </p>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="outline" 
                        className="bg-accent/50 text-accent-foreground border-accent text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    {project.demoLink !== "#" && (
                      <Button 
                        className="btn-primary flex items-center gap-2"
                        onClick={() => window.open(project.demoLink, '_blank')}
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </Button>
                    )}
                    <Button 
                      variant="outline" 
                      className="btn-outline flex items-center gap-2"
                      onClick={() => window.open(project.githubLink, '_blank')}
                    >
                      <Github size={16} />
                      GitHub
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, CheckCircle } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Data Science Intern",
      company: "Skillumni Online",
      period: "June 2025 – Present",
      location: "Remote",
      type: "Internship",
      achievements: [
        "Cleaned and preprocessed data using Python (Pandas, NumPy)",
        "Built predictive models with Scikit-learn",
        "Visualized data using Matplotlib and Seaborn",
        "Contributed to real-world machine learning projects"
      ],
      technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn"]
    }
  ];

  return (
    <section id="experience" className="section-spacing bg-background">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient-text animate-fade-in">Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building practical skills through hands-on internships and real-world projects
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="p-8 hover-lift bg-card border-border animate-slide-up"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="lg:flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
                    <h3 className="text-2xl font-bold text-card-foreground">{exp.title}</h3>
                    <Badge variant="secondary" className="w-fit bg-primary/10 text-primary">
                      {exp.type}
                    </Badge>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span className="font-semibold text-foreground">{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                    <span className="text-sm">{exp.location}</span>
                  </div>

                  <div className="space-y-3 mb-6">
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle size={18} className="text-success mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{achievement}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="outline" 
                        className="bg-accent/50 text-accent-foreground border-accent"
                      >
                        {tech}
                      </Badge>
                    ))}
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

export default ExperienceSection;
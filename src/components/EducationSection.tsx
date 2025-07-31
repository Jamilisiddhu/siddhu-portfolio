import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, Award } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      degree: "BTech Computer Science Engineering",
      institution: "Vellore Institute Of Technology, Vellore",
      period: "2022 – Present",
      gpa: "9.19",
      status: "In Progress",
      description: "Focused on software engineering, data structures, algorithms, and machine learning. Active in coding competitions and technical projects."
    },
    {
      degree: "Intermediate",
      institution: "FIITJEE Jr. College",
      period: "2020 – 2022",
      gpa: "9.37",
      status: "Completed",
      description: "Mathematics, Physics, Chemistry with computer science. Strong foundation in analytical thinking and problem-solving."
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "FIITJEE Public School",
      period: "2020",
      gpa: "9.91",
      status: "Completed",
      description: "Comprehensive secondary education with distinction in mathematics and science subjects."
    }
  ];

  return (
    <section id="education" className="section-spacing bg-background">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient-text animate-fade-in">Education</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Academic journey marked by consistent excellence and a passion for computer science
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block"></div>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative animate-slide-up" style={{ animationDelay: `${index * 200}ms` }}>
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block"></div>
                  
                  <Card className="md:ml-20 p-6 hover-lift bg-card border-border">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-start gap-3 mb-3">
                          <div className="p-2 bg-primary/10 rounded-lg text-primary md:hidden">
                            <GraduationCap className="w-5 h-5" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-card-foreground">{edu.degree}</h3>
                            <p className="text-lg font-semibold text-primary">{edu.institution}</p>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap items-center gap-4 mb-4 text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar size={16} />
                            <span>{edu.period}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Award size={16} />
                            <span className="font-semibold text-foreground">GPA: {edu.gpa}</span>
                          </div>
                          <Badge 
                            variant={edu.status === "In Progress" ? "default" : "secondary"}
                            className={edu.status === "In Progress" ? "bg-primary text-primary-foreground" : ""}
                          >
                            {edu.status}
                          </Badge>
                        </div>
                        
                        <p className="text-foreground leading-relaxed">{edu.description}</p>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
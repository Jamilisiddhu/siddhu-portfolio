import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Monitor, Settings, Database, BookOpen, Lightbulb } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="w-6 h-6" />,
      skills: ["C", "C++", "Java", "Python", "R", "JavaScript"]
    },
    {
      title: "Frontend",
      icon: <Monitor className="w-6 h-6" />,
      skills: ["HTML", "CSS", "JavaScript", "React", "Responsive Design"]
    },
    {
      title: "Tools",
      icon: <Settings className="w-6 h-6" />,
      skills: ["VS Code", "GitHub","PowerBi","Tableau", "Linux", "Windows", "Git"]
    },
    
    {
      title: "Databases",
      icon: <Database className="w-6 h-6" />,
      skills: ["SQL", "SQL+", "RDBMS", "Data Modeling"]
    },
    {
      title: "Libraries",
      icon: <BookOpen className="w-6 h-6" />,
      skills: ["Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn"]
    },
    {
      title: "Concepts",
      icon: <Lightbulb className="w-6 h-6" />,
      skills: ["DSA", "OOPs", "Data Fundamentals", "Machine Learning", "Web Development"]
    }
  ];

  return (
    <section id="skills" className="section-spacing bg-muted/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient-text animate-fade-in">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit built through academic learning and hands-on project experience
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="p-6 hover-lift bg-card border-border animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="bg-primary/5 text-primary border-primary/20 hover:bg-primary/10 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, ExternalLink } from "lucide-react";

const CertificationsSection = () => {
  const certifications = [
    {
      title: "Microsoft Azure Data Fundamentals",
      issuer: "Microsoft",
      date: "2024",
      description: "Comprehensive understanding of core data concepts and Azure data services, including relational and non-relational data solutions.",
      skills: ["Azure", "Data Fundamentals", "Cloud Computing", "Database Management"],
      verified: true,
      link: "#"
    },
    {
      title: "Python Pandas",
      issuer: "DataCamp / Coursera",
      date: "2024",
      description: "Advanced data manipulation and analysis using Pandas library, covering data cleaning, transformation, and exploratory data analysis.",
      skills: ["Python", "Pandas", "Data Analysis", "Data Manipulation"],
      verified: true,
      link: "#"
    }
  ];

  return (
    <section id="certifications" className="section-spacing bg-muted/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient-text animate-fade-in">Certifications</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and skill validation through industry-recognized certifications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <Card 
              key={cert.title} 
              className="p-6 hover-lift bg-card border-border animate-slide-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  <Award className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-lg font-bold text-card-foreground">{cert.title}</h3>
                    {cert.verified && (
                      <Badge variant="secondary" className="bg-success/10 text-success border-success/20">
                        Verified
                      </Badge>
                    )}
                  </div>
                  <p className="text-primary font-semibold">{cert.issuer}</p>
                  <p className="text-sm text-muted-foreground">{cert.date}</p>
                </div>
              </div>

              <p className="text-foreground mb-4 leading-relaxed">{cert.description}</p>

              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="outline" 
                      className="bg-accent/50 text-accent-foreground border-accent text-xs"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>

                {cert.link !== "#" && (
                  <button 
                    className="flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
                    onClick={() => window.open(cert.link, '_blank')}
                  >
                    <ExternalLink size={16} />
                    View Certificate
                  </button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
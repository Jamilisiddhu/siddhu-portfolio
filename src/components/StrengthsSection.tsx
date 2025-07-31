import { Card } from "@/components/ui/card";
import { Brain, Zap, Code, TrendingUp } from "lucide-react";

const StrengthsSection = () => {
  const strengths = [
    {
      title: "Analytical & Problem-Solving",
      description: "Strong analytical mindset with ability to break down complex problems into manageable solutions. Experienced in algorithmic thinking and data-driven decision making.",
      icon: <Brain className="w-8 h-8" />,
      color: "text-blue-500"
    },
    {
      title: "Quick Learner",
      description: "Adaptable and eager to learn new technologies and concepts. Successfully mastered multiple programming languages and frameworks in a short timeframe.",
      icon: <Zap className="w-8 h-8" />,
      color: "text-yellow-500"
    },
    {
      title: "HTML/CSS/JS Mastery",
      description: "Proficient in modern web development with deep understanding of frontend technologies, responsive design, and user experience principles.",
      icon: <Code className="w-8 h-8" />,
      color: "text-green-500"
    },
    {
      title: "Data Analysis & ML",
      description: "Strong foundation in data science concepts with hands-on experience in machine learning algorithms, data preprocessing, and visualization techniques.",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "text-purple-500"
    }
  ];

  return (
    <section id="strengths" className="section-spacing bg-background">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient-text animate-fade-in">Core Strengths</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Key capabilities that drive my success in software development and data science
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {strengths.map((strength, index) => (
            <Card 
              key={strength.title} 
              className="p-6 hover-lift bg-card border-border animate-slide-up group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 bg-primary/10 rounded-lg ${strength.color} group-hover:scale-110 transition-transform`}>
                  {strength.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-card-foreground mb-3">{strength.title}</h3>
                  <p className="text-foreground leading-relaxed">{strength.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrengthsSection;
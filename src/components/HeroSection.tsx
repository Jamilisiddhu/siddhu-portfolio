import { Button } from "@/components/ui/button";
import { Download, Github, LinkedinIcon, Mail } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";
import ResumePDF from '../assets/resume.pdf'; 

const HeroSection = () => {
  return (
    <section id="about" className="min-h-screen bg-gradient-to-br from-background to-muted px-6 py-20">
      <div className="section-container">
        {/* Centered Name and Title */}
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 gradient-text">
            Jamili Sai Siddhartha
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Full Stack Developer | Data Science Enthusiast
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Photo */}
          <div className="animate-slide-in-left">
            <div className="relative">
              <div className="w-96 h-96 mx-auto lg:mx-0 rounded-2xl overflow-hidden hover-lift">
                <img 
                  src={profilePhoto} 
                  alt="Jamili Sai Siddhartha" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/30 rounded-full blur-2xl"></div>
            </div>
          </div>
          
          {/* Right side - Content */}
          <div className="animate-slide-in-right text-left">
            <div className="space-y-6 mb-12">
              <p className="text-lg text-foreground leading-relaxed">
                Computer Science undergraduate with hands-on experience in building full-stack web apps and applying machine learning to real-world problems. I enjoy solving meaningful challenges through code, love collaborating in diverse teams, and take pride in owning what I build.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently pursuing my BTech in Computer Science Engineering at VIT Vellore with a CGPA of 9.19. 
                I'm passionate about creating innovative solutions that bridge the gap between complex technical 
                concepts and user-friendly applications.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              {/* Corrected 'download' attribute and using the imported ResumePDF */}
              <a href={ResumePDF} download="JamiliSaiSiddhartha_Resume.pdf">
                <Button className="btn-primary flex items-center gap-2 hover-lift">
                  {/* Using 'Download' icon as per your initial snippet */}
                  <Download size={20} /> 
                  Download Resume
                </Button>
              </a>
              <Button 
                variant="outline" 
                className="btn-outline flex items-center gap-2"
                onClick={() => window.open('https://github.com/Jamilisiddhu', '_blank')}
              >
                <Github size={20} />
                View GitHub
              </Button>
              <Button 
                variant="outline" 
                className="btn-outline flex items-center gap-2"
                onClick={() => window.open('https://www.linkedin.com/in/jamili-siddhartha-088139252/', '_blank')}
              >
                <LinkedinIcon size={20} />
                View LinkedIn
              </Button>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

import { Github, Linkedin, Mail, Heart, Instagram, InstagramIcon } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/Jamilisiddhu",
      label: "GitHub"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/jamili-siddhartha-088139252/",
      label: "LinkedIn"
    },
    {
      icon: <InstagramIcon className="w-5 h-5" />,
      href: "https://www.instagram.com/sai.siddhu.796/",
      label: "Instagram"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:jamilisiddhartha@gmail.com",
      label: "Email"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="section-container py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <button 
              onClick={scrollToTop}
              className="text-2xl font-bold gradient-text hover:scale-105 transition-transform cursor-pointer"
            >
              Jamili Sai Siddhartha
            </button>
            <p className="text-muted-foreground mt-2">
              Building the future through code and data
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : '_self'}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : ''}
                className="p-3 bg-muted/50 hover:bg-primary hover:text-primary-foreground rounded-lg transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            <span>© 2025 Jamili Sai Siddhartha.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
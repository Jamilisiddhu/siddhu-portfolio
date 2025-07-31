import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Github, Linkedin, Send, InstagramIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend service
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "jamilisiddhartha@gmail.com",
      link: "mailto:jamilisiddhartha@gmail.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+91 8309793349",
      link: "tel:+918309793349"
    },
    {
      icon: <InstagramIcon className="w-5 h-5" />,
      label: "Instagram",
      value: "instagram.com/sai.siddhu.796",
      link: "https://www.instagram.com/sai.siddhu.796/"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      value: "linkedin.com/in/jamili-siddhartha",
      link: "https://www.linkedin.com/in/jamili-siddhartha-088139252/"
    }
  ];

  return (
    <section id="contact" className="section-spacing bg-muted/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient-text animate-fade-in">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's connect! Whether you have a project in mind, want to collaborate, or just want to say hello.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Contact Information</h3>
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <Card key={index} className="p-4 hover-lift bg-card border-border">
                  <a 
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : '_self'}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="flex items-center gap-4 group"
                  >
                    <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      {info.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-card-foreground">{info.label}</p>
                      <p className="text-muted-foreground group-hover:text-primary transition-colors">{info.value}</p>
                    </div>
                  </a>
                </Card>
              ))}
            </div>
            
            <div className="bg-gradient-to-br from-primary/5 to-accent/10 p-6 rounded-xl">
              <h4 className="font-semibold mb-3 text-foreground">Available for:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Full-stack web development projects</li>
                <li>• Data science and machine learning collaborations</li>
                <li>• Open source contributions</li>
                <li>• Internship and job opportunities</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <Card className="p-6 bg-card border-border">
              <h3 className="text-2xl font-bold mb-6 text-card-foreground">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium text-card-foreground mb-2 block">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    className="bg-background border-input"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-card-foreground mb-2 block">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="bg-background border-input"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-sm font-medium text-card-foreground mb-2 block">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or just say hello..."
                    rows={6}
                    required
                    className="bg-background border-input resize-none"
                  />
                </div>
                
                <Button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                  <Send size={18} />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
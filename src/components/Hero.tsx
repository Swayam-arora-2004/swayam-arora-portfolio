import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Award, FolderOpen, Eye, Mail } from "lucide-react";

const Hero = () => {
  const kpis = [
    { icon: Github, label: "GitHub Repos", value: "25+" },
    { icon: Award, label: "Kaggle Tier", value: "Expert" },
    { icon: FolderOpen, label: "Projects", value: "15+" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center animate-fade-in">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">{" "}
            <span className="gradient-text">Data Analyst</span>
            <br />
            who builds practical{" "}<br/>
            <span className="gradient-text">data products</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            I build dashboards, ML models, and small systems. <br/>Open to work and collaborations.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="hover-glow text-lg px-8 py-6"
              onClick={() => scrollToSection("#projects")}
            >
              <Eye className="w-5 h-5 mr-2" />
              View Projects
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 glass-card hover-glow"
              onClick={() => scrollToSection("#contact")}
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact
            </Button>
          </div>

          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-slide-up">
            {kpis.map((kpi, index) => (
              <Card key={index} className="glass-card hover-glow p-6 group">
                <div className="flex items-center justify-center mb-4">
                  <kpi.icon className="w-8 h-8 text-primary group-hover:text-primary-glow transition-colors" />
                </div>
                <div className="text-3xl font-bold mb-2 gradient-text">
                  {kpi.value}
                </div>
                <div className="text-muted-foreground font-medium">
                  {kpi.label}
                </div>
              </Card>
            ))}
          </div>

          {/* Floating Animation Element */}
          <div className="absolute top-1/2 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float"></div>
          <div className="absolute top-1/3 right-10 w-16 h-16 bg-primary-glow/20 rounded-full blur-xl animate-float" style={{ animationDelay: "1s" }}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
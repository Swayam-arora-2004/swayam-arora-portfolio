import { Card } from "@/components/ui/card";
import { GraduationCap, Code2, Database, TrendingUp, MapPin } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "B.Tech CSE at Manav Rachna University"
    },
    {
      icon: Database,
      title: "ML Engineering",
      description: "PyTorch, MLflow, SHAP, LangChain, Docker"
    },
    {
      icon: MapPin,
      title: "Open to Remote & On-site Roles",
      description: "Available for the right opportunity worldwide"
    },
    {
      icon: TrendingUp,
      title: "Results-Driven",
      description: "Clear outcomes & business solutions"
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* About Text */}
          <div className="animate-slide-up">
            <Card className="glass-card p-6 sm:p-8 h-full">
              <div className="prose prose-lg prose-invert max-w-none">
                <div className="space-y-6 text-lg leading-relaxed text-foreground">
                  <p>
                    Hi — I'm <span className="gradient-text font-semibold">Swayam Arora</span>,
                    an ML Engineer & Researcher. I build production ML systems and LLM-powered applications using PyTorch, MLflow, SHAP, LangChain, and Docker — focused on solving real problems with measurable, reproducible outcomes.
                  </p>

                  <p>
                    I have hands-on experience building end-to-end ML pipelines on large datasets (100K+ records), including EDA, statistical analysis, model development, MLOps tooling, and deployment. My projects include a production-grade Customer Churn MLOps platform (96 tests, CI/CD, SHAP explainability, Docker, live demo), an AI-powered ERP system (LLM APIs, face recognition, ~80% reduction in manual effort), and a Springer/Scopus-indexed research publication (ICICC-2025).
                  </p>

                  <p>
                    I'm open to the right opportunity in ML Engineering or AI research — ideally working on systems that ship to production.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 animate-slide-up">
            {highlights.map((item, index) => (
              <Card key={index} className="glass-card hover-glow p-6 group">
                <div className="flex flex-col items-center text-center">
                  <item.icon className="w-10 h-10 text-primary group-hover:text-primary-glow transition-colors mb-4" />
                  <h3 className="font-semibold mb-2 text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, ChevronUp, ExternalLink, Github, Image } from "lucide-react";

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const [projects, setProjects] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Hardcoded fallback data
  const fallbackProjects = [
    {
      id: 1,
      title: "AI-Enabled ERP Dashboard System",
      tagline: "Final Year Project | AI/LLMs & SQL",
      image: "/erp_dashboard.jpg",
      description: "Led the development of AI-powered modules for an ERP system, focusing on automating complex workflows using LLM APIs. Integrated face recognition for secure and fast data retrieval.",
      techStack: ["AI/LLMs", "SQL", "Python", "React", "APIs"],
      githubUrl: "https://github.com/Swayam-arora-2004/mru-cst-dashboard",
      demoUrl: "https://mru-cst-dashboard-gamma.vercel.app/",
      caseStudy: {
        problem: "Manual administrative tasks and slow data retrieval in traditional ERP systems causing operational bottlenecks.",
        approach: "Built AI-assisted course code generation and an LLM-based grading system. Integrated face recognition APIs for automated attendance and secure access.",
        result: "Reduced manual effort by ~80% in code generation, decreased evaluation time by ~60%, and improved data retrieval speed by ~70%.",
        learned: "LLM API orchestration, prompt engineering for structured outputs, and integrating biometric authentication in web dashboards."
      }
    },
    {
      id: 2,
      title: "Customer Churn MLOps Platform",
      tagline: "Production ML System | CI/CD, Docker, SHAP, Live Demo",
      image: "/churn_analysis.jpg",
      description: "A fully production-grade MLOps platform for customer churn prediction. Features XGBoost & CatBoost ensemble models tracked via MLflow, SHAP explainability, Flask API served in Docker, 96 automated tests, and a GitHub Actions CI/CD pipeline. Includes a live interactive demo.",
      techStack: ["Python", "XGBoost", "CatBoost", "MLflow", "SHAP", "Flask", "Docker", "GitHub Actions", "Pandas", "Scikit-learn"],
      githubUrl: "https://github.com/Swayam-arora-2004/Customer-Churn-Prediction",
      demoUrl: "https://example.com",
      caseStudy: {
        problem: "High customer churn with no production-grade system for prediction, explainability, or reproducibility across experiments.",
        approach: "Built an ensemble of XGBoost and CatBoost models, tracked all experiments with MLflow, added SHAP for feature-level explanations, containerised the Flask API in Docker, and set up a GitHub Actions CI/CD pipeline with 96 tests.",
        result: "Live deployed system with full MLOps lifecycle: reproducible experiments, explainable predictions, automated quality gates, and a publicly accessible demo.",
        learned: "End-to-end MLOps architecture, SHAP model explainability, Docker containerisation of ML APIs, and GitHub Actions for automated ML testing pipelines."
      }
    }
  ];

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const apiUrl = import.meta.env.PROD ? '/api/projects' : '/api/projects';
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error('Failed to fetch projects');
        
        const result = await response.json();
        if (result.success && result.data && result.data.length > 0) {
          // Map database fields to component fields
          const mappedData = result.data.map((p: any) => ({
            id: p.id,
            title: p.title,
            tagline: p.tagline,
            description: p.description,
            image: p.image_url,
            techStack: p.tech_stack || [],
            githubUrl: p.github_link,
            demoUrl: p.demo_url,
            caseStudy: p.case_study || {}
          }));
          setProjects(mappedData);
        } else {
          setProjects(fallbackProjects);
        }
      } catch (error) {
        console.error('Error fetching projects:', error);
        setProjects(fallbackProjects);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const toggleExpanded = (projectId: number) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Production ML systems and research-driven AI applications
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <Card key={project.id} className="glass-card hover-glow overflow-hidden animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="p-4 sm:p-6 lg:p-8">
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch">
                  {/* Project Image */}
                  <div className="flex-shrink-0 w-full lg:w-[320px] mx-auto lg:mx-0">
                    <div className="w-full bg-gradient-card rounded-xl overflow-hidden border border-border/50 shadow-2xl mx-auto lg:mx-0 group">
                      {/* Browser Header */}
                      <div className="bg-muted/30 px-4 py-2 border-b border-border/30 flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-500/50" />
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/50" />
                      </div>
                      
                      <div className="aspect-[4/3] relative overflow-hidden bg-background/50">
                        {project.image ? (
                          <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <Image className="w-12 h-12 text-muted-foreground/30" />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="flex-1 lg:w-2/3 space-y-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-2 text-foreground">
                        {project.title}
                      </h3>
                      <p className="text-primary font-medium mb-4">
                        {project.tagline}
                      </p>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <Badge key={tech} variant="secondary" className="glass-card">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4 pt-4">
                      {project.githubUrl && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="glass-card"
                          asChild
                        >
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="w-4 h-4 mr-2" />
                            GitHub
                          </a>
                        </Button>
                      )}
                      {project.demoUrl && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="glass-card"
                          asChild
                        >
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Demo
                          </a>
                        </Button>
                      )}
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleExpanded(project.id)}
                        className="text-primary hover:text-primary-glow"
                      >
                        Case Study
                        {expandedProject === project.id ? (
                          <ChevronUp className="w-4 h-4 ml-2" />
                        ) : (
                          <ChevronDown className="w-4 h-4 ml-2" />
                        )}
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Expandable Case Study */}
                {expandedProject === project.id && (
                  <div className="mt-6 lg:mt-8 pt-6 lg:pt-8 border-t border-border animate-fade-in">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Problem</h4>
                        <p className="text-sm text-muted-foreground text-justify">
                          {project.caseStudy.problem}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Approach</h4>
                        <p className="text-sm text-muted-foreground text-justify">
                          {project.caseStudy.approach}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Result</h4>
                        <p className="text-sm text-muted-foreground text-justify">
                          {project.caseStudy.result}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2">What I Learned</h4>
                        <p className="text-sm text-muted-foreground text-justify">
                          {project.caseStudy.learned}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
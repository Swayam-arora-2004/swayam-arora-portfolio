import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, ChevronUp, ExternalLink, Github, Image } from "lucide-react";

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const projects = [
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
      title: "Customer Churn Analysis",
      tagline: "Predictive Insights for Retention",
      image: "/churn_analysis.jpg",
      description: "Conducted a deep-dive analysis into customer behavior patterns to predict churn. Utilized advanced EDA and feature engineering to identify critical risk factors.",
      techStack: ["Python", "SQL", "Pandas", "Scikit-learn", "EDA"],
      githubUrl: "https://github.com/Swayam-arora-2004/Customer-Churn-Prediction",
      demoUrl: "https://example.com",
      caseStudy: {
        problem: "Increasing customer turnover with no clear understanding of the underlying behavioral drivers or high-risk segments.",
        approach: "Analyzed 10K+ records using Python. Performed extensive EDA and engineered features to capture multi-dimensional customer interaction patterns.",
        result: "Identified 3 high-risk customer segments, enabling targeted retention strategies that improved retention by ~15-20%.",
        learned: "Advanced feature engineering, translating statistical findings into business segments, and the impact of data cleaning on model reliability."
      }
    },
    {
      id: 3,
      title: "Retail Sales Analysis",
      tagline: "Optimizing Product Strategy & ROI",
      image: "/retail_sales.jpg",
      description: "Analyzed large-scale retail transaction data to optimize product performance and revenue growth. Focused on SQL optimization for handling large datasets efficiently.",
      techStack: ["SQL", "Excel", "Python", "Data Analysis"],
      githubUrl: "https://github.com/Swayam-arora-2004/Retail-Sales-Analysis",
      demoUrl: "https://example.com",
      caseStudy: {
        problem: "Inability to identify top-performing product categories and slow performance of reporting queries on large transaction datasets.",
        approach: "Analyzed 50K+ transactions using optimized SQL queries. Applied the 80/20 rule to identify revenue-driving segments and visualized trends in Excel.",
        result: "Identified that the top 10% of products contributed to ~60% of total revenue. Improved query performance by optimizing table joins and indexing.",
        learned: "SQL query optimization, large-scale data aggregation, and using the Pareto principle for strategic business insights."
      }
    }
  ];

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
            A showcase of practical data solutions and technical implementations
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
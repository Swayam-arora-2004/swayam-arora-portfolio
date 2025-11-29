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
      title: "Financial Market Dashboard",
      tagline: "Interactive market & crypto dashboard",
      image: "/Financial_Market_Dashboard.png",
      description: "Integrated 10+ stock market & crypto APIs to track price trends, trading volume, and sector performance. Delivered insights that could simulate portfolio performance with 95% data accuracy.",
      techStack: ["Power BI", "SQL", "Python", "APIs"],
      caseStudy: {
        problem: "Need for real-time financial market insights and portfolio performance tracking across multiple asset classes.",
        approach: "Integrated multiple APIs, built ETL pipelines, and created interactive visualizations with automated data refresh.",
        result: "95% data accuracy with real-time updates, enabling informed investment decisions.",
        learned: "API integration, real-time data processing, and financial data visualization best practices."
      }
    },
    {
      id: 2,
      title: "Customer Churn Prediction",
      tagline: "Predictive model for churn",
      image: "/Customer_Churn_Prediction.png",
      description: "Built a machine learning model using Logistic Regression, Random Forest, and XGBoost to predict customer churn with 90% accuracy. Created a dashboard visualization that translated predictions into business actions.",
      techStack: ["Python", "Scikit-learn", "XGBoost", "Pandas", "Matplotlib"],
      caseStudy: {
        problem: "High customer churn rates without predictive insights for proactive retention strategies.",
        approach: "Analyzed customer data, engineered features, compared multiple ML algorithms, and built an interpretable model.",
        result: "90% prediction accuracy with actionable insights for customer retention strategies.",
        learned: "Feature engineering, model comparison, and translating ML insights into business actions."
      }
    },
    {
      id: 3,
      title: "Submission Triage for Motor Insurance – Comparison of Classification Models",
      tagline: "Automated submission triage solution with real-time pipelines",
      image: "/Submission_Triage_for_Motor_Insurance.png",
      description: "Developed an automated submission triage solution for motor insurance data, integrating real-time pipelines and classification model comparison.",
      techStack: ["Python", "Kafka", "KSQLDB", "Machine Learning"],
      caseStudy: {
        problem: "Inefficient manual triage of motor insurance submissions leading to delays in underwriting and inconsistent risk assessment.",
        approach: "Performed detailed EDA using Python, built a real-time data preprocessing pipeline using Kafka & KSQLDB, and compared multiple classification models to determine the best-performing approach for real-world submission classification.",
        result: "Achieved a scalable and automated triage workflow, selecting the most accurate model for classifying incoming submissions and significantly improving underwriting speed and decision quality.",
        learned: "Real-time data engineering, event-driven pipelines, model comparison strategies, and applying machine learning to insurance domain workflows."
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
              <div className="p-8">
                <div className="flex flex-col lg:flex-row gap-8 items-stretch">
                  {/* Project Image */}
                  <div className="flex-shrink-0 w-full lg:w-[400px]">
                    <div className="w-full h-[300px] lg:w-[400px] lg:h-[300px] bg-gradient-card rounded-lg overflow-hidden border border-border">
                      {project.image ? (
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <Image className="w-12 h-12 text-muted-foreground" />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="lg:w-2/3 space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-2xl font-bold mb-2 text-foreground">
                          {project.title}
                        </h3>
                        <p className="text-primary font-medium mb-4">
                          {project.tagline}
                        </p>
                      </div>
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
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="glass-card"
                        asChild
                      >
                        <a 
                          href="https://github.com/example" 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          GitHub
                        </a>
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="glass-card"
                        asChild
                      >
                        <a 
                          href="https://example.com" 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </a>
                      </Button>
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
                  <div className="mt-8 pt-8 border-t border-border animate-fade-in">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
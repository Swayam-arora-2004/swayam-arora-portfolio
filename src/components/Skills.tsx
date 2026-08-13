import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      category: "ML & Deep Learning",
      skills: ["PyTorch", "Scikit-learn", "XGBoost", "CatBoost", "Hugging Face Transformers", "Feature Engineering", "Statistical Modelling"],
      tier: "primary"
    },
    {
      category: "MLOps & Deployment",
      skills: ["MLflow", "SHAP", "Docker", "GitHub Actions", "Flask", "FastAPI", "CI/CD Pipelines", "Model Serving"],
      tier: "primary"
    },
    {
      category: "AI / ML Engineering",
      skills: ["LangChain", "ChromaDB", "LLM API Integration", "RAG Pipelines", "Prompt Engineering", "Agentic Workflows"],
      tier: "primary"
    },
    {
      category: "Programming & Data",
      skills: ["Python (Pandas, NumPy)", "SQL", "Exploratory Data Analysis (EDA)", "Data Cleaning", "Data Wrangling", "Data Preprocessing"],
      tier: "secondary"
    },
    {
      category: "Tools & Infrastructure",
      skills: ["Git", "Jupyter Notebook", "VS Code", "MySQL", "Data Query Optimisation"],
      tier: "secondary"
    },
    {
      category: "Visualisation",
      skills: ["Matplotlib", "Seaborn", "Power BI", "Tableau"],
      tier: "secondary"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            ML engineering, MLOps, and AI systems development
          </p>
        </div>

        <div className="grid gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={category.category}
              className="glass-card hover-glow p-6 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="default"
                    className="text-sm px-3 py-1 glass-card hover-glow transition-all duration-200 hover:scale-105"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
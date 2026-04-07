import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming",
      skills: ["Python (Pandas, NumPy)", "SQL"],
      tier: "primary"
    },
    {
      category: "Data Analysis & Processing",
      skills: ["Exploratory Data Analysis (EDA)", "Data Cleaning", "Data Wrangling", "Data Preprocessing", "Feature Engineering", "Statistical Analysis"],
      tier: "primary"
    },
    {
      category: "Visualisation",
      skills: ["Power BI", "Tableau", "Matplotlib", "Seaborn", "Business Intelligence (BI)", "Dashboard Development"],
      tier: "primary"
    },
    {
      category: "Tools",
      skills: ["Advanced Excel", "Git", "Jupyter Notebook", "VS Code"],
      tier: "secondary"
    },
    {
      category: "Databases",
      skills: ["MySQL", "Relational Database Management Systems (RDBMS)", "Data Query Optimisation"],
      tier: "secondary"
    },
    {
      category: "AI & Productivity",
      skills: ["AI-assisted Data Analysis", "Prompt Engineering", "Workflow Automation", "Insight Generation using LLMs"],
      tier: "secondary"
    },
    {
      category: "Soft Skills",
      skills: ["Data Storytelling", "Business Problem-Solving", "Critical Thinking", "Collaboration", "Time Management"],
      tier: "accent"
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
            A comprehensive toolkit for data analysis and development
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
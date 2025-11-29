import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Python", "C/C++"],
      tier: "primary"
    },
    {
      category: "Data Analysis",
      skills: ["Pandas", "NumPy", "SQL"],
      tier: "primary"
    },
    {
      category: "Data Visualization",
      skills: ["Power BI", "Tableau", "Matplotlib", "Seaborn"],
      tier: "primary"
    },
    {
      category: "Developer Tools",
      skills: ["VS Code", "Git", "GitHub", "MS Excel"],
      tier: "secondary"
    },
    {
      category: "Concepts",
      skills: ["Data Structures", "Algorithms", "OOP", "Data pipeline optimization"],
      tier: "secondary"
    },
    {
      category: "AI & Tools",
      skills: ["ChatGPT", "Trifacta", "Microsoft Fabric", "Zapier", "Koyfin", "H2O.ai", "Cursor", "Copilot"],
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
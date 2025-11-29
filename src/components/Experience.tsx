import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "MCT India Infotech",
      role: "DevOps Intern",
      period: "06/2025 - 08/2025",
      location: "Remote",
      achievements: [
        "Built and optimized frontend components in React.js, improving UI responsiveness and user experience.",
        "Gained hands-on exposure to Kubernetes architecture, understanding container orchestration and deployment pipelines."
      ],
      skills: ["React.js", "Kubernetes", "DevOps", "Frontend Development"]
    },
    {
      company: "CodersCave",
      role: "Data Science Intern",
      period: "06/2024 - 07/2024",
      location: "Remote",
      achievements: [
        "Collaborated on a team to develop 3+ data models for predictive analysis using machine learning algorithms, achieving an average accuracy improvement of 15%.",
        "Cleaned, pre-processed, and analyzed datasets of over 500,000 data points, improving data processing speed by 25%."
      ],
      skills: ["Python", "Machine Learning", "Data Preprocessing", "Predictive Analysis"]
    }
  ];

  const education = [
    {
      institution: "Manav Rachna University",
      degree: "B.Tech. Computer Science & Technology",
      period: "2022–2026",
      grade: "CPI: 7.06"
    },
    {
      institution: "Vidya Mandir Public School",
      degree: "Senior Secondary (12th Std)",
      period: "2021–2022",
      grade: "70%"
    },
    {
      institution: "Vidya Mandir Public School",
      degree: "Secondary (10th Std)",
      period: "2019–2020",
      grade: "93%"
    }
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Experience & <span className="gradient-text">Education</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Work Experience */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Briefcase className="w-6 h-6 mr-3 text-primary" />
              Internships & Experience
            </h3>
            
            {experiences.map((exp, index) => (
              <Card 
                key={index} 
                className="glass-card hover-glow p-6 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-foreground">
                      {exp.role}
                    </h4>
                    <p className="text-primary font-medium">
                      {exp.company}
                    </p>
                  </div>
                  <div className="text-sm text-muted-foreground mt-2 sm:mt-0 sm:text-right">
                    <div className="flex items-center justify-start sm:justify-end mb-1">
                      <Calendar className="w-4 h-4 mr-1" />
                      {exp.period}
                    </div>
                    <div className="flex items-center justify-start sm:justify-end">
                      <MapPin className="w-4 h-4 mr-1" />
                      {exp.location}
                    </div>
                  </div>
                </div>

                <ul className="space-y-2 mb-4">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-muted-foreground flex items-start">
                      <span className="text-primary mr-2 mt-1">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs glass-card">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Education */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Briefcase className="w-6 h-6 mr-3 text-primary" />
              Education
            </h3>
            
            {education.map((edu, index) => (
              <Card 
                key={index} 
                className="glass-card hover-glow p-6 animate-slide-up"
                style={{ animationDelay: `${(index + 2) * 0.2}s` }}
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">
                      {edu.degree}
                    </h4>
                    <p className="text-primary font-medium">
                      {edu.institution}
                    </p>
                  </div>
                  <div className="text-sm text-muted-foreground mt-2 sm:mt-0 sm:text-right">
                    <div className="flex items-center justify-start sm:justify-end mb-1">
                      <Calendar className="w-4 h-4 mr-1" />
                      {edu.period}
                    </div>
                    <div className="font-medium text-primary">
                      {edu.grade}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
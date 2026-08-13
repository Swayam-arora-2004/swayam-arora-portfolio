import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Briefcase, GraduationCap } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "MCT India Infotech Pvt. Ltd.",
      role: "Software Development Engineer in Test (SDET)",
      period: "June 2026 – Present",
      location: "Delhi, India",
      achievements: [
        "Designing and implementing automated test frameworks for production ML and web systems.",
        "Building CI/CD pipelines with GitHub Actions to ensure quality gates across deployment stages.",
        "Developing end-to-end test coverage for API and UI layers, significantly reducing regression risk.",
        "Collaborating with the engineering team to integrate test automation into the development workflow."
      ],
      skills: ["Test Automation", "CI/CD", "GitHub Actions", "Python", "API Testing", "QA Engineering"]
    },
    {
      company: "MCT India Infotech Pvt. Ltd.",
      role: "Intern",
      period: "June 2025 – August 2025",
      location: "Delhi, India",
      achievements: [
        "Analysed system and application logs to identify performance bottlenecks and failure patterns.",
        "Performed data-driven monitoring analysis to optimise system performance and reduce downtime indicators.",
        "Created KPI-based reports and dashboards for tracking system health, uptime, and resource utilization.",
        "Automated data extraction and preprocessing pipelines using Python, improving analysis efficiency by ~20-25%."
      ],
      skills: ["Log Analysis", "Python", "KPI Dashboards", "System Monitoring", "Automation"]
    },
    {
      company: "CodersCave",
      role: "Data Science Intern",
      period: "June 2024 – July 2024",
      location: "Remote",
      achievements: [
        "Cleaned and analysed 100K+ records using Python (Pandas), improving data processing efficiency by 25%.",
        "Performed exploratory data analysis (EDA) to identify trends, anomalies, and data quality issues.",
        "Built reproducible Jupyter notebooks and documented end-to-end data workflows."
      ],
      skills: ["Python", "Pandas", "EDA", "Jupyter Notebooks", "Data Analysis"]
    }
  ];

  const education = [
    {
      institution: "Manav Rachna University",
      degree: "B.Tech. Computer Science & Technology",
      period: "2022–2026",
      grade: "CGPA: 7.55"
    },
    {
      institution: "Vidya Mandir Public School",
      degree: "Senior Secondary (12th Std)",
      period: "2021–2022",
      grade: "69.4%"
    },
    {
      institution: "Vidya Mandir Public School",
      degree: "Secondary (10th Std)",
      period: "2019–2020",
      grade: "92%"
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

        <div className="flex flex-col gap-16 max-w-4xl mx-auto">
          {/* Work Experience */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Briefcase className="w-6 h-6 mr-3 text-primary" />
              Experience
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
              <GraduationCap className="w-6 h-6 mr-3 text-primary" />
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
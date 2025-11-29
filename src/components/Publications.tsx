import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Award, Trophy, Users, Calendar } from "lucide-react";

const Publications = () => {
  const publications = [
    {
      title: "Optimizing Pharmaceutical Supply Chains: An Intelligent Approach to Sustainable Business Growth",
      status: "Published",
      publisher: "Springer",
      type: "Research Paper",
      icon: FileText
    },
    {
      title: "Robust Deepfake Detection Leveraging EfficientNet-B3 Backbone with Binary Classification Techniques",
      status: "Under Review",
      publisher: "Springer Journal",
      type: "Research Paper",
      icon: FileText
    }
  ];

  const certifications = [
    "Programming using Java (Infosys Springboard)",
    "Data Analyst Skill path: Zero to Hero in Excel, SQL & Python (Udemy)",
    "Data Engineering Professional Certification (RapidMiner)",
    "Google Analytics (Great Learning Academy)"
  ];

  const awards = [
    {
      title: "3rd Prize, MRSDC MRI Hackathon – HackItUp",
      icon: Trophy,
      type: "Competition"
    },
    {
      title: "Data Analytics Lead, Google Developer Student Club, Manav Rachna University",
      icon: Users,
      type: "Leadership"
    },
    {
      title: "Reached Top 20 (out of 120) at UPES Hackathon 8.0",
      icon: Award,
      type: "Competition"
    },
    {
      title: "Reached Top 35 (out of 100) at IEEE Hackathon",
      icon: Award,
      type: "Competition"
    },
    {
      title: "Conducted a 4-hour workshop on Using MS Excel in Data Analytics",
      icon: Users,
      type: "Workshop"
    },
    {
      title: "Volunteered at blood donation camp (MRU)",
      icon: Users,
      type: "Community"
    },
    {
      title: "Participated in Manav Rachna Annual Cultural Fest 2023",
      icon: Calendar,
      type: "Cultural"
    }
  ];

  return (
    <section id="publications" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Publications & <span className="gradient-text">Achievements</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Publications */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <FileText className="w-6 h-6 mr-3 text-primary" />
              Research Publications
            </h3>
            
            {publications.map((pub, index) => (
              <Card 
                key={index} 
                className="glass-card hover-glow p-6 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-start gap-4">
                  <pub.icon className="w-8 h-8 text-primary mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-foreground mb-2 leading-tight">
                      {pub.title}
                    </h4>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge variant={pub.status === "Published" ? "default" : "secondary"}>
                        {pub.status}
                      </Badge>
                      <Badge variant="outline" className="glass-card">
                        {pub.type}
                      </Badge>
                    </div>
                    <p className="text-primary font-medium">
                      {pub.publisher}
                    </p>
                  </div>
                </div>
              </Card>
            ))}

            {/* Certifications */}
            <div className="mt-12">
              <h4 className="text-xl font-semibold mb-4 text-foreground">
                Training & Certifications
              </h4>
              <Card className="glass-card p-6">
                <ul className="space-y-3">
                  {certifications.map((cert, index) => (
                    <li key={index} className="text-muted-foreground flex items-start">
                      <span className="text-primary mr-2 mt-1">•</span>
                      {cert}
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>

          {/* Awards & Extracurricular */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Award className="w-6 h-6 mr-3 text-primary" />
              Awards & Extracurricular
            </h3>
            
            <div className="space-y-4">
              {awards.map((award, index) => (
                <Card 
                  key={index} 
                  className="glass-card hover-glow p-4 animate-slide-up"
                  style={{ animationDelay: `${(index + 2) * 0.1}s` }}
                >
                  <div className="flex items-start gap-3">
                    <award.icon className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <h4 className="font-medium text-foreground mb-1">
                        {award.title}
                      </h4>
                      <Badge variant="outline" className="text-xs glass-card">
                        {award.type}
                      </Badge>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
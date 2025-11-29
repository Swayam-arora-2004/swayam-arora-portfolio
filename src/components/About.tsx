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
      title: "Data Focus",
      description: "Python, SQL, Power BI expertise"
    },
    {
      icon: MapPin,
      title: "Willing to Relocate",
      description: "Open to opportunities worldwide"
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
                <p className="text-lg leading-relaxed text-foreground">
                  Hi — I'm <span className="gradient-text font-semibold">Swayam Arora</span>, 
                  an aspiring Data Analyst and B.Tech (CSE) student at Manav Rachna University. 
                  I learn by building practical projects in Python, SQL, web, and hardware. 
                  I focus on clear results, reproducible code, and solving business problems.
                </p>
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
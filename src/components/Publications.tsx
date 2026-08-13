import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Award, Trophy, Users, Calendar, ExternalLink } from "lucide-react";

const Publications = () => {
  const publications = [
    {
      title: "Optimizing Pharmaceutical Supply Chains: An Intelligent Approach to Sustainable Business Growth",
      status: "Published",
      publisher: "Springer · Scopus-indexed · ICICC-2025",
      type: "Research Paper",
      icon: FileText,
      url: "https://link.springer.com/chapter/10.1007/978-981-96-7134-2_27"
    }
  ];

  const certifications = [
    {
      title: "Data Analytics with Python",
      issuer: "NPTEL",
      url: "https://archive.nptel.ac.in/content/noc/NOC25/SEM1/Ecertificates/106/noc25-cs17/Course/NPTEL25CS17S114520138504283229.pdf"
    },
    {
      title: "Google Analytics",
      issuer: "Great Learning",
      url: "https://www.mygreatlearning.com/certificate/UVKFGBLA?referrer_code=GLBLCOVFL4FL8"
    },
    {
      title: "Data Engineering Professional Certification",
      issuer: "Altair RapidMiner",
      url: "https://ti-user-certificates.s3.amazonaws.com/5733896a-1d71-46e5-b0a3-1ffcf845fe21/393867cc-bc46-46a5-b904-34931e73a26a-swayam-arora-edd0b384-eeba-43bc-a02b-187d007ad2e4-certificate.pdf"
    },
    {
      title: "Data Analyst Skillpath: Zero to Hero in Excel, SQL & Python",
      issuer: "Udemy",
      url: "https://www.udemy.com/certificate/UC-2e8952ff-1ba7-4bf1-bf52-1a36a5aae5a1/"
    }
  ];

  const awards = [
    {
      title: "3rd Prize, MRSDC MRI Hackathon – HackItUp",
      icon: Trophy,
      type: "Competition" // 3
    },
    {
      title: "Reached Top 20 (out of 120) at UPES Hackathon 8.0",
      icon: Award,
      type: "Competition" //4
    },
    {
      title: "Reached Top 20 (out of 100) at IEEE WIEHACK 5.0",
      icon: Award,
      type: "Competition" //5 
    },
    {
      title: "Data Science Lead, Google Developer Student Club, Manav Rachna University",
      icon: Users,
      type: "Leadership" //1
    },
    {
      title: "Conducted a 4-hour workshop on Using MS Excel in Data Science",
      icon: Users,
      type: "Workshop" //2
    },
    // {
    //   title: "Volunteered at blood donation camp (MRU)",
    //   icon: Users,
    //   type: "Community" uncomment for masters  6
    // },
    {
      title: "Volunteered and Participated in Manav Rachna Annual Cultural Fest 2023",
      icon: Calendar,
      type: "Cultural" //7
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
                className="glass-card hover-glow p-6 animate-slide-up group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="flex gap-4 items-start">
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
                  {pub.url && (
                    <a
                      href={pub.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 inline-flex items-center text-sm font-medium text-primary hover:text-primary-glow transition-all gap-1.5 glass-card px-4 py-2 rounded-full group-hover:bg-primary/5"
                    >
                      View <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </Card>
            ))}

            {/* Certifications */}
            <div className="mt-12">
              <h4 className="text-xl font-semibold mb-6 text-foreground">
                Training & Certifications
              </h4>
              <div className="grid gap-4">
                {certifications.map((cert, index) => (
                  <Card key={index} className="glass-card p-5 hover-glow group">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex-1">
                        <h5 className="font-bold text-foreground mb-1 leading-tight">{cert.title}</h5>
                        <p className="text-sm text-primary font-medium">{cert.issuer}</p>
                      </div>
                      {cert.url && (
                        <a
                          href={cert.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-shrink-0 inline-flex items-center text-xs font-medium text-primary hover:text-primary-glow transition-all gap-1.5 glass-card px-3 py-1.5 rounded-full group-hover:bg-primary/5"
                        >
                          View <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </Card>
                ))}
              </div>
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
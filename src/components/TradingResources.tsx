
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, LineChart, TrendingUp, Briefcase, FileText, ArrowRight, ExternalLink } from "lucide-react";

const resourceData = [
  {
    id: 1,
    title: "Daily Market Analysis",
    description: "Get expert analysis of market trends and potential trading opportunities every trading day.",
    icon: <LineChart className="h-6 w-6" />,
    color: "bg-blue-100 text-blue-700"
  },
  {
    id: 2,
    title: "Trading Strategies",
    description: "Access our library of proven trading strategies for different market conditions.",
    icon: <TrendingUp className="h-6 w-6" />,
    color: "bg-green-100 text-green-700"
  },
  {
    id: 3,
    title: "Portfolio Management",
    description: "Learn how to balance your portfolio for optimal risk and reward ratios.",
    icon: <Briefcase className="h-6 w-6" />,
    color: "bg-purple-100 text-purple-700"
  },
  {
    id: 4,
    title: "Trading Guides & Ebooks",
    description: "Comprehensive guides on various trading topics to deepen your knowledge.",
    icon: <FileText className="h-6 w-6" />,
    color: "bg-orange-100 text-orange-700"
  }
];

const TradingResources = () => {
  return (
    <section id="trading" className="py-24 px-4 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-secondary/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl"></div>
      <div className="absolute top-1/3 left-1/4 w-12 h-12 bg-primary/20 rounded-full"></div>
      <div className="absolute bottom-1/4 right-1/3 w-20 h-20 bg-secondary/20 rounded-full"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-secondary/20 text-secondary hover:bg-secondary/30 border-none">Premium Resources</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Trading Resources to <span className="gradient-text">Accelerate Your Success</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get access to premium trading resources designed to help you make informed trading decisions and improve your overall performance.
          </p>
          
          {/* New Website Link */}
          <div className="mt-6">
            <a 
              href="https://knowledgewaveindia.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
            >
              Visit Knowledge Wave India <ExternalLink size={16} />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left side - Resources */}
          <div className="lg:col-span-5">
            <div className="space-y-8">
              {resourceData.map((resource) => (
                <div 
                  key={resource.id} 
                  className="flex gap-6 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
                >
                  <div className={`${resource.color} p-4 rounded-2xl h-16 w-16 flex items-center justify-center flex-shrink-0`}>
                    {resource.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{resource.title}</h3>
                    <p className="text-gray-600">{resource.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-4 items-center justify-center md:justify-start">
              <Button className="primary-button flex items-center group text-lg py-6 px-8">
                Explore All Resources 
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              {/* Additional Website Link */}
              <a 
                href="https://knowledgewaveindia.com/package/creator-wave" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center py-2 px-4 text-primary hover:text-primary/80 transition-colors"
              >
                Creator Wave Package <ExternalLink size={16} className="ml-1" />
              </a>
            </div>
          </div>
          
          {/* Right side - Cards */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-6 gap-6 relative">
              {/* Large feature card */}
              <Card className="sm:col-span-6 feature-card bg-gradient-to-br from-primary to-primary/80 text-white overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div>
                      <Badge className="bg-white/20 text-white hover:bg-white/30 border-none mb-4">Featured</Badge>
                      <h3 className="text-2xl font-bold mb-3">Pro Trading Masterclass</h3>
                      <p className="text-white/90 mb-6 max-w-md">
                        An intensive 8-week program guided by professional traders with real market experience.
                      </p>
                      <Button className="bg-white text-primary hover:bg-white/90">
                        Learn More
                      </Button>
                    </div>
                    <div className="hidden md:block mt-6 md:mt-0">
                      <div className="w-32 h-32 rounded-full bg-white/10 flex items-center justify-center">
                        <TrendingUp size={64} className="text-white" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Smaller cards */}
              <Card className="sm:col-span-3 feature-card border-none shadow-lg hover:shadow-xl transition-all">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3">Premium Analysis</h3>
                  <p className="text-gray-600 mb-4">Daily market insights from professional traders</p>
                  <div className="py-3 px-4 bg-gray-50 rounded-lg flex items-center justify-between cursor-pointer hover:bg-gray-100 transition-colors">
                    <span className="text-sm font-medium">View Sample</span>
                    <ChevronRight size={16} />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="sm:col-span-3 feature-card bg-gradient-to-br from-secondary/80 to-secondary text-black">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3">Trading Signals</h3>
                  <p className="text-black/80 mb-4">Get alerts on potential market opportunities</p>
                  <Button className="bg-black text-white hover:bg-black/90 w-full">Subscribe</Button>
                </CardContent>
              </Card>
              
              <Card className="sm:col-span-6 feature-card border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-lg">Monthly Trading Webinars</h3>
                    <Badge className="bg-red-500 text-white animate-pulse">Live</Badge>
                  </div>
                  <p className="text-gray-600 mb-4">Interactive sessions with experienced traders to discuss current market conditions and strategies.</p>
                  <div className="flex justify-between items-center">
                    <Badge className="bg-gray-100 text-gray-700">Next: June 15</Badge>
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
                      View Schedule
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradingResources;

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, LineChart, TrendingUp, Briefcase, FileText } from "lucide-react";

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
    <section id="trading" className="section-container">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Trading Resources to <span className="gradient-text">Accelerate Your Success</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Get access to premium trading resources designed to help you make informed trading decisions and improve your overall performance.
            </p>
            <div className="space-y-6">
              {resourceData.map((resource) => (
                <div key={resource.id} className="flex gap-4">
                  <div className={`${resource.color} p-3 rounded-xl h-12 w-12 flex items-center justify-center flex-shrink-0`}>
                    {resource.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">{resource.title}</h3>
                    <p className="text-gray-600 text-sm">{resource.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Button className="primary-button flex items-center">
                Explore Resources <ChevronRight size={18} className="ml-1" />
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -z-10 top-0 right-0 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="feature-card col-span-1 row-span-1">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Premium Analysis</h3>
                  <p className="text-sm text-gray-600">Daily market insights from professional traders</p>
                  <div className="mt-4 py-3 px-4 bg-gray-50 rounded-lg flex items-center justify-between">
                    <span className="text-sm font-medium">View Sample</span>
                    <ChevronRight size={16} />
                  </div>
                </CardContent>
              </Card>
              <Card className="feature-card col-span-1 row-span-1 bg-gradient-to-br from-primary to-primary/80 text-white">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Trading Signals</h3>
                  <p className="text-sm text-white/80">Get alerts on potential market opportunities</p>
                  <Button className="mt-4 bg-white text-primary hover:bg-white/90 w-full">Subscribe</Button>
                </CardContent>
              </Card>
              <Card className="feature-card col-span-2 sm:col-span-2">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold">Monthly Trading Webinars</h3>
                    <Badge className="bg-secondary text-black">Live</Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">Interactive sessions with experienced traders to discuss current market conditions and strategies.</p>
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/5">
                    View Schedule
                  </Button>
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

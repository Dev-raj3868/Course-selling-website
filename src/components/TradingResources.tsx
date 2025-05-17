
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ChevronRight, 
  LineChart, 
  TrendingUp, 
  Briefcase, 
  FileText, 
  ArrowRight, 
  ExternalLink, 
  ArrowUpRight, 
  Sparkles,
  Clock,
  CheckCircle
} from "lucide-react";
import { motion } from "framer-motion";

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

const featuredWebinars = [
  {
    id: 1,
    title: "Advanced Chart Patterns",
    date: "June 15, 2025",
    time: "2:00 PM IST",
    spots: 45,
    image: "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    title: "Fundamental Analysis Masterclass",
    date: "June 22, 2025",
    time: "3:00 PM IST",
    spots: 30,
    image: "https://images.unsplash.com/photo-1568992688065-536aad8a12f6?auto=format&fit=crop&q=80"
  }
];

const MotionCard = motion(Card);

const TradingResources = () => {
  const [activeResource, setActiveResource] = useState(1);
  const [isHovering, setIsHovering] = useState(false);

  return (
    <section id="trading" className="py-24 px-4 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-blue-400/10 blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 rounded-full bg-purple-400/10 blur-xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-secondary/5 blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Badge className="mb-4 bg-secondary/20 text-secondary hover:bg-secondary/30 border-none">
            <Sparkles size={14} className="mr-1" /> Premium Resources
          </Badge>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Trading Resources to <span className="gradient-text">Accelerate Your Success</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Get access to premium trading resources designed to help you make informed trading decisions and improve your overall performance.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="https://knowledgewaveindia.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary text-white rounded-full hover:bg-primary/90 transition-all shadow-md hover:shadow-lg"
            >
              Visit Knowledge Wave <ArrowUpRight size={16} />
            </a>
            
            <a 
              href="https://knowledgewaveindia.com/package/creator-wave" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-primary border border-primary/20 rounded-full hover:bg-primary/5 transition-all shadow-sm hover:shadow-md"
            >
              Creator Wave Package <ExternalLink size={16} />
            </a>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left side - Interactive Resources */}
          <div className="lg:col-span-5">
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6">Explore Our Resources</h3>
              
              {resourceData.map((resource) => (
                <MotionCard
                  key={resource.id}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className={`cursor-pointer border-l-4 ${resource.id === activeResource ? "border-l-primary shadow-md" : "border-l-transparent"}`}
                  onClick={() => setActiveResource(resource.id)}
                >
                  <CardContent className="p-6">
                    <div className="flex gap-4 items-start">
                      <div className={`${resource.color} p-3 rounded-xl flex items-center justify-center`}>
                        {resource.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-medium mb-1 flex items-center">
                          {resource.title}
                          {resource.id === activeResource && <CheckCircle size={16} className="ml-2 text-primary" />}
                        </h4>
                        <p className="text-gray-600 text-sm">{resource.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </MotionCard>
              ))}
            </motion.div>
            
            <motion.div 
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Button 
                className="primary-button w-full flex items-center justify-center group text-base py-6"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                Explore All Resources 
                <ArrowRight 
                  size={18} 
                  className={`ml-2 transition-transform duration-300 ${isHovering ? 'translate-x-1' : ''}`} 
                />
              </Button>
            </motion.div>
          </div>
          
          {/* Right side - Feature Cards */}
          <div className="lg:col-span-7">
            <motion.div 
              className="grid grid-cols-1 gap-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {/* Pro Trading Masterclass Card */}
              <MotionCard 
                className="feature-card overflow-hidden bg-gradient-to-br from-primary via-blue-700 to-blue-900 text-white"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <CardContent className="p-8 relative">
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                  <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
                  
                  <div className="relative z-10">
                    <Badge className="bg-white/20 text-white hover:bg-white/30 border-none mb-4">Featured Program</Badge>
                    <h3 className="text-3xl font-bold mb-4">Pro Trading Masterclass</h3>
                    <p className="text-white/90 mb-6 max-w-xl">
                      An intensive 8-week program guided by professional traders with real market experience. Learn advanced strategies, risk management, and psychological aspects of trading.
                    </p>
                    
                    <div className="flex flex-wrap gap-4 mb-6">
                      <div className="bg-white/10 rounded-full px-4 py-1.5 text-sm flex items-center">
                        <Clock size={14} className="mr-1.5" /> 8 weeks
                      </div>
                      <div className="bg-white/10 rounded-full px-4 py-1.5 text-sm flex items-center">
                        <CheckCircle size={14} className="mr-1.5" /> Certificate
                      </div>
                      <div className="bg-white/10 rounded-full px-4 py-1.5 text-sm flex items-center">
                        <Briefcase size={14} className="mr-1.5" /> 16 Live Sessions
                      </div>
                    </div>
                    
                    <Button className="bg-white text-primary hover:bg-white/90 shadow-lg">
                      Enroll Now
                    </Button>
                  </div>
                </CardContent>
              </MotionCard>
              
              {/* Upcoming Webinars */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold">Upcoming Webinars</h3>
                  <Button variant="ghost" className="text-primary flex items-center">
                    View All <ArrowRight size={14} className="ml-1" />
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {featuredWebinars.map((webinar) => (
                    <MotionCard 
                      key={webinar.id}
                      className="overflow-hidden"
                      whileHover={{ scale: 1.03 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <div 
                        className="h-32 bg-cover bg-center" 
                        style={{ backgroundImage: `url(${webinar.image})` }}
                      />
                      <CardContent className="p-4">
                        <h4 className="font-medium mb-2">{webinar.title}</h4>
                        <div className="flex items-center text-sm text-gray-600 mb-3">
                          <Clock size={14} className="mr-1" />
                          {webinar.date} • {webinar.time}
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs bg-red-50 text-red-700 px-2 py-0.5 rounded">
                            {webinar.spots} spots left
                          </span>
                          <Button variant="outline" size="sm" className="text-xs h-8">
                            Register
                          </Button>
                        </div>
                      </CardContent>
                    </MotionCard>
                  ))}
                </div>
              </div>
              
              {/* Premium Analysis Card */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <MotionCard 
                  className="feature-card border-none bg-gradient-to-br from-secondary/30 to-secondary/10"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <CardContent className="p-6">
                    <div className="mb-4 h-12 w-12 rounded-xl bg-secondary/30 flex items-center justify-center">
                      <LineChart className="h-6 w-6 text-secondary" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">Premium Analysis</h3>
                    <p className="text-gray-600 mb-4 text-sm">Daily market insights and signals from our team of professional traders</p>
                    <div className="py-2 px-3 bg-white rounded-lg flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors">
                      <span className="text-sm font-medium">View Sample</span>
                      <ChevronRight size={16} />
                    </div>
                  </CardContent>
                </MotionCard>
                
                <MotionCard 
                  className="feature-card border border-primary/10 shadow-lg bg-white"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-3">Trading Signals</h3>
                    <p className="text-gray-600 mb-4 text-sm">Get alerts on potential market opportunities delivered directly to you</p>
                    <Button className="w-full bg-primary hover:bg-primary/90">Subscribe</Button>
                  </CardContent>
                </MotionCard>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradingResources;

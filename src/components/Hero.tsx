
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Build Your <span className="gradient-text">Financial Future</span> With Expert Knowledge
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-lg">
              Premium courses and trading resources designed to help you master the markets and achieve financial freedom.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="primary-button flex items-center">
                Explore Courses <ArrowRight size={18} className="ml-2" />
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
                Trading Resources
              </Button>
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className={`w-8 h-8 rounded-full bg-gray-${i*100} border-2 border-white`}></div>
                ))}
              </div>
              <p>Join <span className="font-medium">1,000+</span> students already learning</p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-secondary/20 rounded-full filter blur-3xl"></div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-primary/20 rounded-full filter blur-2xl"></div>
            <div className="relative z-10 bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
              <div className="bg-primary/10 p-4 border-b border-gray-200">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <h3 className="font-medium text-gray-800">Most Popular Courses</h3>
                  {["Trading Fundamentals", "Market Analysis Masterclass", "Wealth Building Strategies"].map((course, i) => (
                    <div key={i} className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <div className="w-10 h-10 flex items-center justify-center bg-primary/10 rounded-lg text-primary font-bold mr-3">
                        {i + 1}
                      </div>
                      <span>{course}</span>
                    </div>
                  ))}
                  <Button className="w-full cta-button">View All Courses</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

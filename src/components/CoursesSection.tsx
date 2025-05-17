
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, BarChart, BookOpen } from "lucide-react";

const coursesData = [
  {
    id: 1,
    title: "Stock Trading Fundamentals",
    description: "Master the basics of stock trading with real-world examples and practical techniques.",
    price: "₹5,999",
    originalPrice: "₹9,999",
    rating: 4.8,
    students: 1250,
    duration: "12 hours",
    level: "Beginner",
    badge: "Bestseller"
  },
  {
    id: 2,
    title: "Advanced Technical Analysis",
    description: "Learn to analyze charts like a professional with advanced patterns and indicators.",
    price: "₹7,999",
    originalPrice: "₹11,999",
    rating: 4.9,
    students: 843,
    duration: "15 hours",
    level: "Advanced",
    badge: "New"
  },
  {
    id: 3,
    title: "Options Trading Masterclass",
    description: "Comprehensive guide to options trading strategies for consistent profits.",
    price: "₹9,999",
    originalPrice: "₹14,999",
    rating: 4.7,
    students: 678,
    duration: "18 hours",
    level: "Intermediate",
    badge: "Popular"
  }
];

const CoursesSection = () => {
  return (
    <section id="courses" className="section-container bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="section-title">Premium Courses</h2>
        <p className="section-subtitle">
          Designed by expert traders and financial educators with years of market experience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {coursesData.map((course) => (
          <Card key={course.id} className="feature-card overflow-hidden hover:scale-[1.02] transition-transform duration-300">
            <div className="relative h-48 bg-gradient-to-r from-primary/80 to-primary bg-opacity-80">
              <div className="absolute inset-0 flex items-center justify-center">
                <BookOpen size={64} className="text-white/60" />
              </div>
              {course.badge && (
                <Badge className="absolute top-2 right-2 bg-secondary text-black font-medium">
                  {course.badge}
                </Badge>
              )}
            </div>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <Star className="w-4 h-4 fill-yellow-400 stroke-yellow-400" />
                  <span className="ml-1 text-sm font-medium">{course.rating}</span>
                  <span className="ml-1 text-xs text-gray-500">({course.students} students)</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-1" />
                  {course.duration}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">{course.title}</h3>
              <p className="text-gray-600 mb-4 text-sm">{course.description}</p>
              <div className="flex items-center mb-4">
                <Badge variant="outline" className="mr-2 bg-primary/5 text-primary border-primary/20">
                  <BarChart className="w-3 h-3 mr-1" />
                  {course.level}
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xl font-bold text-primary">{course.price}</span>
                  <span className="text-sm text-gray-500 line-through ml-2">{course.originalPrice}</span>
                </div>
                <Button className="primary-button">Enroll Now</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <Button size="lg" className="cta-button">
          View All Courses
        </Button>
      </div>
    </section>
  );
};

export default CoursesSection;

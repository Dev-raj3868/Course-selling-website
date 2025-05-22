
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, BarChart, BookOpen, Filter, ChevronDown, Users } from "lucide-react";
import { coursesData } from "@/data/coursesData";
import { EnrollmentModal } from "./EnrollmentModal";

const CoursesSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [showModal, setShowModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(coursesData[0]);
  
  const categories = ["All", ...Array.from(new Set(coursesData.map(course => course.category)))];
  const filteredCourses = selectedCategory === "All" 
    ? coursesData 
    : coursesData.filter(course => course.category === selectedCategory);

  const handleEnrollClick = (course) => {
    setSelectedCourse(course);
    setShowModal(true);
  };
  
  return (
    <section id="courses" className="section-container bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="section-title">Premium Courses</h2>
        <p className="section-subtitle">
          Designed by expert traders and financial educators with years of market experience.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap justify-center mb-8 gap-2">
        <div className="flex items-center bg-white rounded-lg shadow-sm border p-2 mb-4">
          <Filter className="w-4 h-4 text-gray-500 mr-2" />
          <span className="text-sm font-medium mr-3">Filter by:</span>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="text-xs"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCourses.map((course) => (
          <Card key={course.id} className="feature-card overflow-hidden hover-lift transition-all duration-300">
            <div className="relative h-48 bg-gradient-to-r from-primary/80 to-primary bg-opacity-80">
              <img 
                src={course.coverImage} 
                alt={course.title} 
                className="w-full h-full object-cover mix-blend-overlay"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <BookOpen size={64} className="text-white/80" />
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
              <h3 className="text-xl font-bold mb-2 text-gray-800 line-clamp-2">{course.title}</h3>
              <p className="text-gray-600 mb-4 text-sm line-clamp-2">{course.description}</p>
              <div className="flex items-center mb-2 text-sm">
                <Users className="w-4 h-4 mr-1 text-gray-500" />
                <span className="text-gray-700">Instructor: <span className="font-medium">{course.instructor}</span></span>
              </div>
              <div className="flex items-center mb-4">
                <Badge variant="outline" className="mr-2 bg-primary/5 text-primary border-primary/20">
                  <BarChart className="w-3 h-3 mr-1" />
                  {course.level}
                </Badge>
                <Badge variant="outline" className="bg-secondary/5 text-secondary border-secondary/20">
                  {course.language}
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xl font-bold text-primary">{course.price}</span>
                  <span className="text-sm text-gray-500 line-through ml-2">{course.originalPrice}</span>
                </div>
                <Button 
                  className="primary-button"
                  onClick={() => handleEnrollClick(course)}
                >
                  Enroll Now
                </Button>
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

      {showModal && (
        <EnrollmentModal 
          course={selectedCourse} 
          isOpen={showModal} 
          onClose={() => setShowModal(false)} 
        />
      )}
    </section>
  );
};

export default CoursesSection;

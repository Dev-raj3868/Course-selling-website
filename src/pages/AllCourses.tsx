
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, BarChart, BookOpen, Search, Filter, SlidersHorizontal } from "lucide-react";
import { coursesData } from "@/data/coursesData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AllCourses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedLevel, setSelectedLevel] = useState<string>("All");
  const [selectedSort, setSelectedSort] = useState<string>("popular");
  
  const categories = ["All", ...Array.from(new Set(coursesData.map(course => course.category)))];
  const levels = ["All", "Beginner", "Intermediate", "Advanced"];
  
  // Filter courses based on search term, category and level
  const filteredCourses = coursesData.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;
    const matchesLevel = selectedLevel === "All" || course.level === selectedLevel;
    
    return matchesSearch && matchesCategory && matchesLevel;
  });
  
  // Sort courses based on selected sort option
  const sortedCourses = [...filteredCourses].sort((a, b) => {
    switch (selectedSort) {
      case "price-low":
        return parseInt(a.price.replace(/[^0-9]/g, "")) - parseInt(b.price.replace(/[^0-9]/g, ""));
      case "price-high":
        return parseInt(b.price.replace(/[^0-9]/g, "")) - parseInt(a.price.replace(/[^0-9]/g, ""));
      case "rating":
        return b.rating - a.rating;
      case "newest":
        return b.id - a.id;
      default: // popular
        return b.students - a.students;
    }
  });
  
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="bg-primary/5 py-12">
        <div className="container max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Browse All Courses</h1>
          <p className="text-lg text-gray-700 mb-8">Discover our premium trading courses and start your journey</p>
          
          {/* Search and filters */}
          <div className="bg-white rounded-lg shadow-sm p-4 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input 
                    placeholder="Search for courses..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              
              <div>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>{category}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                  <SelectTrigger>
                    <SelectValue placeholder="Level" />
                  </SelectTrigger>
                  <SelectContent>
                    {levels.map((level) => (
                      <SelectItem key={level} value={level}>{level}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="flex items-center justify-between mt-4 pt-4 border-t">
              <div className="flex items-center">
                <Filter className="h-4 w-4 text-gray-500 mr-2" />
                <span className="text-sm text-gray-500">{sortedCourses.length} courses found</span>
              </div>
              
              <div className="flex items-center">
                <SlidersHorizontal className="h-4 w-4 text-gray-500 mr-2" />
                <span className="text-sm mr-2">Sort by:</span>
                <Select value={selectedSort} onValueChange={setSelectedSort}>
                  <SelectTrigger className="w-[160px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">Most Popular</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          
          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sortedCourses.map((course) => (
              <Link key={course.id} to={`/course/${course.id}`}>
                <Card className="feature-card overflow-hidden hover-lift transition-all duration-300 h-full">
                  <div className="relative h-48 bg-gradient-to-r from-primary/80 to-primary bg-opacity-80">
                    <img 
                      src={course.coverImage} 
                      alt={course.title} 
                      className="w-full h-full object-cover mix-blend-overlay"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <BookOpen size={48} className="text-white/80" />
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
                    <div className="flex items-center mb-4">
                      <Badge variant="outline" className="mr-2 bg-primary/5 text-primary border-primary/20">
                        <BarChart className="w-3 h-3 mr-1" />
                        {course.level}
                      </Badge>
                      <Badge variant="outline" className="bg-secondary/5 text-secondary border-secondary/20">
                        {course.category}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xl font-bold text-primary">{course.price}</span>
                        <span className="text-sm text-gray-500 line-through ml-2">{course.originalPrice}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          
          {sortedCourses.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2">No courses found</h3>
              <p className="text-gray-500 mb-6">Try adjusting your search or filters</p>
              <Button onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
                setSelectedLevel("All");
              }}>
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AllCourses;

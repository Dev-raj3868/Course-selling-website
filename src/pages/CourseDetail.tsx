
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, PlayCircle, Clock, Users, BarChart, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { EnrollmentModal } from "@/components/EnrollmentModal";
import { Course, coursesData } from "@/data/coursesData";
import { useToast } from "@/components/ui/use-toast";

const CourseDetail = () => {
  const { id } = useParams();
  const [course, setCourse] = useState<Course | null>(null);
  const [showModal, setShowModal] = useState(false);
  const { toast } = useToast();
  
  useEffect(() => {
    // In a real app, you would fetch this data from an API
    const foundCourse = coursesData.find(c => c.id === Number(id));
    if (foundCourse) {
      setCourse(foundCourse);
    } else {
      // Course not found
      toast({
        title: "Course not found",
        description: "The requested course could not be found",
        variant: "destructive"
      });
    }
  }, [id, toast]);
  
  if (!course) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Course not found</h1>
          <p className="mb-8">The course you're looking for doesn't exist or has been removed.</p>
          <Link to="/courses">
            <Button>Browse All Courses</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="bg-gradient-to-b from-primary/5 to-white py-8">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{course.title}</h1>
                <p className="text-lg text-gray-700 mb-6">{course.description}</p>
                
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center">
                    <BarChart className="h-5 w-5 text-primary mr-1" />
                    <span>{course.level}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-primary mr-1" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-primary mr-1" />
                    <span>{course.students} students</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="h-5 w-5 text-primary mr-1" />
                    <span>Certificate Included</span>
                  </div>
                </div>
                
                <div className="flex items-center mb-6">
                  <div className="flex -space-x-2 mr-3">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-xs font-bold text-white">
                        {String.fromCharCode(64 + i)}
                      </div>
                    ))}
                  </div>
                  <div className="text-sm text-gray-600">
                    Created by <span className="font-semibold">{course.instructor}</span>
                  </div>
                </div>
              </div>
              
              <Tabs defaultValue="curriculum">
                <TabsList className="grid grid-cols-4 mb-8">
                  <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="instructor">Instructor</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                </TabsList>
                
                <TabsContent value="curriculum" className="space-y-6">
                  <div className="bg-white rounded-lg shadow-sm border p-6">
                    <h3 className="text-xl font-semibold mb-4">Course Content</h3>
                    <div className="space-y-4">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="border rounded-lg overflow-hidden">
                          <div className="flex justify-between items-center p-4 bg-gray-50">
                            <h4 className="font-medium">Module {i + 1}: {["Introduction", "Basic Concepts", "Advanced Strategies", "Real-world Applications", "Masterclass"][i]}</h4>
                            <span className="text-sm text-gray-500">{(i+1) * 2} lessons</span>
                          </div>
                          <div className="p-4 space-y-2">
                            {[...Array((i+1) * 2)].map((_, j) => (
                              <div key={j} className="flex items-start py-2">
                                <PlayCircle className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0 mt-0.5" />
                                <div>
                                  <p className="font-medium">Lesson {j + 1}</p>
                                  <p className="text-sm text-gray-500">25 minutes</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="overview">
                  <div className="space-y-8">
                    <div className="bg-white rounded-lg shadow-sm border p-6">
                      <h3 className="text-xl font-semibold mb-4">What You'll Learn</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {course.topics.map((topic, i) => (
                          <div key={i} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>{topic}</span>
                          </div>
                        ))}
                        {["Build a trading strategy from scratch", "Understand market psychology", "Track and analyze your performance", "Avoid common trading mistakes"].map((item, i) => (
                          <div key={i} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-sm border p-6">
                      <h3 className="text-xl font-semibold mb-4">Course Includes</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {course.features.map((feature, i) => (
                          <div key={i} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="instructor">
                  <div className="bg-white rounded-lg shadow-sm border p-6">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                      <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center text-4xl font-bold text-gray-400">
                        {course.instructor.charAt(0)}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{course.instructor}</h3>
                        <p className="text-gray-500 mb-2">Trading Expert & Financial Educator</p>
                        <div className="flex items-center gap-4 mb-4">
                          <div className="flex items-center">
                            <Award className="h-5 w-5 text-yellow-500 mr-1" />
                            <span>10+ Years Experience</span>
                          </div>
                          <div className="flex items-center">
                            <Users className="h-5 w-5 text-blue-500 mr-1" />
                            <span>5000+ Students</span>
                          </div>
                        </div>
                        <p className="text-gray-700">
                          An expert trader with over a decade of experience in financial markets. 
                          Specializing in {course.category}, they have helped thousands of students 
                          achieve consistent profitability through structured learning and practical strategies.
                        </p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="reviews">
                  <div className="bg-white rounded-lg shadow-sm border p-6 space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-semibold">Student Reviews</h3>
                        <div className="flex items-center mt-1">
                          <div className="text-3xl font-bold mr-2">{course.rating}</div>
                          <div>
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <svg
                                  key={i}
                                  className={`w-5 h-5 ${i < Math.floor(course.rating) ? "text-yellow-400" : "text-gray-300"}`}
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              ))}
                            </div>
                            <p className="text-sm text-gray-500 mt-1">Based on {course.students} reviews</p>
                          </div>
                        </div>
                      </div>
                      
                      <Button>Write a Review</Button>
                    </div>
                    
                    <div className="space-y-6">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="border-b pb-6 last:border-0">
                          <div className="flex justify-between mb-2">
                            <div className="flex items-center">
                              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-500 mr-3">
                                {String.fromCharCode(65 + i)}
                              </div>
                              <div>
                                <p className="font-medium">Student {i + 1}</p>
                                <p className="text-xs text-gray-500">2 weeks ago</p>
                              </div>
                            </div>
                            <div className="flex">
                              {[...Array(5)].map((_, j) => (
                                <svg
                                  key={j}
                                  className={`w-4 h-4 ${j < 5 - i ? "text-yellow-400" : "text-gray-300"}`}
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              ))}
                            </div>
                          </div>
                          <p className="text-gray-700">
                            {[
                              "This course exceeded my expectations. The content is well-structured and the instructor explains complex concepts in a way that's easy to understand.",
                              "Fantastic course with practical examples. I've been able to apply what I learned immediately.",
                              "Good introduction to the subject, though I wished for more advanced content in the later modules."
                            ][i]}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md border p-6 sticky top-24">
                <div className="aspect-video bg-gray-100 mb-6 rounded-lg overflow-hidden">
                  <img 
                    src={course.coverImage} 
                    alt={course.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/80 flex items-center justify-center cursor-pointer hover:bg-white transition-colors">
                      <PlayCircle className="w-10 h-10 text-primary" />
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-3xl font-bold text-primary">{course.price}</span>
                    <span className="text-gray-500 line-through">{course.originalPrice}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mb-6">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>Limited time offer</span>
                  </div>
                  
                  <Button className="w-full mb-3 bg-secondary hover:bg-secondary/90 text-black" onClick={() => setShowModal(true)}>
                    Enroll Now
                  </Button>
                  
                  <Button variant="outline" className="w-full">
                    Add to Wishlist
                  </Button>
                </div>
                
                <div className="space-y-3 text-sm">
                  <p className="font-medium">This course includes:</p>
                  {[
                    { icon: PlayCircle, text: `${course.duration} of on-demand video` },
                    { icon: Award, text: "Certificate of completion" },
                    { icon: Users, text: "Access to community" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center">
                      <item.icon className="h-4 w-4 text-primary mr-2" />
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {showModal && (
        <EnrollmentModal 
          course={course} 
          isOpen={showModal} 
          onClose={() => setShowModal(false)} 
        />
      )}
      
      <Footer />
    </div>
  );
};

export default CourseDetail;

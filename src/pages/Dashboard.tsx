
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, BookOpen, Users, Activity, LogOut } from "lucide-react";
import { toast } from "sonner";
import MarketAnalysis from "@/components/MarketAnalysis";
import TradingPrediction from "@/components/TradingPrediction";

const Dashboard = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("User");
  const [activeTab, setActiveTab] = useState("overview");
  
  useEffect(() => {
    // In a real app, you would check for user authentication here
    // For now, we'll use a simulated user or redirect if no user is found
    const storedUser = localStorage.getItem("user");
    
    if (storedUser) {
      try {
        const userData = JSON.parse(storedUser);
        setUserName(userData.name || "User");
      } catch (error) {
        console.error("Error parsing user data", error);
      }
    } else {
      // If no user found in storage, redirect to login
      navigate("/login");
    }
  }, [navigate]);
  
  const handleLogout = () => {
    // Clear user data from storage
    localStorage.removeItem("user");
    toast.success("Logged out successfully");
    navigate("/");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary">Dome</span>
              <span className="text-2xl font-bold text-secondary">of</span>
              <span className="text-2xl font-bold text-primary">Money</span>
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-700">Welcome, {userName}</span>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                variant="outline" 
                className="flex items-center gap-2 text-red-600 hover:text-red-700 hover:bg-red-50 border-red-200"
                onClick={handleLogout}
              >
                <LogOut className="h-4 w-4" /> Logout
              </Button>
            </motion.div>
          </div>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
          </motion.div>
          
          <div className="mb-6">
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8" aria-label="Tabs">
                {[
                  { id: "overview", label: "Overview" },
                  { id: "ai-tools", label: "AI Tools" },
                  { id: "courses", label: "My Courses" },
                  { id: "analytics", label: "Analytics" }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-3 px-1 border-b-2 font-medium text-sm ${
                      activeTab === tab.id
                        ? "border-primary text-primary"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>
          
          {activeTab === "overview" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {[
                  { title: "Courses Enrolled", icon: <BookOpen className="h-8 w-8 text-blue-500" />, value: "3", color: "blue" },
                  { title: "Learning Hours", icon: <Activity className="h-8 w-8 text-green-500" />, value: "24", color: "green" },
                  { title: "Trading Sessions", icon: <BarChart3 className="h-8 w-8 text-purple-500" />, value: "12", color: "purple" },
                  { title: "Community Members", icon: <Users className="h-8 w-8 text-amber-500" />, value: "1,024", color: "amber" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <Card className={`border-l-4 border-${stat.color}-500 hover:shadow-md transition-shadow`}>
                      <CardHeader className="pb-2">
                        <CardDescription>{stat.title}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex justify-between items-center">
                        <span className="text-2xl font-bold">{stat.value}</span>
                        {stat.icon}
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <motion.div variants={itemVariants} className="lg:col-span-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Your Learning Progress</CardTitle>
                      <CardDescription>Course completion over time</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[300px] flex items-center justify-center bg-gray-50 rounded-md">
                        <p className="text-gray-500">Chart Placeholder</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Recommended Courses</CardTitle>
                      <CardDescription>Based on your interests</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {["Advanced Trading Strategies", "Risk Management", "Market Psychology"].map((course, i) => (
                        <motion.div 
                          key={i}
                          whileHover={{ x: 5 }}
                          className="flex items-center p-3 bg-gray-50 rounded-lg cursor-pointer"
                        >
                          <div className="w-10 h-10 flex items-center justify-center bg-primary/10 rounded-lg text-primary font-bold mr-3">
                            {i + 1}
                          </div>
                          <span>{course}</span>
                        </motion.div>
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </motion.div>
          )}
          
          {activeTab === "ai-tools" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <MarketAnalysis />
              <TradingPrediction />
            </motion.div>
          )}
          
          {activeTab === "courses" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-6 rounded-lg shadow"
            >
              <h2 className="text-xl font-semibold mb-4">My Enrolled Courses</h2>
              <div className="space-y-6">
                {[
                  { title: "Trading Fundamentals", progress: 100, instructor: "John Smith", lastAccessed: "2 days ago" },
                  { title: "Technical Analysis Mastery", progress: 65, instructor: "Sarah Johnson", lastAccessed: "Yesterday" },
                  { title: "Risk Management Strategies", progress: 30, instructor: "Michael Brown", lastAccessed: "Today" }
                ].map((course, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ scale: 1.01 }}
                    className="border rounded-lg p-4"
                  >
                    <div className="flex justify-between mb-2">
                      <h3 className="font-medium">{course.title}</h3>
                      <span className="text-sm text-gray-500">Last accessed: {course.lastAccessed}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600 mb-3">
                      <span>Instructor: {course.instructor}</span>
                    </div>
                    <div className="mb-1 flex justify-between">
                      <span className="text-sm">Progress</span>
                      <span className="text-sm font-medium">{course.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-primary h-2.5 rounded-full" 
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                    <div className="mt-4">
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="text-primary border-primary/30 hover:border-primary"
                      >
                        {course.progress === 100 ? "Review Course" : "Continue Learning"}
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
          
          {activeTab === "analytics" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-6 rounded-lg shadow"
            >
              <h2 className="text-xl font-semibold mb-4">Trading Performance Analytics</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium mb-4">Monthly Performance</h3>
                  <div className="h-[250px] flex items-center justify-center bg-gray-50">
                    <p className="text-gray-500">Performance Chart Placeholder</p>
                  </div>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium mb-4">Trading Statistics</h3>
                  <div className="space-y-4">
                    {[
                      { label: "Win Rate", value: "62%", color: "green" },
                      { label: "Average Profit", value: "$245.50", color: "green" },
                      { label: "Average Loss", value: "$120.30", color: "red" },
                      { label: "Profit Factor", value: "1.85", color: "blue" },
                      { label: "Total Trades", value: "87", color: "gray" }
                    ].map((stat, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-gray-600">{stat.label}</span>
                        <span className={`font-medium text-${stat.color}-500`}>{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </main>
    </div>
  );
};

export default Dashboard;

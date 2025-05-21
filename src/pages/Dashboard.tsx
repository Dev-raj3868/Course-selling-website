
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, BookOpen, Users, Activity, LogOut } from "lucide-react";
import { toast } from "sonner";

const Dashboard = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("User");
  
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
  
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
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
            <Button 
              variant="outline" 
              className="flex items-center gap-2 text-red-600 hover:text-red-700 hover:bg-red-50 border-red-200"
              onClick={handleLogout}
            >
              <LogOut className="h-4 w-4" /> Logout
            </Button>
          </div>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { title: "Courses Enrolled", icon: <BookOpen className="h-8 w-8 text-blue-500" />, value: "3", color: "blue" },
              { title: "Learning Hours", icon: <Activity className="h-8 w-8 text-green-500" />, value: "24", color: "green" },
              { title: "Trading Sessions", icon: <BarChart3 className="h-8 w-8 text-purple-500" />, value: "12", color: "purple" },
              { title: "Community Members", icon: <Users className="h-8 w-8 text-amber-500" />, value: "1,024", color: "amber" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card className={`border-l-4 border-l-${stat.color}-500 hover:shadow-md transition-shadow`}>
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
            <Card className="lg:col-span-2">
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
            
            <Card>
              <CardHeader>
                <CardTitle>Recommended Courses</CardTitle>
                <CardDescription>Based on your interests</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {["Advanced Trading Strategies", "Risk Management", "Market Psychology"].map((course, i) => (
                  <div key={i} className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 flex items-center justify-center bg-primary/10 rounded-lg text-primary font-bold mr-3">
                      {i + 1}
                    </div>
                    <span>{course}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Dashboard;

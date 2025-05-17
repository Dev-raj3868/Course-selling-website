
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CoursesSection from "@/components/CoursesSection";
import TradingResources from "@/components/TradingResources";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        
        {/* Features Section */}
        <section className="section-container text-center">
          <div className="mb-8">
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20 mb-4">Why Choose Us</Badge>
            <h2 className="section-title">Why Trade with Dome of Money</h2>
            <p className="section-subtitle">
              Learn from experienced traders who have navigated bull and bear markets successfully.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature-card">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Instructors</h3>
              <p className="text-gray-600">
                Learn from traders with 10+ years of experience in financial markets.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Practical Approach</h3>
              <p className="text-gray-600">
                Real-world examples and case studies, not just theoretical concepts.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Community Support</h3>
              <p className="text-gray-600">
                Join our community of traders for continuous learning and support.
              </p>
            </div>
          </div>
        </section>
        
        <CoursesSection />
        <TradingResources />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

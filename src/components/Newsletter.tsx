
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MailOpen, Check } from "lucide-react";
import { toast } from "@/components/ui/sonner";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast.error("Please enter a valid email address");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("Thanks for subscribing to our newsletter!", {
        description: "You'll receive market insights and updates soon.",
        icon: <Check className="h-4 w-4" />,
      });
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex items-center justify-center md:justify-start mb-6">
                <div className="p-3 bg-white/10 rounded-full">
                  <MailOpen className="h-6 w-6 text-white" />
                </div>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Stay Updated with Market Insights
              </h2>
              <p className="text-white/80 mb-6">
                Subscribe to our newsletter and get weekly trading tips, market analysis, and exclusive offers directly to your inbox.
              </p>
            </div>
            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <Input 
                    type="email" 
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-5 py-6 bg-white/10 border-white/20 text-white placeholder-white/60 rounded-lg focus:ring-secondary focus:border-secondary"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-secondary hover:bg-secondary/90 text-black py-6 rounded-lg font-medium"
                >
                  {isSubmitting ? "Subscribing..." : "Subscribe Now"}
                </Button>
                <p className="text-xs text-white/60 text-center">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

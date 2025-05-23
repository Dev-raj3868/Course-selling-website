
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Course } from "@/data/coursesData";
import { useToast } from "@/components/ui/use-toast";
import { CreditCard, Mail, ShieldCheck } from "lucide-react";
import { Captcha } from "./Captcha";
import { loadRazorpay } from "@/utils/payments";
import { addCourseEnrollment } from "@/utils/courseEnrollments";

interface EnrollmentModalProps {
  course: Course;
  isOpen: boolean;
  onClose: () => void;
}

export function EnrollmentModal({ course, isOpen, onClose }: EnrollmentModalProps) {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [step, setStep] = useState(1); // 1: Email, 2: OTP, 3: Payment

  const handleSendOtp = () => {
    if (!email) {
      toast({
        title: "Email Required",
        description: "Please enter your email address",
        variant: "destructive"
      });
      return;
    }

    if (!isCaptchaVerified) {
      toast({
        title: "Captcha Required",
        description: "Please verify the captcha first",
        variant: "destructive"
      });
      return;
    }

    setIsProcessing(true);
    
    // Simulate sending OTP
    setTimeout(() => {
      setIsProcessing(false);
      setIsEmailSent(true);
      setStep(2);
      toast({
        title: "OTP Sent",
        description: "A verification code has been sent to your email",
      });
    }, 1500);
  };

  const handleVerifyOtp = () => {
    if (!otp || otp.length !== 6) {
      toast({
        title: "Invalid OTP",
        description: "Please enter the 6-digit OTP sent to your email",
        variant: "destructive"
      });
      return;
    }

    setIsProcessing(true);
    
    // Simulate OTP verification
    setTimeout(() => {
      setIsProcessing(false);
      setIsOtpVerified(true);
      setStep(3);
      toast({
        title: "OTP Verified",
        description: "Your email has been verified successfully",
      });
    }, 1500);
  };

  const handlePayment = async () => {
    setIsProcessing(true);
    
    try {
      // Remove currency symbol and commas from price
      const amount = parseInt(course.price.replace(/[^0-9]/g, ""));
      
      const options = {
        key: "rzp_test_YourRazorpayKeyHere", // Replace with your actual test key
        amount: amount * 100, // Amount in paise
        currency: "INR",
        name: "Dome of Money",
        description: `Enrollment for ${course.title}`,
        image: "https://your-logo-url.png", // Replace with your logo URL
        handler: function(response) {
          toast({
            title: "Payment Successful",
            description: `Payment ID: ${response.razorpay_payment_id}`,
          });
          
          // Add course to enrollments after successful payment
          addCourseEnrollment(course.id, course.title, course.instructor);
          
          // In a real application, you would verify this payment on your server
          setTimeout(() => {
            toast({
              title: "Enrollment Complete",
              description: "You have successfully enrolled in the course!",
            });
            onClose();
          }, 1000);
        },
        prefill: {
          email: email,
        },
        theme: {
          color: "#1e3a8a",
        },
        modal: {
          ondismiss: function() {
            setIsProcessing(false);
          }
        }
      };

      const razorpay = await loadRazorpay();
      const paymentObject = new razorpay(options);
      paymentObject.open();
      
    } catch (error) {
      console.error("Payment failed:", error);
      toast({
        title: "Payment Failed",
        description: "There was an error processing your payment. Please try again.",
        variant: "destructive"
      });
      setIsProcessing(false);
    }
  };

  const getStepContent = () => {
    switch (step) {
      case 1:
        return (
          <>
            <DialogDescription className="text-center mb-4">
              Enter your email to receive a verification code
            </DialogDescription>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    placeholder="your.email@example.com"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label>Verify Captcha</Label>
                <Captcha onVerify={() => setIsCaptchaVerified(true)} />
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms" className="text-sm">
                  I agree to the Terms & Conditions and Privacy Policy
                </Label>
              </div>
              
              <Button 
                className="w-full"
                onClick={handleSendOtp}
                disabled={isProcessing}
              >
                {isProcessing ? "Sending..." : "Send Verification Code"}
              </Button>
            </div>
          </>
        );
      
      case 2:
        return (
          <>
            <DialogDescription className="text-center mb-4">
              Enter the 6-digit code sent to {email}
            </DialogDescription>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="otp">Verification Code</Label>
                <div className="relative">
                  <ShieldCheck className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="otp"
                    placeholder="6-digit OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="pl-10"
                    maxLength={6}
                  />
                </div>
              </div>
              
              <div className="flex justify-between">
                <Button variant="ghost" size="sm" onClick={() => setStep(1)}>
                  Change Email
                </Button>
                <Button variant="link" size="sm" onClick={handleSendOtp}>
                  Resend Code
                </Button>
              </div>
              
              <Button 
                className="w-full"
                onClick={handleVerifyOtp}
                disabled={isProcessing}
              >
                {isProcessing ? "Verifying..." : "Verify Code"}
              </Button>
            </div>
          </>
        );
        
      case 3:
        return (
          <>
            <DialogDescription className="text-center mb-4">
              Complete your enrollment with secure payment
            </DialogDescription>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <h4 className="font-medium text-lg">{course.title}</h4>
              <div className="flex justify-between items-center mt-2">
                <span className="text-gray-600">Course Fee:</span>
                <span className="font-semibold">{course.price}</span>
              </div>
              <div className="flex justify-between items-center mt-1">
                <span className="text-gray-600">Discount:</span>
                <span className="text-green-600">
                  {(() => {
                    const original = parseInt(course.originalPrice.replace(/[^0-9]/g, ""));
                    const current = parseInt(course.price.replace(/[^0-9]/g, ""));
                    const discount = Math.round(((original - current) / original) * 100);
                    return `-${discount}%`;
                  })()}
                </span>
              </div>
              <div className="border-t border-gray-200 my-2"></div>
              <div className="flex justify-between items-center font-semibold">
                <span>Total:</span>
                <span className="text-primary">{course.price}</span>
              </div>
            </div>
            
            <Button 
              className="w-full flex items-center justify-center"
              onClick={handlePayment}
              disabled={isProcessing}
            >
              <CreditCard className="mr-2 h-4 w-4" />
              {isProcessing ? "Processing..." : `Pay ${course.price}`}
            </Button>
            
            <div className="mt-4 text-center text-sm text-gray-500">
              <div className="flex items-center justify-center gap-1">
                <ShieldCheck className="h-4 w-4" /> Secure payment powered by Razorpay
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center">
            {step === 1 && "Verify Your Email"}
            {step === 2 && "Enter Verification Code"}
            {step === 3 && "Complete Payment"}
          </DialogTitle>
        </DialogHeader>
        {getStepContent()}
      </DialogContent>
    </Dialog>
  );
}

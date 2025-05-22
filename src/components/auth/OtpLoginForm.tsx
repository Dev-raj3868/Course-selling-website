
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { toast } from "sonner";
import { Captcha } from "@/components/Captcha";

const otpFormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  otp: z.string().length(6, { message: "OTP must be 6 characters" }),
});

type OtpFormValues = z.infer<typeof otpFormSchema>;

interface OtpLoginFormProps {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  captchaVerified: boolean;
  onCaptchaVerify: () => void;
}

export function OtpLoginForm({ isLoading, setIsLoading, captchaVerified, onCaptchaVerify }: OtpLoginFormProps) {
  const navigate = useNavigate();
  const [otpSent, setOtpSent] = useState(false);
  
  const form = useForm<OtpFormValues>({
    resolver: zodResolver(otpFormSchema),
    defaultValues: {
      email: "",
      otp: "",
    },
  });

  function sendOtp(email: string) {
    if (!captchaVerified) {
      toast.error("Please verify you are human first");
      return;
    }

    setIsLoading(true);
    
    // This would be replaced by your actual OTP sending logic in a real application
    setTimeout(() => {
      setIsLoading(false);
      setOtpSent(true);
      toast.success("OTP sent to your email!");
    }, 1500);
  }

  function onSubmit(values: OtpFormValues) {
    if (!captchaVerified) {
      toast.error("Please verify you are human first");
      return;
    }
    
    setIsLoading(true);
    
    // This would be replaced by your actual OTP verification logic in a real application
    setTimeout(() => {
      setIsLoading(false);
      
      // For demo purposes, we'll store some simple user info in localStorage
      const demoUser = {
        email: values.email,
        name: values.email.split('@')[0], // Just for demo purposes
      };
      
      localStorage.setItem("user", JSON.stringify(demoUser));
      toast.success("OTP verification successful!");
      navigate("/dashboard");
    }, 1500);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="name@example.com" 
                    className="pl-10" 
                    {...field}
                    disabled={otpSent}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div className="space-y-2">
          <h3 className="font-medium text-sm">Please verify you are human</h3>
          <Captcha onVerify={onCaptchaVerify} />
        </div>
        
        {!otpSent ? (
          <Button 
            type="button" 
            className="w-full"
            disabled={isLoading || !form.getValues("email") || !captchaVerified}
            onClick={() => sendOtp(form.getValues("email"))}
          >
            {isLoading ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full"
              />
            ) : null}
            {isLoading ? "Sending OTP..." : "Send OTP"}
          </Button>
        ) : (
          <>
            <FormField
              control={form.control}
              name="otp"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>One-Time Password</FormLabel>
                  <FormControl>
                    <div className="flex justify-center">
                      <InputOTP maxLength={6} {...field}>
                        <InputOTPGroup>
                          <InputOTPSlot index={0} />
                          <InputOTPSlot index={1} />
                          <InputOTPSlot index={2} />
                          <InputOTPSlot index={3} />
                          <InputOTPSlot index={4} />
                          <InputOTPSlot index={5} />
                        </InputOTPGroup>
                      </InputOTP>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="flex items-center justify-between">
              <Button 
                type="button" 
                variant="link" 
                onClick={() => sendOtp(form.getValues("email"))}
                disabled={isLoading}
              >
                Resend OTP
              </Button>
              <Button 
                type="button"
                variant="ghost"
                onClick={() => setOtpSent(false)}
                disabled={isLoading}
              >
                Change Email
              </Button>
            </div>
            
            <Button 
              type="submit" 
              className="w-full"
              disabled={isLoading || !captchaVerified}
            >
              {isLoading ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full"
                />
              ) : null}
              {isLoading ? "Verifying..." : "Verify OTP"}
            </Button>
          </>
        )}
        
        {!captchaVerified && (
          <p className="text-amber-600 text-sm text-center">Please verify the captcha to continue</p>
        )}
      </form>
    </Form>
  );
}


import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { LogIn } from "lucide-react";
import { EmailLoginForm } from "@/components/auth/EmailLoginForm";
import { OtpLoginForm } from "@/components/auth/OtpLoginForm";
import { Captcha } from "@/components/Captcha";

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false);

  // Handler for captcha verification
  const handleCaptchaVerify = () => {
    setCaptchaVerified(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Card className="shadow-lg border-t-4 border-t-primary">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center flex justify-center items-center gap-2">
              <LogIn className="h-6 w-6 text-primary" />
              <span>Log in</span>
            </CardTitle>
            <CardDescription className="text-center">
              Enter your credentials to access your account
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-4 space-y-4">
            <div className="space-y-2">
              <h3 className="font-medium text-center">Please verify you are human</h3>
              <Captcha onVerify={handleCaptchaVerify} />
            </div>

            <Tabs defaultValue="email">
              <TabsList className="grid grid-cols-2 mb-4">
                <TabsTrigger value="email">Email & Password</TabsTrigger>
                <TabsTrigger value="otp">OTP</TabsTrigger>
              </TabsList>
              
              <TabsContent value="email" className="mt-0">
                <EmailLoginForm isLoading={isLoading} setIsLoading={setIsLoading} captchaVerified={captchaVerified} />
              </TabsContent>
              
              <TabsContent value="otp" className="mt-0">
                <OtpLoginForm isLoading={isLoading} setIsLoading={setIsLoading} captchaVerified={captchaVerified} />
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter>
            <div className="text-sm text-center w-full">
              Don't have an account?{" "}
              <Link to="/signup" className="text-primary font-medium hover:underline">
                Create one now
              </Link>
            </div>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
}

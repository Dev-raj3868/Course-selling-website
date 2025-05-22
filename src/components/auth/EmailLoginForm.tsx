
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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { motion } from "framer-motion";
import { Mail, Lock } from "lucide-react";
import { toast } from "sonner";

const emailFormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});

type EmailFormValues = z.infer<typeof emailFormSchema>;

interface EmailLoginFormProps {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}

export function EmailLoginForm({ isLoading, setIsLoading }: EmailLoginFormProps) {
  const navigate = useNavigate();
  
  const form = useForm<EmailFormValues>({
    resolver: zodResolver(emailFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: EmailFormValues) {
    setIsLoading(true);
    
    // This would be replaced by your actual login logic in a real application
    setTimeout(() => {
      setIsLoading(false);
      
      // For demo purposes, we'll store some simple user info in localStorage
      const demoUser = {
        email: values.email,
        name: values.email.split('@')[0], // Just for demo purposes
      };
      
      localStorage.setItem("user", JSON.stringify(demoUser));
      toast.success("Login successful!");
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
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input 
                    type="password" 
                    placeholder="••••••••" 
                    className="pl-10" 
                    {...field} 
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="remember" className="rounded border-gray-300" />
            <label htmlFor="remember" className="text-sm text-gray-600">Remember me</label>
          </div>
          <a href="#" className="text-sm text-primary hover:underline">
            Forgot password?
          </a>
        </div>
        <Button 
          type="submit" 
          className="w-full"
          disabled={isLoading}
        >
          {isLoading ? (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full"
            />
          ) : null}
          {isLoading ? "Logging in..." : "Log in"}
        </Button>
      </form>
    </Form>
  );
}

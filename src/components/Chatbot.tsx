
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUp, MessageSquare, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";

type Message = {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your trading assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Predefined responses to common trading questions
  const botResponses: Record<string, string[]> = {
    "hello": ["Hi there! How can I help you with trading today?", "Hello! What trading questions do you have?"],
    "help": ["I can help you with trading strategies, market analysis, and more. What specific help do you need?"],
    "strategy": ["There are several trading strategies like trend following, mean reversion, and breakout trading. Would you like to learn more about any of these?"],
    "market": ["The market is influenced by various factors including economic indicators, company performance, and global events. What specific market information are you looking for?"],
    "course": ["We offer various trading courses from beginner to advanced levels. Check out our courses section for more details!"],
    "analysis": ["Technical analysis involves chart patterns and indicators, while fundamental analysis focuses on economic factors and company financials."],
    "risk": ["Risk management is crucial in trading. Always use stop losses and never risk more than 1-2% of your capital on a single trade."],
    "beginner": ["If you're a beginner, I recommend starting with our 'Trading Basics' course and practicing with a demo account before using real money."],
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate AI processing
    setTimeout(() => {
      // Generate response based on keywords in the input
      let responseText = "I'm not sure how to help with that. Could you try asking about trading strategies, market analysis, courses, or risk management?";
      
      const inputLower = input.toLowerCase();
      
      // Check for keyword matches
      for (const [keyword, responses] of Object.entries(botResponses)) {
        if (inputLower.includes(keyword)) {
          // Select a random response from the available options for this keyword
          responseText = responses[Math.floor(Math.random() * responses.length)];
          break;
        }
      }

      const botMessage: Message = {
        id: messages.length + 2,
        text: responseText,
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="mb-2"
          >
            <Card className="w-80 md:w-96 shadow-lg border-primary/10">
              <CardHeader className="bg-primary/5 py-3 px-4 flex flex-row justify-between items-center">
                <CardTitle className="text-md flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  Trading Assistant
                </CardTitle>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-8 w-8" 
                  onClick={() => setIsOpen(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent className="p-4">
                <div className="h-72 overflow-y-auto">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`mb-3 ${
                        message.sender === "user" ? "text-right" : "text-left"
                      }`}
                    >
                      <div
                        className={`inline-block px-3 py-2 rounded-lg max-w-[80%] break-words ${
                          message.sender === "user"
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted"
                        }`}
                      >
                        {message.text}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {message.timestamp.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </div>
                    </div>
                  ))}
                  {isTyping && (
                    <div className="text-left mb-3">
                      <div className="inline-block px-3 py-2 rounded-lg bg-muted">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "0ms" }}></div>
                          <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "150ms" }}></div>
                          <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "300ms" }}></div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              </CardContent>
              <CardFooter className="p-3 border-t">
                <form onSubmit={handleSubmit} className="w-full flex gap-2">
                  <Input
                    placeholder="Type your question..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="flex-1"
                  />
                  <Button type="submit" size="icon" disabled={!input.trim()}>
                    <ArrowUp className="h-4 w-4" />
                  </Button>
                </form>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full w-12 h-12 shadow-lg"
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      </motion.div>
    </div>
  );
};

export default Chatbot;

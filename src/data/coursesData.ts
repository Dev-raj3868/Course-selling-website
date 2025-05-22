
export interface Course {
  id: number;
  title: string;
  description: string;
  price: string;
  originalPrice: string;
  rating: number;
  students: number;
  duration: string;
  level: string;
  badge?: string;
  category: string;
  instructor: string;
  coverImage: string;
  language: string;
  topics: string[];
  features: string[];
}

export const coursesData: Course[] = [
  {
    id: 1,
    title: "Complete Stock Market Analysis Masterclass",
    description: "Master the fundamentals of stock trading with real-world examples and practical techniques from industry experts.",
    price: "₹5,999",
    originalPrice: "₹9,999",
    rating: 4.8,
    students: 1250,
    duration: "12 hours",
    level: "Beginner",
    badge: "Bestseller",
    category: "Stock Trading",
    instructor: "Raj Sharma",
    coverImage: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1000",
    language: "English, Hindi",
    topics: ["Technical Analysis", "Candlestick Patterns", "Risk Management", "Market Psychology"],
    features: ["Lifetime Access", "Certificate of Completion", "Mobile Learning App", "Live Doubt Sessions"]
  },
  {
    id: 2,
    title: "Advanced Technical Analysis & Chart Patterns",
    description: "Learn to analyze charts like a professional with advanced patterns and indicators that predict market movements.",
    price: "₹7,999",
    originalPrice: "₹11,999",
    rating: 4.9,
    students: 843,
    duration: "15 hours",
    level: "Advanced",
    badge: "New",
    category: "Technical Analysis",
    instructor: "Priya Desai",
    coverImage: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1000",
    language: "English",
    topics: ["Advanced Indicators", "Fibonacci Retracement", "Volume Analysis", "Algorithm Trading Basics"],
    features: ["Trading Templates", "Premium Discord Community", "Weekly Live Trading Sessions", "Market Alerts"]
  },
  {
    id: 3,
    title: "Options Trading Strategies Masterclass",
    description: "Comprehensive guide to options trading strategies for consistent profits in any market condition.",
    price: "₹9,999",
    originalPrice: "₹14,999",
    rating: 4.7,
    students: 678,
    duration: "18 hours",
    level: "Intermediate",
    badge: "Popular",
    category: "Options Trading",
    instructor: "Vikram Mehta",
    coverImage: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1000",
    language: "English, Hindi",
    topics: ["Call & Put Options", "Option Greeks", "Spreads & Straddles", "Hedging Techniques"],
    features: ["Live Trading Demos", "Options Calculator", "Strategy Handbook", "One-on-One Mentoring"]
  },
  {
    id: 4,
    title: "Fundamental Analysis for Long-Term Investing",
    description: "Learn how to analyze company financials and build a strong long-term investment portfolio.",
    price: "₹6,499",
    originalPrice: "₹9,499",
    rating: 4.6,
    students: 932,
    duration: "14 hours",
    level: "Intermediate",
    category: "Fundamental Analysis",
    instructor: "Aditya Patel",
    coverImage: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1000",
    language: "English",
    topics: ["Balance Sheet Analysis", "Cash Flow Statements", "Valuation Models", "Industry Analysis"],
    features: ["Stock Screener", "Financial Ratio Guide", "Excel Templates", "Quarterly Updates"]
  },
  {
    id: 5,
    title: "Cryptocurrency Trading Fundamentals",
    description: "Everything you need to know to start trading cryptocurrencies safely and profitably.",
    price: "₹8,499",
    originalPrice: "₹12,999",
    rating: 4.5,
    students: 1578,
    duration: "16 hours",
    level: "Beginner",
    badge: "Trending",
    category: "Cryptocurrency",
    instructor: "Neha Kumar",
    coverImage: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1000",
    language: "English, Hindi",
    topics: ["Blockchain Basics", "Exchange Selection", "Crypto Analysis", "Security Best Practices"],
    features: ["Crypto Wallet Setup Guide", "Trading Bot Access", "Market Updates", "Beginners Community"]
  },
  {
    id: 6,
    title: "Advanced Futures Trading Strategies",
    description: "Master advanced futures trading techniques used by professional traders and institutions.",
    price: "₹11,999",
    originalPrice: "₹16,999",
    rating: 4.8,
    students: 421,
    duration: "20 hours",
    level: "Advanced",
    category: "Futures Trading",
    instructor: "Rahul Joshi",
    coverImage: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1000",
    language: "English",
    topics: ["Futures Contract Analysis", "Rollover Strategies", "Margin Management", "Arbitrage Techniques"],
    features: ["Risk Calculator", "Trading Journal Template", "Market Depth Analysis Tool", "Expert Webinars"]
  }
];

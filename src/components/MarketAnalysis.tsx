
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, Zap, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";

type MarketInsight = {
  id: number;
  title: string;
  description: string;
  action: string;
  sentiment: "positive" | "negative" | "neutral";
};

const MarketAnalysis = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [insights, setInsights] = useState<MarketInsight[]>([
    {
      id: 1,
      title: "S&P 500 Technical Analysis",
      description: "The index is showing a bullish divergence on the daily chart, suggesting potential upward momentum in the coming sessions.",
      action: "Consider long positions with tight stop losses",
      sentiment: "positive"
    },
    {
      id: 2,
      title: "Crypto Market Overview",
      description: "Bitcoin is testing key resistance levels. A breakout above could signal the start of a new bullish phase.",
      action: "Monitor for breakout confirmation",
      sentiment: "neutral"
    }
  ]);

  const generateNewInsight = () => {
    setIsLoading(true);
    
    // Simulate AI analysis with a timeout
    setTimeout(() => {
      const marketTypes = ["Forex", "Commodities", "Tech Stocks", "Banking Sector", "Emerging Markets"];
      const sentiments = ["positive", "negative", "neutral"] as const;
      
      // Generate a random insight
      const randomMarket = marketTypes[Math.floor(Math.random() * marketTypes.length)];
      const randomSentiment = sentiments[Math.floor(Math.random() * sentiments.length)];
      
      let description = "";
      let action = "";
      
      if (randomSentiment === "positive") {
        description = `${randomMarket} is showing strong bullish signals with increasing volume and positive price action over the last trading sessions.`;
        action = "Consider strategic long entries after pullbacks";
      } else if (randomSentiment === "negative") {
        description = `${randomMarket} is displaying bearish patterns with deteriorating momentum indicators and lower highs forming on the chart.`;
        action = "Maintain caution and consider reducing exposure";
      } else {
        description = `${randomMarket} is currently in a consolidation phase with mixed signals from technical indicators. The market is awaiting a catalyst.`;
        action = "Wait for a clear breakout before taking positions";
      }
      
      const newInsight: MarketInsight = {
        id: insights.length + 1,
        title: `${randomMarket} Market Analysis`,
        description,
        action,
        sentiment: randomSentiment
      };
      
      setInsights(prev => [newInsight, ...prev]);
      setIsLoading(false);
      toast.success("New market analysis generated");
    }, 1500);
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <div>
          <CardTitle className="text-xl font-bold">AI Market Analysis</CardTitle>
          <CardDescription>Real-time trading insights powered by AI</CardDescription>
        </div>
        <Button 
          onClick={generateNewInsight} 
          disabled={isLoading}
          className="flex items-center gap-2"
        >
          {isLoading ? (
            <>Analyzing<span className="loading-dots">...</span></>
          ) : (
            <>
              <Zap className="h-4 w-4" /> Generate Insight
            </>
          )}
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {insights.map((insight, index) => (
            <motion.div
              key={insight.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-muted rounded-lg p-4"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className={`w-2 h-2 rounded-full ${
                  insight.sentiment === "positive" ? "bg-green-500" :
                  insight.sentiment === "negative" ? "bg-red-500" : "bg-amber-500"
                }`}></span>
                <h3 className="font-semibold">{insight.title}</h3>
              </div>
              <p className="text-sm text-gray-600 mb-3">{insight.description}</p>
              <div className="flex items-center gap-1 text-sm font-medium text-primary">
                <span>{insight.action}</span>
                <ArrowRight className="h-3 w-3" />
              </div>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default MarketAnalysis;

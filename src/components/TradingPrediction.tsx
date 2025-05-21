
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowUp, ArrowDown, Activity } from "lucide-react";
import { motion } from "framer-motion";

const TradingPrediction = () => {
  const [symbol, setSymbol] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [prediction, setPrediction] = useState<{
    direction: "up" | "down" | null;
    probability: number;
    priceTarget: number;
    timeframe: string;
  }>({
    direction: null,
    probability: 0,
    priceTarget: 0,
    timeframe: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!symbol) return;

    setIsLoading(true);
    setPrediction({
      direction: null,
      probability: 0,
      priceTarget: 0,
      timeframe: ""
    });

    // Simulate AI prediction with a timeout
    setTimeout(() => {
      // Generate a random prediction
      const randomDirection = Math.random() > 0.5 ? "up" : "down";
      const randomProbability = Math.floor(Math.random() * 30) + 55; // 55% to 85%
      const randomPriceTarget = parseFloat((Math.random() * 10 + 90).toFixed(2)); // Random price target
      const timeframes = ["24 hours", "3 days", "1 week"];
      const randomTimeframe = timeframes[Math.floor(Math.random() * timeframes.length)];

      setPrediction({
        direction: randomDirection as "up" | "down",
        probability: randomProbability,
        priceTarget: randomPriceTarget,
        timeframe: randomTimeframe
      });
      
      setIsLoading(false);
    }, 2000);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>AI Trade Predictor</CardTitle>
        <CardDescription>Enter a trading symbol to get AI-powered price predictions</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="symbol">Trading Symbol</Label>
            <div className="flex gap-2 mt-1">
              <Input
                id="symbol"
                placeholder="e.g., AAPL, BTC/USD, EUR/USD"
                value={symbol}
                onChange={(e) => setSymbol(e.target.value)}
                className="flex-1"
              />
              <Button type="submit" disabled={isLoading || !symbol.trim()}>
                {isLoading ? "Predicting..." : "Predict"}
              </Button>
            </div>
          </div>
        </form>

        {prediction.direction && (
          <motion.div 
            className="mt-6 bg-muted rounded-lg p-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-lg">{symbol.toUpperCase()} Prediction</h3>
              <div className={`flex items-center gap-1 font-medium ${
                prediction.direction === "up" ? "text-green-500" : "text-red-500"
              }`}>
                {prediction.direction === "up" ? (
                  <ArrowUp className="h-5 w-5" />
                ) : (
                  <ArrowDown className="h-5 w-5" />
                )}
                <span>{prediction.direction === "up" ? "Bullish" : "Bearish"}</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Confidence:</span>
                <span className="font-medium">{prediction.probability}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full ${
                    prediction.probability > 70 ? "bg-green-500" : 
                    prediction.probability > 60 ? "bg-amber-500" : "bg-red-500"
                  }`}
                  style={{ width: `${prediction.probability}%` }}
                ></div>
              </div>
              
              <div className="flex justify-between mt-4">
                <span className="text-gray-600">Price Target:</span>
                <span className="font-medium">${prediction.priceTarget}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">Timeframe:</span>
                <span className="font-medium">Within {prediction.timeframe}</span>
              </div>
            </div>
          </motion.div>
        )}
      </CardContent>
      <CardFooter className="text-sm text-gray-500">
        <div className="flex items-center gap-1">
          <Activity className="h-4 w-4" />
          <span>Predictions are for educational purposes only and not financial advice</span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default TradingPrediction;

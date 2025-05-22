
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RefreshCw, ShieldAlert } from "lucide-react";

interface CaptchaProps {
  onVerify: () => void;
}

export function Captcha({ onVerify }: CaptchaProps) {
  const [captchaText, setCaptchaText] = useState("");
  const [userInput, setUserInput] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [isError, setIsError] = useState(false);

  const generateCaptcha = () => {
    // Generate only alphabetical characters (more user-friendly than including numbers)
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz';
    let result = '';
    
    // Generate a 6-character captcha
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    
    setCaptchaText(result);
    setUserInput("");
    setIsError(false);
    setIsVerified(false);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleVerify = () => {
    if (userInput.toLowerCase() === captchaText.toLowerCase()) {
      setIsVerified(true);
      onVerify();
    } else {
      setIsError(true);
      setTimeout(generateCaptcha, 1000);
    }
  };

  return (
    <div className="w-full space-y-2">
      <div className={`flex items-center p-3 rounded-lg ${isVerified ? 'bg-green-50 border border-green-200' : 'bg-gray-50 border border-gray-200'}`}>
        <div className="flex-1 flex justify-between items-center">
          <div className="captcha-display relative">
            {!isVerified ? (
              <div className="font-mono text-lg tracking-wider select-none" style={{
                fontFamily: 'monospace',
                letterSpacing: '0.25em',
                fontStyle: 'italic',
                fontWeight: 'bold',
                background: 'linear-gradient(45deg, #f3f4f6, #ffffff)',
                padding: '0.5rem 1rem',
                borderRadius: '0.25rem',
                position: 'relative',
                overflow: 'hidden',
              }}>
                {/* Random lines for added difficulty */}
                <div style={{ 
                  position: 'absolute', 
                  top: 0, 
                  left: 0, 
                  width: '100%', 
                  height: '100%',
                  opacity: 0.3,
                  zIndex: 0,
                  background: `repeating-linear-gradient(
                    ${Math.random() * 360}deg,
                    #0003,
                    #0003 2px,
                    transparent 2px,
                    transparent 4px
                  )`
                }}></div>
                <span style={{ position: 'relative', zIndex: 1 }}>{captchaText}</span>
              </div>
            ) : (
              <div className="flex items-center text-green-600">
                <ShieldAlert className="mr-2 h-4 w-4" />
                <span>Verified</span>
              </div>
            )}
          </div>
          {!isVerified && (
            <Button 
              variant="outline" 
              size="icon" 
              onClick={generateCaptcha} 
              className="ml-2"
              type="button"
            >
              <RefreshCw className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>

      {!isVerified && (
        <div className="flex space-x-2">
          <Input
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Enter captcha text"
            className={isError ? "border-red-500" : ""}
          />
          <Button onClick={handleVerify} disabled={!userInput}>Verify</Button>
        </div>
      )}
      
      {isError && (
        <p className="text-red-500 text-sm mt-1">Incorrect captcha, please try again</p>
      )}
    </div>
  );
}

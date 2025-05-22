
/**
 * Dynamically loads the Razorpay script
 * @returns Promise that resolves to the Razorpay constructor
 */
export const loadRazorpay = () => {
  return new Promise<any>((resolve, reject) => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => {
      resolve((window as any).Razorpay);
    };
    script.onerror = () => {
      reject(new Error('Razorpay SDK failed to load'));
    };
    document.body.appendChild(script);
  });
};

/**
 * Formats price from string to number
 * @param priceString Price string (e.g., "₹1,999")
 * @returns Price in number format
 */
export const formatPriceToNumber = (priceString: string): number => {
  // Remove currency symbol and commas, then convert to number
  return Number(priceString.replace(/[^0-9.]/g, ''));
};


import { motion } from "framer-motion";

export function LoginLoader() {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      className="mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full"
    />
  );
}

import React, { useCallback, useState, createContext, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
interface ToastContextType {
  showToast: (message: string) => void;
}
const ToastContext = createContext<ToastContextType>({
  showToast: () => {}
});
export function useCustomToast() {
  return useContext(ToastContext);
}
export function CustomToastProvider({
  children


}: {children: React.ReactNode;}) {
  const [toasts, setToasts] = useState<
    {
      id: number;
      message: string;
    }[]>(
    []);
  const showToast = useCallback((message: string) => {
    const id = Date.now();
    setToasts((prev) => [
    ...prev,
    {
      id,
      message
    }]
    );
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  }, []);
  return (
    <ToastContext.Provider
      value={{
        showToast
      }}>
      
      {children}
      <div
        className="fixed bottom-8 left-1/2 z-[99999] flex flex-col gap-3 items-center pointer-events-none"
        style={{
          transform: 'translateX(-50%)'
        }}>
        
        <AnimatePresence>
          {toasts.map((toast) =>
          <motion.div
            key={toast.id}
            initial={{
              opacity: 0,
              y: 50
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            exit={{
              opacity: 0,
              y: 50
            }}
            className="flex items-center gap-3 bg-brand-dark text-white px-6 py-4 rounded-xl shadow-2xl pointer-events-auto">
            
              <CheckCircle size={20} className="text-green-400 shrink-0" />
              <span className="text-sm font-medium whitespace-nowrap">
                {toast.message}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>);

}
'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface ToastContextType {
  showToast: (msg: string) => void;
}

const ToastContext = createContext<ToastContextType>({
  showToast: () => {},
});

export const useToast = () => useContext(ToastContext);

export default function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Array<{ id: number; message: string }>>([]);

  const showToast = (message: string) => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  };

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('[data-toast], [data-copy]') as HTMLElement | null;
      if (!target) return;

      const copyText = target.getAttribute('data-copy');
      if (copyText) {
        if (navigator.clipboard) {
          navigator.clipboard.writeText(copyText).catch(() => {});
        }
        showToast('Copied to clipboard');
      }

      const toastMsg = target.getAttribute('data-toast');
      if (toastMsg) {
        showToast(toastMsg);
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="toast-container">
        {toasts.map((toast) => (
          <div key={toast.id} className="toast">
            {toast.message}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

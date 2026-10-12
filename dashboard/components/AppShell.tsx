'use client';

import { useState } from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import ToastProvider from './ToastProvider';

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <ToastProvider>
      <div className="app">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <main className="main">
          <Topbar onToggleMenu={() => setSidebarOpen((prev) => !prev)} />
          <section className="content">
            {children}
          </section>
        </main>
      </div>
    </ToastProvider>
  );
}

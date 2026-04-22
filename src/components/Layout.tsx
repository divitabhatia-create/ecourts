import React from 'react';
import { NavLink } from 'react-router-dom';
import { Gavel, Bell, Search, User } from 'lucide-react';
import { cn } from '../lib/utils';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="fixed top-0 z-50 w-full h-16 bg-primary-navy-container text-white glass-nav flex justify-between items-center px-8 border-b border-white/10">
        <div className="flex items-center gap-3">
          <Gavel className="w-6 h-6 text-white" />
          <span className="text-2xl font-bold tracking-tight headline">LegalX</span>
        </div>
        
        <nav className="hidden md:flex items-center h-full gap-8">
          <NavLink 
            to="/" 
            className={({ isActive }) => cn(
              "text-sm font-bold tracking-wide h-full flex items-center border-b-2 transition-all",
              isActive ? "text-white border-legal-green" : "text-slate-300 border-transparent hover:text-white"
            )}
          >
            DASHBOARD
          </NavLink>
          <NavLink 
            to="/cases" 
            className={({ isActive }) => cn(
              "text-sm font-bold tracking-wide h-full flex items-center border-b-2 transition-all",
              isActive ? "text-white border-legal-green" : "text-slate-300 border-transparent hover:text-white"
            )}
          >
            CASES
          </NavLink>
          <NavLink 
            to="/analytics" 
            className={({ isActive }) => cn(
              "text-sm font-bold tracking-wide h-full flex items-center border-b-2 transition-all",
              isActive ? "text-white border-legal-green" : "text-slate-300 border-transparent hover:text-white"
            )}
          >
            ANALYTICS
          </NavLink>
        </nav>

        <div className="flex items-center gap-6">
          <button className="text-slate-300 hover:text-white transition-colors relative">
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-legal-red rounded-full" />
          </button>
          
          <div className="flex items-center gap-4 pl-6 border-l border-white/20">
            <div className="text-right hidden xl:block leading-none">
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Senior Partner</p>
              <p className="text-xs font-bold text-white mt-1">Divita Bhatia</p>
            </div>
            <div className="w-10 h-10 bg-legal-green flex items-center justify-center font-bold text-xs">
              JD
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 pt-16">
        {children}
      </main>

      <footer className="bg-surface-container-lowest border-t border-outline-ghost/30 py-8 px-8">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3 opacity-50">
            <Gavel className="w-5 h-5" />
            <span className="text-lg font-bold tracking-tight">LegalX Analytics</span>
          </div>
          <p className="text-xs text-on-surface-variant font-medium">
            © 2026 LegalX Systems Inc. All rights reserved. Data refreshed 12 minutes ago.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-xs font-bold text-on-surface-variant hover:text-primary-navy">System Status</a>
            <a href="#" className="text-xs font-bold text-on-surface-variant hover:text-primary-navy">Help Center</a>
            <a href="#" className="text-xs font-bold text-on-surface-variant hover:text-primary-navy">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

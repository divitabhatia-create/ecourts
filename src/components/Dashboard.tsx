import React from 'react';
import { Filter, AlertTriangle, Plus } from 'lucide-react';
import { METRICS, ACTION_REQUIRED, PRIORITY_CASES, INDIAN_STATES, COURT_TYPES } from '../constants';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div className="max-w-[1440px] mx-auto px-8 pt-8 pb-24 space-y-8 animate-in fade-in duration-500">
      {/* Filter Bar */}
      <section className="bg-surface-container-lowest p-6 shadow-sm border border-outline-ghost/10">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <FilterInput label="LAN Number" placeholder="e.g. LN-8890" />
          <FilterInput label="CNR Number" placeholder="e.g. MH-PU-001" />
          <div className="flex flex-col gap-1">
            <label className="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">Jurisdiction</label>
            <select className="border-0 bg-surface-container text-sm p-3 focus:ring-1 focus:ring-primary-navy-container appearance-none">
              {INDIAN_STATES.map(state => <option key={state}>{state}</option>)}
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">Court</label>
            <select className="border-0 bg-surface-container text-sm p-3 focus:ring-1 focus:ring-primary-navy-container appearance-none">
              {COURT_TYPES.map(court => <option key={court}>{court}</option>)}
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">Case Stage</label>
            <select className="border-0 bg-surface-container text-sm p-3 focus:ring-1 focus:ring-primary-navy-container appearance-none">
              <option>Any Stage</option>
              <option>Evidence</option>
              <option>Arguments</option>
            </select>
          </div>
        </div>
        <div className="flex items-center justify-between mt-6 pt-6 border-t border-outline-ghost/30">
          <button className="text-sm font-medium text-primary-navy hover:underline transition-all">Clear All Filters</button>
          <button className="bg-primary-navy text-white px-8 py-3 text-sm font-bold flex items-center gap-2 transition-all active:scale-95 hover:bg-primary-navy-container">
            <Filter className="w-4 h-4" />
            Apply Filters
          </button>
        </div>
      </section>

      {/* Metrics Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {METRICS.map((metric) => (
          <div 
            key={metric.label}
            className={cn(
              "bg-surface-container-lowest p-6 flex flex-col justify-between h-32 border-l-4 shadow-sm transition-transform hover:-translate-y-1",
              metric.type === 'primary' && 'border-primary-navy',
              metric.type === 'secondary' && 'border-legal-green',
              metric.type === 'error' && 'border-legal-red',
              metric.type === 'warning' && 'border-legal-amber'
            )}
          >
            <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">{metric.label}</span>
            <div className="flex items-end justify-between">
              <h2 className={cn(
                "text-4xl font-extrabold font-headline",
                metric.type === 'error' ? 'text-legal-red' : 'text-primary-navy'
              )}>{metric.value}</h2>
              {metric.trend && (
                <span className={cn(
                  "text-sm font-bold",
                  metric.type === 'error' ? 'text-legal-red' : (metric.type === 'primary' || metric.type === 'secondary' ? 'text-legal-green' : 'text-legal-green')
                )}>
                  {metric.trend}
                </span>
              )}
              {metric.subtext && <span className="text-on-surface-variant text-sm">{metric.subtext}</span>}
            </div>
          </div>
        ))}
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Action Required Section */}
        <section className="lg:col-span-4 space-y-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-headline text-lg font-bold text-primary-navy flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-legal-red" />
              Action Required
            </h3>
          </div>

          <div className="space-y-4">
            {ACTION_REQUIRED.map((item) => (
              <div 
                key={item.id}
                className={cn(
                  "bg-surface-container-lowest p-5 border-l-4 shadow-sm",
                  item.severity === 'Urgent' && 'border-legal-red',
                  item.severity === 'Warning' && 'border-legal-amber',
                  item.severity === 'Information' && 'border-primary-navy-container'
                )}
              >
                <div className="flex justify-between items-start mb-2">
                  <span className="mono-text text-[11px] bg-surface-container-highest px-2 py-1 text-primary-navy">CNR: {item.cnr}</span>
                  <span className={cn(
                    "text-[10px] font-bold uppercase tracking-wider",
                    item.severity === 'Urgent' && 'text-legal-red',
                    item.severity === 'Warning' && 'text-legal-amber',
                    item.severity === 'Information' && 'text-primary-navy-container'
                  )}>{item.severity}</span>
                </div>
                <p className="text-sm font-bold mb-1 text-primary-navy">{item.title}</p>
                <p className={cn(
                  "text-sm text-on-surface-variant",
                  item.severity === 'Urgent' ? 'italic' : ''
                )}>{item.description}</p>
              </div>
            ))}
          </div>

          {/* Graphic/Insights Placeholder */}
          <div className="bg-primary-navy-container/5 p-8 flex flex-col items-center text-center justify-center h-64 border-2 border-dashed border-outline-ghost/40">
            <div className="w-24 h-24 mb-4 flex items-center justify-center opacity-20">
              <GavelIllustration />
            </div>
            <p className="text-xs text-on-surface-variant font-medium">Weekly insights are being processed. Check back at 6:00 PM.</p>
          </div>
        </section>

        {/* Priority Cases Overview */}
        <section className="lg:col-span-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-headline text-lg font-bold text-primary-navy">Priority Cases Overview</h3>
            <div className="flex gap-4">
              <button className="text-xs font-bold border-b-2 border-primary-navy pb-0.5">Active</button>
              <button className="text-xs font-bold text-on-surface-variant hover:text-primary-navy transition-all pb-0.5">Disposed</button>
            </div>
          </div>

          <div className="overflow-x-auto bg-white shadow-sm border border-outline-ghost/10">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-high/50">
                  <th className="p-4 text-[10px] font-black uppercase tracking-widest text-on-surface-variant">CNR Number</th>
                  <th className="p-4 text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Parties</th>
                  <th className="p-4 text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Stage</th>
                  <th className="p-4 text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Next Hearing</th>
                  <th className="p-4 text-[10px] font-black uppercase tracking-widest text-on-surface-variant text-center">DPD</th>
                  <th className="p-4 text-[10px] font-black uppercase tracking-widest text-on-surface-variant text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-ghost/20">
                {PRIORITY_CASES.map((item) => (
                  <tr key={item.id} className="hover:bg-surface-container-low transition-colors group">
                    <td className="p-4 mono-text text-[12px] text-primary-navy">{item.cnr}</td>
                    <td className="p-4">
                      <div className="text-sm font-bold text-primary-navy">{item.parties}</div>
                      <div className="text-[10px] text-on-surface-variant font-medium">{item.partiesDetail}</div>
                    </td>
                    <td className="p-4">
                      <span className="bg-primary-navy-container/10 text-primary-navy-container text-[10px] font-bold px-2 py-0.5 border border-primary-navy-container/20">
                        {item.stage}
                      </span>
                    </td>
                    <td className="p-4 text-sm font-medium text-primary-navy">{item.nextHearing}</td>
                    <td className="p-4 text-sm text-center">
                      <span className={cn(
                        "font-bold",
                        item.dpd > 100 ? "text-legal-red" : "text-primary-navy"
                      )}>
                        {item.dpd}d
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <Link to={`/cases/${item.id}`}>
                        <button className="text-[10px] font-bold uppercase tracking-widest bg-primary-navy text-white px-3 py-2 transition-all hover:bg-legal-green active:scale-95">
                          View Details
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>

      {/* FAB */}
      <button className="fixed bottom-8 right-8 bg-legal-green text-white w-14 h-14 flex items-center justify-center shadow-xl hover:bg-primary-navy transition-all active:scale-95 group">
        <Plus className="w-8 h-8" />
        <span className="absolute right-full mr-4 bg-primary-navy text-white px-3 py-1 text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          File New Case
        </span>
      </button>
    </div>
  );
}

function FilterInput({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">{label}</label>
      <input 
        className="border-0 bg-surface-container text-sm p-3 focus:ring-1 focus:ring-primary-navy-container outline-none" 
        placeholder={placeholder} 
        type="text"
      />
    </div>
  );
}

function GavelIllustration() {
  return (
    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
      <path d="m14 13-5 5" />
      <path d="m3 21 2-2" />
      <path d="m9 15 2-2" />
      <path d="m17 2 2 2" />
      <path d="m7 8 2 2" />
      <path d="m21 6-4-4-4 4 4 4z" />
      <path d="m11 16-4-4-4 4 4 4z" />
    </svg>
  );
}

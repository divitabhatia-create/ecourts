import React from 'react';
import { Calendar, Building, Filter, Download, Clock, Info, Gavel, BarChart3 } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { cn } from '../lib/utils';

const DISTRIBUTION_DATA = [
  { name: 'Hearings Done', value: 486 },
  { name: 'Orders Passed', value: 215 },
  { name: 'Case Pending', value: 342 },
  { name: 'Case Disposed', value: 128 },
];

const AGING_DATA = [
  { label: '0-90 Days', cases: 412, percent: 58, color: '#8947FF' },
  { label: '91-180 Days', cases: 156, percent: 22, color: '#8947FF' },
  { label: '181-360 Days', cases: 82, percent: 12, color: '#8947FF' },
  { label: '360+ Days', cases: 34, percent: 8, color: '#ba1a1a' },
];

const COUNSEL_SCORECARD = [
  { name: 'Adv. Rajesh Khanna', assigned: 124, disposal: '88%', adjournment: '12%', score: 92 },
  { name: 'Adv. Priya Sharma', assigned: 89, disposal: '72%', adjournment: '24%', score: 74 },
  { name: 'Adv. Vikram Seth', assigned: 210, disposal: '91%', adjournment: '8%', score: 94 },
  { name: 'Adv. Ananya Roy', assigned: 64, disposal: '45%', adjournment: '38%', score: 52 },
];

const JURISDICTION_INTEL = [
  { court: 'Bombay High Court', delay: '780 days', active: '1,402', status: 'High' },
  { court: 'Saket District Court', delay: '320 days', active: '845', status: 'Low' },
  { court: 'Karnataka High Court', delay: '540 days', active: '912', status: 'Medium' },
];

export default function Analytics() {
  return (
    <div className="max-w-[1600px] mx-auto pt-8 pb-12 px-8 space-y-8 animate-in fade-in duration-700">
      {/* Header & Controls */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-6">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-primary-navy">Portfolio Intelligence</h1>
          <p className="text-on-surface-variant font-medium mt-1">Performance metrics and caseload analysis across all jurisdictions.</p>
        </div>
        <section className="bg-surface-container-low p-1.5 flex flex-wrap items-center gap-3 w-full md:w-auto shadow-sm border border-outline-ghost/10">
          <div className="flex gap-1 overflow-x-auto">
            <ControlBtn icon={<Calendar className="w-4 h-4" />} label="LAST QUARTER" />
            <ControlBtn icon={<Building className="w-4 h-4" />} label="ALL COURTS" />
            <ControlBtn icon={<Filter className="w-4 h-4" />} label="FILTERS" />
          </div>
          <button className="bg-primary-navy text-white px-6 py-2 text-sm font-bold flex items-center gap-2 transition-all hover:bg-primary-navy-container active:scale-95 whitespace-nowrap">
            <Download className="w-4 h-4" />
            EXPORT REPORT
          </button>
        </section>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {/* Case Status Distribution */}
        <div className="bg-white p-8 shadow-sm border border-outline-ghost/10 flex flex-col h-[480px]">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h2 className="text-xl font-bold tracking-tight text-primary-navy">Case Status Distribution</h2>
              <p className="text-sm text-on-surface-variant font-medium mt-1">Portfolio segmentation by hearings, orders and disposal status</p>
            </div>
            <BarChart3 className="w-6 h-6 text-primary-navy-container opacity-20" />
          </div>
          <div className="flex-1 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={DISTRIBUTION_DATA} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E5E5" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#44474f', fontSize: 10, fontWeight: 800, textTransform: 'uppercase' }} 
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#44474f', fontSize: 10, fontWeight: 500 }} 
                />
                <Tooltip 
                  cursor={{ fill: 'transparent' }} 
                  contentStyle={{ border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', padding: '12px' }}
                />
                <Bar dataKey="value" fill="#0d2b55" barSize={60}>
                  {DISTRIBUTION_DATA.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 2 ? '#ba1a1a' : (index === 3 ? '#8947FF' : '#0d2b55')} className="transition-all hover:opacity-80" />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* DPD Aging Buckets */}
        <div className="bg-white p-8 shadow-sm border border-outline-ghost/10 flex flex-col h-[480px]">
          <div className="flex justify-between items-start mb-10">
            <div>
              <h2 className="text-xl font-bold tracking-tight text-primary-navy">DPD Aging Buckets</h2>
              <p className="text-sm text-on-surface-variant font-medium mt-1">Days Past Deadline analysis of pending cases</p>
            </div>
            <Clock className="w-8 h-8 text-legal-green" />
          </div>
          <div className="flex-1 flex flex-col justify-center gap-10">
            {AGING_DATA.map((item) => (
              <div key={item.label} className="space-y-3 group cursor-pointer">
                <div className="flex justify-between text-xs font-black text-primary-navy uppercase tracking-widest">
                  <span>{item.label}</span>
                  <span className="group-hover:text-legal-green transition-colors">{item.cases} Cases ({item.percent}%)</span>
                </div>
                <div className="h-5 bg-surface-container-low w-full overflow-hidden">
                  <div 
                    className="h-full transition-all duration-1000 group-hover:brightness-110" 
                    style={{ backgroundColor: item.color, width: `${item.percent}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-5 gap-8">
        {/* Lawyer Scorecard */}
        <section className="xl:col-span-3 bg-white shadow-sm border border-outline-ghost/10 flex flex-col overflow-hidden">
          <div className="p-6 bg-surface-container-low border-b border-outline-ghost/10 flex justify-between items-center">
            <h2 className="text-sm font-black tracking-widest text-primary-navy uppercase">Counsel Efficiency Scorecard</h2>
            <button className="text-xs font-bold text-legal-green hover:underline">View All Counsel</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-surface-container-high/30">
                <tr>
                  <th className="p-6 text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant">Lawyer Name</th>
                  <th className="p-6 text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant text-center">Assigned</th>
                  <th className="p-6 text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant text-center">Disposal Rate</th>
                  <th className="p-6 text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant text-center">Adjournment</th>
                  <th className="p-6 text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant text-right">Score</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-ghost/10">
                {COUNSEL_SCORECARD.map((row) => (
                  <tr key={row.name} className="hover:bg-surface-container/30 transition-colors group">
                    <td className="p-6 font-bold text-primary-navy">{row.name}</td>
                    <td className="p-6 mono-text text-center text-sm font-medium">{row.assigned}</td>
                    <td className="p-6 mono-text text-center text-sm font-medium">{row.disposal}</td>
                    <td className="p-6 mono-text text-center text-sm font-medium">{row.adjournment}</td>
                    <td className="p-6 text-right">
                      <span className={cn(
                        "px-4 py-1 font-black text-[11px] inline-block min-w-[40px] text-center text-white",
                        row.score >= 90 ? "bg-legal-green" : (row.score >= 70 ? "bg-legal-amber" : "bg-legal-red")
                      )}>{row.score}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Court Intel */}
        <section className="xl:col-span-2 bg-white shadow-sm border border-outline-ghost/10 flex flex-col">
          <div className="p-6 bg-surface-container-low border-l-4 border-primary-navy border-b border-outline-ghost/10 flex justify-between items-center">
            <h2 className="text-sm font-black tracking-widest text-primary-navy uppercase">Jurisdiction Intel</h2>
            <Info className="w-4 h-4 text-primary-navy-container" />
          </div>
          <div className="overflow-x-auto flex-1">
            <table className="w-full text-left border-collapse">
              <thead className="bg-surface-container-high/30">
                <tr>
                  <th className="p-6 text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant text-center md:text-left">Court Name</th>
                  <th className="p-6 text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant text-center">Active</th>
                  <th className="p-6 text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant text-right">Delay</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-ghost/10">
                {JURISDICTION_INTEL.map((row) => (
                  <tr key={row.court} className="hover:bg-surface-container/30 transition-colors">
                    <td className="p-6">
                      <p className="font-bold text-primary-navy leading-tight">{row.court}</p>
                      <p className="text-[10px] text-on-surface-variant font-semibold mt-1 uppercase tracking-tighter">Avg {row.delay} closure</p>
                    </td>
                    <td className="p-6 mono-text text-center font-bold text-primary-navy">{row.active}</td>
                    <td className="p-6 text-right">
                      <span className={cn(
                        "px-3 py-1 text-[10px] font-black uppercase tracking-tighter border",
                        row.status === 'High' && "bg-surface-container-highest text-primary-navy border-outline-ghost/30",
                        row.status === 'Low' && "bg-legal-green-container text-legal-green border-legal-green/20",
                        row.status === 'Medium' && "bg-legal-amber/10 text-legal-amber border-legal-amber/20"
                      )}>{row.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 border-t border-outline-ghost/10 text-center">
            <button className="text-[10px] font-bold text-on-surface-variant/40 hover:text-primary-navy transition-colors uppercase tracking-[0.25em]">Detailed Jurisdictional Map</button>
          </div>
        </section>
      </div>
    </div>
  );
}

function ControlBtn({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button className="bg-white px-4 py-2 text-xs font-black flex items-center gap-2 border border-outline-ghost/15 hover:bg-surface-container transition-colors tracking-widest active:scale-95">
      {icon}
      {label}
    </button>
  );
}

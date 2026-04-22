import React from 'react';
import { ChevronRight, Filter, ChevronsUpDown, ChevronLeft, MoreHorizontal, Search } from 'lucide-react';
import { PRIORITY_CASES, INDIAN_STATES, COURT_TYPES } from '../constants';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';

export default function CaseList() {
  return (
    <div className="max-w-[1600px] mx-auto px-8 pt-8 pb-20 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Breadcrumbs */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-on-surface-variant mb-2">
          <span>Legal Management</span>
          <ChevronRight className="w-3 h-3" />
          <span className="text-primary-navy font-semibold">Active Cases</span>
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight text-primary-navy">Case Repository</h1>
      </div>

      {/* Filter Bar */}
      <section className="bg-surface-container-low p-6 mb-8 flex flex-wrap gap-4 items-end border border-outline-ghost/10">
        <div className="flex-1 min-w-[200px]">
          <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-2">LAN / Reference</label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant" />
            <input 
              className="w-full bg-surface-container-lowest border-none focus:ring-2 focus:ring-primary-navy-container h-11 pl-10 pr-4 text-sm outline-none" 
              placeholder="Search LAN..." 
              type="text"
            />
          </div>
        </div>
        <div className="flex-1 min-w-[200px]">
          <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-2">CNR Number</label>
          <input className="w-full bg-surface-container-lowest border-none focus:ring-2 focus:ring-primary-navy-container h-11 px-4 text-sm outline-none" placeholder="Enter CNR..." type="text"/>
        </div>
        <FilterSelect label="Jurisdiction" options={INDIAN_STATES} />
        <FilterSelect label="Court" options={COURT_TYPES} />
        <FilterSelect label="Stage" options={['Any Stage', 'Pleading', 'Evidence', 'Arguments']} />
        <button className="bg-primary-navy text-white h-11 px-8 font-bold text-sm hover:bg-primary-navy-container transition-colors flex items-center gap-2 active:scale-95">
          <Filter className="w-4 h-4 text-sm" />
          Apply Filters
        </button>
      </section>

      {/* Case Table Container */}
      <div className="bg-white overflow-hidden shadow-sm border border-outline-ghost/10">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[1200px]">
            <thead>
              <tr className="bg-surface-container-high/50">
                <th className="p-4 text-xs font-black text-primary-navy uppercase tracking-widest border-b border-outline-ghost/15">
                  <div className="flex items-center gap-1 cursor-pointer hover:text-legal-green transition-colors">
                    CNR <ChevronsUpDown className="w-3 h-3" />
                  </div>
                </th>
                <th className="p-4 text-xs font-black text-primary-navy uppercase tracking-widest border-b border-outline-ghost/15">LAN</th>
                <th className="p-4 text-xs font-black text-primary-navy uppercase tracking-widest border-b border-outline-ghost/15">Parties</th>
                <th className="p-4 text-xs font-black text-primary-navy uppercase tracking-widest border-b border-outline-ghost/15">Court / Jurisdiction</th>
                <th className="p-4 text-xs font-black text-primary-navy uppercase tracking-widest border-b border-outline-ghost/15">Case Type</th>
                <th className="p-4 text-xs font-black text-primary-navy uppercase tracking-widest border-b border-outline-ghost/15">Stage</th>
                <th className="p-4 text-xs font-black text-primary-navy uppercase tracking-widest border-b border-outline-ghost/15">DPD</th>
                <th className="p-4 text-xs font-black text-primary-navy uppercase tracking-widest border-b border-outline-ghost/15">Next Hearing</th>
                <th className="p-4 text-xs font-black text-primary-navy uppercase tracking-widest border-b border-outline-ghost/15">Lawyer</th>
                <th className="p-4 text-xs font-black text-primary-navy uppercase tracking-widest border-b border-outline-ghost/15 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-ghost/15">
              {PRIORITY_CASES.concat(PRIORITY_CASES).map((item, index) => (
                <tr key={index} className="hover:bg-surface-container transition-colors group">
                  <td className="p-4">
                    <span className={cn(
                      "bg-surface-container-highest px-2 py-1 text-[11px] font-mono font-bold border-l-4 cnr-badge block truncate max-w-[180px]",
                      index % 3 === 0 ? "border-primary-navy" : (index % 3 === 1 ? "border-legal-green" : "border-legal-amber")
                    )}>
                      {item.cnr}
                    </span>
                  </td>
                  <td className="p-4 text-sm font-semibold text-primary-navy">{item.lan}</td>
                  <td className="p-4">
                    <div className="text-sm font-bold text-primary-navy">{item.parties}</div>
                    <div className="text-[11px] text-on-surface-variant italic">vs. Vertex Infra Projects</div>
                  </td>
                  <td className="p-4">
                    <div className="text-sm font-medium text-primary-navy">{item.court}</div>
                    <div className="text-[11px] text-on-surface-variant font-medium">Civil Jurisdiction</div>
                  </td>
                  <td className="p-4 text-[11px] font-bold uppercase tracking-wider text-on-surface-variant">Commercial Suit</td>
                  <td className="p-4">
                    <span className="bg-primary-navy-container/10 text-primary-navy-container px-2 py-0.5 text-[10px] font-bold uppercase border border-primary-navy-container/10">
                      {item.stage}
                    </span>
                  </td>
                  <td className={cn(
                    "p-4 text-sm font-mono",
                    item.dpd > 100 ? "text-legal-red font-bold" : "text-on-surface-variant"
                  )}>
                    {item.dpd} Days
                  </td>
                  <td className="p-4 text-sm font-medium text-primary-navy">{item.nextHearing}</td>
                  <td className="p-4 text-sm text-primary-navy">{item.lawyer}</td>
                  <td className="p-4 text-right">
                    <Link to={`/cases/${item.id}`}>
                      <button className="text-primary-navy hover:bg-primary-navy hover:text-white px-3 py-1 text-xs font-bold border border-primary-navy transition-all active:scale-95">
                        View
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="flex items-center justify-between px-6 py-4 bg-surface-container-low border-t border-outline-ghost/15">
          <div className="text-sm text-on-surface-variant font-medium">
            Showing <span className="font-bold text-primary-navy">1 to 10</span> of 128 results
          </div>
          <div className="flex items-center gap-1">
            <button className="w-10 h-10 flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 flex items-center justify-center bg-primary-navy text-white font-bold text-sm">1</button>
            <button className="w-10 h-10 flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high font-bold text-sm">2</button>
            <button className="w-10 h-10 flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high font-bold text-sm">3</button>
            <button className="w-10 h-10 flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-colors">
              <MoreHorizontal className="w-4 h-4" />
            </button>
            <button className="w-10 h-10 flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high font-bold text-sm">12</button>
            <button className="w-10 h-10 flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function FilterSelect({ label, options }: { label: string; options: string[] }) {
  return (
    <div className="flex-1 min-w-[150px]">
      <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-2">{label}</label>
      <select className="w-full bg-surface-container-lowest border-none focus:ring-2 focus:ring-primary-navy-container h-11 px-4 text-sm outline-none appearance-none">
        {options.map(opt => <option key={opt}>{opt}</option>)}
      </select>
    </div>
  );
}

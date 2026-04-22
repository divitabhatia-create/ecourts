import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ChevronRight,
  Eye, 
  Printer, 
  Download as DownloadIcon, 
  Sparkles, 
  User as UserIcon, 
  Building2, 
  IdCard, 
  UserSearch, 
  FileText, 
  Calendar, 
  Share2, 
  RefreshCw, 
  Clock 
} from 'lucide-react';
import { cn } from '../lib/utils';
import { PRIORITY_CASES } from '../constants';

export default function CaseDetail() {
  const { id } = useParams();
  const caseData = PRIORITY_CASES.find(c => c.id === id) || PRIORITY_CASES[0];

  return (
    <div className="max-w-[1600px] mx-auto px-8 pt-8 pb-16 space-y-8 animate-in fade-in duration-500">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-on-surface-variant text-sm font-medium">
        <Link to="/" className="hover:text-primary-navy transition-colors">Dashboard</Link>
        <ChevronRight className="w-3 h-3" />
        <Link to="/cases" className="hover:text-primary-navy transition-colors">Cases</Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-primary-navy font-bold">{caseData.cnr}</span>
      </nav>

      {/* Header Card */}
      <section className="bg-surface-container-lowest p-8 shadow-sm border border-outline-ghost/10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
          <div className="space-y-6 flex-1">
            <div className="flex items-center gap-3">
              <span className="bg-surface-container-highest px-3 py-1 text-xs mono-text font-medium text-primary-navy">CNR: {caseData.cnr}</span>
              <span className="bg-legal-green-container text-legal-green px-3 py-1 text-xs font-black uppercase tracking-wider">Disposed</span>
            </div>
            <h1 className="text-5xl font-extrabold text-primary-navy tracking-tight leading-tight max-w-5xl">
              State Bank of India <span className="text-on-surface-variant font-light italic">v.</span> Global Logistics Corp Pvt Ltd
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-y-6 gap-x-8 pt-4 border-t border-outline-ghost/15">
              <DetailItem label="Court" value={caseData.court} />
              <DetailItem label="Judge(s)" value="Hon'ble Mr. Justice R. Suresh Kumar" />
              <DetailItem label="Case Type" value="Writ Petition (Comm)" />
              <DetailItem label="Reg No" value="WP/22091/2024" />
              <FilterItem label="Filing No" value="66543/2024" />
              <FilterItem label="Section" value="Comm Div - III" />
              <FilterItem label="Bench" value="Single Bench" />
            </div>
          </div>
          <div className="flex flex-col gap-3 w-full lg:w-auto">
            <button className="bg-primary-navy text-white px-8 py-4 font-bold flex items-center justify-center gap-3 transition-all active:scale-95 shadow-md hover:bg-primary-navy-container">
              <Eye className="w-5 h-5" />
              VIEW ALL ORDERS
            </button>
            <button className="bg-white text-primary-navy border border-outline-ghost/30 px-8 py-4 font-bold flex items-center justify-center gap-3 transition-all hover:bg-surface-container-low">
              <Printer className="w-5 h-5" />
              PRINT SUMMARY
            </button>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column */}
        <div className="lg:col-span-8 space-y-8">
          {/* AI Analysis */}
          <article className="bg-[#f0f7ff] p-8 border-l-8 border-primary-navy relative overflow-hidden transition-all hover:shadow-md">
            <Sparkles className="absolute top-4 right-4 w-32 h-32 text-primary-navy opacity-5 pointer-events-none" />
            <div className="flex items-center gap-3 mb-6 relative z-10">
              <Sparkles className="w-6 h-6 text-primary-navy" />
              <h2 className="text-2xl font-extrabold text-primary-navy tracking-tight">AI Case Analysis & Recommendations</h2>
            </div>
            <div className="relative z-10 space-y-4">
              <p className="text-primary-navy text-lg leading-relaxed font-semibold">
                This commercial writ petition concerns the recovery of assets under the SARFAESI Act. The petitioner seeks an interim stay on the auction proceedings scheduled for next month. 
              </p>
              <div className="bg-white/60 p-5 border border-primary-navy/10">
                <span className="text-primary-navy font-black uppercase text-[10px] tracking-widest block mb-1">Current Status</span>
                <p className="text-sm font-medium">Court has granted a <span className="font-bold text-legal-green">Provisional Stay</span> pending the filing of an affidavit from the respondent.</p>
              </div>
              <div className="bg-legal-green-container/20 p-5 border border-legal-green/10">
                <span className="text-legal-green font-black uppercase text-[10px] tracking-widest block mb-1">Legal Strategy Recommended</span>
                <p className="text-sm font-medium">Ensure all original loan documentation is verified and indexed before the next hearing on Mar 25th. Focus on procedural lapses in the auction notification process.</p>
              </div>
            </div>
          </article>

          {/* Parties */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <PartyCard 
              title="Petitioners" 
              count={2} 
              icon={<UserIcon className="w-5 h-5" />} 
              parties={[
                { id: 1, name: 'State Bank of India', lawyer: 'M/s. Ramaswamy Associates' },
                { id: 2, name: 'Regional Asset Recovery Hub', lawyer: 'M/s. Ramaswamy Associates' }
              ]}
            />
            <PartyCard 
              title="Respondents" 
              count={2} 
              icon={<Building2 className="w-5 h-5" />} 
              parties={[
                { id: 1, name: 'Global Logistics Corp Pvt Ltd', lawyer: 'S. Venkateshan' },
                { id: 2, name: 'Authorized Officer, SBI', lawyer: 'In-Person' }
              ]}
            />
          </section>

          {/* Filed Documents */}
          <section>
            <div className="flex justify-between items-end mb-6">
              <h3 className="text-2xl font-extrabold text-primary-navy tracking-tight">Filed Documents</h3>
              <button className="text-primary-navy hover:text-legal-green flex items-center gap-1 font-bold text-xs uppercase tracking-wider transition-colors">
                <DownloadIcon className="w-4 h-4" />
                Download All
              </button>
            </div>
            <div className="overflow-x-auto bg-white border border-outline-ghost/15 shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-container-high/50 border-b border-outline-ghost/20">
                    <th className="p-5 text-[10px] uppercase font-black text-on-surface-variant tracking-wider">S.No</th>
                    <th className="p-5 text-[10px] uppercase font-black text-on-surface-variant tracking-wider">Filing Date</th>
                    <th className="p-5 text-[10px] uppercase font-black text-on-surface-variant tracking-wider">Document Type</th>
                    <th className="p-5 text-[10px] uppercase font-black text-on-surface-variant tracking-wider">Filed By</th>
                    <th className="p-5 text-[10px] uppercase font-black text-on-surface-variant tracking-wider">Counsel</th>
                    <th className="p-5 text-[10px] uppercase font-black text-on-surface-variant tracking-wider text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-ghost/15">
                  <DocRow sno="01" date="12 Jan 2024" type="Original Writ Petition" filedBy="Petitioner" counsel="Ramaswamy Assoc." />
                  <DocRow sno="02" date="05 Feb 2024" type="Counter Affidavit" filedBy="Respondent" counsel="S. Venkateshan" />
                  <DocRow sno="03" date="18 Feb 2024" type="Rejoinder Statement" filedBy="Petitioner" counsel="Ramaswamy Assoc." />
                </tbody>
              </table>
            </div>
          </section>
        </div>

        {/* Right Column: Timeline */}
        <aside className="lg:col-span-4 sticky top-24 gap-6 flex flex-col">
          <div className="bg-white p-8 border border-outline-ghost/15 shadow-sm">
            <div className="flex justify-between items-center mb-10 border-b border-outline-ghost/10 pb-6">
              <h3 className="text-2xl font-extrabold text-primary-navy tracking-tight">Case Timeline</h3>
              <span className="text-[10px] font-bold px-3 py-1 bg-legal-green text-white uppercase tracking-tighter">Disposed - Mar 25</span>
            </div>
            <div className="relative pl-8 border-l-2 border-primary-navy/10 space-y-10">
              <TimelineEvent 
                date="25 Mar 2025" 
                title="Hon'ble Justice R. Suresh Kumar" 
                desc="Writ petition allowed with directions to the respondent for asset valuation within 30 days. Stay made absolute until valuation report is filed."
                badge="FINAL DISPOSAL"
                status="final"
              />
              <TimelineEvent 
                date="14 Feb 2024" 
                title="Hon'ble Justice R. Suresh Kumar" 
                desc="Ad-interim stay granted. Parties directed to maintain status quo until next hearing. Registry to notify local DM."
                badge="INTERIM ORDER"
                status="interim"
              />
              <TimelineEvent 
                date="12 Jan 2024" 
                title="Filing Registry" 
                desc="Case scrutinized and registered as commercial writ petition. All defects cured by petitioner counsel."
                badge="CASE FILING"
                status="filing"
              />
            </div>
          </div>

          <div className="space-y-4">
            <SidebarAction icon={<Calendar className="w-5 h-5" />} label="Sync to Calendar" />
            <SidebarAction icon={<Share2 className="w-5 h-5" />} label="Share Case Dossier" />
          </div>
        </aside>
      </div>

      <footer className="mt-16 flex flex-col md:flex-row justify-between items-center gap-8 py-10 border-t border-outline-ghost/20">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-3 text-on-surface-variant">
            <Clock className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-widest">Case Content Last Updated: 15 Feb 2026, 14:30 IST</span>
          </div>
          <p className="text-[10px] text-on-surface-variant/60 ml-7 font-medium">Data fetched from e-Courts National Portal Integration</p>
        </div>
        <div className="flex gap-4">
          <button className="bg-white text-primary-navy border border-primary-navy/20 px-8 py-4 text-xs font-extrabold hover:bg-primary-navy/5 transition-all shadow-sm uppercase tracking-widest">
            DOWNLOAD FULL PDF DOSSIER
          </button>
          <button className="bg-primary-navy text-white px-8 py-4 text-xs font-extrabold flex items-center gap-3 hover:bg-primary-navy-container transition-all shadow-md uppercase tracking-widest active:scale-95">
            <RefreshCw className="w-4 h-4" />
            REFRESH CASE STATUS
          </button>
        </div>
      </footer>
    </div>
  );
}

function DetailItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[10px] uppercase font-bold text-on-surface-variant tracking-widest mb-1">{label}</p>
      <p className="text-sm font-bold text-primary-navy">{value}</p>
    </div>
  );
}

function FilterItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="hidden lg:block">
      <p className="text-[10px] uppercase font-bold text-on-surface-variant tracking-widest mb-1">{label}</p>
      <p className="text-sm font-bold text-primary-navy">{value}</p>
    </div>
  );
}

function PartyCard({ title, count, icon, parties }: { title: string; count: number; icon: React.ReactNode; parties: any[] }) {
  return (
    <div className="bg-surface-container-low p-8 border border-outline-ghost/10 group hover:shadow-sm transition-all hover:bg-white">
      <h3 className="text-sm uppercase font-black text-on-surface-variant tracking-widest mb-8 flex items-center justify-between">
        <span className="flex items-center gap-2">
          {icon}
          {title}
        </span>
        <span className="bg-primary-navy text-white text-[10px] px-2 py-0.5 tracking-tighter">{count} Parties</span>
      </h3>
      <ol className="space-y-8">
        {parties.map((p, i) => (
          <li key={i} className={cn(
            "flex gap-6 items-start pb-6 last:border-0 last:pb-0",
            i < parties.length - 1 && "border-b border-outline-ghost/15"
          )}>
            <span className="text-xs font-mono bg-primary-navy text-white w-6 h-6 flex items-center justify-center shrink-0">{p.id}</span>
            <div>
              <p className="text-lg font-bold text-primary-navy leading-tight">{p.name}</p>
              <p className="text-sm text-on-surface-variant mt-2 flex items-center gap-2 font-medium">
                <IdCard className="w-3 h-3" />
                Adv: {p.lawyer}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

function DocRow({ sno, date, type, filedBy, counsel }: { sno: string; date: string; type: string; filedBy: string; counsel: string }) {
  return (
    <tr className="hover:bg-surface-container-low transition-colors group">
      <td className="p-5 text-sm font-medium mono-text text-on-surface-variant">{sno}</td>
      <td className="p-5 text-sm font-semibold text-primary-navy">{date}</td>
      <td className="p-5 text-sm font-extrabold text-primary-navy">{type}</td>
      <td className="p-5 text-sm font-medium text-primary-navy">{filedBy}</td>
      <td className="p-5 text-sm italic font-medium text-on-surface-variant">{counsel}</td>
      <td className="p-5 text-right">
        <div className="hidden group-hover:flex justify-end gap-3 transition-all animate-in fade-in slide-in-from-right-2">
          <button className="text-primary-navy hover:text-legal-green transition-colors"><Eye className="w-4 h-4" /></button>
          <button className="text-primary-navy hover:text-legal-green transition-colors"><DownloadIcon className="w-4 h-4" /></button>
        </div>
        <span className="group-hover:hidden text-primary-navy font-bold text-[10px] tracking-widest">VIEW PDF</span>
      </td>
    </tr>
  );
}

function TimelineEvent({ date, title, desc, badge, status }: { date: string; title: string, desc: string, badge: string, status: string }) {
  return (
    <div className="relative">
      <span className={cn(
        "absolute -left-[41px] top-0 w-4 h-4 ring-4 ring-white border-2",
        status === 'final' ? "bg-legal-green border-legal-green" : 
        status === 'interim' ? "bg-primary-navy border-primary-navy" : "bg-outline-ghost border-outline-ghost"
      )}></span>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <p className={cn(
            "text-xs font-bold mono-text uppercase tracking-wider",
            status === 'final' ? "text-legal-green" : "text-primary-navy"
          )}>{date}</p>
          <span className={cn(
            "px-2 py-0.5 text-[10px] font-bold border",
            status === 'final' ? "bg-legal-green-container/20 text-legal-green border-legal-green/20" : "bg-surface-container-highest text-on-surface-variant border-transparent"
          )}>{badge}</span>
        </div>
        <div className="bg-surface-container-low p-5 group hover:bg-white transition-all border border-transparent hover:border-outline-ghost/20 shadow-none hover:shadow-sm">
          <p className="text-sm font-black text-primary-navy mb-1">{title}</p>
          <p className="text-xs text-on-surface-variant leading-relaxed mb-4 font-medium">{desc}</p>
          <button className="w-full bg-white border border-outline-ghost/30 text-[10px] font-black py-3 hover:bg-primary-navy hover:text-white transition-all uppercase tracking-[0.2em] active:scale-95">
            <FileText className="w-3 h-3 inline mr-2" />
            Download certified copy
          </button>
        </div>
      </div>
    </div>
  );
}

function SidebarAction({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button className="w-full bg-white border border-outline-ghost/20 p-4 flex items-center justify-between group hover:border-primary-navy transition-all shadow-none hover:shadow-md">
      <div className="flex items-center gap-3">
        <span className="text-primary-navy group-hover:scale-110 transition-transform">{icon}</span>
        <span className="text-[10px] font-black text-primary-navy uppercase tracking-widest">{label}</span>
      </div>
      <ChevronRight className="w-4 h-4 text-primary-navy opacity-0 group-hover:opacity-100 transition-opacity" />
    </button>
  );
}

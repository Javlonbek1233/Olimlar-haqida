import React, { useState } from 'react';
import { History, Calendar, Star, Compass, User, AlertCircle } from 'lucide-react';
import { Scientist } from '../types';
import { SCIENTISTS_DATA } from '../data/scientists';

interface TimelineGlobalProps {
  onSelectScientist: (id: string) => void;
}

export default function TimelineGlobal({ onSelectScientist }: TimelineGlobalProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'milestones'>('all');

  // Collate all timeline events from all scientists
  // Parse year strings to sort them chronologically
  const parseYear = (yearStr: string): number => {
    const cleanStr = yearStr.replace(/[^\d-]/g, '');
    if (cleanStr.includes('-')) {
      const parts = cleanStr.split('-');
      return parseInt(parts[0], 10) || 0;
    }
    return parseInt(cleanStr, 10) || 0;
  };

  // Build list of global events
  const globalEvents = SCIENTISTS_DATA.flatMap((s) =>
    s.timeline.map((event) => ({
      ...event,
      yearNum: parseYear(event.year),
      scientistName: s.name,
      scientistId: s.id,
      category: s.category,
      image: s.image,
    }))
  ).sort((a, b) => a.yearNum - b.yearNum);

  // Filter down to prime milestone representing discoveries (such as actual achievements)
  const milestoneEvents = globalEvents.filter(
    (e) => e.title.toLowerCase().includes('kashfiyot') || e.title.toLowerCase().includes('algebra') || e.title.toLowerCase().includes('nisbiylik') || e.title.toLowerCase().includes('jadval') || e.title.toLowerCase().includes('kod') || e.title.toLowerCase().includes('tib')
  );

  const displayedEvents = activeTab === 'all' ? globalEvents : milestoneEvents;

  return (
    <div className="bg-slate-50/50 dark:bg-[#0c0c0e] border border-slate-100 dark:border-white/5 rounded-2xl p-6 md:p-8 space-y-6 shadow-sm">
      
      {/* Title & Toggle Row */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-white/5 pb-5">
        <div className="flex items-center gap-2.5">
          <div className="flex items-center justify-center p-2 rounded-xl bg-amber-50 border border-amber-100 dark:bg-amber-500/10 dark:border-amber-500/20 text-amber-500">
            <History className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-slate-800 dark:text-gray-100">
              Jahon Tarixi Xronologiyasi
            </h3>
            <p className="text-xs text-slate-500 dark:text-gray-400">
              Olimlarning kashfiyotlari va tarixiy qadamlari ketma-ketligi
            </p>
          </div>
        </div>

        {/* Filters tab buttons */}
        <div className="flex bg-slate-100/80 dark:bg-white/5 p-1 rounded-lg border border-slate-200/40 dark:border-white/5 self-stretch sm:self-auto">
          <button
            onClick={() => setActiveTab('all')}
            className={`flex-1 sm:flex-none px-3.5 py-1.5 rounded text-xs font-semibold transition cursor-pointer ${
              activeTab === 'all'
                ? 'bg-white dark:bg-white/5 text-amber-500 border border-transparent dark:border-white/10 shadow-sm'
                : 'text-slate-600 dark:text-gray-400 hover:text-slate-800 dark:hover:text-gray-200'
            }`}
          >
            Barcha voqealar
          </button>
          <button
            onClick={() => setActiveTab('milestones')}
            className={`flex-1 sm:flex-none px-3.5 py-1.5 rounded text-xs font-semibold transition cursor-pointer ${
              activeTab === 'milestones'
                ? 'bg-white dark:bg-white/5 text-amber-500 border border-transparent dark:border-white/10 shadow-sm'
                : 'text-slate-600 dark:text-gray-400 hover:text-slate-800 dark:hover:text-gray-200'
            }`}
          >
            Yirik inqiloblar
          </button>
        </div>
      </div>

      {/* Vertical Interactive Timeline list */}
      <div className="relative border-l-2 border-slate-200 dark:border-white/5 ml-3.5 pl-6 md:pl-8 space-y-8 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
        {displayedEvents.map((event, idx) => (
          <div key={idx} className="relative group/global">
            
            {/* Pulsating timeline bullet pointer overlay */}
            <span className="absolute -left-[39px] md:-left-[47px] top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-white dark:bg-[#0c0c0e] border-2 border-amber-500 ring-4 ring-white dark:ring-[#0c0c0e] z-10 transition group-hover/global:scale-110">
              <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
            </span>

            {/* Bubble Year text */}
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 text-xs font-mono font-bold rounded border border-amber-100 dark:border-amber-500/20 mb-2">
              <Calendar className="w-3.5 h-3.5" />
              <span>{event.year}-yil</span>
            </div>

            {/* Content box details */}
            <div>
              <h4 className="text-sm sm:text-base font-bold text-slate-800 dark:text-gray-100 group-hover/global:text-amber-555 dark:group-hover/global:text-amber-500 transition-colors">
                {event.title}
              </h4>
              
              {/* Connected Scholar clicker info */}
              <button
                onClick={() => onSelectScientist(event.scientistId)}
                className="inline-flex items-center gap-1.5 mt-1 text-[11px] font-sans font-semibold text-slate-500 dark:text-gray-400 hover:text-amber-555 dark:hover:text-amber-500 transition cursor-pointer"
              >
                <User className="w-3" />
                <span>{event.scientistName}</span>
                <span className="px-1.5 py-0.2 rounded bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-gray-400 text-[9px] uppercase border border-slate-200/40 dark:border-white/5">
                  {event.category}
                </span>
              </button>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-300 leading-relaxed mt-2 max-w-2xl">
                {event.description}
              </p>
            </div>

          </div>
        ))}

        {displayedEvents.length === 0 && (
          <div className="flex flex-col items-center justify-center py-12 text-center text-slate-400">
            <AlertCircle className="w-8 h-8 text-slate-300" />
            <p className="text-xs mt-2">Ushbu turkumda voqealar topilmadi.</p>
          </div>
        )}
      </div>

    </div>
  );
}

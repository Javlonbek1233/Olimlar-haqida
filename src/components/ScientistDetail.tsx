import React, { useEffect, useRef } from 'react';
import { X, Heart, Calendar, MapPin, Award, Quote, Milestone, BookOpen, ExternalLink, Globe } from 'lucide-react';
import { Scientist } from '../types';

interface ScientistDetailProps {
  scientist: Scientist;
  isFavorite: boolean;
  onClose: () => void;
  onToggleFavorite: () => void;
}

export default function ScientistDetail({
  scientist,
  isFavorite,
  onClose,
  onToggleFavorite
}: ScientistDetailProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Close on escape key press
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Lock scroll bar on load
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="detail-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/80 backdrop-blur-md animate-fade-in"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={containerRef}
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-white dark:bg-[#0c0c0e] rounded-2xl border border-slate-250 dark:border-white/10 shadow-2xl overflow-hidden animate-zoom-in"
      >
        {/* Top Sticky Header for Mobile */}
        <div className="absolute top-4 right-4 z-20 flex gap-2">
          {/* Favorite heart inside detail */}
          <button
            onClick={onToggleFavorite}
            aria-label={isFavorite ? "Sevimli ro'yxatidan o'chirish" : "Sevimliga qo'shish"}
            className={`p-2 rounded-xl backdrop-blur-md transition shadow-md border cursor-pointer ${
              isFavorite
                ? 'bg-rose-500 text-white border-rose-600 hover:bg-rose-600'
                : 'bg-white/90 dark:bg-[#161618]/90 text-slate-500 dark:text-gray-200 hover:text-rose-550 border-slate-200/50 dark:border-white/10 hover:bg-white dark:hover:bg-[#161618]'
            }`}
          >
            <Heart className={`w-4 h-4 sm:w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
          </button>

          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Yopish"
            className="p-2 rounded-xl backdrop-blur-md bg-white/90 dark:bg-[#161618]/90 text-slate-500 dark:text-gray-200 hover:text-amber-500 dark:hover:text-amber-400 border border-slate-200/50 dark:border-white/10 hover:bg-white dark:hover:bg-[#161618] transition cursor-pointer"
          >
            <X className="w-4 h-4 sm:w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Contents container */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden">
          
          {/* Banner Hero Grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 border-b border-slate-100 dark:border-white/5">
            {/* Scientist portrait left aspect */}
            <div className="relative md:col-span-4 h-64 md:h-auto min-h-[240px] bg-slate-100 dark:bg-black/35 select-none">
              <img
                src={scientist.image}
                alt={scientist.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-900/80 to-transparent md:hidden" />
              
              {/* Abstract category color aura behind image */}
              <div className="absolute inset-0 bg-amber-500/5 mix-blend-overlay" />
            </div>

            {/* Quick overview detail text right aspect */}
            <div className="md:col-span-8 p-6 sm:p-8 flex flex-col justify-center bg-slate-50/50 dark:bg-transparent">
              <span className="inline-flex self-start px-2.5 py-1 text-[11px] font-mono tracking-wider font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-500/10 rounded border border-amber-100 dark:border-amber-500/20 uppercase mb-3">
                {scientist.category}
              </span>
              
              <h2 id="detail-title" className="text-2xl sm:text-3.5xl font-bold font-sans text-slate-800 dark:text-gray-100 leading-tight">
                {scientist.name}
              </h2>
              {scientist.originalName && (
                <p className="text-xs sm:text-sm font-medium text-slate-505 dark:text-gray-400 font-sans italic mt-1">
                  {scientist.originalName}
                </p>
              )}

              {/* Quick life meta grid widgets */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                <div className="flex items-start gap-2">
                  <Calendar className="w-4 h-4 text-amber-500 mt-1 shrink-0" />
                  <div>
                    <h4 className="text-[10px] font-mono font-bold text-slate-400 dark:text-gray-500 uppercase tracking-wider">Yillar</h4>
                    <p className="text-xs font-semibold text-slate-705 dark:text-gray-300">{scientist.period}</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-amber-500 mt-1 shrink-0" />
                  <div>
                    <h4 className="text-[10px] font-mono font-bold text-slate-400 dark:text-gray-500 uppercase tracking-wider">Tug'ilgan joyi</h4>
                    <p className="text-xs font-semibold text-slate-705 dark:text-gray-300 truncate max-w-44" title={scientist.birthPlace}>{scientist.birthPlace}</p>
                  </div>
                </div>

                <div className="flex items-start gap-2 col-span-2 md:col-span-1">
                  <Globe className="w-4 h-4 text-amber-500 mt-1 shrink-0" />
                  <div>
                    <h4 className="text-[10px] font-mono font-bold text-slate-400 dark:text-gray-500 uppercase tracking-wider">Tug'ilgan sanasi</h4>
                    <p className="text-xs font-semibold text-slate-705 dark:text-gray-300">{scientist.birthDate}</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-8">
            
            {/* Scientific Quote section */}
            {scientist.quote && (
              <div className="relative p-5 sm:p-6 bg-slate-50 dark:bg-white/5 rounded-2xl border border-slate-100 dark:border-white/5 overflow-hidden">
                <div className="absolute top-2 left-2 text-amber-500/10 pointer-events-none">
                  <Quote className="w-16 h-16 fill-current" />
                </div>
                <p className="relative text-sm sm:text-base font-medium text-slate-700 dark:text-gray-300 italic font-sans pl-6 border-l-2 border-amber-500 line-height-relaxed">
                  "{scientist.quote}"
                </p>
              </div>
            )}

            {/* In-depth Biography narrative */}
            <section className="space-y-3">
              <h3 className="text-sm uppercase font-mono font-bold tracking-wider text-slate-400 dark:text-gray-550 flex items-center gap-1.5 border-b border-slate-100 dark:border-white/5 pb-2">
                <BookOpen className="w-4 h-4 text-amber-500" />
                Biografiya & Ilmiy hayoti
              </h3>
              <p className="text-sm text-slate-600 dark:text-gray-300 font-sans leading-relaxed text-justify">
                {scientist.longDesc}
              </p>
            </section>

            {/* Grid of Achievements & Discoveries */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              
              {/* Left Column: Key Scientific Breakthroughs */}
              <section className="space-y-4">
                <h3 className="text-sm uppercase font-mono font-bold tracking-wider text-slate-400 dark:text-gray-550 flex items-center gap-1.5 pb-2 border-b border-slate-100 dark:border-white/5">
                  <Award className="w-4 h-4 text-amber-500" />
                  Yirik kashfiyotlar
                </h3>
                <ul className="space-y-3">
                  {scientist.discoveries.map((discovery, idx) => (
                    <li key={idx} className="flex gap-2.5 items-start">
                      <div className="flex h-5 w-5 items-center justify-center rounded bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 shrink-0 mt-0.5 border border-amber-100 dark:border-amber-500/20">
                        <span className="text-[10px] font-bold font-mono">{idx + 1}</span>
                      </div>
                      <span className="text-xs sm:text-sm text-slate-705 dark:text-gray-300 font-medium font-sans">
                        {discovery}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Right Column: Fields of Specialties tags */}
              <section className="space-y-4">
                <h3 className="text-sm uppercase font-mono font-bold tracking-wider text-slate-400 dark:text-gray-550 flex items-center gap-1.5 pb-2 border-b border-slate-100 dark:border-white/5">
                  <Milestone className="w-4 h-4 text-amber-500" />
                  Ilmiy mutaxassisliklar
                </h3>
                <div className="flex flex-wrap gap-2">
                  {scientist.fieldOfStudy.map((field, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center px-3 py-1.5 bg-slate-50 dark:bg-white/5 border border-slate-200/40 dark:border-white/5 rounded text-xs font-semibold text-slate-707 dark:text-gray-300 font-sans"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-2" />
                      {field}
                    </span>
                  ))}
                </div>

                {scientist.wikiUrl && (
                  <div className="pt-4">
                    <a
                      href={scientist.wikiUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 dark:text-amber-400 hover:text-amber-750 dark:hover:text-amber-300 transition"
                    >
                      <span>Vikipediyada o'qish (To'liq maqola)</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
              </section>

            </div>

            {/* Vertical Chronology Line (Timeline) */}
            <section className="space-y-5 pt-3">
              <h3 className="text-sm uppercase font-mono font-bold tracking-wider text-slate-400 dark:text-gray-550 flex items-center gap-1.5 pb-2 border-b border-slate-100 dark:border-white/5">
                <Calendar className="w-4 h-4 text-amber-500" />
                Hayot xronologiyasi (Timeline)
              </h3>
              
              <div className="relative border-l border-slate-200 dark:border-white/10 ml-3 pl-6 space-y-6">
                {scientist.timeline.map((event, idx) => (
                  <div key={idx} className="relative group">
                    {/* Circle Node indicator on the line */}
                    <span className="absolute -left-[31px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-white dark:bg-[#0c0c0e] border-2 border-amber-500 ring-4 ring-white dark:ring-[#0c0c0e] z-10 transition">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                    </span>
                    
                    {/* Event Year banner box */}
                    <div className="inline-block px-2.5 py-0.5 bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 text-[10px] font-mono font-bold rounded border border-amber-100 dark:border-amber-500/20 mb-1.5">
                      {event.year}-yil
                    </div>
                    
                    <h4 className="text-sm font-bold text-slate-800 dark:text-gray-200">
                      {event.title}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-gray-450 leading-relaxed mt-1">
                      {event.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

          </div>

        </div>

        {/* Bottom footer controls */}
        <div className="sticky bottom-0 z-20 flex justify-end gap-3 px-6 py-4 border-t bg-slate-50 dark:bg-[#050507] border-slate-100 dark:border-white/5">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-bold text-slate-600 dark:text-gray-300 hover:text-slate-800 dark:hover:text-white transition cursor-pointer"
          >
            Yopish
          </button>
        </div>

      </div>
    </div>
  );
}

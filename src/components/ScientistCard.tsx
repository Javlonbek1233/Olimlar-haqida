import React from 'react';
import { Heart, ArrowRight, Award, Calendar, MapPin, Milestone } from 'lucide-react';
import { Scientist } from '../types';

interface ScientistCardProps {
  key?: string;
  scientist: Scientist;
  isFavorite: boolean;
  onSelect: () => void;
  onToggleFavorite: (e: React.MouseEvent) => void;
}

export default function ScientistCard({
  scientist,
  isFavorite,
  onSelect,
  onToggleFavorite
}: ScientistCardProps) {
  
  // Custom theme colors for categories for premium visual aesthetics
  const getCategoryTheme = (category: string) => {
    switch (category) {
      case 'Matematika':
        return {
          bg: 'bg-emerald-50 dark:bg-emerald-950/30',
          text: 'text-emerald-700 dark:text-emerald-400',
          border: 'border-emerald-150 dark:border-emerald-800/50',
          gradient: 'from-emerald-600 to-teal-600',
        };
      case 'Tibbiyot':
        return {
          bg: 'bg-rose-50 dark:bg-rose-950/30',
          text: 'text-rose-700 dark:text-rose-400',
          border: 'border-rose-150 dark:border-rose-800/50',
          gradient: 'from-rose-600 to-pink-600',
        };
      case 'Astronomiya':
        return {
          bg: 'bg-violet-50 dark:bg-violet-950/30',
          text: 'text-violet-700 dark:text-violet-400',
          border: 'border-violet-150 dark:border-violet-800/50',
          gradient: 'from-violet-600 to-indigo-600',
        };
      case 'Fizika':
        return {
          bg: 'bg-amber-50 dark:bg-amber-950/30',
          text: 'text-amber-700 dark:text-amber-400',
          border: 'border-amber-150 dark:border-amber-800/50',
          gradient: 'from-amber-600 to-orange-500',
        };
      case 'Kimyo':
        return {
          bg: 'bg-teal-50 dark:bg-teal-950/30',
          text: 'text-teal-700 dark:text-teal-400',
          border: 'border-teal-150 dark:border-teal-800/50',
          gradient: 'from-teal-600 to-emerald-500',
        };
      case 'Biologiya':
        return {
          bg: 'bg-green-50 dark:bg-green-950/30',
          text: 'text-green-700 dark:text-green-400',
          border: 'border-green-150 dark:border-green-800/50',
          gradient: 'from-green-600 to-lime-600',
        };
      case 'Informatika':
        return {
          bg: 'bg-indigo-50 dark:bg-indigo-950/30',
          text: 'text-indigo-700 dark:text-indigo-400',
          border: 'border-indigo-150 dark:border-indigo-800/50',
          gradient: 'from-indigo-600 to-purple-600',
        };
      default:
        return {
          bg: 'bg-slate-50 dark:bg-slate-900',
          text: 'text-slate-700 dark:text-slate-300',
          border: 'border-slate-200 dark:border-slate-800',
          gradient: 'from-slate-600 to-slate-800',
        };
    }
  };

  const themeColors = getCategoryTheme(scientist.category);

  return (
    <div
      id={`scientist-card-${scientist.id}`}
      className="group relative flex flex-col h-full bg-white dark:bg-[#161618] rounded-2xl border border-slate-150 dark:border-white/5 overflow-hidden shadow-sm hover:shadow-xl hover:border-amber-250 dark:hover:border-amber-500/25 transition-all duration-300 md:hover:-translate-y-1.5"
    >
      {/* Top Banner with Image Representation */}
      <div className="relative h-52 w-full overflow-hidden bg-slate-100 dark:bg-black/40 select-none shrink-0 border-b border-transparent dark:border-white/5">
        
        {/* Category Pill Tag */}
        <span className={`absolute top-3 left-3 z-10 px-2.5 py-1 text-[10px] font-bold tracking-wider rounded uppercase shadow-sm ${themeColors.bg} ${themeColors.text} border ${themeColors.border}`}>
          {scientist.category}
        </span>

        {/* Favorite Heart Button */}
        <button
          onClick={onToggleFavorite}
          aria-label={isFavorite ? "Sevimli ro'yxatidan o'chirish" : "Sevimliga qo'shish"}
          className={`absolute top-3 right-3 z-10 p-2 rounded-lg backdrop-blur-md transition-all duration-200 shadow-sm border ${
            isFavorite
              ? 'bg-rose-500 text-white border-rose-600 hover:bg-rose-600'
              : 'bg-white/85 dark:bg-black/70 text-slate-500 dark:text-gray-400 hover:text-rose-500 border-slate-200/50 dark:border-white/10 hover:bg-white dark:hover:bg-[#161618]'
          }`}
        >
          <Heart className={`w-4 h-4 ${isFavorite ? 'fill-current scale-110' : ''}`} />
        </button>

        {/* Scientist Image portrait */}
        <img
          src={scientist.image}
          alt={scientist.name}
          referrerPolicy="no-referrer"
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500 ease-out"
        />

        {/* Subtle Decorative Gradient Mask on bottom image */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

        {/* Quick Period HUD */}
        <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center text-white text-[11px] font-mono drop-shadow-md">
          <span className="flex items-center gap-1 font-semibold text-gray-200">
            <Calendar className="w-3.5 h-3.5 text-amber-500" />
            {scientist.period} yy.
          </span>
          <span className="flex items-center gap-1 text-gray-300 truncate max-w-[50%]">
            <MapPin className="w-3 h-3 text-amber-500 shrink-0" />
            <span className="truncate">{scientist.birthPlace.split(',').pop()?.trim()}</span>
          </span>
        </div>
      </div>

      {/* Card Contents */}
      <div className="flex flex-col flex-1 p-5">
        
        {/* Full Scholar Name */}
        <h3 className="text-lg font-bold text-slate-800 dark:text-gray-100 group-hover:text-amber-500 dark:group-hover:text-amber-500 transition-colors font-sans leading-snug">
          {scientist.name}
        </h3>
        {scientist.originalName && (
          <p className="text-[11px] font-medium text-slate-400 dark:text-gray-500 font-sans italic mt-0.5 truncate">
            {scientist.originalName}
          </p>
        )}

        {/* Short dynamic description */}
        <p className="text-xs text-slate-600 dark:text-gray-300 mt-3 font-sans leading-relaxed line-clamp-3 flex-1">
          {scientist.shortDesc}
        </p>

        {/* Specific subfields rendering as badges */}
        <div className="flex flex-wrap gap-1.5 mt-4">
          {scientist.fieldOfStudy.slice(0, 3).map((field, i) => (
            <span
              key={i}
              className="px-2 py-0.5 bg-slate-50 dark:bg-white/5 text-slate-500 dark:text-gray-400 rounded text-[10px] font-mono border border-slate-100 dark:border-white/5"
            >
              {field}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-slate-100 dark:bg-white/5 my-4" />

        {/* Card Footer actions */}
        <div className="flex items-center justify-between mt-auto">
          {/* Scientific kashfiyot counts */}
          <span className="text-[10px] font-mono font-bold text-amber-600 dark:text-amber-500 uppercase tracking-wider flex items-center gap-1">
            <Milestone className="w-3 h-3 text-amber-500 shrink-0" />
            {scientist.discoveries.length} TA ASOSIY KASHFIYOT
          </span>

          <button
            onClick={onSelect}
            className="flex items-center gap-1 px-3 py-1.5 bg-slate-50 dark:bg-white/5 text-slate-705 dark:text-gray-300 text-xs font-semibold rounded hover:bg-amber-500 hover:text-black dark:hover:bg-amber-500 dark:hover:text-black transition-all group-hover:translate-x-0.5 shadow-sm cursor-pointer"
          >
            <span>Batafsil</span>
            <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition" />
          </button>
        </div>

      </div>
    </div>
  );
}

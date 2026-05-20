import React, { useState, useRef, useEffect } from 'react';
import { Search, Sun, Moon, Heart, Sparkles, X, Binary, HeartPulse, Orbit, Atom, FlaskConical, Dna, Cpu, Compass } from 'lucide-react';
import { Scientist, Theme } from '../types';
import { SCIENTISTS_DATA, CATEGORIES } from '../data/scientists';

interface NavbarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  theme: Theme;
  toggleTheme: () => void;
  favorites: string[];
  showFavoritesOnly: boolean;
  setShowFavoritesOnly: (show: boolean) => void;
  onSelectScientist: (id: string) => void;
}

export default function Navbar({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  theme,
  toggleTheme,
  favorites,
  showFavoritesOnly,
  setShowFavoritesOnly,
  onSelectScientist
}: NavbarProps) {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState<Scientist[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Filter suggestions based on searchQuery
  useEffect(() => {
    if (searchQuery.trim().length === 0) {
      setSuggestions([]);
      return;
    }

    const query = searchQuery.toLowerCase();
    const filtered = SCIENTISTS_DATA.filter(
      (s) =>
        s.name.toLowerCase().includes(query) ||
        (s.originalName && s.originalName.toLowerCase().includes(query)) ||
        s.shortDesc.toLowerCase().includes(query) ||
        s.category.toLowerCase().includes(query)
    );
    setSuggestions(filtered.slice(0, 5)); // Limit to 5 suggestions
  }, [searchQuery]);

  // Close suggestions if clicked outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Map category ID to its respective Lucide icon
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Binary': return <Binary className="w-4 h-4" />;
      case 'HeartPulse': return <HeartPulse className="w-4 h-4" />;
      case 'Orbit': return <Orbit className="w-4 h-4" />;
      case 'Atom': return <Atom className="w-4 h-4" />;
      case 'FlaskConical': return <FlaskConical className="w-4 h-4" />;
      case 'Dna': return <Dna className="w-4 h-4" />;
      case 'Cpu': return <Cpu className="w-4 h-4" />;
      default: return <Sparkles className="w-4 h-4" />;
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-colors duration-300 border-b bg-white/90 dark:bg-[#0c0c0e]/95 backdrop-blur-md border-slate-200 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Navbar Row */}
        <div className="flex items-center justify-between h-16 sm:h-20 gap-4">
          
          {/* Brand/Title */}
          <div className="flex items-center gap-3 cursor-pointer shrink-0" onClick={() => {
            setSearchQuery('');
            setSelectedCategory('all');
            setShowFavoritesOnly(false);
          }}>
            <div className="flex items-center justify-center w-8 h-8 rounded bg-amber-500 text-black font-bold font-sans shadow-md shadow-amber-500/20">
              <span className="text-lg">Σ</span>
            </div>
            <div>
              <h1 className="text-base sm:text-xl font-bold tracking-tight text-slate-800 dark:text-gray-100 font-sans">
                Mashhur Olimlar <span className="text-amber-500">Ensiklopediyasi</span>
              </h1>
              <p className="text-[9px] sm:text-[10px] text-amber-600 dark:text-amber-500 font-mono font-medium uppercase tracking-wider">
                Milliy & Global Ensiklopediya
              </p>
            </div>
          </div>

          {/* Search Box & Autocomplete */}
          <div ref={dropdownRef} className="relative flex-1 max-w-md mx-2 sm:mx-6">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400 dark:text-gray-400">
                <Search className="w-4 h-4" />
              </div>
              <input
                type="text"
                placeholder="Olimlarni qidirish..."
                value={searchQuery}
                aria-label="Qidirish"
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowSuggestions(true);
                  if (showFavoritesOnly) setShowFavoritesOnly(false);
                }}
                onFocus={() => setShowSuggestions(true)}
                className="w-full pl-10 pr-8 py-2 text-sm text-slate-900 dark:text-gray-100 placeholder-slate-400 dark:placeholder-gray-500 bg-slate-50 dark:bg-[#161618] border border-slate-200 dark:border-white/10 rounded-full focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200 font-sans"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  aria-label="Tozalash"
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400 hover:text-slate-600 dark:hover:text-amber-400"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Suggestions Autocomplete Dropdown */}
            {showSuggestions && suggestions.length > 0 && (
              <div className="absolute left-0 right-0 mt-2 bg-white dark:bg-[#161618] border border-slate-200 dark:border-white/10 rounded-xl shadow-2xl overflow-hidden z-50 animate-fade-in-down">
                <div className="px-3 py-2 text-[10px] uppercase tracking-wider font-mono font-semibold text-slate-400 dark:text-gray-500 border-b border-slate-100 dark:border-white/5 flex justify-between items-center bg-slate-50/50 dark:bg-black/20">
                  <span>Tavsiyalar</span>
                  <span className="text-amber-500 font-bold">{suggestions.length} ta topildi</span>
                </div>
                <div className="max-h-80 overflow-y-auto">
                  {suggestions.map((scientist) => (
                    <button
                      key={scientist.id}
                      onClick={() => {
                        onSelectScientist(scientist.id);
                        setShowSuggestions(false);
                      }}
                      className="w-full text-left px-4 py-2.5 hover:bg-slate-50 dark:hover:bg-white/5 flex gap-3 items-center border-b border-slate-100 dark:border-white/5 last:border-0 transition-colors"
                    >
                      <img
                        src={scientist.image}
                        alt={scientist.name}
                        referrerPolicy="no-referrer"
                        className="w-8 h-8 rounded object-cover shrink-0 border border-slate-200 dark:border-white/10"
                      />
                      <div className="overflow-hidden">
                        <div className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-gray-100 truncate">
                          {scientist.name}
                        </div>
                        <div className="text-[10px] text-slate-400 dark:text-gray-400 truncate flex items-center gap-1.5">
                          <span className="px-1.5 py-0.5 rounded bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 font-mono text-[9px] font-bold">
                            {scientist.category}
                          </span>
                          <span>•</span>
                          <span>{scientist.period} yy.</span>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
            {showSuggestions && searchQuery.trim().length > 0 && suggestions.length === 0 && (
              <div className="absolute left-0 right-0 mt-2 p-4 bg-white dark:bg-[#161618] border border-slate-200 dark:border-white/10 rounded-xl shadow-2xl text-center z-50">
                <p className="text-xs text-slate-500 dark:text-gray-400">Hech qanday ma'lumot topilmadi 😕</p>
              </div>
            )}
          </div>

          {/* Action Tools: Favorites & Dark Mode */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            {/* Favorites Toggle Button */}
            <button
              id="favorites-toggle-btn"
              onClick={() => {
                setShowFavoritesOnly(!showFavoritesOnly);
                if (searchQuery) setSearchQuery('');
              }}
              title={showFavoritesOnly ? "Barcha olimlarni ko'rsatish" : "Sevimlilar ro'yxati"}
              className={`relative p-2.5 rounded-xl border transition-all duration-200 flex items-center gap-1.5 ${
                showFavoritesOnly
                  ? 'bg-rose-50 dark:bg-rose-500/10 border-rose-200 dark:border-rose-500/30 text-rose-600 dark:text-rose-400 shadow-sm'
                  : 'bg-slate-50 dark:bg-[#161618] border-slate-200 dark:border-white/10 text-slate-600 dark:text-gray-300 hover:bg-slate-100 dark:hover:bg-white/5'
              }`}
            >
              <Heart className={`w-4 h-4 sm:w-5 h-5 ${showFavoritesOnly ? 'fill-rose-500 text-rose-500' : ''}`} />
              <span className="hidden md:inline font-sans text-xs font-semibold">Sevimlilar</span>
              {favorites.length > 0 && (
                <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-rose-500 text-[10px] font-bold text-white ring-2 ring-white dark:ring-slate-900">
                  {favorites.length}
                </span>
              )}
            </button>

            {/* Dark/Light Theme Toggle */}
            <button
              id="theme-toggle-btn"
              onClick={toggleTheme}
              title={theme === 'light' ? 'Tungi rejim' : 'Kunduzgi rejim'}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#161618] text-slate-600 dark:text-amber-500 hover:bg-slate-100 dark:hover:bg-white/5 transition"
            >
              {theme === 'light' ? <Moon className="w-4 h-4 sm:w-5 h-5" /> : <Sun className="w-4 h-4 sm:w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Category Filter Horizontal Menu */}
        <div className="flex items-center overflow-x-auto py-3 gap-2 border-t border-slate-100 dark:border-white/5 no-scrollbar">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id);
                if (showFavoritesOnly) setShowFavoritesOnly(false);
              }}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                selectedCategory === cat.id && !showFavoritesOnly
                  ? 'bg-amber-500/10 dark:bg-amber-500/15 text-amber-500 border border-amber-500/30 scale-102 font-semibold'
                  : 'bg-slate-50 dark:bg-white/5 text-slate-600 dark:text-gray-400 hover:bg-slate-100 dark:hover:text-gray-200 border border-slate-200/50 dark:border-white/5'
              }`}
            >
              {getCategoryIcon(cat.icon)}
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

      </div>
    </header>
  );
}

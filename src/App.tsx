import React, { useState, useEffect } from 'react';
import { Sparkles, Heart, Compass, BookOpen, Download, HardDrive, Cpu, Terminal, RefreshCw, AlertCircle, Info, ExternalLink } from 'lucide-react';
import { Scientist, Theme } from './types';
import { SCIENTISTS_DATA, GENERAL_STATS } from './data/scientists';
import Navbar from './components/Navbar';
import ScientistCard from './components/ScientistCard';
import ScientistDetail from './components/ScientistDetail';
import TimelineGlobal from './components/TimelineGlobal';

export default function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const [theme, setTheme] = useState<Theme>('light');
  const [favorites, setFavorites] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showFavoritesOnly, setShowFavoritesOnly] = useState<boolean>(false);
  const [selectedScientistId, setSelectedScientistId] = useState<string | null>(null);
  const [showDeployGuide, setShowDeployGuide] = useState<boolean>(false);

  // Initialize theme and favorites from localStorage on mount
  useEffect(() => {
    try {
      // 1. Theme configuration
      const storedTheme = localStorage.getItem('theme') as Theme;
      if (storedTheme) {
        setTheme(storedTheme);
        if (storedTheme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      } else {
        // Fallback to system preferences
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (prefersDark) {
          setTheme('dark');
          document.documentElement.classList.add('dark');
        }
      }

      // 2. Favorites configuration
      const storedFavorites = localStorage.getItem('favorites');
      if (storedFavorites) {
        setFavorites(JSON.parse(storedFavorites));
      }
    } catch (e) {
      console.error('Error reading localStorage data', e);
    }

    // Simulate an elegant dynamic database loading sequence
    const timer = setTimeout(() => {
      setLoading(false);
    }, 750);

    return () => clearTimeout(timer);
  }, []);

  // Sync favorites change with localStorage
  const saveFavorites = (newFavorites: string[]) => {
    setFavorites(newFavorites);
    try {
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
    } catch (e) {
      console.error('Error saving favorites to localStorage', e);
    }
  };

  const toggleFavorite = (id: string) => {
    if (favorites.includes(id)) {
      saveFavorites(favorites.filter(favId => favId !== id));
    } else {
      saveFavorites([...favorites, id]);
    }
  };

  // Toggle Dark/Light state
  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
    if (nextTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // Filter scientists based on parameters (search, category, favorites)
  const filteredScientists = SCIENTISTS_DATA.filter((scientist) => {
    const matchesSearch =
      scientist.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (scientist.originalName && scientist.originalName.toLowerCase().includes(searchQuery.toLowerCase())) ||
      scientist.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      scientist.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      scientist.discoveries.some((d) => d.toLowerCase().includes(searchQuery.toLowerCase())) ||
      scientist.fieldOfStudy.some((f) => f.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory = selectedCategory === 'all' || scientist.category === selectedCategory;
    const matchesFavorites = !showFavoritesOnly || favorites.includes(scientist.id);

    return matchesSearch && matchesCategory && matchesFavorites;
  });

  const activeScientist = SCIENTISTS_DATA.find((s) => s.id === selectedScientistId);

  return (
    <div className="min-h-screen transition-colors duration-300 bg-slate-50 text-slate-900 dark:bg-[#09090b] dark:text-gray-100 flex flex-col font-sans">
      
      {/* 1. Header Navigation HUD */}
      <Navbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        theme={theme}
        toggleTheme={toggleTheme}
        favorites={favorites}
        showFavoritesOnly={showFavoritesOnly}
        setShowFavoritesOnly={setShowFavoritesOnly}
        onSelectScientist={(id) => setSelectedScientistId(id)}
      />

      {/* 2. Page Loading Overlay Screen */}
      {loading ? (
        <div className="flex-1 flex flex-col items-center justify-center py-24 select-none animate-pulse">
          <div className="relative flex items-center justify-center">
            {/* Pulsing ring outline */}
            <div className="w-16 h-16 border-4 border-amber-500/25 dark:border-amber-500/25 border-t-amber-500 dark:border-t-amber-500 rounded-full animate-spin" />
            <Compass className="absolute w-6 h-6 text-amber-500 dark:text-amber-500 animate-pulse" />
          </div>
          <p className="mt-4 text-xs font-mono font-bold text-amber-600 dark:text-amber-500 tracking-wider uppercase">
            Ensiklopediya yuklanmoqda...
          </p>
        </div>
      ) : (
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-10">
          
          {/* Hero Banner greeting card */}
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-neutral-900 via-[#0c0c0e] to-neutral-950 text-white p-6 sm:p-10 border border-slate-200/10 dark:border-white/5 shadow-xl">
            {/* Abstract ambient pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.08),transparent)] pointer-events-none" />
            
            <div className="relative max-w-3xl space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-lg text-xs font-mono font-bold text-amber-400">
                <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                Interaktiv Bilimlar Xazinasi
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight font-sans">
                Mashhur Olimlar <span className="text-amber-500">Ensiklopediyasi</span>
              </h2>
              <p className="text-sm sm:text-base text-gray-300 max-w-2xl font-sans leading-relaxed">
                Tarix davomida buyuk kashfiyotlar qilgan, algebra, tibbiyot, fizika, kimyo va informatika kabi ilmiy sohalarga asos solgan buyuk va daho olimlarning hayoti va ularning boy merosini o'rganing.
              </p>
            </div>

            {/* General Overview HUD counters */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-slate-200/10 dark:border-white/5">
              <div className="p-3 bg-white/5 rounded-xl border border-white/5 backdrop-blur-sm">
                <h4 className="text-[10px] font-mono text-slate-450 dark:text-gray-500 uppercase tracking-widest">Bancha olimlar</h4>
                <p className="text-xl sm:text-2xl font-bold font-sans mt-0.5 text-amber-400">{GENERAL_STATS.totalScientists} ta daho</p>
              </div>
              <div className="p-3 bg-white/5 rounded-xl border border-white/5 backdrop-blur-sm">
                <h4 className="text-[10px] font-mono text-slate-450 dark:text-gray-500 uppercase tracking-widest">Turli sohalar</h4>
                <p className="text-xl sm:text-2xl font-bold font-sans mt-0.5 text-amber-400">{GENERAL_STATS.categoriesCount} ta yo'nalish</p>
              </div>
              <div className="p-3 bg-white/5 rounded-xl border border-white/5 backdrop-blur-sm">
                <h4 className="text-[10px] font-mono text-slate-450 dark:text-gray-500 uppercase tracking-widest">Xronologik Davr</h4>
                <p className="text-xl sm:text-2xl font-bold font-sans mt-0.5 text-amber-400">{GENERAL_STATS.earliestPeriod}–{GENERAL_STATS.latestPeriod}</p>
              </div>
              <div className="p-3 bg-white/5 rounded-xl border border-white/5 backdrop-blur-sm">
                <h4 className="text-[10px] font-mono text-slate-450 dark:text-gray-500 uppercase tracking-widest">Siz saqlagan</h4>
                <p className="text-xl sm:text-2xl font-bold font-sans mt-0.5 text-amber-400 flex items-center gap-1.5">
                  <Heart className="w-4 h-4 text-rose-500 fill-current shrink-0" />
                  <span>{favorites.length} ta olim</span>
                </p>
              </div>
            </div>
          </div>

          {/* Grid View of main filtered list */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row items-baseline justify-between gap-2 border-b border-slate-200/50 dark:border-white/5 pb-3">
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-amber-500" />
                <h3 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-gray-100">
                  {showFavoritesOnly ? "Sizning sevimlilaringiz" : selectedCategory === 'all' ? 'Entsiklopediya qahramonlari' : `${selectedCategory} sohasidagi olimlar`}
                </h3>
                <span className="px-2 py-0.5 bg-slate-100 dark:bg-white/5 text-slate-655 dark:text-gray-400 rounded text-xs font-mono font-bold border border-slate-205/10 dark:border-white/5">
                  {filteredScientists.length} ta
                </span>
              </div>
              
              {/* Reset constraints if active */}
              {(selectedCategory !== 'all' || searchQuery || showFavoritesOnly) && (
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSearchQuery('');
                    setShowFavoritesOnly(false);
                  }}
                  className="text-xs font-mono font-bold text-amber-600 dark:text-amber-505 hover:text-amber-400 flex items-center gap-1 mt-1 transition cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  Filtrlarni tozalash
                </button>
              )}
            </div>

            {/* Empty State placeholder */}
            {filteredScientists.length === 0 ? (
              <div className="p-12 text-center border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-2xl flex flex-col items-center justify-center max-w-md mx-auto space-y-4">
                <div className="p-3 bg-slate-100 dark:bg-slate-850 text-slate-400 dark:text-slate-600 rounded-xl">
                  <AlertCircle className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-750 dark:text-slate-200">Mos olim topilmadi</h4>
                  <p className="text-xs text-slate-500 mt-1">Siz izlagan harf, jumla yoki parametrga tegishli ilm dahoasi topilmadi. Qidiruv so'zini o'zgartirib ko'ring yoki filtrlarni tozalang.</p>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredScientists.map((scientist) => (
                  <ScientistCard
                    key={scientist.id}
                    scientist={scientist}
                    isFavorite={favorites.includes(scientist.id)}
                    onSelect={() => setSelectedScientistId(scientist.id)}
                    onToggleFavorite={(e) => {
                      e.stopPropagation();
                      toggleFavorite(scientist.id);
                    }}
                  />
                ))}
              </div>
            )}
          </div>

          {/* 3. Global History Timeline view */}
          <TimelineGlobal onSelectScientist={(id) => setSelectedScientistId(id)} />

          {/* 4. Help and Deploy Manual Panel at Bottom */}
          <section className="bg-white dark:bg-[#0c0c0e] border border-slate-200/60 dark:border-white/5 rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm">
            <button
              id="deploy-guide-toggle"
              onClick={() => setShowDeployGuide(!showDeployGuide)}
              className="w-full flex items-center justify-between text-left group cursor-pointer"
            >
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-250/20 dark:border-white/5 text-slate-600 dark:text-gray-400">
                  <Terminal className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-850 dark:text-gray-200 group-hover:text-amber-500 dark:group-hover:text-amber-400 transition">
                    Tizim Yo‘riqnomasi & Deploy qo‘llanmasi (Deploy Guide)
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-gray-400">Ilovani qanday yig'ish, kengaytirish va internetga ulash mumkinligini ko'rish</p>
                </div>
              </div>
              <span className="text-xs font-mono font-bold text-amber-600 dark:text-amber-555 bg-amber-50 dark:bg-amber-500/10 px-2.5 py-1 rounded-lg">
                {showDeployGuide ? "Yopish ✕" : "O'qish ⚡"}
              </span>
            </button>

            {showDeployGuide && (
              <div className="pt-4 border-t border-slate-100 dark:border-white/5 space-y-6 text-xs sm:text-sm text-slate-600 dark:text-gray-300 leading-relaxed font-sans">
                
                {/* JSON struct section */}
                <div className="space-y-2">
                  <h4 className="font-bold text-slate-800 dark:text-gray-200 flex items-center gap-1.5 text-xs uppercase tracking-wide">
                    <HardDrive className="w-3.5 h-3.5 text-amber-500" />
                    1. JSON Data Tizimi Strukturasi (Database schema)
                  </h4>
                  <p>Biz barcha ma’lumotlarni lokal ravishda yozilgan modulli JSON kabi ishlovchi TypeScript strukturasidan foydalanyapmiz. Unda har bir olim uchun quyidagi parametrlarga kiritiladi:</p>
                  <pre className="p-4 bg-slate-900 dark:bg-black/50 text-amber-500 dark:text-amber-400 rounded-xl overflow-x-auto font-mono text-[10px] leading-normal border border-slate-200/5 dark:border-white/5">
{`{
  id: "al-xorazmiy",
  name: "Muhammad al-Xorazmiy",
  originalName: "Abu Abdulloh Muhammad ibn Musa al-Xorazmiy",
  category: "Matematika",
  period: "780 – 850",
  birthDate: "780-yil",
  deathDate: "850-yil",
  birthPlace: "Xorazm, O‘zbekiston",
  shortDesc: "...",
  longDesc: "...",
  image: "...",
  fieldOfStudy: ["Algebra", "Aritmetika"],
  discoveries: ["Aljabr faniga asos solishi", "Nol kiritilishi"],
  timeline: [
    { year: "825", title: "Algebra asari yozilishi", description: "..." }
  ],
  quote: "..."
}`}
                  </pre>
                </div>

                {/* Deploy Guide instruction list */}
                <div className="space-y-3">
                  <h4 className="font-bold text-slate-800 dark:text-gray-200 flex items-center gap-1.5 text-xs uppercase tracking-wide">
                    <Cpu className="w-3.5 h-3.5 text-amber-500" />
                    2. Mahalliy kompyuterda ishga tushirish (Local hosting)
                  </h4>
                  <ol className="list-decimal pl-5 space-y-1.5">
                    <li>Arxiv yoki manbani yuklab olib, loyiha papkasiga kiring: <code className="px-1.5 py-0.5 bg-slate-100 dark:bg-white/5 font-mono text-[11px] rounded font-semibold text-slate-700 dark:text-gray-300 border border-slate-20s/20 dark:border-white/5">cd mashhur-olimlar-ensiklopediyasi</code></li>
                    <li>Zaruriy modullarni o'rnating: <code className="px-1.5 py-0.5 bg-slate-100 dark:bg-white/5 font-mono text-[11px] rounded font-semibold text-slate-700 dark:text-gray-300 border border-slate-20s/20 dark:border-white/5">npm install</code></li>
                    <li>Dasturni dasturchi rejimida ishga tushiring: <code className="px-1.5 py-0.5 bg-slate-100 dark:bg-white/5 font-mono text-[11px] rounded font-semibold text-slate-700 dark:text-gray-300 border border-slate-20s/20 dark:border-white/5">npm run dev</code></li>
                    <li>Brauzeringizda oching: <code className="px-1.5 py-0.5 bg-slate-105 dark:bg-white/5 font-mono text-[11px] text-amber-600 dark:text-amber-500 font-bold rounded">http://localhost:3000</code></li>
                  </ol>
                </div>

                <div className="space-y-3">
                  <h4 className="font-bold text-slate-800 dark:text-gray-200 flex items-center gap-1.5 text-xs uppercase tracking-wide">
                    <Download className="w-3.5 h-3.5 text-amber-500" />
                    3. Serverga (Cloud / Netlify / Vercel) yuborish (Production Deploy)
                  </h4>
                  <p>Ushbu loyiha zamonaviy <span className="font-semibold text-amber-500">Vite + React</span> stekida turlanganlik sababli, uni statik hostga joylash nihoyatda oson va bepul:</p>
                  <ul className="list-disc pl-5 space-y-1.5">
                    <li>Yig'ish buyrug'ini tushiring: <code className="px-1.5 py-0.5 bg-slate-100 dark:bg-white/5 font-mono text-[11px] rounded font-semibold text-slate-700 dark:text-gray-300 border border-slate-20s/20 dark:border-white/5">npm run build</code></li>
                    <li>Ushbu buyruq loyiha ildizida yangi <code className="px-1.5 py-0.5 bg-slate-100 dark:bg-white/5 font-mono text-[11px] text-amber-600 dark:text-amber-500 rounded font-bold">dist/</code> deb nomlangan papka hosil qiladi. U barcha optimallashgan, keshlar bilan siqilgan HTML, CSS va JavaScript fayllarini o'z ichiga oladi.</li>
                    <li>Ushbu <code className="px-1.5 py-0.5 bg-slate-100 dark:bg-white/5 font-mono text-[11px] rounded font-semibold text-slate-700 dark:text-gray-300 border border-slate-20s/20 dark:border-white/5">dist/</code> papka tarkibini istalgan Vercel, Netlify yoki Firebase hosting platformasiga drag-and-drop qilib tashlab internetga chiqarishingiz mumkin.</li>
                  </ul>
                  <p className="p-3.5 bg-amber-50 dark:bg-amber-500/10 border border-amber-100/50 dark:border-amber-500/20 rounded-xl text-xs flex gap-2">
                    <Info className="w-4 h-4 text-amber-500 shrink-0 mt-0.5 animate-pulse" />
                    <span>Loyiha butunlay offline ishlay oladi va ma'lumotlarni xavfsiz holda brauzerning localStorage quvvatida saqlaydi!</span>
                  </p>
                </div>

              </div>
            )}
          </section>

        </main>
      )}

      {/* 5. Scientist detail overlay Modal */}
      {selectedScientistId && activeScientist && (
        <ScientistDetail
          scientist={activeScientist}
          isFavorite={favorites.includes(activeScientist.id)}
          onClose={() => setSelectedScientistId(null)}
          onToggleFavorite={() => toggleFavorite(activeScientist.id)}
        />
      )}

      {/* 6. Footer section */}
      <footer className="mt-auto py-6 sm:py-8 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-center font-sans text-xs text-slate-500 dark:text-slate-400">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Mashhur Olimlar Ensiklopediyasi. Barcha huquqlar himoyalangan.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Offline rejim qo'llab-quvvatlanadi</span>
            </span>
            <span className="text-slate-300 dark:text-slate-705">|</span>
            <span>Versiya 1.2.0</span>
          </div>
        </div>
      </footer>

    </div>
  );
}

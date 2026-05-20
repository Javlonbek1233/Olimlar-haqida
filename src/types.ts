export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface Scientist {
  id: string;
  name: string;
  originalName?: string;
  category: 'Matematika' | 'Tibbiyot' | 'Astronomiya' | 'Fizika' | 'Kimyo' | 'Biologiya' | 'Informatika' | 'Geografiya';
  period: string; // e.g. "780 - 850"
  birthDate: string;
  deathDate: string;
  birthPlace: string;
  shortDesc: string;
  longDesc: string;
  image: string;
  fieldOfStudy: string[]; // Specific sub-fields, e.g. ["Algebra", "Trigonometriya"]
  discoveries: string[]; // Key achievements/inventions
  timeline: TimelineEvent[];
  quote: string;
  wikiUrl?: string;
  rating?: number;
}

export interface SearchHistoryItem {
  query: string;
  timestamp: number;
}

export type Theme = 'light' | 'dark';

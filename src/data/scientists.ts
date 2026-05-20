import { Scientist } from '../types';

export const SCIENTISTS_DATA: Scientist[] = [
  {
    id: 'al-xorazmiy',
    name: 'Muhammad al-Xorazmiy',
    originalName: 'Abu Abdulloh Muhammad ibn Musa al-Xorazmiy',
    category: 'Matematika',
    period: '780 – 850',
    birthDate: '780-yil',
    deathDate: '850-yil',
    birthPlace: 'Xorazm, O‘zbekiston',
    shortDesc: 'Algebra fanining asoschisi, buyuk matematik, astronom va geograf. "Algoritm" atamasi uning nomi bilan bog‘liq.',
    longDesc: 'Muhammad al-Xorazmiy jahon ilm-fani taraqqiyotiga beqiyos hissa qo‘shgan buyuk qomusiy olimdir. U "Al-Kitob al-muxtasar fi hisob al-jabr va-l-muqobala" (Tiklash va qarshilantirish hisobi haqida qisqacha kitob) asari bilan algebra faniga asos soldi. Uning nomi lotinchalashtirilib "Algoritmi" tarzida talaffuz qilinishi natijasida zamonaviy informatika fanining poydevori bo‘lgan "Algoritm" atamasi paydo bo‘ldi.',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=600&h=600',
    fieldOfStudy: ['Algebra', 'Aritmetika', 'Astronomiya', 'Geografiya'],
    discoveries: [
      'Aljabr (Algebra) faniga asos solishi',
      'Nol (0) sonini o‘nlik sanoq tizimiga kiritishi',
      'Algoritm tushunchasi va qoidalarini yaratishi',
      'Birinchi mukammal dunyo xaritasi va geografik koordinatalar jadvali'
    ],
    timeline: [
      { year: '780', title: 'Tavallud topishi', description: 'Xorazm vohasida tavallud topgan.' },
      { year: '820', title: 'Bayt ul-Hikma rahbari', description: 'Bag‘doddagi "Bayt ul-Hikma" (Donishmandlar uyi) akademiyasiga rahbar etib tayinlandi.' },
      { year: '825', title: 'Algebra asari yozilishi', description: '"Al-Kitob al-muxtasar fi hisob al-jabr va-l-muqobala" asarini e’lon qilib, algebra faniga poydevor qo‘ydi.' },
      { year: '830', title: 'Geografiya asari', description: '"Surat al-Arz" (Yer surati) asari orqali dunyo shaharlari, tog‘ va daryolari koordinatalarini tizimlashtirdi.' },
      { year: '850', title: 'Vafoti', description: 'Bag‘dod shahrida vafot etdi, ammo uning merosi asrlar davomida yashab kelmoqda.' }
    ],
    quote: 'Ilm va donolik inson qalbini yorituvchi nurdir, ularsiz aql zulmatda qolur.',
    wikiUrl: 'https://uz.wikipedia.org/wiki/Al-Xorazmiy'
  },
  {
    id: 'ibn-sino',
    name: 'Abu Ali ibn Sino',
    originalName: 'Abu Ali al-Husayn ibn Abdalloh ibn Sino (Avicenna)',
    category: 'Tibbiyot',
    period: '980 – 1037',
    birthDate: '980-yil 18-avgust',
    deathDate: '1037-yil 21-iyun',
    birthPlace: 'Afshona qishlog‘i, Buxoro, O‘zbekiston',
    shortDesc: 'Tibbiyot olami sultoni, faylasuf va qomusiy olim. Uning "Tib qonunlari" asari 600 yil davomida Yevropada darslik bo‘lgan.',
    longDesc: 'G‘arbda Avitsenna nomi bilan tanilgan Ibn Sino o‘rta asrlar sharqining eng yirik mutafakkirlaridan biridir. U 16 yoshidayoq mustaqil tabiblik qilib, Buxoro amiri Nuh ibn Mansurni davolagan. Uning tibbiyotga oid 5 jildlik shoh asari - "Al-Qonun fit-tibb" (Tib qonunlari) insoniyat tarixidagi eng mashhur tibbiy asarlardan biri sanaladi.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600&h=600',
    fieldOfStudy: ['Tibbiyot', 'Falsafa', 'Farmakologiya', 'Fizika', 'Astronomiya'],
    discoveries: [
      'Inflyatsion (yuqumli) kasalliklarning tarqalish yo‘llarini aniqlashi',
      'Karantin usulining tibbiyotga joriy etilishi',
      'Narkoz va og‘riqsizlantirish asoslari',
      'Yurak-qon tomir tizimi va psixosomatika bog‘liqligi'
    ],
    timeline: [
      { year: '980', title: 'Tavallud topishi', description: 'Buxoro yaqinidagi Afshona qishlog‘ida tug‘ilgan.' },
      { year: '997', title: 'Samoniy amirini davolashi', description: 'Amir Nuh ibn Mansurni og‘ir kasallikdan qutqarib, mashhur Somoniylar kutubxonasiga kirish huquqini oldi.' },
      { year: '1012', title: 'Tib qonunlari boshlanishi', description: 'Olim o‘zining umrboqiy asari "Tib qonunlari"ni yozishni boshladi.' },
      { year: '1025', title: 'Shifo kitobi', description: 'Falsafa va tabiatshunoslikka bag‘ishlangan ulkan "Kitob ash-shifo" ensiklopediyasini yakunladi.' },
      { year: '1037', title: 'Hamadonda vafoti', description: 'Hamadon shahrida vafot etdi. U o‘zidan keyin 450 dan ortiq ilmiy asarlar qoldirgan.' }
    ],
    quote: 'Ruh tushkunligi vujud kasalligini chaqiradi. Umidsizlik tabibning ashaddiy dushmanidir.',
    wikiUrl: 'https://uz.wikipedia.org/wiki/Ibn_Sino'
  },
  {
    id: 'al-beruniy',
    name: 'Abu Rayhon Beruniy',
    originalName: 'Abu Rayhon Muhammad ibn Ahmad al-Beruniy',
    category: 'Astronomiya',
    period: '973 – 1048',
    birthDate: '973-yil 4-sentyabr',
    deathDate: '1048-yil 11-dekabr',
    birthPlace: 'Kat shahri, Xorazm, O‘zbekiston',
    shortDesc: 'Yer radiusini birinchi bo‘lib aniq hisoblagan va Amerika qit’asi borligini bashorat qilgan ulug‘ qomusiy olim.',
    longDesc: 'Abu Rayhon Beruniy astronomiya, geografiya,矿物学 (minerallash), tarix va tillar bo‘yicha global kashfiyotlar qilgan. U trigonometriya qonunlarini astronomiyaga tatbiq etib, quyosh va yulduzlar harakatini aniqladi. Shuningdek, Hindiston madaniyati va tarixini chuqur o‘rganib, unikal ilmiy tahlillarni e’lon qilgan.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600&h=600',
    fieldOfStudy: ['Astronomiya', 'Geodeziya', 'Geografiya', 'Mineralogiya', 'Tarix'],
    discoveries: [
      'Yer radiusini hozirgi o‘lchovlarga juda yaqin (6339.6 km) qilib hisoblashi',
      'Yer Quyosh atrofida aylanishi gipotezasini ilgari surishi',
      'G‘arbiy yarimsharda ulkan quruqlik (Amerika) borligini geografik tahlil orqali bashorat qilishi',
      'Suyuqliklar va minerallarning solishtirma og‘irligini o‘lchash usuli'
    ],
    timeline: [
      { year: '973', title: 'Tavallud topishi', description: 'Xorazmning qadimiy poytaxti Kat shahri chekkasida dunyoga kelgan.' },
      { year: '1000', title: 'Qadimgi xalqlar asari', description: 'Tarixiy xronologiyaga oid "Al-Osar al-boqiya" (Qadimgi xalqlardan qolgan yodgorliklar) asarini yozdi.' },
      { year: '1017', title: 'G‘aznaga ketishi', description: 'Sulton Mahmud G‘aznaviy saroyiga taklif qilindi va Hindistonga qilgan yurishlarida qatnashdi.' },
      { year: '1030', title: '"Hindiston" asari', description: 'Sharqshunoslik fanida inqilob yaratgan "Tahqiq ma lil-Hind" asarini tamomladi.' },
      { year: '1048', title: 'Vafoti', description: 'G‘azna shahrida vafot etgan, oxirgi daqiqalarigacha ilm bilan shug‘ullangan.' }
    ],
    quote: 'Haqiqatni izlash va yolg‘ondan yuz o‘girish - inson aql-zakovatining oliy maqsadidir.',
    wikiUrl: 'https://uz.wikipedia.org/wiki/Abu_Rayhon_Beruniy'
  },
  {
    id: 'mirzo-ulugbek',
    name: 'Mirzo Ulug‘bek',
    originalName: 'Muhammad Tarag‘ay - Mirzo Ulug‘bek',
    category: 'Astronomiya',
    period: '1394 – 1449',
    birthDate: '1394-yil 22-mart',
    deathDate: '1449-yil 27-oktyabr',
    birthPlace: 'Sultoniya shahri, Ozarbayjon (Temuriylar davlati)',
    shortDesc: 'Samarqand hukmdori, buyuk astronom va matematik. U yaratgan yulduzlar jadvali asrlar davomida dunyo astronomlariga dasturulamal bo‘lgan.',
    longDesc: 'Amir Temurning sevimli nabirasi bo‘lgan Mirzo Ulug‘bek Samarqandda ilm-fan va madaniyatni eng yuqori cho‘qqiga olib chiqdi. U qurdirgan Samarqand rasadxonasi o‘sha davrdagi eng mukammal astronomik markaz edi. Uning rahbarligida 1018 yulduzning koordinatalarini o‘z ichiga olgan astronomiya jadvali yaratildi.',
    image: 'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?auto=format&fit=crop&q=80&w=600&h=600',
    fieldOfStudy: ['Astronomiya', 'Matematika', 'Davlat boshqaruvi', 'Tarix'],
    discoveries: [
      '1018 yulduzning aniq joylashuvini belgilovchi "Ziji Ko‘ragoniy" jadvali',
      'Astronimik yil uzunligini 365 kun 6 soat 10 daqiqa 8 soniya deb hisoblashi (faqat 25 soniya xato bor xolos!)',
      'Yer o‘qi og‘ish burchagini juda aniq o‘lchashi',
      'Sinuslar trigonometrik jadvallarini tuzish'
    ],
    timeline: [
      { year: '1394', title: 'Tavallud topishi', description: 'Sultoniya shahrida harbiy yurish paytida tug‘ilgan.' },
      { year: '1409', title: 'Samarqand hokimi', description: 'Yosh Ulug‘bek Movaraunnahr markazi Samarqand shahrining hokimi etib tayinlandi.' },
      { year: '1420', title: 'Ulug‘bek madrasasi', description: 'Samarqand Registonida ilm-fan akademiyasi rolini o‘tagan Ulug‘bek madrasasini qurdirdi.' },
      { year: '1428', title: 'Rasadxona qurilishi', description: 'Sextanti 40 metrli ulkan rasadxona kurilishini yakunladi.' },
      { year: '1444', title: '"Ziji Ko‘ragoniy" yozilishi', description: 'Butun jahon tan olgan yulduzlar jadvali va astronomik traktat asarini e’lon qildi.' },
      { year: '1449', title: 'Fojiali vafoti', description: 'Siyosiy fitnalar qurboni bo‘lib, fojiali ravishda o‘ldirildi.' }
    ],
    quote: 'Hukmdorlik o‘tkinchidir, ilm va ijod esa abadiy yashaydi. Saltanat qurol bilan saqlansa, millat ilm bilan yuksaladi.',
    wikiUrl: 'https://uz.wikipedia.org/wiki/Ulug%CA%BBbek'
  },
  {
    id: 'albert-einstein',
    name: 'Albert Einstein',
    originalName: 'Albert Einstein',
    category: 'Fizika',
    period: '1879 – 1955',
    birthDate: '1879-yil 14-mart',
    deathDate: '1955-yil 18-aprel',
    birthPlace: 'Ulm, Germaniya',
    shortDesc: 'Zamonaviy fizikaning otasi, umumiy va maxsus nisbiylik nazariyalari asoschisi. E=mc² formulasini kashf qilgan.',
    longDesc: 'Albert Eynshteyn 20-asrning eng buyuk fizik olimidir. Uning maxsus va umumiy nisbiylik nazariyalari makon, vaqt va tortishish kuchiga bo‘lgan qarashlarimizni butunlay o‘zgartirib yubordi. U 1921-yilda fotoeffekt qonunini tushuntirib bergani uchun Nobel mukofotiga sazovor bo‘lgan.',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=600&h=600',
    fieldOfStudy: ['Teoretik Fizika', 'Kosmologiya', 'Kvant Mexanikasi'],
    discoveries: [
      'Nisbiylik nazariyasi (Maxsus va Umumiy)',
      'Fotoelektrik effekt mexanizmi (Nobel mukofoti)',
      'E=mc² massa va energiya ekvivalentligi formulasi',
      'Braunning tartibsiz molekulyar harakati nazariyasi'
    ],
    timeline: [
      { year: '1879', title: 'Tavallud topishi', description: 'Germaniyaning Ulm shahrida dunyoga kelgan.' },
      { year: '1905', title: '"Mo‘jizaviy Yil"', description: 'Patent idorasida oddiy xizmatchi bo‘lib ishlab, fazo va vaqt to‘g‘risidagi tasavvurlarni o‘zgartirgan 4 ta inqilobiy ilmiy maqolani chop etdi.' },
      { year: '1915', title: 'Umumiy Nisbiylik Nazariyasi', description: 'Gravitatsiyani fazo-vaqtning egilishi sifatida tushuntiruvchi umumiy nisbiylik nazariyasini taqdim qildi.' },
      { year: '1921', title: 'Nobel Mukofoti', description: 'Fotoeffekt fizik mexanizmlarini chuqur ochib bergani uchun Nobel mukofotini qabul qildi.' },
      { year: '1955', title: 'Vafoti', description: 'AQShning Prinston shahrida vafot etgan, oxirgi nafasigacha butun koinot qonunlarini birlashtiruvchi universal nazariya ustida ishlagan.' }
    ],
    quote: 'Tasavvur aql-zakovatdan muhimroqdir. Chunki aql cheklangan, tasavvur esa butun dunyoni qamrab oladi.',
    wikiUrl: 'https://uz.wikipedia.org/wiki/Albert_Einstein'
  },
  {
    id: 'isaac-newton',
    name: 'Isaac Newton',
    originalName: 'Sir Isaac Newton',
    category: 'Fizika',
    period: '1643 – 1727',
    birthDate: '1643-yil 4-yanvar',
    deathDate: '1727-yil 31-mart',
    birthPlace: 'Vulstorp, Angliya',
    shortDesc: 'Butunjahon tortishish qonunlari va klassik mexanika fanining asoschisi. Matematik tahlil (Kalkulus) yaratuvchisi.',
    longDesc: 'Ser Isaak Nyuton insoniyat tarixidagi eng nufuzli olimlardan biridir. Uning "Tabiat falsafasining matematik asoslari" asari klassik mexanikaning poydevoriga aylandi. Nyuton harakatning uchta asosiy qonunini va butunjahon tortishish qonunini shakllantirdi va yorug‘likning spektral tabiati to‘g‘risidagi optika nazariyasini yaratdi.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600&h=600',
    fieldOfStudy: ['Fizika', 'Matematika', 'Optika', 'Astronomiya'],
    discoveries: [
      'Butunjahon tortishish qonuni',
      'Uchta harakat qonunlari (Nyuton mexanikasi)',
      'Matematik tahlil (Kalkulus) hisobini yaratishi',
      'Yorug‘lik dispersiyasi va teleskop-reflektor ixtirosi'
    ],
    timeline: [
      { year: '1643', title: 'Tavallud topishi', description: 'Linkolnshirdagi fermer oilasida tug‘ilgan.' },
      { year: '1665', title: '"O‘lat Yillari" ijodi', description: 'Kembrij universiteti o‘lat tufayli yopilganda, uyida o‘tirib yorug‘lik, gravitatsiya va kalkulus bo‘yicha buyuk kashfiyotlar poydevorini yaratdi.' },
      { year: '1687', title: '"Principia" nashri', description: 'Fizika tarixidagi eng buyuk kitob bo‘lgan "Tabiat falsafasining matematik asoslari" asari nashr etildi.' },
      { year: '1705', title: 'Ritsarlik unvoni', description: 'Qirolicha Anna tomonidan ilm-fan taraqqiyoti yo‘lidagi xizmatlari uchun ritsarlik unvoni bilan taqdirlandi.' },
      { year: '1727', title: 'Vafoti', description: 'London shahrida vafot etdi va Vestminster abbatligida dafn etildi.' }
    ],
    quote: 'Agar men uzoqni ko‘ra olgan bo‘lsam, bu faqat buyuk gigantlarning yelkasida turganim tufaylidir.',
    wikiUrl: 'https://uz.wikipedia.org/wiki/Isaac_Newton'
  },
  {
    id: 'marie-curie',
    name: 'Marie Curie',
    originalName: 'Maria Salomea Skłodowska-Curie',
    category: 'Kimyo',
    period: '1867 – 1934',
    birthDate: '1867-yil 7-noyabr',
    deathDate: '1934-yil 4-iyul',
    birthPlace: 'Varshava, Polsha',
    shortDesc: 'Radioaktivlik sohasida yetakchi olima, ikki xil ilmiy yo‘nalishda Nobel mukofotini olgan yagona inson.',
    longDesc: 'Mariya Sklodovskaya-Kyuri o‘z hayotini fizika va kimyo fanlarini tadqiq etishga bag‘ishladi. Uni Poloniy va Radiy radiaktiv elementlarini kashf qilganligi unga jahonshumul shuhrat keltirdi. Erkaklar hukmron bo‘lgan ilm-fan dunyosida Parij universitetining birinchi ayol professori bo‘lishga muvaffaq bo‘ldi.',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9d39d66e8?auto=format&fit=crop&q=80&w=600&h=600',
    fieldOfStudy: ['Radioaktivlik', 'Yadro VIzikasi', 'Kimyo'],
    discoveries: [
      'Kashf etilgan elementlar: Radiy (Ra) va Poloniy (Po)',
      '"Radioaktivlik" terminini birinchi bo‘lib fanga kiritishi',
      'Rentgen apparatlarini urush sharoitida qo‘llash texnologiyasi',
      'Rarak kasalligini nurlanish bilan davolash asoslari'
    ],
    timeline: [
      { year: '1867', title: 'Tavallud topishi', description: 'Varshava shahrida ziyolilar oilasida dunyoga kelgan.' },
      { year: '1891', title: 'Sorbonna universiteti', description: 'Polshada ayollarga oliy ta’lim taqiqlangani sababli, yashirin o‘qib, keyin Parijdagi Sorbonna universitetiga bordi.' },
      { year: '1903', title: 'Fizika bo‘yicha Nobel', description: 'Radioaktivlikni tadqiq qilgani uchun fizika bo‘yicha birinchi Nobel mukofotini oldi.' },
      { year: '1911', title: 'Kimyo bo‘yicha Nobel', description: 'Radiy elementini sof holda ajratib olgani uchun kimyo bo‘yicha ikkinchi Nobel mukofotini qo‘lga kiritdi.' },
      { year: '1934', title: 'Vafoti', description: 'Radioaktiv nurlanish bilan uzoq yillar xavfsizlik choralarisiz ishlagani oqibatida vafot etdi.' }
    ],
    quote: 'Hayotda qo‘rqadigan hech narsa yo‘q, unda faqat tushunish kerak bo‘lgan narsalar bor xolos.',
    wikiUrl: 'https://uz.wikipedia.org/wiki/Marie_Curie'
  },
  {
    id: 'nikola-tesla',
    name: 'Nikola Tesla',
    originalName: 'Nikola Tesla',
    category: 'Fizika',
    period: '1856 – 1943',
    birthDate: '1856-yil 10-iyul',
    deathDate: '1943-yil 7-yanvar',
    birthPlace: 'Smiljan, Avstriya imperiyasi (hozirgi Xorvatiya)',
    shortDesc: 'O‘zgaruvchan tok elektr tizimi (AC), asinxron motor va simsiz elektr uzatish sohasidagi daho ixtirochi.',
    longDesc: 'Nikola Tesla dunyoni simsiz energiya va o‘zgaruvchan tok bilan yoritishni orzu qilgan futurist muhandisdir. U Tomas Edison bilan "Toklar urushi"da g‘alaba qozondi va butun dunyo ishlab chiqarishi hamda maishiy hayotini o‘zgaruvchan tok elektr tarmog‘i orqali inqilob qildi.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600&h=600',
    fieldOfStudy: ['Elektrotexnika', 'Mexanika', 'Fizika', 'Robototexnika'],
    discoveries: [
      'Ko‘p fazali o‘zgaruvchan tok (AC) energiya uzatish tizimi',
      'Asinxron elektr motor ixtirosi',
      'Tesla transformatori (simsiz tok uzatuvchi g‘altak)',
      'Radio aloqasining fundamental patentlari va poydevori'
    ],
    timeline: [
      { year: '1856', title: 'Tavallud topishi', description: 'Momaqaldiroq bo‘lgan kechada ruhoniy oilasida tug‘ilgan.' },
      { year: '1884', title: 'AQShga kelishi', description: 'Cho‘ntagida atigi 4 sent bilan AQShga Tomas Edison bilan ishlash uchun keldi.' },
      { year: '1888', title: 'O‘zgaruvchan tok patenti', description: 'O‘zgaruvchan tok motori va elektr tarmoqlari patentlarini Vestingauzga sotdi va g‘alabaga yo‘l ochdi.' },
      { year: '1901', title: 'Uordenkliff minorasi', description: 'Butun dunyo bo‘ylab simsiz ma’lumot va energiya uzatuvchi ulkan minora qurishni boshladi.' },
      { year: '1943', title: 'Nyu-Yorkda vafoti', description: 'Mehmonxonada yolg‘izlikda va kambag‘allikda vafot etdi. Uning 300 ga yaqin ixtirolari ro‘yxatga olingan.' }
    ],
    quote: 'Agar koinot sirlarini tushunmoqchi bo‘lsangiz, energiya, chastota va tebranishlar haqida o‘ylang.',
    wikiUrl: 'https://uz.wikipedia.org/wiki/Nikola_Tesla'
  },
  {
    id: 'galileo-galilei',
    name: 'Galileo Galilei',
    originalName: 'Galileo Galilei',
    category: 'Astronomiya',
    period: '1564 – 1642',
    birthDate: '1564-yil 15-fevral',
    deathDate: '1642-yil 8-yanvar',
    birthPlace: 'Piza shahrida, Italiya',
    shortDesc: 'Zamonaviy rasadxonali astronomiya, fizika va ilmiy eksperimental uslub otasi. Teleskopni mukammallashtirgan.',
    longDesc: 'Galileo Galilei teleskopdan foydalanib yulduzlar va sayyoralarni kuzatgan birinchi insonlardan biri. U Kopernikning Gelotsentrik (Yer Quyosh atrofida aylanishi) nazariyasini isbotlashga harakat qildi va bu yo‘lda diniy inkvizitsiya ta’qiblariga uchradi. Shunday bo‘lsa-da, u fanda tajriba muhimligini birinchi o‘ringa qo‘ydi.',
    image: 'https://images.unsplash.com/photo-1543722530-d2c3201371e7?auto=format&fit=crop&q=80&w=600&h=600',
    fieldOfStudy: ['Astronomiya', 'Fizika', 'Klassik Mexanika'],
    discoveries: [
      'Yupiterning 4 ta eng yirik yo‘ldoshini (Galiley yo‘ldoshlari) kashf qilishi',
      'Teleskopik optika tizimini 30 barobargacha kattalashtirib beruvchi ixtirosi',
      'Piza minorasidagi tajriba orqali jismlarning erkin tushish qonunlarini ochishi',
      'Inersiya tamoyili va mexanik nisbiylik qoidasi'
    ],
    timeline: [
      { year: '1564', title: 'Tavallud topishi', description: 'Musiqachi Vinchenso Galilei oilasida dunyoga kelgan.' },
      { year: '1609', title: 'Birinchi teleskop', description: 'Gollandiyaliklarning durbin prototipini olib, 32 marta yaqinlashtiradigan haqiqiy astronomik teleskop yasadi.' },
      { year: '1610', title: 'Yulduzli Xabarchi', description: 'Oy relyefi tog‘lari va Yupiter yo‘ldoshlarini e’lon qilgan inqilobiy kitobini chop etdi.' },
      { year: '1633', title: 'Sud va inkvizitsiya', description: 'Inkvizitsiya sudi ostida o‘z qarashlaridan voz kechishga majbur bo‘ldi va umrining oxirigacha uy qamog‘iga hukm qilindi.' },
      { year: '1642', title: 'Vafoti', description: 'Ko‘r bo‘lib, uy qamog‘ida vafot etdi, ammo afsonaga ko‘ra u suhbatdan so‘ng "U baribir aylanmoqda" degan.' }
    ],
    quote: 'Koinot kitobi matematika tilida yozilgandir, usiz undagi so‘zlarni tushunib bo‘lmaydi.',
    wikiUrl: 'https://uz.wikipedia.org/wiki/Galileo_Galilei'
  },
  {
    id: 'alan-turing',
    name: 'Alan Turing',
    originalName: 'Alan Mathison Turing',
    category: 'Informatika',
    period: '1912 – 1954',
    birthDate: '1912-yil 23-iyun',
    deathDate: '1954-yil 7-iyun',
    birthPlace: 'London, Angliya',
    shortDesc: 'Kompyuter fanlari va sun’iy intellekt nazariyasining otasi. Enigma shifr kodi zanjirini buzgan matematik.',
    longDesc: 'Alan Turing zamonaviy hisoblash mashinalari modelini nazariy jihatdan ishlab chiqqan daho. Ikkinchi jahon urushida natsistlarning eng murakkab maxfiy Enigma apparati kodini buzish uchun "Bombe" elektro-mexanik kompyuterini kashf qildi. U sun’iy intellekt darajasini baholovchi "Turing Testi"ni fanga taqdim qildi.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600&h=600',
    fieldOfStudy: ['Informatika', 'Matematika', 'Kriptografiya', 'Biologiya'],
    discoveries: [
      'Universal Turing mashinasi - zamonaviy kompyuterlar asosi',
      'Enigma natsist shifr mashinasi kodlarini yechuvchi uslub yaratishi',
      'Turing testi shakllantirilishi (Sun’iy intellekt falsafasi)',
      'Morfogenez kimyoviy-biologik qonuniyatlari nazariyasi'
    ],
    timeline: [
      { year: '1912', title: 'Tavallud topishi', description: 'Londonda tug‘ilib, juda erta yoshidanoq anomal matematik qobiliyati bilan ajralib turdi.' },
      { year: '1936', title: 'Turing mashinasi traktati', description: '"Hisoblanadigan sonlar to‘g‘risida" ilmiy ishini e’lon qilib, dasturlash va kompyuter tushunchalarini kiritdi.' },
      { year: '1940', title: 'Bletchley Park va Enigma', description: 'Urush davrida maxfiy guruhga rahbarlik qilib, natsistlarning suvosti floti kodlarini parchaladi va millionlab odamlar hayotini saklab qoldi.' },
      { year: '1950', title: 'Sun’iy Intellekt maqolasi', description: '"Hisoblash texnikasi va intellekt" maqolasida "Mashinalar fikrlay oladimi?" savolini o‘rtaga qo‘yib, Turing testini taqdim qildi.' },
      { year: '1954', title: 'Fojiali vafoti', description: 'Siyosiy bosimlar ostida fojiali tarzda hayotdan ko‘z yumdi. Zamonaviy dunyo uni daho deb e’tirof etadi.' }
    ],
    quote: 'Ba’zilarda hech kim kutmagan voqealar ro‘y beradi, xuddi hech kim tasavvur qilmagan narsalarni yaratishga qodir insonlardek.',
    wikiUrl: 'https://uz.wikipedia.org/wiki/Alan_Turing'
  },
  {
    id: 'charles-darwin',
    name: 'Charles Darwin',
    originalName: 'Charles Robert Darwin',
    category: 'Biologiya',
    period: '1809 – 1882',
    birthDate: '1809-yil 12-fevral',
    deathDate: '1882-yil 19-aprel',
    birthPlace: 'shrewsbury, Angliya',
    shortDesc: 'Evolutsion biologiya asoschisi. Turning tabiiy tanlanish orqali rivojlanish nazariyasini kashf qilgan olim.',
    longDesc: 'Charlz Darvin besh yillik HMS Beagle kemasidagi dunyo bo‘ylab sayohati davomida to‘plagan dalillariga tayanib, yer yuzidagi barcha tirik mavjudotlarning umumiy ajdodlardan tabiiy tanlanish asosida kelib chiqqanini va evolutsiya rivojlanishini isbotlab berdi.',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=600&h=600',
    fieldOfStudy: ['Tabiatshunoslik', 'Geologiya', 'Evolutsion Biologiya'],
    discoveries: [
      'Tabiiy tanlanish orqali evolutsiya nazariyasi',
      'Ekologik ko‘nikish va adaptatsiya tushunchalari',
      'Galapagos orolidagi qushlar (vyuroklar) turlari divergensiyasi kashfiyoti',
      'Churalar va riflar geologik shakllanishi tahlili'
    ],
    timeline: [
      { year: '1809', title: 'Tavallud topishi', description: 'Shryusberi shahrida badavlat vrach oilasida tug‘ildi.' },
      { year: '1831', title: 'Beagle sayohati boshlanishi', description: 'HMS Beagle ekspeditsiyasi tarkibida Janubiy Amerika, Galapagos va Tinch okeaniga 5 yillik ilmiy sayohatga ketdi.' },
      { year: '1859', title: '"Turlarning Kelib Chiqishi"', description: 'Insoniyat mafkurasini o‘zgartirgan "Tabiiy tanlanish yo‘li bilan turlarning kelib chiqishi to‘g‘risida" asari nashr etildi.' },
      { year: '1871', title: '"Insonning Kelib Chiqishi"', description: 'Inson kelib chiqishi evolutsiyasini bevosita tabiat qonunlari bilan bog‘lovchi traktatini chop etdi.' },
      { year: '1882', title: 'Vafoti', description: 'London shahrida vafot etdi. Uning ilmiy tadqiqotlari biologiya fanining asosiy poydevoridir.' }
    ],
    quote: 'Sinfdagi eng kuchlisi ham, eng aqllisi ham yashab qolmaydi. Balki o‘zgarishlarga eng yaxshi moslasha olganigina yashaydi.',
    wikiUrl: 'https://uz.wikipedia.org/wiki/Charles_Darwin'
  },
  {
    id: 'dmitriy-mendeleyev',
    name: 'Dmitriy Mendeleyev',
    originalName: 'Dmitriy Ivanovich Mendeleyev',
    category: 'Kimyo',
    period: '1834 – 1907',
    birthDate: '1834-yil 8-fevral',
    deathDate: '1907-yil 2-fevral',
    birthPlace: 'Tobolsk, Rossiya imperiyasi',
    shortDesc: 'Kimyoviy elementlarning davriy jadvalini yaratgan buyuk kimyogar olim. Hali kashf etilmagan elementlar xossasini bashorat qilgan.',
    longDesc: 'Dmitriy Mendeleyev kimyoviy elementlarning atom og‘irliklari va ularning fizik-kimyoviy xususiyatlari orasidagi qonuniyatli bog‘liqlikni aniqlab, Dunyo fanida eng muhim tizim – Davriy Jadvalni kashf qildi. U jadvaldagi bo‘sh kataklar orqali hali kashf etilmagan elementlarning mavjudligi va xossalarini ajoyib aniqlikda oldindan aytib bera olgan.',
    image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=600&h=600',
    fieldOfStudy: ['Kimyo', 'Fizika', 'Metrologiya', 'Aeronavtika'],
    discoveries: [
      'Kimyoviy elementlarning Davriy Jadvali (Mendeleyev jadvali)',
      'O‘lchov birliklari va metrologiya standartlarini yaratishi',
      'Galli, Skandi va Germaniy elementlarining kashf qilinishini oldindan bashorat qilishi',
      'Suyuqliklarning qaynash harorati cheklanishi nazariyasini kashf etishi'
    ],
    timeline: [
      { year: '1834', title: 'Tavallud topishi', description: 'Tobolsk shahrida oilada 17-farzand bo‘lib tug‘ilgan.' },
      { year: '1861', title: '"Organik Kimyo" darsligi', description: 'Rossiyadagi birinchi mukammal organik kimyo darsligini nashr qildi.' },
      { year: '1869', title: 'Davriy Qonun kashfiyoti', description: 'Tushida ko‘rgan jadval tizimi asosida barcha ma’lum elementlarni tartibga solib, davriy qonuniyatni e’lon qildi.' },
      { year: '1887', title: 'Havo shari parvozi', description: 'Quyosh tutilishini va atmosfera bosimini mustaqil o‘rganish uchun o‘zi yasagan havo sharida yakka o‘zi parvoz qildi.' },
      { year: '1907', title: 'Vafoti', description: 'Sankt-Peterburgda vafot etdi. Uning nomi bilan 101-kimyoviy element "Mendeleyeviy" deb ataladi.' }
    ],
    quote: 'Mehnat va fan - eng oliy qudratdir. Ularsiz insoniyat hayvonot darajasidan uzoqlasha olmas edi.',
    wikiUrl: 'https://uz.wikipedia.org/wiki/Dmitriy_Mendeleyev'
  }
];

export const CATEGORIES = [
  { id: 'all', name: 'Barchasi', icon: 'Sparkles' },
  { id: 'Matematika', name: 'Matematika', icon: 'Binary' },
  { id: 'Tibbiyot', name: 'Tibbiyot', icon: 'HeartPulse' },
  { id: 'Astronomiya', name: 'Astronomiya', icon: 'Orbit' },
  { id: 'Fizika', name: 'Fizika', icon: 'Atom' },
  { id: 'Kimyo', name: 'Kimyo', icon: 'FlaskConical' },
  { id: 'Biologiya', name: 'Biologiya', icon: 'Dna' },
  { id: 'Informatika', name: 'Informatika', icon: 'Cpu' }
];

export const GENERAL_STATS = {
  totalScientists: SCIENTISTS_DATA.length,
  categoriesCount: 7,
  earliestPeriod: 'VIII asr',
  latestPeriod: 'XX asr',
};

export const CONTACT = {
  phone: "+420 603 839 967",
  phoneRaw: "+420603839967",
  email: "autoskolaagh@seznam.cz",
  address: "Albrechtická 414/1",
  city: "Most",
  zip: "434 01",
  ico: "40244164",
  mapUrl: "https://maps.google.com/?q=Albrechtick%C3%A1+414%2F1%2C+434+01+Most",
  mapEmbed: "https://maps.google.com/maps?q=Albrechtick%C3%A1+414%2F1,+434+01+Most&output=embed",
};

export const CATEGORIES = [
  { code: "AM",  name: "Moped",                min_age: 15, desc: "Mopedy a tříkolky do 45 km/h.",                                    photo: null },
  { code: "A1",  name: "Malý motocykl",         min_age: 16, desc: "Motocykly do 125 cm³ a 11 kW.",                                    photo: "/images/moto-track.jpg" },
  { code: "A2",  name: "Střední motocykl",      min_age: 18, desc: "Motocykly do 35 kW.",                                              photo: "/images/moto-action.jpg" },
  { code: "A",   name: "Motocykl bez omezení",  min_age: 24, desc: "Všechny motocykly. Od 20 let po min. 2 letech s A2.",              photo: "/images/moto-road.jpg" },
  { code: "B",   name: "Osobní automobil",      min_age: 18, desc: "Auta do 3 500 kg. Nejoblíbenější kategorie. Výuka ve Škodě Fabia.", photo: "/images/car-top.jpg" },
  { code: "B+E", name: "Automobil s přívěsem", min_age: 18, desc: "Skupina B s přívěsem nebo návěsem. Vyžaduje platný průkaz B.",      photo: "/images/car-instructor.jpg" },
];

export const STEPS = [
  {
    n: 1,
    title: "Kontaktujte nás",
    subtitle: "Zavolejte nebo napište e-mail",
    desc: "Domluvíme termín první schůzky. Rádi odpovíme na vše co potřebujete vědět. Volejte kdykoliv v pracovní dny.",
    detail: ["Telefonicky: " + CONTACT.phone, "E-mailem: " + CONTACT.email],
  },
  {
    n: 2,
    title: "Vstupní schůzka",
    subtitle: "Přihlášení a smlouva",
    desc: "Sejdeme se v autoškole v Mostě. Vyplníte přihlášku, podepíšeme smlouvu o výcviku a domluvíme platební podmínky včetně případných splátek.",
    detail: ["Platba hotově nebo na splátky", "Záloha při podpisu smlouvy"],
  },
  {
    n: 3,
    title: "Lékařský posudek",
    subtitle: "Povinný pro zahájení výcviku",
    desc: "Před zahájením výcviku musíte doložit lékařský posudek o zdravotní způsobilosti. Vydá ho váš praktický lékař. Stačí objednat se na prohlídku.",
    detail: ["Platnost posudku: 2 roky", "Vystaví váš praktický lékař"],
  },
  {
    n: 4,
    title: "Teoretická výuka",
    subtitle: "Pravidla silničního provozu",
    desc: "Absolvujete povinné hodiny teorie: pravidla silničního provozu, dopravní značky, první pomoc. Výuka probíhá v malých skupinách s individuálním přístupem.",
    detail: ["Minimálně 24 hodin teorie", "Závěrečné přezkoušení z teorie"],
  },
  {
    n: 5,
    title: "Jízdní výcvik",
    subtitle: "Praxe za volantem s instruktorem",
    desc: "Nejdůležitější část výcviku. Jezdíte s instruktorem v malých skupinách, takže máte na sebe dostatek času a instruktor se věnuje přesně vašim potřebám.",
    detail: ["Skupina B: min. 28 jízdních hodin (á 45 min)", "Trénink ve skutečném provozu i na cvičišti"],
  },
  {
    n: 6,
    title: "Závěrečné zkoušky",
    subtitle: "Teorie a praktická jízda před komisí",
    desc: "Až budete připraveni, přihlásíme vás na zkoušky u dopravního inspektorátu. Skládáte nejprve test z pravidel, poté praktickou jízdní zkoušku s komisí.",
    detail: ["Teoretický test: 25 otázek, max. 5 chyb", "Praktická zkouška: jízda v reálném provozu"],
  },
  {
    n: 7,
    title: "Řidičský průkaz",
    subtitle: "Výcvik je za vámi",
    desc: "Po úspěšné zkoušce podáte žádost o vydání průkazu na obecním úřadě s rozšířenou působností. Průkaz obdržíte zpravidla do 5 až 20 pracovních dnů.",
    detail: ["Průkaz vydává obecní úřad", "Platnost EU průkazu: 10 let (B)"],
  },
];

export const REVIEWS = [
  { name: "Tadeáš Nímec",   stars: 5, text: "Pan Agh byl naprosto skvělý, vždy se vším pomohl a poradil. Jednoznačně doporučuji!",                          year: "2025" },
  { name: "Daniel",         stars: 5, text: "U Pana Agha jsem udělal průkaz B i A2. Pan Agh i jeho dcera mají profesionální přístup, jsou vtipný a naučí vás vše.", year: "2025" },
  { name: "Tomáš",          stars: 5, text: "Nejlepší autoškola v Mostě. Přátelský a lidský přístup, dokáží vyjít člověku vstříc. Doporučuji všem!",       year: "2025" },
  { name: "Karel M.",       stars: 5, text: "Skvělá autoškola. Budu všude jen doporučovat. Profesionální přístup a klidná atmosféra.",                        year: "2021" },
  { name: "David",          stars: 5, text: "Skvělá autoškola, zvládl jsem zkoušky na poprvé. Instruktor byl vždy trpělivý a poradil mi s čímkoliv.",         year: "2020" },
  { name: "Béra",           stars: 5, text: "DOPORUČUJI. Celá výuka i jízdy bez stresu, v klidu a s profesionálním přístupem.",                              year: "2014" },
  { name: "Prokop Seif",    stars: 5, text: "Osobní a příjemný přístup od začátku až do konce. Instruktor je tam jenom pro vás.",                            year: "2013" },
  { name: "Eva Vojkůvková", stars: 5, text: "Celkový průběh kurzu hodnotím velmi kladně. Trpělivý instruktor, výborná příprava. Všem doporučuji.",            year: "2012" },
  { name: "Leni",           stars: 5, text: "Tahle autoškola je prostě nejlepší. Rozhodně bych neměnila. Jízdy probíhaly v pohodě a naučila jsem se hodně.",  year: "2012" },
  { name: "Jirka R.",       stars: 5, text: "Kdokoliv se v Mostě rozhoduje pro autoškolu, touto volbou neprohloupí. Skvělá volba.",                           year: "2012" },
  { name: "Ondřej Jánský",  stars: 5, text: "Jsem naprosto spokojen s přístupem instruktora. Jízdy byly prostě parádní.",                                    year: "2010" },
  { name: "Aneta",          stars: 5, text: "Nejlepší autoškola široko daleko. Pan učitel je velice hodný, klidný a vždy vše trpělivě vysvětlí.",             year: "2014" },
];

export const FAQ = [
  { q: "Jak dlouho výcvik trvá?",              a: "Průměrně 2 až 4 měsíce, záleží na vaší dostupnosti a tempu. Neuspěcháme vás, ale nebudeme ani zbytečně protahovat." },
  { q: "Mohu platit ve splátkách?",            a: "Ano. Cenu výcviku lze rozložit do splátek bez jakéhokoli navýšení. Podmínky domluvíme individuálně při vstupní schůzce." },
  { q: "Co když u zkoušky neuspěji?",          a: "Nevadí. Stane se to i zkušeným žákům. Domluvíme opravný termín a připravíme vás na zopakování." },
  { q: "Mohu přerušit výcvik?",                a: "Ano, výcvik lze z vážných důvodů přerušit a pokračovat později. Nahlaste nám situaci co nejdříve." },
  { q: "Je nutné umět řídit aspoň trochu?",    a: "Ne, bereme úplné začátečníky. Instruktor se přizpůsobí vaší úrovni a provede vás vším od základů." },
];

export const content = {
    student: {
        theme: {
            primary: 'text-purple-700',
            secondary: 'text-red-500',
            bgApp: 'bg-white', // Always white
            text: 'text-gray-900',
            accent: 'bg-indigo-600', // Buttons etc
            gradient: 'from-purple-600 to-red-500',
            button: 'bg-gradient-to-r from-purple-700 to-red-600 text-white shadow-lg hover:shadow-purple-500/30',
            card: 'bg-white border-2 border-purple-100 hover:border-purple-300 shadow-sm hover:shadow-md',
            iconBg: 'bg-purple-100 text-purple-700'
        },
        hero: {
            badge: "Pentru elevi și liceeni",
            headline: "Nu mai depinde de ai tăi. <br/> <span class='text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-red-500'>Învață jocul banilor.</span>",
            subheadline: "Vrei festivaluri? Gadget-uri? Independență? Totul începe cu educația financiară pe care nu o primești la școală.",
            cta: "Vreau banii mei",
            ctaLink: "https://edituracorint.ro/secretul-banilor-educatia-financiara-pe-care-nu-o-inveti-la-scoala.html"
        },
        benefits: [
            {
                title: "Fă banii să lucreze",
                description: "Nu trebuie să muncești mai mult, trebuie să gândești mai smart.",
                icon: "TrendingUp"
            },
            {
                title: "Fără datorii problematice",
                description: "Învață diferența dintre un activ și un pasiv înainte să fie prea târziu.",
                icon: "ShieldAlert"
            },
            {
                title: "Mindset de Antreprenor",
                description: "Transformă fiecare oportunitate întrun venit potențial.",
                icon: "Zap"
            }
        ],
        press: {
            title: "Apariții Media",
            videos: [
                {
                    title: "De la ZERO la INVESTITOR cu Irina Chitu",
                    thumbnail: "https://img.youtube.com/vi/jKnIC4TCIac/hqdefault.jpg",
                    url: "https://www.youtube.com/watch?v=jKnIC4TCIac"
                },
                {
                    title: "Vreau sa stiu - cunostiinte financiare",
                    thumbnail: "https://img.youtube.com/vi/5aDRAjakmsM/hqdefault.jpg",
                    url: "https://www.youtube.com/watch?v=5aDRAjakmsM"
                },
                {
                    title: "CSALB - Alexandru Paunescu",
                    thumbnail: "https://img.youtube.com/vi/TKzhz29Vpkk/hqdefault.jpg",
                    url: "https://www.youtube.com/watch?v=TKzhz29Vpkk&pp=ygUsZWR1Y2F0aWUgZmluYW5jaWFyYSBsYSBwcm9maXQgcm8gaXJpbmEgY2hpdHU%3D"
                }
            ]
        },
        authors: {
            title: "Cunoaște autorii",
            list: [
                {
                    name: "Irina Chițu",
                    role: "Expert Educație Financiară",
                    bio: "Fondator FinZoom.ro și Vicepreședinte AAFBR, cu peste 20 de ani de experiență în sectorul financiar-bancar. Irina este o voce activă în media, dedicată simplificării conceptelor financiare pentru toate generațiile.",
                    image: "/irina.webp"
                },
                {
                    name: "Denisa Dascălu",
                    role: "Analist Financiar",
                    bio: "Analist financiar la FinZoom.ro din 2015, Denisa aduce o perspectivă proaspătă și analitică asupra pieței bancare. Co-autor al cărții, misiunea ei este de a echipa tinerii cu instrumentele necesare pentru independență.",
                    image: "/denisa.webp"
                }
            ]
        },
        preview: {
            title: "Ce vei învăța din carte?",
            chapters: [
                {
                    title: "ABC-ul Banilor",
                    desc: "Istoria banilor, diferența dintre bani fizici vs. digitali, și cum funcționează inflația."
                },
                {
                    title: "Cum îți gestionezi banii?",
                    desc: "Regula 50/30/20, cum să îți faci un buget simplu și să nu rămâi falit înainte de salariu/alocație."
                },
                {
                    title: "Economisire vs. Investiții",
                    desc: "De ce să nu ții banii la saltea. Puterea dobânzii compuse explicată simplu."
                },
                {
                    title: "Smart Banking",
                    desc: "Cum să folosești cardurile, aplicațiile bancare și cum să te ferești de comisioane ascunse."
                },
                {
                    title: "Datorii bune vs. Datorii rele",
                    desc: "Când e ok să te împrumuți (investiție) și când e capcană (consum)."
                },
                {
                    title: "Planificarea Viitorului",
                    desc: "Setarea obiectivelor financiare SMART. Independența financiară nu e un vis, e un plan."
                }
            ]
        },
        reviews: {
            title: "Ce spun cititorii pe Goodreads",
            list: [
                {
                    text: "De departe cea mai bună carte de educație financiară pe care am citit-o. [..] se aplică la realitatea economică în care trăim.",
                    author: "Mircea Mocanu",
                    role: "Goodreads Reviewer",
                    avatar: "⭐"
                },
                {
                    text: "Un ghid util pentru tinerii aflați la început de drum în 'viața finanțelor' [..] se recomandă și celor adulți deoarece vor găsi informații importante.",
                    author: "Dunca Raoul",
                    role: "Goodreads Reviewer",
                    avatar: "📚"
                },
                {
                    text: "O să tot recomand cartea asta. [..] explică foarte bine concepte de bază de educație financiară. [..] Cartea lămurește multe dintre problemele astea.",
                    author: "Alex Olteanu",
                    role: "Autor & Reviewer",
                    avatar: "🖊️"
                }
            ]
        },
        asSeenOn: [
            { name: "Pro TV", color: "text-blue-600" },
            { name: "Digi24", color: "text-indigo-800" },
            { name: "Aleph News", color: "text-black" },
            { name: "Profit.ro", color: "text-red-700" },
            { name: "BiziLive TV", color: "text-blue-500" },
            { name: "București FM", color: "text-orange-600" }
        ]
    },
    parent: {
        theme: {
            primary: 'text-blue-800',
            secondary: 'text-cyan-600',
            bgApp: 'bg-slate-50', // Very subtle off-white
            text: 'text-slate-900',
            accent: 'bg-blue-700',
            gradient: 'from-blue-800 to-cyan-600',
            button: 'bg-blue-800 hover:bg-blue-900 text-white shadow-lg',
            card: 'bg-white border border-slate-200 hover:border-blue-200 shadow-sm hover:shadow-md',
            iconBg: 'bg-blue-50 text-blue-800'
        },
        hero: {
            badge: "Pentru Părinți Responsabili",
            headline: "Pregătește-l pentru viață. <br/> <span class='text-blue-800'>Educația pe care școala o omite.</span>",
            subheadline: "Un viitor sigur începe cu obiceiuri financiare sănătoase. Oferă-i copilului tău avantajul pe care noi nu l-am avut.",
            cta: "Comandă Cartea",
            ctaLink: "https://edituracorint.ro/secretul-banilor-educatia-financiara-pe-care-nu-o-inveti-la-scoala.html"
        },
        benefits: [
            {
                title: "Responsabilitate",
                description: "Învață valoarea banului și cum să îi gestioneze corect.",
                icon: "PiggyBank"
            },
            {
                title: "Siguranță în Viitor",
                description: "Cunoștințele financiare sunt cel mai bun cadou pentru un adult independent.",
                icon: "ShieldCheck"
            },
            {
                title: "Evitarea Greșelilor",
                description: "Cum să nu cadă în capcanele creditelor și datoriilor inutile.",
                icon: "AlertTriangle"
            }
        ],
        press: {
            title: "Apariții Media",
            videos: [
                {
                    title: "De la ZERO la INVESTITOR cu Irina Chitu",
                    thumbnail: "https://img.youtube.com/vi/jKnIC4TCIac/hqdefault.jpg",
                    url: "https://www.youtube.com/watch?v=jKnIC4TCIac"
                },
                {
                    title: "Vreau sa stiu - cunostiinte financiare",
                    thumbnail: "https://img.youtube.com/vi/5aDRAjakmsM/hqdefault.jpg",
                    url: "https://www.youtube.com/watch?v=5aDRAjakmsM"
                },
                {
                    title: "CSALB - Alexandru Paunescu",
                    thumbnail: "https://img.youtube.com/vi/TKzhz29Vpkk/hqdefault.jpg",
                    url: "https://www.youtube.com/watch?v=TKzhz29Vpkk&pp=ygUsZWR1Y2F0aWUgZmluYW5jaWFyYSBsYSBwcm9maXQgcm8gaXJpbmEgY2hpdHU%3D"
                }
            ]
        },
        authors: {
            title: "Cine sunt autorii?",
            list: [
                {
                    name: "Irina Chițu",
                    role: "Expert în Educație Financiară",
                    bio: "Mama și profesionist, Irina Chițu a fondat FinZoom.ro și este unul dintre cei mai recunoscuți experți în educație financiară din România. Experiența ei vastă ajută părinții să crească generații responsabile financiar.",
                    image: "/irina.webp"
                },
                {
                    name: "Denisa Dascălu",
                    role: "Analist Financiar",
                    bio: "Analist financiar cu o viziune practică asupra economiei, Denisa Dascălu contribuie la simplificarea mecanismelor financiare complexe, făcându-le accesibile pentru copii și adolescenți prin cartea de față.",
                    image: "/denisa.webp"
                }
            ]
        },
        preview: {
            title: "Ce va învăța copilul tău?",
            chapters: [
                {
                    title: "Bazele Educației Financiare",
                    desc: "Explicații clare despre funcționarea banilor, inflație și curs valutar."
                },
                {
                    title: "Responsabilitate și Buget",
                    desc: "Instrumente practice pentru gestionarea alocației sau primului salariu."
                },
                {
                    title: "Siguranță Bancară",
                    desc: "Cum să utilizeze produsele bancare în siguranță și să evite fraudele online."
                },
                {
                    title: "Valoarea Economisirii",
                    desc: "Strategii pentru a pune bani deoparte pentru obiective importante (facultate, permise, etc)."
                },
                {
                    title: "Evitarea Datoriilor Nocive",
                    desc: "Educație preventivă despre riscurile creditelor de consum și a dobânzilor mari."
                },
                {
                    title: "Pregătire pentru Viața de Adult",
                    desc: "Construirea unui mindset financiar sănătos care să îi asigure independența."
                }
            ]
        },
        reviews: {
            title: "Ce spun experții și cititorii",
            list: [
                {
                    text: "O carte foarte bine documentată, cu un limbaj prietenos și aplicată condițiilor din România [..] O recomand!",
                    author: "Adrian",
                    role: "Goodreads Reviewer",
                    avatar: "✔️"
                },
                {
                    text: "De departe cea mai bună carte de educație financiară pe care am citit-o. [..] se aplică la realitatea economică în care trăim.",
                    author: "Mircea Mocanu",
                    role: "Goodreads Reviewer",
                    avatar: "⭐"
                },
                {
                    text: "O să tot recomand cartea asta. [..] explică foarte bine concepte de bază de educație financiară. [..] Cartea lămurește multe dintre problemele astea.",
                    author: "Alex Olteanu",
                    role: "Autor & Reviewer",
                    avatar: "🖊️"
                }
            ]
        },
        asSeenOn: [
            { name: "Pro TV", color: "text-blue-600" },
            { name: "Digi24", color: "text-indigo-800" },
            { name: "Aleph News", color: "text-black" },
            { name: "Profit.ro", color: "text-red-700" },
            { name: "BiziLive TV", color: "text-blue-500" },
            { name: "București FM", color: "text-orange-600" }
        ]
    }
};

export type ContentMode = keyof typeof content;

# Secretul Banilor - Landing Page

O platformă modernă și interactivă de prezentare pentru cartea **"Secretul Banilor - Educația financiară pe care nu o înveți la școală"**, scrisă de Irina Chițu și Denisa Dascălu.

## 🚀 Caracteristici Principale

- **Dual Mode Experience**: Comutare instantanee între modurile **Elev/Student** și **Părinte**, adaptând limbajul, beneficiile și estetica vizuală în funcție de audiență.
- **Social Proof & Trust**:
  - **As Seen On**: Bară cu logouri media (TVR1, Digi24, Profit.ro etc.) pentru validarea autorității.
  - **Recenzii Goodreads**: Testimoniale reale de la experți și cititori, integrate direct în pagină.
- **Secțiune Autori**: Bio-uri profesionale pentru Irina Chițu și Denisa Dascălu.
- **Preview Interactiv**: Modal pentru vizualizarea structurii capitolelor și a ideilor principale.
- **Media Hub**: Selecție de apariții video relevante pentru contextul educației financiare.
- **Design Premium**: Animații fluide cu Framer Motion, iconițe Lucide React și o paletă de culori modernă (Indigo/Purple pentru studenți, Blue/Cyan pentru părinți).

## 🛠️ Stack Tehnologic

- **Framework**: [Astro](https://astro.build/) (Static Site Generator)
- **UI Library**: [React](https://reactjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 📦 Structura Proiectului

```text
/
├── public/             # Asset-uri statice (imagini, coperți, profiluri)
├── src/
│   ├── components/     # Componente React (Navbar, Hero, Authors, Reviews etc.)
│   ├── data/           # content.ts - Sursa unică de adevăr pentru texte și teme
│   └── pages/          # index.astro - Punctul de intrare principal
└── package.json        # Dependențe și scripturi
```

## ⚙️ Comenzi Rapide

| Comandă           | Acțiune                                               |
| :---------------- | :---------------------------------------------------- |
| `npm install`     | Instalează dependențele proiectului                   |
| `npm run dev`     | Pornește serverul de dezvoltare la `localhost:4321`   |
| `npm run build`   | Generează varianta de producție în folderul `./dist/` |
| `npm run preview` | Previzualizează build-ul local înainte de deploy      |

## 📖 Despre Carte

Cartea oferă instrumente practice și explicații clare despre gestionarea banilor, investiții, inflație și mindset antreprenorial, fiind adaptată realității economice din România.

**Link Achiziție**: [Editura Corint](https://edituracorint.ro/secretul-banilor-educatia-financiara-pe-care-nu-o-inveti-la-scoala.html)

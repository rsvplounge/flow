// Pekeng (mock) na detalye para sa Live Demos.
// Isang lugar lang ang i-eedit mo kung gusto mong palitan ang sample content.

// ──────────────────────────────────────────────────────────────
// DYNAMIC na petsa para sa demos — LAGING nasa hinaharap relatibo
// sa araw ngayon, kaya hindi nauubusan ang countdown kahit kailan
// i-access ng kliyente ang live demo.
// ──────────────────────────────────────────────────────────────
function upcoming(daysAhead, hour, minute = 0) {
  const d = new Date()
  d.setDate(d.getDate() + daysAhead)
  d.setHours(hour, minute, 0, 0)
  return d
}

function formatLabel(d) {
  const date = d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  const time = d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })
  return `${date} · ${time}`
}

const weddingDate = upcoming(180, 15) // ~6 buwan mula ngayon, 3:00 PM
const debutDate = upcoming(95, 18) // ~3 buwan mula ngayon, 6:00 PM
const birthdayDate = upcoming(50, 14) // ~7 linggo mula ngayon, 2:00 PM

export const weddingDemo = {
  slug: 'wedding',
  couple: 'Juan & Maria',
  tagline: 'Together with our families, we invite you to our wedding celebration',
  date: weddingDate.toISOString(),
  dateLabel: formatLabel(weddingDate),
  heroImage: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1600&q=75&auto=format&fit=crop',
  venue: {
    name: 'San Agustin Church',
    address: 'General Luna St, Intramuros, Manila',
    mapQuery: 'San Agustin Church Intramuros Manila',
  },
  reception: {
    name: 'The Blue Leaf Cosmopolitan',
    address: 'Aseana Ave, Parañaque City',
    mapQuery: 'The Blue Leaf Cosmopolitan Aseana Paranaque',
  },
  program: [
    { time: '3:00 PM', title: 'Wedding Ceremony' },
    { time: '5:30 PM', title: 'Cocktails & Photos' },
    { time: '6:30 PM', title: 'Reception & Dinner' },
    { time: '8:00 PM', title: 'First Dance' },
  ],
  dressCode: {
    theme: 'Formal · Garden Romantic',
    palette: [
      { label: 'Sage Green', color: '#8c9a7d' },
      { label: 'Blush', color: '#e7c9c2' },
      { label: 'Champagne', color: '#e8dcc0' },
    ],
    note: 'Formal attire. Ladies in long dresses, gentlemen in barong or suit. Kindly avoid wearing white.',
  },
  gifts:
    'Your presence at our wedding is the greatest gift of all. But should you wish to bless us further, a little something toward our new beginning together would be deeply appreciated.',
  hashtag: '#JuanAndMariaForever',
  entourage: {
    parents: {
      groom: ['Antonio R. Rivera †', 'Corazon D. Rivera'],
      bride: ['Eduardo M. Aguilar', 'Lourdes V. Aguilar'],
    },
    officiant: 'Rev. Fr. Manuel A. Bautista',
    sponsors: [
      { sir: 'Mr. Ramon T. Geronimo', madam: 'Mrs. Elena S. Geronimo' },
      { sir: 'Hon. Alfredo P. Lim', madam: 'Mrs. Teresita R. Lim' },
      { sir: 'Engr. Vicente C. Morales', madam: 'Mrs. Patricia L. Morales' },
      { sir: 'Mr. Rodolfo D. Castillo', madam: 'Mrs. Yolanda B. Castillo' },
      { sir: 'Dr. Federico A. Ngo', madam: 'Mrs. Susana M. Ngo' },
      { sir: 'Mr. Benigno R. Salazar', madam: 'Mrs. Imelda C. Salazar' },
      { sir: 'Atty. Manuel L. Tan', madam: 'Mrs. Rosario V. Tan' },
      { sir: 'Mr. Gregorio S. Aquino', madam: 'Mrs. Carmela D. Aquino' },
    ],
    honor: {
      matronOfHonor: 'Andrea R. Villanueva',
      maidOfHonor: 'Sophia M. Aguilar',
      bestMan: 'Carlo D. Rivera',
    },
    bridesmaids: ['Liza Cruz', 'Mae Tan', 'Joy Lim'],
    groomsmen: ['Paolo Diaz', 'Rico Yu', 'Ken Sy'],
  },
  story: {
    image: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=1200&q=75&auto=format&fit=crop',
    text: "We first met at a friend's birthday party in Manila back in 2018 — one shared playlist and a long conversation later, we knew it was the start of something. Through countless memories, spontaneous trips, and quiet everyday moments, our love only grew stronger. And under a sky full of stars in early 2026, with both our families hiding nearby, Juan asked the question — and Maria said yes. Now, we can't wait to begin forever with all of you by our side.",
  },
  // Placeholder sample photos — palitan ng totoong event photos (public/images).
  gallery: [
    'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=70&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600&q=70&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&q=70&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1522413452208-996ff3f3e740?w=600&q=70&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=70&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=70&auto=format&fit=crop',
  ],
}

export const debutDemo = {
  slug: 'debut',
  celebrant: 'Sofia Mae',
  tagline: 'You are invited to my 18th Birthday Celebration',
  date: debutDate.toISOString(),
  dateLabel: formatLabel(debutDate),
  heroImage: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1600&q=75&auto=format&fit=crop',
  about: {
    image: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=1200&q=75&auto=format&fit=crop',
    text: "Tonight, I step into womanhood surrounded by the people who shaped me. From a shy little girl into the woman I am becoming, every moment has led to this night. Thank you for being part of my story — let's celebrate eighteen beautiful years together.",
  },
  venue: {
    name: 'Marquis Events Place',
    address: 'BGC, Taguig City',
    mapQuery: 'Marquis Events Place BGC Taguig',
  },
  program: [
    { time: '6:00 PM', title: 'Guest Arrival' },
    { time: '6:30 PM', title: 'Grand Entrance' },
    { time: '7:00 PM', title: '18 Roses & 18 Candles' },
    { time: '8:30 PM', title: 'Party & Dancing' },
  ],
  dressCode: {
    theme: 'Glamorous Evening',
    palette: [
      { label: 'Champagne Gold', color: '#D4AF7A' },
      { label: 'Blush Pink', color: '#F4C2C2' },
      { label: 'Deep Plum', color: '#5D3A5A' },
    ],
    note: 'Semi-formal to formal attire. Avoid white and casual wear.',
  },
  gallery: [
    'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&q=70&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=600&q=70&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1525258946800-98cfd641d0de?w=600&q=70&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1612722432474-b971cdcea546?w=600&q=70&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=70&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?w=600&q=70&auto=format&fit=crop',
  ],
}

export const birthdayDemo = {
  slug: 'birthday',
  celebrant: "Lucas' 5th Birthday",
  tagline: "Come join the fun at Lucas' Safari Adventure!",
  date: birthdayDate.toISOString(),
  dateLabel: formatLabel(birthdayDate),
  heroImage: 'https://pub-c319294260ad40a7b74fdc9effbfc773.r2.dev/images/38/1777039341244-054991cb320b0031.jpeg',
  about: {
    image: 'https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=1200&q=75&auto=format&fit=crop',
    text: "Our little explorer is turning five! Lucas loves animals, dinosaurs, and big adventures — so we're throwing the wildest safari party just for him. Come celebrate five years of giggles, muddy shoes, and the biggest heart. The wild things are waiting!",
  },
  venue: {
    name: 'Kidzoona Play Area',
    address: 'SM Mall of Asia, Pasay City',
    mapQuery: 'Kidzoona SM Mall of Asia',
  },
  program: [
    { time: '2:00 PM', title: 'Welcome & Free Play' },
    { time: '2:30 PM', title: 'Magic Show' },
    { time: '3:15 PM', title: 'Games & Prizes' },
    { time: '4:00 PM', title: 'Cake & Blowing of Candles' },
  ],
  gallery: [
    'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=70&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&q=70&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=600&q=70&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=600&q=70&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=600&q=70&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600&q=70&auto=format&fit=crop',
  ],
}

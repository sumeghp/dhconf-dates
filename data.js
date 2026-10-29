// Conference data. Each deadline: date (YYYY-MM-DD), time (HH:MM, default 23:59), tz ('AoE' | 'UTC' | IANA zone),
// status: 'announced' (official site) | 'provisional' (tentative / third-party listing) | 'estimated' (from last year's pattern)
// Last checked: 30 Oct 2026
window.LAST_CHECKED = "2026-10-30";
window.TOPICS = {
  gen:   { label: "Digital humanities (general)",   color: "#7A3E9D" },
  comp:  { label: "Computational humanities",       color: "#2F6FB0" },
  text:  { label: "Text, literature & language",    color: "#B5452F" },
  lib:   { label: "Digital libraries & archives",   color: "#2E7D5B" },
  herit: { label: "Cultural heritage & archaeology", color: "#A87410" }
};
window.CONFERENCES = [
  {
    id: "dh27", country: "Ireland", start: "2027-06-28", short: "DH", year: 2027, name: "ADHO Digital Humanities Conference",
    topics: ["gen"], region: "Europe", place: "University of Galway, Ireland", dates: "28 Jun – 3 Jul 2027",
    url: "https://adho.org/",
    note: "The main annual conference of the Alliance of Digital Humanities Organizations. Submissions via ConfTool.",
    deadlines: [ { label: "Papers, posters, panels, workshops", date: "2026-11-20", status: "announced" } ]
  },
  {
    id: "dhbenelux27", country: "TBA", start: "2027-06-02", short: "DH Benelux", year: 2027, name: "DH Benelux Conference",
    topics: ["gen"], region: "Europe", place: "Venue TBA (Belgium, Netherlands or Luxembourg)", dates: "Jun 2027",
    url: "https://dhbenelux.org/",
    deadlines: [ { label: "Abstracts", date: "2026-12-10", tz: "Europe/Amsterdam", status: "estimated", note: "Recent deadlines: 15 Dec 2024, 7 Dec 2025 (both after extension)." } ]
  },
  {
    id: "latech27", country: "TBA", start: "2027-03-15", short: "LaTeCH-CLfL", year: 2027, name: "SIGHUM Workshop on Computational Linguistics for Cultural Heritage, Social Sciences, Humanities and Literature",
    topics: ["text", "comp"], region: "TBA", place: "With an ACL-family conference, TBA", dates: "Spring 2027",
    url: "https://sighum.wordpress.com/",
    deadlines: [ { label: "Papers", date: "2027-01-15", status: "estimated", note: "Recent deadlines: 18 Dec 2023, 30 Jan 2025, 5 Jan 2026. Depends on the host conference." } ]
  },
  {
    id: "csdh27", country: "Canada", start: "2027-06-01", short: "CSDH/SCHN", year: 2027, name: "Canadian Society for Digital Humanities Annual Conference",
    topics: ["gen"], region: "Americas", place: "At Congress 2027, Canada", dates: "Jun 2027",
    url: "https://csdh-schn.org/",
    deadlines: [ { label: "Papers, panels & demos", date: "2027-01-26", status: "estimated", note: "Recent deadlines: 13 Jan 2025; 26 Jan 2026 (extended to 2 Feb)." } ]
  },
  {
    id: "aiucd27", country: "Italy", start: "2027-06-02", short: "AIUCD", year: 2027, name: "Annual Conference of the Italian Association for Digital Humanities",
    topics: ["gen", "herit"], region: "Europe", place: "Venue TBA, Italy", dates: "Jun 2027",
    url: "https://www.aiucd.it/",
    deadlines: [ { label: "Papers & posters", date: "2027-01-31", tz: "Europe/Rome", status: "estimated", note: "AIUCD 2026 closed 31 Jan 2026 (CET); 2024 on 2 Feb." } ]
  },
  {
    id: "humanistica27", country: "TBA", start: "2027-05-18", short: "Humanistica", year: 2027, name: "Colloque Humanistica (francophone digital humanities)",
    topics: ["gen"], region: "TBA", place: "Venue TBA", dates: "May 2027",
    url: "https://www.humanisti.ca/",
    deadlines: [ { label: "Proposals (in French)", date: "2027-01-07", status: "estimated", note: "Humanistica 2025 closed 20 Dec 2024; 2026 on 7 Jan 2026." } ]
  },
  {
    id: "nlp4dh27", country: "TBA", start: "2027-07-01", short: "NLP4DH", year: 2027, name: "International Conference on Natural Language Processing for the Digital Humanities",
    topics: ["text", "comp"], region: "TBA", place: "Co-located with an ACL-family conference", dates: "2027",
    url: "https://www.nlp4dh.com/",
    deadlines: [ { label: "Direct paper submissions", date: "2027-03-05", status: "estimated", note: "NLP4DH 2026 (with ACL) closed 5 Mar 2026; dates follow the host conference." } ]
  },
  {
    id: "tpdl27", country: "TBA", start: "2027-09-21", short: "TPDL", year: 2027, name: "International Conference on Theory and Practice of Digital Libraries",
    topics: ["lib", "herit"], region: "Europe", place: "Venue TBA", dates: "Sep 2027",
    url: "https://tpdl.eu/",
    deadlines: [ { label: "Full papers", date: "2027-04-15", status: "estimated", note: "TPDL usually closes in April; the 2026 deadline was extended into May." } ]
  },
  {
    id: "jadh27", country: "Japan", start: "2027-09-10", short: "JADH", year: 2027, name: "Annual Conference of the Japanese Association for Digital Humanities",
    topics: ["gen"], region: "Asia", place: "Venue TBA, Japan", dates: "Sep 2027",
    url: "https://www.jadh.org/",
    deadlines: [ { label: "Papers, posters & panels", date: "2027-05-10", status: "estimated", note: "JADH calls have usually closed in early May." } ]
  },
  {
    id: "jcdl27", country: "TBA", start: "2027-10-12", short: "JCDL", year: 2027, name: "ACM/IEEE Joint Conference on Digital Libraries",
    topics: ["lib"], region: "TBA", place: "Venue TBA", dates: "Autumn 2027",
    url: "https://jcdl.org/",
    deadlines: [ { label: "Full & short papers", date: "2027-06-30", status: "estimated", note: "JCDL 2026 papers closed 30 Jun 2026; posters and demos a month later." } ]
  },
  // Recently closed (shown with "Passed")
  {
    id: "dharti26", country: "India", start: "2026-12-18", short: "DHARTI", year: 2026, name: "DHARTI Biennial Digital Humanities Conference",
    topics: ["gen"], region: "Asia", place: "KIIT, Bhubaneswar, India", dates: "18–20 Dec 2026",
    url: "https://dhdharti.in/conference/",
    note: "Theme: Decolonising the Digital: Social Justice, Inclusion, and Equitable Knowledge Production.",
    deadlines: [ { label: "Abstracts (extended)", date: "2026-09-10", status: "announced" } ]
  },
  {
    id: "chr27", country: "United Kingdom", start: "2027-01-05", short: "CHR", year: 2027, name: "Computational Humanities Research Conference",
    topics: ["comp"], region: "Europe", place: "Manchester, UK", dates: "5–8 Jan 2027",
    url: "https://2027.computational-humanities-research.org/",
    deadlines: [ { label: "Full papers", date: "2026-08-14", status: "announced" } ]
  },
  {
    id: "dhnb27", country: "Sweden", start: "2027-03-01", short: "DHNB", year: 2027, name: "Digital Humanities in the Nordic and Baltic Countries",
    topics: ["gen"], region: "Europe", place: "Umeå University, Sweden", dates: "1–5 Mar 2027",
    url: "https://dhnb.eu/conferences/dhnb2027/",
    deadlines: [ { label: "All proposals", date: "2026-10-16", status: "announced" } ]
  },
  {
    id: "dhd27", country: "Germany", start: "2027-03-01", short: "DHd", year: 2027, name: "Jahrestagung Digital Humanities im deutschsprachigen Raum",
    topics: ["gen"], region: "Europe", place: "Philipps-Universität Marburg, Germany", dates: "Spring 2027",
    url: "https://dhd2027.digitalhumanities.de/call-for-papers/",
    deadlines: [ { label: "Papers, panels, posters, workshops", date: "2026-08-01", tz: "Europe/Berlin", status: "announced" } ]
  },
  {
    id: "caa27", country: "Chile", start: "2027-05-17", short: "CAA", year: 2027, name: "Computer Applications and Quantitative Methods in Archaeology",
    topics: ["herit", "comp"], region: "Americas", place: "Santiago, Chile", dates: "17–20 May 2027",
    url: "https://2027.caaconference.org/",
    deadlines: [ { label: "Papers, posters & workshops", date: "2026-10-03", status: "announced" } ]
  }
];

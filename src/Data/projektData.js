import DearFriendsImage from "../Img/dear.png";
import DetectivTrackerImage from "../Img/DetectivTracker.png";
import WhatToDoTodayImage from "../Img/WhatToDoToday.png";

import DemoDetectiveQuestVideo from "../Video/Demo-DetectiveQuest.mp4";
import WhatToDoTodayVideo from "../Video/Demo-WhatToDoToday.mp4";

const projects = [
    {
      title: "Socialt Nätverk - DearFriends",
      description:
        "Fullstack applikation - Inspirerad av Facebook.",
      longText:"I applikationen kan du:",
      list: [
        "Skapa och ta bort konto",
        "Logga in och logga ut",
        "Uppdatera personlig information på profilsidan",
        "Se alla egna inlägg",
        "Besöka andra användares profiler",
        "Skicka och ta emot vänförfrågningar",
        "Skapa inlägg med bilder",
        "Gilla och kommentera inlägg",
        "Söka efter andra användare och få vännerförslag",
  ],
      image: DearFriendsImage,
      tags: ["Node.js", "React", "Express.js", "TypeScript", "SQL"],
        links: [
      { label: "Frontend repo", href: "https://github.com/dittnamn/frontend" },
      { label: "Backend repo", href: "https://github.com/dittnamn/backend" },
    ],
    },
    {
      title: "Konsoll Application - TheDetectiveQuestTracker",
      description:
        "Ett textbaserat spel där tar tar rollen som en detektiv som löser mysterier i ett London 1936.",
      longText:"I applikationen kan du:",
      list: [
        
      "Förflytta sig mellan olika miljöer via menyval",
      "Ta sig an nya brottsfall med varierande svårighetsgrad",
      "Undersöka brottsplatser för att samla ledtrådar",
      "Intervjua misstänkta och analysera deras utsagor",
      "Anklaga en misstänkt baserat på insamlad information",
      "Hantera tidsbegränsade fall med olika akutnivåer",
      "Få varning via meddelande när tiden håller på att rinna ut",
      "Riskera att olösta fall försvinner",
      "Se felaktigt lösta fall tas över av Scotland Yard",
      "Ringa Scotland Yard för att få nya fall",
      "Kalla på butlern för vägledning och tips",
      "Navigera spelet genom en loop-baserad spelcykel"
],
  
      image: DetectivTrackerImage,
      video: DemoDetectiveQuestVideo,
      tags: [".Net", "C#"],
        links: [
      { label: "Github repo", href: "https://github.com/natta1995/TheDetectiveQuestTracker"},
    ],
    },
 {
  title: "Frontend applikation - Aktivitetsgenerator",
  description:
    "En React-applikation som genererar aktivitetsförslag baserat på användarens val av plats och årstid.",
  longText: "I applikationen kan du:",
  list: [
    "Välja om du är hemma eller borta",
    "Få ett slumpmässigt aktivitetsförslag",
    "Se olika förslag beroende på årstid",
    "Få en tydlig presentation av aktiviteten i ett popup-fönster",
    "Se en beskrivning av aktiviteten och hur den kan göras",
    "Få ett varierat gränssnitt beroende på val och säsong",
    "Utforska ett responsivt gränssnitt byggt med React och CSS"
  ],
  image: WhatToDoTodayImage,
  video: WhatToDoTodayVideo,
  tags: ["JavaScript", "React", "Vite", "CSS"],
  links: [
    { label: "Frontend repo", href: "https://github.com/natta1995/what-to-do-today" },
  ],
},
  ];

export default projects;
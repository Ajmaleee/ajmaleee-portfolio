/* ==========================================================================
   AJMAL'S INTERNET CORNER — script.js
   Vanilla JS. No frameworks, no build step.
   --------------------------------------------------------------------------
   To edit the site: change PROJECTS or EXPLORING below. Project URLs live here
   so they're easy to update in one place. CUTOUTS maps each project to a
   taped-on illustration in assets/parts/ (swap in your own photos any time).
   The bottom of the file is the roaming-cat easter egg.
   ========================================================================== */

(function () {
  "use strict";

  /* ------------------------------------------------------------------ *
   * 1. DATA — edit me
   * ------------------------------------------------------------------ */

  var PROJECTS = [
    {
      name: "CircuitShelf Hardware",
      tagline: "an ESP32 system for tracking components and where they hide",
      desc: "I got tired of buying the same electronics twice because apparently remembering where I kept 200+ modules is an advanced human skill. So I built an ESP32 inventory system that tracks my components, locations, and lending status. Problem solved. Mostly.",
      tags: ["ESP32", "Inventory", "Hardware"],
      github: "https://github.com/Ajmaleee/CircuitShelf-Hardware",
      demo: "",
      visual: "inventory",
      note: "Please admire the engineering. Ignore the cable management."
    },
    {
      name: "TechBlog",
      tagline: "hardware experiments, projects, failures, and the rare first-try win",
      desc: "A tech blog where I document my hardware experiments, projects, failures, and the occasional moment where something actually works on the first try. Basically, it's where I dump what I learn before my brain decides to delete it.",
      tags: ["Blog", "Hardware", "Web"],
      github: "https://github.com/Ajmaleee/TechBlog",
      demo: "https://ajmaleeeblog.pages.dev/blog/",
      visual: "blog"
    },
    {
      name: "Ajmaleee Portfolio",
      tagline: "the portfolio, since a pile of GitHub repos wasn't enough",
      desc: "My personal portfolio, because apparently having a pile of random projects on GitHub isn't enough. It showcases my web development, IoT experiments, electronics builds, dashboards, and other questionable ideas that somehow escaped the \u201cthis is probably stupid\u201d phase.",
      tags: ["Portfolio", "Web"],
      github: "https://github.com/Ajmaleee/ajmaleee",
      demo: "",
      visual: "portfolio"
    },
    {
      name: "Wakeyyy Wakeeyyyy",
      tagline: "a BLARE-style alarm clock for the un-wakeable",
      desc: "A BLARE-style alarm clock for people who can sleep through alarms, earthquakes, and possibly the apocalypse. I built this because apparently telling myself \u201cwake up\u201d at 6 AM wasn't an effective technological solution. Revolutionary stuff, honestly.",
      tags: ["Hardware", "Embedded", "Fun"],
      github: "https://github.com/Ajmaleee/Wakeyyy-wakeeyyyy-",
      demo: "",
      visual: "alarm",
      note: "Please admire the engineering. Ignore the sleep schedule."
    },
    {
      name: "Speak-Easy",
      tagline: "communication help for people who have difficulty speaking",
      desc: "A communication project built around helping people who have difficulty speaking communicate more easily. It's basically me trying to make technology do something actually useful for once instead of making another button that changes a website from blue to slightly darker blue.",
      tags: ["Accessibility", "Web"],
      github: "https://github.com/Ajmaleee/Speak-Easy",
      demo: "https://speakeasyv1.pages.dev/",
      visual: "speech"
    },
    {
      name: "Meditrace",
      tagline: "medication tracking so you stop guessing",
      desc: "A medication-tracking project designed to keep important health information organized instead of relying on the classic human method of \u201cI definitely remember when I took that.\u201d Clean interface, useful reminders, and hopefully fewer moments of staring at a pill wondering what happened.",
      tags: ["Health", "Web"],
      github: "https://github.com/Ajmaleee/Meditrace",
      demo: "https://meditracev3.pages.dev/",
      visual: "medicine"
    },
    {
      name: "Jot-ToDO",
      tagline: "a straightforward task manager",
      desc: "A simple task manager for dumping tasks somewhere before my brain forgets them five seconds later. Jot-ToDO keeps things straightforward: add tasks, organize them, finish them, and pretend the massive list of unfinished work doesn't exist.",
      tags: ["Productivity", "Web"],
      github: "https://github.com/Ajmaleee/Jot-ToDO",
      demo: "https://jot-todo.pages.dev/",
      visual: "todo"
    },
    {
      name: "CircuitShelf",
      tagline: "inventory for my electronics disaster zone",
      desc: "CircuitShelf is my attempt at bringing order to the absolute disaster zone that is an electronics collection. It tracks sensors, modules, boards, cables, tools, and components so I can actually find things without excavating half my room first.",
      tags: ["Inventory", "Web"],
      github: "https://github.com/Ajmaleee/CircuitShelf",
      demo: "https://circuitshelf.pages.dev/",
      visual: "inventory"
    },
    {
      name: "Bench-Stock",
      tagline: "digital bookkeeping for the electronics bench",
      desc: "Basically a digital inventory for my electronics bench because apparently owning a ridiculous number of modules requires some form of bookkeeping. It helps me keep track of what I have instead of repeatedly buying something and discovering I already owned three.",
      tags: ["Inventory", "Hardware", "Web"],
      github: "https://github.com/Ajmaleee/Bench-Stock",
      demo: "https://bench-stock.pages.dev/",
      visual: "bench"
    },
    {
      name: "Luna Cycle",
      tagline: "a privacy-focused period tracking app",
      desc: "A privacy-focused period tracking app designed to help users understand and keep track of their cycles. I wanted something clean and useful rather than another app screaming notifications at you like it personally owns your calendar.",
      tags: ["Privacy", "Health", "Web"],
      github: "https://github.com/Ajmaleee/Luna-Cycle",
      demo: "https://lunacyclev1.pages.dev/",
      visual: "moon",
      note: "Working as intended. Mostly."
    },
    {
      name: "SignBridge v3",
      tagline: "a sign-based communication PWA",
      desc: "SignBridge v3 is a communication-focused PWA that helps speech-impaired users communicate using sign-based interaction. It's basically an attempt to make hand gestures understandable to technology instead of having computers continue pretending humans only communicate through keyboards.",
      tags: ["PWA", "Accessibility", "Sign language"],
      github: "https://github.com/Ajmaleee/SignBridgev3",
      demo: "https://signbridgev3.pages.dev/",
      visual: "sign"
    },
    {
      name: "SignBridge",
      tagline: "the original hand-sign-to-speech experiment",
      desc: "The original SignBridge experiment. It converts hand signs into speech to make communication easier for people who can't rely on spoken language. This was one of those projects where the idea sounded simple until I actually had to make the computer understand what a hand was doing.",
      tags: ["Accessibility", "Sign language", "Web"],
      github: "https://github.com/Ajmaleee/SignBridge",
      demo: "https://signbridgev2.pages.dev/",
      visual: "sign",
      cutout: "assets/parts/servo.svg"
    },
    {
      name: "Gym Photo Tracker",
      tagline: "visual gym progress tracking",
      desc: "A visual gym progress tracker built because staring at a mirror every day is probably the least scientific way imaginable to judge progress. This lets you actually document changes over time instead of trusting your brain's extremely unreliable \u201cyeah bro, definitely bigger\u201d algorithm.",
      tags: ["Web", "Fitness"],
      github: "https://github.com/Ajmaleee/gym-photo-tracker",
      demo: "",
      visual: "gym"
    },
    {
      name: "Py",
      tagline: "an AI-assisted Python learning project",
      desc: "Py is an AI-assisted Python learning project for people who are tired of opening twelve browser tabs just to figure out why a tiny piece of Python decided to commit crimes. It brings learning resources and an assistant together in one place.",
      tags: ["Python", "AI", "Learning"],
      github: "https://github.com/Ajmaleee/Py",
      demo: "",
      visual: "python"
    },
    {
      name: "PsuedoForge",
      tagline: "learn Python logic through pseudocode first",
      desc: "Learning Python logic can be painful, so PsuedoForge tries to make the process less painful by focusing on pseudocode and reasoning before throwing actual syntax at your face. Basically: understand the logic first, then let Python complain about your indentation.",
      tags: ["Python", "Learning", "Web"],
      github: "https://github.com/Ajmaleee/PsuedoForge",
      demo: "https://psuedoforge.pages.dev/",
      visual: "pseudocode"
    },
    {
      name: "Telegraph Transmitter",
      tagline: "a DIY Morse-code telegraph",
      desc: "Ever wanted to use Morse code but looked at the price of actual telegraph equipment and immediately gave up? Same. So I built my own version using accessible electronics. Old-school communication, modern DIY approach, and significantly less financial suffering.",
      tags: ["Hardware", "Morse", "DIY"],
      github: "https://github.com/Ajmaleee/telegraph_transmitter",
      demo: "",
      visual: "morse"
    },
    {
      name: "MeowOS",
      tagline: "a browser-based operating system experiment",
      desc: "My first attempt at making a browser-based operating system. It isn't going to replace Windows anytime soon, but hey, everybody starts somewhere. It basically turns a browser into a tiny desktop environment and lets me pretend I built an OS.",
      tags: ["Web", "OS", "Fun"],
      github: "https://github.com/Ajmaleee/MeowOS",
      demo: "https://ajmaleee.github.io/MeowOS/",
      visual: "os"
    },
    {
      name: "Personal Site",
      tagline: "a personal site for showing off the projects",
      desc: "A personal website for showing off my projects because apparently \u201cjust send them my GitHub\u201d wasn't considered professional enough. It collects my builds, experiments, and other digital nonsense into one place so people can see what I've actually been making.",
      tags: ["Portfolio", "Web"],
      github: "https://github.com/Ajmaleee/personal-site",
      demo: "https://cardboardpersonalsite.pages.dev/",
      visual: "portfolio"
    },
    {
      name: "Landslide Detection System v2",
      tagline: "the web dashboard for Terra Sentinel",
      desc: "The web dashboard for my Terra Sentinel landslide-monitoring project. It takes the data coming from the hardware and turns it into something humans can actually look at instead of staring at serial-monitor numbers and pretending that 73.4 means something.",
      tags: ["Web", "Dashboard", "IoT"],
      github: "https://github.com/Ajmaleee/Landslide-Detection-System---v2",
      demo: "",
      visual: "dashboard"
    },
    {
      name: "Terra-Sential",
      tagline: "ESP32 landslide-risk monitoring hardware",
      desc: "A hardware project built to monitor landslide risk using sensors and an ESP32. The idea is pretty simple: collect environmental data, watch for dangerous changes, and hopefully notice something is wrong before the mountain decides to rearrange the geography.",
      tags: ["ESP32", "Sensors", "IoT"],
      github: "https://github.com/Ajmaleee/Terra-Sential",
      demo: "",
      visual: "mountain",
      note: "This looked easier in my head."
    },
    {
      name: "Mallu Dhaba",
      tagline: "a restaurant website with scroll-triggered flair",
      desc: "A restaurant website concept for Mallu Dhaba, featuring scroll-triggered animations and enough visual flair to make you hungry before you've even seen the menu. Basically, I made a website for food because apparently websites themselves weren't delicious enough.",
      tags: ["Web", "Food", "Animation"],
      github: "https://github.com/Ajmaleee/mallu-dhaba-",
      demo: "https://mallu-dhaba.vercel.app/",
      visual: "restaurant"
    },
    {
      name: "FLOWFI-32",
      tagline: "an ESP32 digital contact card",
      desc: "An ESP32-powered digital contact card that creates its own Wi-Fi hotspot and serves a mobile-friendly profile page. Basically NFC's slightly more chaotic cousin. Connect to the ESP32, open the page, and boom\u2014contact details without handing someone a sad little paper card.",
      tags: ["ESP32", "WiFi", "Hardware"],
      github: "https://github.com/Ajmaleee/FLOWFI-32",
      demo: "",
      visual: "wifi"
    },
    {
      name: "MeowOS v2",
      tagline: "the browser OS glow-up, now with more cat",
      desc: "MeowOS v2 takes my first browser-based OS experiment and gives it an actual glow-up. It has desktop-style interactions, apps, animations, and an unnecessarily adorable cat theme. Because apparently operating systems need cats now. I'm not arguing with that.",
      tags: ["Web", "OS", "Fun"],
      github: "https://github.com/Ajmaleee/MeowOS-v2",
      demo: "https://ajmaleee.github.io/MeowOS-v2/",
      visual: "os2",
      note: "It has a cat. That's the feature."
    },
    {
      name: "OhmLab",
      tagline: "a toolbox for electronics calculations",
      desc: "OhmLab is basically a toolbox for electronics calculations. Resistors, circuits, and other things that normally make you reach for a calculator are handled through quick interactive tools. Built for students and makers who would rather calculate things than suffer through them manually.",
      tags: ["Electronics", "Tools", "Web"],
      github: "https://github.com/Ajmaleee/OhmLab",
      demo: "https://ohmlab.pages.dev/",
      visual: "ohm"
    },
    {
      name: "Landslide System \u2014 Device Source",
      tagline: "the embedded code behind Terra Sentinel",
      desc: "The actual embedded code behind the Landslide Detection System. This is where the ESP32 stops being an expensive blinking LED and starts reading sensors, processing environmental data, and doing the important hardware-side work behind Terra Sentinel.",
      tags: ["ESP32", "Embedded", "Sensors"],
      github: "https://github.com/Ajmaleee/Landslide-Detection-System---device-source-code",
      demo: "",
      visual: "chipmountain"
    },
    {
      name: "Orbit New Tab",
      tagline: "a new-tab screen serving NASA's Astronomy Picture of the Day",
      desc: "Orbit replaces the boring browser new-tab screen with NASA's Astronomy Picture of the Day. Because apparently staring at a random galaxy for ten minutes after opening a tab counts as productivity. Technically it's astronomy. Technically I'm still procrastinating.",
      tags: ["Web", "Astronomy", "Browser"],
      github: "https://github.com/Ajmaleee/Orbit-New-Tab",
      demo: "https://ajmaleee.github.io/Orbit-New-Tab/",
      visual: "orbit"
    },
    {
      name: "Flames Reveal",
      tagline: "a small private hidden-access website",
      desc: "A small private experimental website with a hidden-access concept. It's intentionally mysterious, because sometimes a project doesn't need a twelve-page explanation. Sometimes you just lock the door, hide the key, and refuse to elaborate.",
      tags: ["Web", "Experimental"],
      github: "https://github.com/Ajmaleee/Flames-reveal",
      demo: "https://ajmaleee.github.io/Flames-reveal/",
      visual: "lock"
    },
    {
      name: "Phishing Detector",
      tagline: "an experiment for spotting suspicious links",
      desc: "A simple phishing-detection experiment designed to help identify suspicious links before someone clicks something they absolutely shouldn't. It's basically a tiny digital bouncer standing between you and a sketchy URL saying, \u201cYeah\u2026 maybe don't go in there.\u201d",
      tags: ["Web", "Security", "Tools"],
      github: "https://github.com/Ajmaleee/Phishing-detector",
      demo: "",
      visual: "phishing",
      note: "Trust, but verify."
    },
    {
      name: "BEEP",
      tagline: "a personal electronic pet on a microcontroller",
      desc: "BEEP \u2014 a small electronic creature that beeps, blinks, and has strong opinions about being ignored. Equal parts nostalgia and soldering practice, and proof that not every project needs a business model.",
      tags: ["Embedded", "Fun"],
      github: "",
      demo: "",
      visual: "pet",
      note: "Current bug count: classified information."
    }
  ];

  // Editable placeholders — swap the text whenever your attention span does.
  var EXPLORING = [
    { label: "Currently building", text: "whatever survived the last commit" },
    { label: "Currently learning", text: "that the datasheet was right all along" },
    { label: "Currently debugging", text: "why it works on the desk but not on the floor" },
    { label: "Ideas that need supervision", text: "a robot that judges my cable management" }
  ];

  var STICKER_MESSAGES = [
    "press for wisdom",
    "yes, still compiling",
    "have you tried a bigger capacitor?",
    "it's not a bug, it's a feature",
    "cable management: pending",
    "the magic smoke is fine, actually",
    "works on my machine \u2122",
    "one more experiment, promise"
  ];

  /* ------------------------------------------------------------------ *
   * 2. CUTOUTS — taped-on part illustrations per project (keyed by `visual`).
   *    Put your own photos in assets/photos/ and point entries at them.
   * ------------------------------------------------------------------ */
  var CUTOUTS = {
    inventory: "assets/parts/chip.svg",
    blog: "assets/parts/led.svg",
    portfolio: "assets/parts/breadboard.svg",
    alarm: "assets/parts/buzzer.svg",
    speech: "assets/parts/ultrasonic.svg",
    medicine: "assets/parts/capacitor.svg",
    todo: "assets/parts/resistor.svg",
    bench: "assets/parts/screwdriver.svg",
    moon: "assets/parts/servo.svg",
    sign: "assets/parts/wires.svg",
    gym: "assets/parts/multimeter.svg",
    python: "assets/parts/esp32.svg",
    pseudocode: "assets/parts/arduino.svg",
    morse: "assets/parts/resistor.svg",
    os: "assets/parts/arduino.svg",
    os2: "assets/parts/otto.svg",
    dashboard: "assets/parts/multimeter.svg",
    mountain: "assets/parts/soil_moisture.svg",
    restaurant: "assets/parts/capacitor.svg",
    wifi: "assets/parts/esp32.svg",
    ohm: "assets/parts/resistor.svg",
    chipmountain: "assets/parts/chip.svg",
    orbit: "assets/parts/led.svg",
    lock: "assets/parts/screwdriver.svg",
    phishing: "assets/parts/wires.svg",
    pet: "assets/parts/otto.svg"
  };

  function cutoutFor(project) {
    return project.cutout || CUTOUTS[project.visual] || CUTOUTS.inventory;
  }

  /* ------------------------------------------------------------------ *
   * 3. Helpers
   * ------------------------------------------------------------------ */
  var prefersReducedMotion = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  }

  // Collage variety, assigned by index so PROJECTS stays tidy.
  var PAPERS = ["a", "b", "c"];
  var ROTS = ["-1.2deg", "0.9deg", "-0.6deg", "1.3deg", "-1.5deg", "0.7deg", "-0.9deg", "1.1deg"];
  var SIZES = ["wide", "small", "tall", "small", "small", "tall", "wide", "small"];

  /* ------------------------------------------------------------------ *
   * 4. Render projects
   * ------------------------------------------------------------------ */
  function buildProjectLink(project) {
    var links = el("div", "scrap-links");

    if (project.github) {
      var gh = el("a", "btn btn-ghost");
      gh.href = project.github;
      gh.target = "_blank";
      gh.rel = "noopener";
      gh.textContent = "Source \u2197";
      gh.setAttribute("aria-label", project.name + " source on GitHub (opens in a new tab)");
      links.appendChild(gh);
    }

    if (project.demo) {
      var demo = el("a", "btn btn-primary");
      demo.href = project.demo;
      demo.target = "_blank";
      demo.rel = "noopener";
      demo.textContent = "Live site \u2197";
      demo.setAttribute("aria-label", project.name + " live website (opens in a new tab)");
      links.appendChild(demo);
    }

    if (!project.github && !project.demo) {
      links.appendChild(el("span", "pending", "// no public link yet"));
    }

    return links;
  }

  function buildProject(project, index) {
    var size = SIZES[index % SIZES.length];
    var paper = PAPERS[index % PAPERS.length];
    var rot = ROTS[index % ROTS.length];

    var article = el("article", "scrap size-" + size + ((index % 5 === 2) ? " lift" : ""));
    article.setAttribute("data-paper", paper);
    article.style.setProperty("--rot", rot);

    var tape = el("span", "tape tape--top");
    tape.setAttribute("aria-hidden", "true");
    article.appendChild(tape);

    var figure = el("figure", "scrap-visual");
    figure.setAttribute("aria-hidden", "true");
    var cutout = el("img", "scrap-cutout");
    cutout.src = cutoutFor(project);
    cutout.alt = "";
    cutout.loading = "lazy";
    cutout.width = 180;
    cutout.height = 120;
    figure.appendChild(cutout);
    article.appendChild(figure);

    var head = el("div", "scrap-head");
    head.appendChild(el("h3", "hand", project.name));
    head.appendChild(el("span", "badge" + (project.demo ? " badge--live" : ""), project.demo ? "live" : "on GitHub"));
    article.appendChild(head);

    article.appendChild(el("p", "scrap-tag", project.tagline));
    article.appendChild(el("p", "scrap-desc", project.desc));

    if (project.tags && project.tags.length) {
      var tagList = el("ul", "tags");
      project.tags.forEach(function (tag) { tagList.appendChild(el("li", null, tag)); });
      article.appendChild(tagList);
    }

    if (project.note) article.appendChild(el("p", "scrap-note hand", project.note));

    article.appendChild(buildProjectLink(project));
    return article;
  }

  function renderProjects() {
    var grid = document.getElementById("projects-grid");
    if (!grid) return;
    var frag = document.createDocumentFragment();
    PROJECTS.forEach(function (project, index) {
      frag.appendChild(buildProject(project, index));
    });
    grid.appendChild(frag);
  }

  /* ------------------------------------------------------------------ *
   * 5. Render "currently exploring"
   * ------------------------------------------------------------------ */
  function renderExploring() {
    var board = document.getElementById("exploring-board");
    if (!board) return;
    EXPLORING.forEach(function (item) {
      var li = el("li", "pin");
      li.appendChild(el("span", "pin-label", item.label));
      li.appendChild(el("p", "pin-text", item.text));
      board.appendChild(li);
    });
  }

  /* ------------------------------------------------------------------ *
   * 6. Navigation (accessible disclosure)
   * ------------------------------------------------------------------ */
  function initNav() {
    var header = document.getElementById("site-header");
    var toggle = header && header.querySelector(".nav-toggle");
    var nav = document.getElementById("primary-nav");
    if (!header || !toggle || !nav) return;

    header.classList.add("is-js");

    function setOpen(open) {
      header.classList.toggle("nav-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
    }

    toggle.addEventListener("click", function () { setOpen(!header.classList.contains("nav-open")); });
    nav.addEventListener("click", function (event) { if (event.target.closest("a")) setOpen(false); });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && header.classList.contains("nav-open")) {
        setOpen(false);
        toggle.focus();
      }
    });
    document.addEventListener("click", function (event) {
      if (header.classList.contains("nav-open") && !header.contains(event.target)) setOpen(false);
    });
    window.addEventListener("resize", function () {
      if (window.innerWidth >= 640 && header.classList.contains("nav-open")) setOpen(false);
    });
  }

  /* ------------------------------------------------------------------ *
   * 7. Reveal-on-scroll
   * ------------------------------------------------------------------ */
  function initReveal() {
    var sections = document.querySelectorAll(".section");
    if (!sections.length) return;
    // Disable scroll-triggered reveals per user request; just show.
    sections.forEach(function (s) { s.classList.add("in"); });
  }

  /* ------------------------------------------------------------------ *
   * 8. Easter egg — secret doodle note
   * ------------------------------------------------------------------ */
  function initSecretDoodle() {
    var button = document.getElementById("secret-doodle");
    var note = document.getElementById("secret-note");
    if (!button || !note) return;
    button.addEventListener("click", function () {
      var willShow = note.hasAttribute("hidden");
      if (willShow) note.removeAttribute("hidden");
      else note.setAttribute("hidden", "");
      button.setAttribute("aria-expanded", String(willShow));
    });
  }

  /* ------------------------------------------------------------------ *
   * 9. Easter egg — the sticker that talks back
   * ------------------------------------------------------------------ */
  function initSticker() {
    var sticker = document.getElementById("sticker");
    var label = document.getElementById("sticker-label");
    var status = document.getElementById("sticker-msg");
    if (!sticker || !label || !status) return;

    var index = 0;
    sticker.addEventListener("click", function () {
      index = (index + 1) % STICKER_MESSAGES.length;
      var message = STICKER_MESSAGES[index];
      label.textContent = message;
      status.textContent = message;
      if (!prefersReducedMotion) {
        sticker.classList.remove("reacting");
        void sticker.offsetWidth;
        sticker.classList.add("reacting");
      }
    });
    sticker.addEventListener("animationend", function () { sticker.classList.remove("reacting"); });
  }

  /* ------------------------------------------------------------------ *
   * 10. Easter egg — cable management (attempt)
   * ------------------------------------------------------------------ */
  function initCableToggle() {
    var button = document.getElementById("cable-toggle");
    var art = document.getElementById("hero-art");
    var caption = document.querySelector(".hero-caption");
    if (!button || !art) return;

    var tidy = false;
    button.addEventListener("click", function () {
      tidy = !tidy;
      art.classList.toggle("is-tidy", tidy);
      button.setAttribute("aria-pressed", String(tidy));
      button.textContent = tidy ? "Re-tangle the cables" : "Tidy the cables (attempt)";
      if (caption) {
        caption.innerHTML = tidy
          ? 'the current state of the desk \u2014 <span class="nowrap">temporarily respectable</span>'
          : 'the current state of the desk \u2014 <span class="nowrap">cables under active investigation</span>';
      }
    });
  }

  /* ------------------------------------------------------------------ *
   * 11. Bonus secret — type "beep"
   * ------------------------------------------------------------------ */
  function initBeepSecret() {
    var buffer = "";
    var target = "beep";
    document.addEventListener("keydown", function (event) {
      var tag = (event.target && event.target.tagName) || "";
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      if (event.key.length !== 1) return;
      buffer = (buffer + event.key.toLowerCase()).slice(-target.length);
      if (buffer !== target) return;
      buffer = "";
      var sticker = document.getElementById("sticker");
      var status = document.getElementById("sticker-msg");
      if (sticker && !prefersReducedMotion) {
        sticker.classList.remove("reacting");
        void sticker.offsetWidth;
        sticker.classList.add("reacting");
      }
      if (status) status.textContent = "beep acknowledged. BEEP is pleased.";
    });
  }

  /* ------------------------------------------------------------------ *
   * 12. THE CAT — roams, flees the cursor, gets fed fish from a bucket
   * ------------------------------------------------------------------ */
  var CAT_SVG =
    '<span class="cat-bubble" aria-hidden="true"></span>' +
    '<span class="cat-inner">' +
    '<svg viewBox="0 0 110 84" fill="none" stroke="#25241F" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round">' +
    '<path class="cat-tail" d="M22 52c-10 1-15-9-9-16"/>' +
    '<ellipse cx="46" cy="52" rx="26" ry="16" fill="#E5C56C" fill-opacity=".55"/>' +
    '<path class="cat-leg" d="M34 66v8"/>' +
    '<path class="cat-leg" d="M44 67v7"/>' +
    '<path class="cat-leg" d="M56 67v7"/>' +
    '<path class="cat-leg" d="M64 66v8"/>' +
    '<circle cx="82" cy="38" r="17" fill="#E5C56C" fill-opacity=".55"/>' +
    '<path d="M70 26l-2-12 12 6z" fill="#E5C56C" fill-opacity=".55"/>' +
    '<path d="M92 24l6-11 4 13z" fill="#E5C56C" fill-opacity=".55"/>' +
    '<circle cx="76" cy="37" r="2" fill="#25241F"/>' +
    '<circle cx="88" cy="37" r="2" fill="#25241F"/>' +
    '<path d="M81 43l2 2-2 2"/>' +
    '<path d="M72 44l-8-2M72 48l-8 2M90 44l8-2M90 48l8 2" stroke="#6E695E"/>' +
    '</svg></span>';

  var FISH_SVG =
    '<svg viewBox="0 0 40 24" fill="none" stroke="#25241F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
    '<path d="M4 12c6-7 16-7 22 0-6 7-16 7-22 0z" fill="#75916A" fill-opacity=".5"/>' +
    '<path d="M26 12l10-6v12z" fill="#75916A" fill-opacity=".5"/>' +
    '<circle cx="11" cy="11" r="1.6" fill="#25241F"/></svg>';

  var BUCKET_SVG =
    '<svg viewBox="0 0 24 24" fill="none" stroke="#25241F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
    '<path d="M4 8h16l-2 12H6z" fill="#E5C56C" fill-opacity=".5"/>' +
    '<path d="M6 8a6 6 0 0 1 12 0"/><circle cx="10" cy="14" r="1.4" fill="#25241F"/>' +
    '<path d="M10 14c0-1.6 3-1.6 3 0"/></svg>';

  function initCat() {
    if (!document.body || !window.matchMedia) return;

    var catOn = true;
    try {
      var saved = window.localStorage.getItem("ajmal-cat");
      if (saved === "off") catOn = false;
    } catch (e) { /* storage blocked — ignore */ }

    // --- cat element ---
    var cat = document.createElement("button");
    cat.type = "button";
    cat.className = "cat";
    cat.id = "cat";
    cat.tabIndex = -1;
    cat.setAttribute("aria-hidden", "true");
    cat.innerHTML = CAT_SVG;
    cat.style.display = "none";
    document.body.appendChild(cat);

    var catInner = cat.querySelector(".cat-inner");
    var bubble = cat.querySelector(".cat-bubble");

    // --- fish bucket ---
    var bucket = document.createElement("div");
    bucket.className = "fish-bucket";
    bucket.innerHTML =
      '<button class="bucket-toggle" type="button" aria-expanded="false" aria-controls="bucket-panel">' +
      '<span class="bucket-icon" aria-hidden="true">' + BUCKET_SVG + "</span>fish bucket</button>" +
      '<div class="bucket-panel" id="bucket-panel" hidden>' +
      '<p class="bucket-hint">Drag a fish anywhere to calm the cat. (Or tap it.)</p>' +
      '<div class="fish-row">' +
      '<button class="fish-source" type="button" aria-label="Drag a fish onto the page to feed the cat">' + FISH_SVG + "</button>" +
      '<button class="fish-source" type="button" aria-label="Drag a fish onto the page to feed the cat">' + FISH_SVG + "</button>" +
      '<button class="fish-source" type="button" aria-label="Drag a fish onto the page to feed the cat">' + FISH_SVG + "</button>" +
      "</div>" +
      '<button class="cat-toggle" type="button" aria-pressed="true">cat: on</button>' +
      "</div>";
    document.body.appendChild(bucket);

    var bucketToggle = bucket.querySelector(".bucket-toggle");
    var bucketPanel = bucket.querySelector(".bucket-panel");
    var catToggle = bucket.querySelector(".cat-toggle");
    var fishSources = bucket.querySelectorAll(".fish-source");

    bucketToggle.addEventListener("click", function () {
      var open = bucketPanel.hasAttribute("hidden");
      if (open) bucketPanel.removeAttribute("hidden");
      else bucketPanel.setAttribute("hidden", "");
      bucketToggle.setAttribute("aria-expanded", String(open));
    });

    // --- state ---
    var W = function () { return window.innerWidth; };
    var H = function () { return window.innerHeight; };
    function size() { return cat.offsetWidth || 58; }
    function headerH() { var h = document.getElementById("site-header"); return h ? h.offsetHeight : 0; }
    function clamp(v, a, b) { return v < a ? a : (v > b ? b : v); }

    var cs = {
      x: 24, y: 0, tx: 0, ty: 0, flip: 1, walking: false,
      hop: 0, hopStart: 0, nextHopAt: 0,
      scared: false, idleUntil: 0, mood: "roam"
    };
    var mouse = { x: -9999, y: -9999, active: false };
    var fish = [];
    var rafId = null;

    function bounds() {
      var s = size();
      var top = headerH() + 8;
      return { minX: 8, maxX: Math.max(8, W() - s - 8), minY: top, maxY: Math.max(top, H() - s - 8) };
    }
    function cx() { return cs.x + size() / 2; }
    function cy() { return cs.y + size() / 2; }
    function pickTarget() {
      var b = bounds();
      cs.tx = b.minX + Math.random() * (b.maxX - b.minX);
      cs.ty = b.minY + Math.random() * (b.maxY - b.minY);
    }

    function nearestFish() {
      var best = null, bd = Infinity;
      for (var i = 0; i < fish.length; i++) {
        var d = Math.hypot(fish[i].x - cx(), fish[i].y - cy());
        if (d < bd) { bd = d; best = fish[i]; }
      }
      return best;
    }

    function showBubble(text) {
      bubble.textContent = text;
      bubble.classList.add("show");
      window.clearTimeout(showBubble._t);
      showBubble._t = window.setTimeout(function () { bubble.classList.remove("show"); }, 1100);
    }

    function eatFish(f) {
      if (f.el && f.el.parentNode) f.el.parentNode.removeChild(f.el);
      fish = fish.filter(function (x) { return x !== f; });
      cs.scared = false;
      cs.mood = "roam";
      pickTarget();
      showBubble("\u2665");
    }

    function frame(now) {
      var b = bounds();
      var s = size();

      if (fish.length) {
        var f = nearestFish();
        cs.tx = clamp(f.x - s / 2, b.minX, b.maxX);
        cs.ty = clamp(f.y - s / 2, b.minY, b.maxY);
        cs.mood = "lured";
      } else if (cs.scared && mouse.active) {
        var dist = Math.hypot(cx() - mouse.x, cy() - mouse.y);
        if (dist < 165) {
          cs.mood = "flee";
          var dx = cx() - mouse.x, dy = cy() - mouse.y, len = dist || 1;
          cs.tx = clamp(cx() + dx / len * 240 - s / 2, b.minX, b.maxX);
          cs.ty = clamp(cy() + dy / len * 240 - s / 2, b.minY, b.maxY);
        } else if (cs.mood === "flee") {
          cs.mood = "roam";
          pickTarget();
        }
      }

      var speed = cs.mood === "flee" ? 3.1 : (cs.mood === "lured" ? 2.0 : 1.5);
      cs.walking = false;

      if (!(cs.mood === "roam" && now < cs.idleUntil)) {
        var ddx = cs.tx - cs.x, ddy = cs.ty - cs.y;
        var d = Math.hypot(ddx, ddy);
        if (d < 4) {
          if (cs.mood === "lured") eatFish(nearestFish());
          else if (cs.mood === "roam") { cs.idleUntil = now + 700 + Math.random() * 2200; pickTarget(); }
        } else {
          cs.x += ddx / d * speed;
          cs.y += ddy / d * speed;
          cs.flip = ddx < 0 ? -1 : 1;
          cs.walking = true;
        }
      }

      if (cs.walking && now > cs.nextHopAt) {
        cs.hopStart = now;
        cs.nextHopAt = now + 1400 + Math.random() * 2200;
      }
      var hopDur = 420;
      if (cs.walking && cs.hopStart && now - cs.hopStart < hopDur) {
        cs.hop = -Math.sin((now - cs.hopStart) / hopDur * Math.PI) * 16;
      } else {
        cs.hop = 0;
      }

      cat.style.transform = "translate3d(" + cs.x + "px," + (cs.y + cs.hop) + "px,0)";
      catInner.style.transform = "scaleX(" + cs.flip + ")";
      cat.classList.toggle("is-walking", cs.walking);

      rafId = window.requestAnimationFrame(frame);
    }

    function start() {
      if (rafId == null) rafId = window.requestAnimationFrame(frame);
    }
    function stop() {
      if (rafId != null) { window.cancelAnimationFrame(rafId); rafId = null; }
    }

    function setCatEnabled(on) {
      catOn = on;
      catToggle.textContent = "cat: " + (on ? "on" : "off");
      catToggle.setAttribute("aria-pressed", String(on));
      try { window.localStorage.setItem("ajmal-cat", on ? "on" : "off"); } catch (e) {}
      if (!on) {
        stop();
        cat.style.display = "none";
      } else {
        cat.style.display = "block";
        if (prefersReducedMotion) {
          cs.x = 20; cs.y = H() - size() - 20;
          cat.style.transform = "translate3d(" + cs.x + "px," + cs.y + "px,0)";
        } else {
          start();
        }
      }
    }

    catToggle.addEventListener("click", function () { setCatEnabled(!catOn); });

    cat.addEventListener("click", function () {
      cs.scared = true;
      cs.mood = "flee";
      showBubble("!");
      if (!prefersReducedMotion) {
        cs.hopStart = window.performance.now();
        cs.nextHopAt = cs.hopStart + 1200;
      }
    });

    // --- mouse awareness ---
    window.addEventListener("mousemove", function (e) {
      mouse.x = e.clientX; mouse.y = e.clientY; mouse.active = true;
    }, { passive: true });
    window.addEventListener("mouseleave", function () { mouse.active = false; });

    // --- fish dragging ---
    function addFish(x, y) {
      var ghost = document.createElement("div");
      ghost.className = "fish placed";
      ghost.setAttribute("aria-hidden", "true");
      ghost.innerHTML = FISH_SVG;
      ghost.style.left = (x - 17) + "px";
      ghost.style.top = (y - 10) + "px";
      document.body.appendChild(ghost);

      fish.push({ x: x, y: y, el: ghost });
      while (fish.length > 6) {
        var old = fish.shift();
        if (old.el && old.el.parentNode) old.el.parentNode.removeChild(old.el);
      }
      if (catOn && !prefersReducedMotion) {
        cs.scared = false; // food wins over fear
        start();
      }
    }

    fishSources.forEach(function (source) {
      var dragging = false, moved = false, startX = 0, startY = 0;
      var ghost = null;

      source.addEventListener("pointerdown", function (e) {
        dragging = true; moved = false;
        startX = e.clientX; startY = e.clientY;
        ghost = document.createElement("div");
        ghost.className = "fish dragging";
        ghost.setAttribute("aria-hidden", "true");
        ghost.innerHTML = FISH_SVG;
        ghost.style.left = (e.clientX - 22) + "px";
        ghost.style.top = (e.clientY - 12) + "px";
        document.body.appendChild(ghost);
        try { source.setPointerCapture(e.pointerId); } catch (err) {}
        e.preventDefault();
      });

      source.addEventListener("pointermove", function (e) {
        if (!dragging || !ghost) return;
        if (Math.abs(e.clientX - startX) + Math.abs(e.clientY - startY) > 6) moved = true;
        ghost.style.left = (e.clientX - 22) + "px";
        ghost.style.top = (e.clientY - 12) + "px";
      });

      function endDrag(e) {
        if (!dragging) return;
        dragging = false;
        var x = e.clientX, y = e.clientY;
        if (ghost && ghost.parentNode) ghost.parentNode.removeChild(ghost);
        ghost = null;
        if (!moved) {
          // keyboard / tap fallback: drop it near the middle of the screen
          x = W() / 2;
          y = Math.max(headerH() + 60, H() * 0.45);
        }
        addFish(clamp(x, 20, W() - 20), clamp(y, headerH() + 20, H() - 20));
      }
      source.addEventListener("pointerup", endDrag);
      source.addEventListener("pointercancel", endDrag);
    });

    // --- reduced motion: park the cat, no roaming ---
    setCatEnabled(catOn);
    if (prefersReducedMotion && catOn) {
      cs.x = 20; cs.y = H() - size() - 20;
      cat.style.transform = "translate3d(" + cs.x + "px," + cs.y + "px,0)";
    }

    window.addEventListener("resize", function () {
      var b = bounds();
      cs.x = clamp(cs.x, b.minX, b.maxX);
      cs.y = clamp(cs.y, b.minY, b.maxY);
    });
  }

  /* ------------------------------------------------------------------ *
   * 13. Boot
   * ------------------------------------------------------------------ */
  function init() {
    renderProjects();
    renderExploring();
    initNav();
    // initReveal removed per request
    initSecretDoodle();
    initSticker();
    initCableToggle();
    initBeepSecret();
    initCat();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

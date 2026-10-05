const books = [
  { name: "Genesis", chapters: 50, testament: "OT", group: "THE LAW" },
  { name: "Exodus", chapters: 40, testament: "OT", group: "THE LAW" },
  { name: "Leviticus", chapters: 27, testament: "OT", group: "THE LAW" },
  { name: "Numbers", chapters: 36, testament: "OT", group: "THE LAW" },
  { name: "Deuteronomy", chapters: 34, testament: "OT", group: "THE LAW" },
  { name: "Joshua", chapters: 24, testament: "OT", group: "HISTORY" },
  { name: "Judges", chapters: 21, testament: "OT", group: "HISTORY" },
  { name: "Ruth", chapters: 4, testament: "OT", group: "HISTORY" },
  { name: "1 Samuel", chapters: 31, testament: "OT", group: "HISTORY" },
  { name: "2 Samuel", chapters: 24, testament: "OT", group: "HISTORY" },
  { name: "1 Kings", chapters: 22, testament: "OT", group: "HISTORY" },
  { name: "2 Kings", chapters: 25, testament: "OT", group: "HISTORY" },
  { name: "1 Chronicles", chapters: 29, testament: "OT", group: "HISTORY" },
  { name: "2 Chronicles", chapters: 36, testament: "OT", group: "HISTORY" },
  { name: "Ezra", chapters: 10, testament: "OT", group: "HISTORY" },
  { name: "Nehemiah", chapters: 13, testament: "OT", group: "HISTORY" },
  { name: "Esther", chapters: 10, testament: "OT", group: "HISTORY" },
  { name: "Job", chapters: 42, testament: "OT", group: "POETRY & WISDOM" },
  { name: "Psalms", chapters: 150, testament: "OT", group: "POETRY & WISDOM" },
  { name: "Proverbs", chapters: 31, testament: "OT", group: "POETRY & WISDOM" },
  { name: "Ecclesiastes", chapters: 12, testament: "OT", group: "POETRY & WISDOM" },
  { name: "Song of Solomon", chapters: 8, testament: "OT", group: "POETRY & WISDOM" },
  { name: "Isaiah", chapters: 66, testament: "OT", group: "MAJOR PROPHETS" },
  { name: "Jeremiah", chapters: 52, testament: "OT", group: "MAJOR PROPHETS" },
  { name: "Lamentations", chapters: 5, testament: "OT", group: "MAJOR PROPHETS" },
  { name: "Ezekiel", chapters: 48, testament: "OT", group: "MAJOR PROPHETS" },
  { name: "Daniel", chapters: 12, testament: "OT", group: "MAJOR PROPHETS" },
  { name: "Hosea", chapters: 14, testament: "OT", group: "MINOR PROPHETS" },
  { name: "Joel", chapters: 3, testament: "OT", group: "MINOR PROPHETS" },
  { name: "Amos", chapters: 9, testament: "OT", group: "MINOR PROPHETS" },
  { name: "Obadiah", chapters: 1, testament: "OT", group: "MINOR PROPHETS" },
  { name: "Jonah", chapters: 4, testament: "OT", group: "MINOR PROPHETS" },
  { name: "Micah", chapters: 7, testament: "OT", group: "MINOR PROPHETS" },
  { name: "Nahum", chapters: 3, testament: "OT", group: "MINOR PROPHETS" },
  { name: "Habakkuk", chapters: 3, testament: "OT", group: "MINOR PROPHETS" },
  { name: "Zephaniah", chapters: 3, testament: "OT", group: "MINOR PROPHETS" },
  { name: "Haggai", chapters: 2, testament: "OT", group: "MINOR PROPHETS" },
  { name: "Zechariah", chapters: 14, testament: "OT", group: "MINOR PROPHETS" },
  { name: "Malachi", chapters: 4, testament: "OT", group: "MINOR PROPHETS" },
  { name: "Matthew", chapters: 28, testament: "NT", group: "GOSPELS & ACTS" },
  { name: "Mark", chapters: 16, testament: "NT", group: "GOSPELS & ACTS" },
  { name: "Luke", chapters: 24, testament: "NT", group: "GOSPELS & ACTS" },
  { name: "John", chapters: 21, testament: "NT", group: "GOSPELS & ACTS" },
  { name: "Acts", chapters: 28, testament: "NT", group: "GOSPELS & ACTS" },
  { name: "Romans", chapters: 16, testament: "NT", group: "LETTERS" },
  { name: "1 Corinthians", chapters: 16, testament: "NT", group: "LETTERS" },
  { name: "2 Corinthians", chapters: 13, testament: "NT", group: "LETTERS" },
  { name: "Galatians", chapters: 6, testament: "NT", group: "LETTERS" },
  { name: "Ephesians", chapters: 6, testament: "NT", group: "LETTERS" },
  { name: "Philippians", chapters: 4, testament: "NT", group: "LETTERS" },
  { name: "Colossians", chapters: 4, testament: "NT", group: "LETTERS" },
  { name: "1 Thessalonians", chapters: 5, testament: "NT", group: "LETTERS" },
  { name: "2 Thessalonians", chapters: 3, testament: "NT", group: "LETTERS" },
  { name: "1 Timothy", chapters: 6, testament: "NT", group: "LETTERS" },
  { name: "2 Timothy", chapters: 4, testament: "NT", group: "LETTERS" },
  { name: "Titus", chapters: 3, testament: "NT", group: "LETTERS" },
  { name: "Philemon", chapters: 1, testament: "NT", group: "LETTERS" },
  { name: "Hebrews", chapters: 13, testament: "NT", group: "LETTERS" },
  { name: "James", chapters: 5, testament: "NT", group: "LETTERS" },
  { name: "1 Peter", chapters: 5, testament: "NT", group: "LETTERS" },
  { name: "2 Peter", chapters: 3, testament: "NT", group: "LETTERS" },
  { name: "1 John", chapters: 5, testament: "NT", group: "LETTERS" },
  { name: "2 John", chapters: 1, testament: "NT", group: "LETTERS" },
  { name: "3 John", chapters: 1, testament: "NT", group: "LETTERS" },
  { name: "Jude", chapters: 1, testament: "NT", group: "LETTERS" },
  { name: "Revelation", chapters: 22, testament: "NT", group: "PROPHECY" },
];

const state = { book: books[0], chapter: 1, testament: "OT", saved: loadSaved(), request: 0, toastTimer: null };
const elements = Object.fromEntries([
  "book-list", "book-select", "chapter-select", "chapter-text", "chapter-title", "book-overline", "testament-label", "passage-reference", "verse-count", "breadcrumb", "saved-count", "reference-form", "reference-input", "toast", "sidebar", "mobile-backdrop",
].map((id) => [id, document.getElementById(id)]));

function loadSaved() {
  try { return JSON.parse(localStorage.getItem("common-bible-saved") || "[]"); }
  catch { return []; }
}

function saveSaved() {
  localStorage.setItem("common-bible-saved", JSON.stringify(state.saved));
  elements["saved-count"].textContent = state.saved.length;
}

function initialize() {
  renderBookList();
  renderBookSelect();
  saveSaved();
  bindEvents();
  const initial = parseReference(location.hash.slice(1));
  if (initial) navigateTo(initial.book, initial.chapter, initial.verse, false);
  else loadChapter();
  lucide.createIcons();
}

function renderBookList() {
  const visible = books.filter((book) => book.testament === state.testament);
  elements["book-list"].innerHTML = visible.map((book) => `
    <button class="book-item${book === state.book ? " active" : ""}" type="button" data-book="${book.name}">
      <span>${book.name}</span><span class="book-item-count">${book.chapters}</span>
    </button>`).join("");
}

function renderBookSelect() {
  elements["book-select"].innerHTML = books.map((book) => `<option value="${book.name}">${book.name}</option>`).join("");
  elements["book-select"].value = state.book.name;
  renderChapterSelect();
}

function renderChapterSelect() {
  elements["chapter-select"].innerHTML = Array.from({ length: state.book.chapters }, (_, index) => `<option value="${index + 1}">Chapter ${index + 1}</option>`).join("");
  elements["chapter-select"].value = state.chapter;
}

function setTestament(testament) {
  state.testament = testament;
  document.querySelectorAll(".testament-tab").forEach((tab) => {
    const selected = tab.dataset.testament === testament;
    tab.classList.toggle("selected", selected);
    tab.setAttribute("aria-selected", String(selected));
  });
  document.getElementById("testament-toggle").textContent = testament === "OT" ? "OLD" : "NEW";
  renderBookList();
}

async function loadChapter(verseToFocus = null) {
  const requestId = ++state.request;
  elements["chapter-text"].setAttribute("aria-busy", "true");
  elements["chapter-text"].innerHTML = '<div class="loading-state"><span class="loading-mark">✳</span><span>Opening the text…</span></div>';
  updateHeading();
  const endpoint = `https://bible-api.com/${encodeURIComponent(`${state.book.name} ${state.chapter}`)}?translation=web`;
  try {
    const response = await fetch(endpoint);
    if (!response.ok) throw new Error("This passage could not be found.");
    const data = await response.json();
    if (requestId !== state.request) return;
    elements["chapter-text"].innerHTML = data.verses.map((verse) => {
      const key = `${state.book.name}|${state.chapter}|${verse.verse}`;
      const saved = state.saved.some((item) => item.key === key);
      return `<span class="verse${saved ? " saved" : ""}" data-verse="${verse.verse}" data-key="${key}" tabindex="0" title="Select to save or remove verse ${verse.verse}"><sup class="verse-number">${verse.verse}</sup>${escapeHTML(verse.text.trim())} </span>`;
    }).join("");
    elements["verse-count"].textContent = `${data.verses.length} ${data.verses.length === 1 ? "verse" : "verses"}`;
    elements["chapter-text"].setAttribute("aria-busy", "false");
    updatePagination();
    if (verseToFocus) {
      const target = elements["chapter-text"].querySelector(`[data-verse="${verseToFocus}"]`);
      if (target) target.scrollIntoView({ behavior: "smooth", block: "center" });
      else showToast(`Verse ${verseToFocus} is not in this chapter`);
    }
    lucide.createIcons();
  } catch (error) {
    if (requestId !== state.request) return;
    elements["chapter-text"].setAttribute("aria-busy", "false");
    elements["chapter-text"].innerHTML = `<div class="error-state"><i data-lucide="cloud-off"></i><strong>Couldn’t load this chapter</strong><span>${escapeHTML(error.message)} Check your connection and try again.</span><button class="text-button" id="retry-load" type="button">Try again</button></div>`;
    document.getElementById("retry-load").addEventListener("click", () => loadChapter(verseToFocus));
    lucide.createIcons();
  }
}

function updateHeading() {
  const old = state.book.testament === "OT";
  elements["chapter-title"].innerHTML = `${state.book.name} <span>${state.chapter}</span>`;
  elements["book-overline"].innerHTML = `${old ? "OLD TESTAMENT" : "NEW TESTAMENT"} <span>·</span> ${state.book.group}`;
  elements["testament-label"].textContent = state.book.name === "Genesis" ? "THE FIRST BOOK OF MOSES" : state.book.group;
  elements["passage-reference"].textContent = `${state.book.name} ${state.chapter}`;
  elements["breadcrumb"].innerHTML = `<span>${old ? "Old Testament" : "New Testament"}</span><i data-lucide="chevron-right"></i><strong>${state.book.name}</strong><i data-lucide="chevron-right"></i><strong>${state.chapter}</strong>`;
  elements["book-select"].value = state.book.name;
  elements["chapter-select"].value = state.chapter;
  lucide.createIcons();
}

function updatePagination() {
  const index = books.indexOf(state.book);
  document.getElementById("previous-chapter").disabled = index === 0 && state.chapter === 1;
  document.getElementById("next-chapter").disabled = index === books.length - 1 && state.chapter === state.book.chapters;
}

function navigateTo(book, chapter, verse = null, updateHash = true) {
  state.book = book;
  state.chapter = Math.max(1, Math.min(book.chapters, Number(chapter) || 1));
  setTestament(book.testament);
  renderBookSelect();
  if (updateHash) history.replaceState(null, "", `#${encodeURIComponent(`${book.name} ${state.chapter}${verse ? `:${verse}` : ""}`)}`);
  closeSidebar();
  loadChapter(verse);
}

function parseReference(raw) {
  const input = decodeURIComponent(raw || "").replace(/[_+]/g, " ").trim();
  if (!input) return null;
  const match = input.match(/^(.+?)\s+(\d+)(?::(\d+))?$/);
  if (!match) return null;
  const bookInput = match[1].replace(/\s+/g, " ").toLowerCase();
  const book = books.find((item) => item.name.toLowerCase() === bookInput);
  return book ? { book, chapter: Number(match[2]), verse: match[3] ? Number(match[3]) : null } : null;
}

function goToAdjacent(direction) {
  let bookIndex = books.indexOf(state.book);
  let chapter = state.chapter + direction;
  if (chapter < 1) {
    if (bookIndex === 0) return;
    bookIndex -= 1;
    chapter = books[bookIndex].chapters;
  } else if (chapter > state.book.chapters) {
    if (bookIndex === books.length - 1) return;
    bookIndex += 1;
    chapter = 1;
  }
  navigateTo(books[bookIndex], chapter);
}

function toggleSavedVerse(verseElement) {
  const key = verseElement.dataset.key;
  const existingIndex = state.saved.findIndex((item) => item.key === key);
  if (existingIndex >= 0) {
    state.saved.splice(existingIndex, 1);
    showToast("Verse removed from saved");
  } else {
    state.saved.push({ key, book: state.book.name, chapter: state.chapter, verse: Number(verseElement.dataset.verse), text: verseElement.textContent.replace(/^\d+/, "").trim() });
    showToast("Verse saved");
  }
  saveSaved();
  verseElement.classList.toggle("saved", existingIndex < 0);
}

function showSaved() {
  if (!state.saved.length) {
    showToast("Saved verses will appear here");
    return;
  }
  elements["chapter-text"].setAttribute("aria-busy", "false");
  elements["chapter-text"].innerHTML = state.saved.map((item) => `<button class="saved-verse" type="button" data-book="${item.book}" data-chapter="${item.chapter}" data-verse="${item.verse}"><span class="saved-reference">${item.book} ${item.chapter}:${item.verse}</span><span class="saved-text">${escapeHTML(item.text)}</span><i data-lucide="arrow-up-right"></i></button>`).join("");
  elements["chapter-title"].innerHTML = `Saved <span>${state.saved.length}</span>`;
  elements["book-overline"].innerHTML = "YOUR LIBRARY <span>·</span> SAVED VERSES";
  elements["testament-label"].textContent = "YOUR READING NOTES";
  elements["passage-reference"].textContent = "Saved verses";
  elements["verse-count"].textContent = `${state.saved.length} ${state.saved.length === 1 ? "verse" : "verses"}`;
  document.getElementById("previous-chapter").disabled = true;
  document.getElementById("next-chapter").disabled = true;
  lucide.createIcons();
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add("visible");
  clearTimeout(state.toastTimer);
  state.toastTimer = setTimeout(() => elements.toast.classList.remove("visible"), 2100);
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]);
}

function closeSidebar() {
  elements.sidebar.classList.remove("open");
  elements["mobile-backdrop"].classList.remove("visible");
}

function bindEvents() {
  document.querySelectorAll(".testament-tab").forEach((tab) => tab.addEventListener("click", () => setTestament(tab.dataset.testament)));
  document.getElementById("testament-toggle").addEventListener("click", () => setTestament(state.testament === "OT" ? "NT" : "OT"));
  elements["book-list"].addEventListener("click", (event) => {
    const button = event.target.closest("[data-book]");
    if (button) navigateTo(books.find((book) => book.name === button.dataset.book), 1);
  });
  elements["book-select"].addEventListener("change", (event) => navigateTo(books.find((book) => book.name === event.target.value), 1));
  elements["chapter-select"].addEventListener("change", (event) => navigateTo(state.book, Number(event.target.value)));
  elements["reference-form"].addEventListener("submit", (event) => {
    event.preventDefault();
    const reference = parseReference(elements["reference-input"].value);
    if (!reference) { showToast("Try a reference like John 3:16"); return; }
    navigateTo(reference.book, reference.chapter, reference.verse);
    elements["reference-input"].value = "";
  });
  document.getElementById("previous-chapter").addEventListener("click", () => goToAdjacent(-1));
  document.getElementById("next-chapter").addEventListener("click", () => goToAdjacent(1));
  elements["chapter-text"].addEventListener("click", (event) => {
    const verse = event.target.closest(".verse");
    const saved = event.target.closest(".saved-verse");
    if (verse) toggleSavedVerse(verse);
    if (saved) navigateTo(books.find((book) => book.name === saved.dataset.book), Number(saved.dataset.chapter), Number(saved.dataset.verse));
  });
  elements["chapter-text"].addEventListener("keydown", (event) => {
    if ((event.key === "Enter" || event.key === " ") && event.target.matches(".verse")) {
      event.preventDefault();
      toggleSavedVerse(event.target);
    }
  });
  document.getElementById("save-chapter").addEventListener("click", () => {
    const verses = [...elements["chapter-text"].querySelectorAll(".verse")];
    if (!verses.length) return;
    verses.forEach((verse) => {
      if (!state.saved.some((item) => item.key === verse.dataset.key)) {
        state.saved.push({ key: verse.dataset.key, book: state.book.name, chapter: state.chapter, verse: Number(verse.dataset.verse), text: verse.textContent.replace(/^\d+/, "").trim() });
        verse.classList.add("saved");
      }
    });
    saveSaved();
    showToast("Chapter verses saved");
  });
  document.getElementById("saved-nav").addEventListener("click", showSaved);
  document.getElementById("read-nav").addEventListener("click", () => navigateTo(state.book, state.chapter));
  document.getElementById("font-smaller").addEventListener("click", () => changeFontSize(-1));
  document.getElementById("font-larger").addEventListener("click", () => changeFontSize(1));
  document.getElementById("copy-chapter").addEventListener("click", async () => {
    const text = [...elements["chapter-text"].querySelectorAll(".verse")].map((verse) => `${verse.dataset.verse} ${verse.textContent.replace(/^\d+/, "").trim()}`).join("\n");
    if (!text) return;
    try { await navigator.clipboard.writeText(`${state.book.name} ${state.chapter}\n\n${text}\n\nWorld English Bible`); showToast("Chapter copied"); }
    catch { showToast("Clipboard access is unavailable"); }
  });
  document.getElementById("print-chapter").addEventListener("click", () => window.print());
  document.getElementById("menu-toggle").addEventListener("click", () => {
    elements.sidebar.classList.add("open");
    elements["mobile-backdrop"].classList.add("visible");
  });
  elements["mobile-backdrop"].addEventListener("click", closeSidebar);
  window.addEventListener("hashchange", () => {
    const reference = parseReference(location.hash.slice(1));
    if (reference && (reference.book !== state.book || reference.chapter !== state.chapter)) navigateTo(reference.book, reference.chapter, reference.verse, false);
  });
  window.addEventListener("keydown", (event) => {
    if (event.altKey && event.key === "ArrowLeft") goToAdjacent(-1);
    if (event.altKey && event.key === "ArrowRight") goToAdjacent(1);
  });
}

function changeFontSize(delta) {
  const current = Number(getComputedStyle(document.documentElement).getPropertyValue("--reading-size").replace("px", ""));
  document.documentElement.style.setProperty("--reading-size", `${Math.max(16, Math.min(28, current + delta * 2))}px`);
}

initialize();
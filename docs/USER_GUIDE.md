# Film Theory Navigator — User Guide

**Version:** 1.1  
**Published:** March 2026  
**Last Updated:** March 2026
**Audience:** All users (students, educators, researchers, administrators)

---

## Quick Start (60 seconds)

1. Open Film Theory Navigator in your web browser.
2. Click **Browse Theories** on the home page.
3. Use the search bar to find a topic (e.g., "montage" or "cinematography").
4. Click **Learn More** on a theory card to open the detail view.
5. Explore the overview, key concepts, films, and citations in the dark-themed, focused interface.

**First time here?** → Skip to [Getting Started](#section-2-getting-started)  
**Looking for a specific task?** → See [Common User Workflows](#section-4-common-user-workflows)  
**Admin or developer?** → Jump to [Admin & Technical Notes](#section-7-admin--technical-notes)

---

## Table of Contents

1. [Purpose & Scope](#section-1-purpose--scope)
2. [Getting Started](#section-2-getting-started)
3. [Navigation Overview](#section-3-navigation-overview)
4. [Common User Workflows](#section-4-common-user-workflows)
5. [Feature-by-Feature Guide](#section-5-feature-by-feature-guide)
6. [Troubleshooting](#section-6-troubleshooting)
7. [Admin & Technical Notes](#section-7-admin--technical-notes)
8. [Glossary](#section-8-glossary)
9. [Version History & Updates](#section-9-version-history--updates)
10. [Appendix](#appendix)

---

## Section 1: Purpose & Scope

### What Is Film Theory Navigator?

Film Theory Navigator is a **searchable, interactive learning platform** that helps you explore film theory and media studies through curated, in-depth theory entries.

Each theory entry includes:
- **Overview** — What the theory is and why it matters.
- **Historical context** — Where it came from and how it evolved.
- **Key concepts** — Core ideas and terminology.
- **Key thinkers** — Scholars and filmmakers associated with the theory.
- **Representative films** — Real-world examples you can study.
- **Academic citations** — Scholarly sources for deeper learning.

### Who Should Use This Guide?

| Audience | Primary Goal | Relevant Sections |
|----------|-------------|-------------------|
| **Students** | Understand film theory for coursework | [Workflows](#section-4-common-user-workflows), [Feature Guide](#section-5-feature-by-feature-guide) |
| **Educators** | Find teaching materials and references | [Feature Guide](#section-5-feature-by-feature-guide), [Glossary](#section-8-glossary) |
| **Researchers** | Access citations and academic context | [Citations feature](section-5-e-citations), [Technical Notes](#section-7-admin--technical-notes) |
| **Administrators** | Manage content and platform settings | [Admin Notes](#section-7-admin--technical-notes) |
| **Developers** | Understand platform architecture | [Architecture Guide](ARCHITECTURE.md), [API Reference](ARCHITECTURE.md#api-endpoints) |

### What Film Theory Navigator Is NOT

- NOT a video streaming service (films are referenced, not embedded).
- NOT a discussion forum (community features are in development).
- NOT a quiz or assessment tool (action buttons are placeholders for future features).
- NOT a replacement for primary academic sources (citations link to originals).

---

## Section 2: Getting Started

### Prerequisites

**To view Film Theory Navigator, you need:**
- A modern web browser (Chrome, Firefox, Safari, or Edge from the last 2 versions).
- An internet connection.

**To contribute or manage content, you need:**
- A platform admin account.
- See [Admin & Technical Notes](#section-7-admin--technical-notes) for setup.

### Accessing the Platform

**Step 1: Open your browser**
- The platform is hosted locally for development. A production URL is not yet available.

**Step 2: You're in!**
- Navigator is **completely free** and requires **no login** for viewing.
- If you see an admin button, that's for authorized administrators only.

**Step 3: First look**
- You should see the **Home page** with an introduction and featured theories.
- Click the **Browse Theories** button or **Theory Library** link to get started.

### Bookmarking for Later

After you click on a theory, the URL changes to something like:
`.../theory/montage`

You can **bookmark this URL** in your browser to return directly to this theory later.

---

## Section 3: Navigation Overview

### Main Pages

The platform has four main areas accessible from the top navigation bar:

#### **1. Home**
- Entry point with platform overview and featured theories.

#### **2. Theory Library** ⭐ Main feature
- Browse and search all published theories.
- Filter by category and view theory cards with summaries.

#### **3. Vocabulary Hub**
- Glossary of film theory terms with definitions and context.

#### **4. Admin Dashboard** 🔒 Authorized users only
- Manage published theories and platform activity.

### Navigation Bar Behavior

The top navigation bar appears on every page:
- **Logo/Home link** — Click to return to the home page.
- **Main links** — Home, Theory Library, Vocabulary Hub.
- **Admin link** — Only visible to authorized admins.

---

## Section 4: Common User Workflows

### Workflow A: Find a theory by keyword search

**Scenario:** You need to understand "montage" for a film class assignment.

**Steps:**
1. Click **Theory Library** from the main navigation.
2. In the search box at the top, type `montage`. Results appear instantly.
3. Click **Learn More** on the most relevant card.
4. Read the overview and key concepts.
5. For more sources, scroll to the **Citations** section.

**Time estimate:** 2–3 minutes

---

### Workflow B: Browse all theories in a category

**Scenario:** You want to explore theories in the "Color & Cinematography" category.

**Steps:**
1. Click **Theory Library**.
2. Below the search bar, click a category pill (e.g., "Narrative Structure").
3. The list updates to show theories in that category only.
4. To clear the filter, click the **X** on the active category pill.

**Time estimate:** 2–5 minutes

---

### Workflow C: Deep dive into a single theory

**Scenario:** You're writing a paper on "Slow Cinema" and need comprehensive information.

**Steps:**
1. Navigate to the **Theory Library** and search for `slow cinema`.
2. Click **Learn More** on the result to open the **Theory Detail page**.
3. Explore the sections: Overview, Historical Context, Key Concepts, Key Thinkers, Representative Films, and Citations.
4. Use the **Citations** section to build your bibliography.

**Time estimate:** 10–15 minutes for thorough reading.

---

### Workflow D: Look up an unfamiliar term

**Scenario:** While reading, you encounter "diegetic" and need a quick definition.

**Steps:**
1. Click **Vocabulary Hub** from the main navigation.
2. Use the search box to type `diegetic`.
3. Find the term and read its definition and related theories.

**Time estimate:** 1–2 minutes

---

### Workflow E: Gather sources for research

**Scenario:** You're compiling a bibliography on "Mise-en-Scène."

**Steps:**
1. Open the "Mise-en-Scène" theory entry.
2. Scroll to the **Citations** section.
3. Note the author, year, and title for each source.
4. Use this information to find the full source in your library database.

**Time estimate:** 10–20 minutes.

---

## Section 5: Feature-by-Feature Guide

### Section 5-A: Theory Cards (Library View)

A theory card is a summary of a theory in the **Theory Library**. The cards use the application's modern dark theme, with clear typography and spacing for readability.

**Information shown:**
- **Title** — Name of the theory.
- **Category** — Topic area (color-coded tag).
- **Summary** — 1–2 sentence preview.
- **Learn More button** — Opens the full theory detail page.

A subtle shadow effect on hover indicates that the card is clickable.

---

### Section 5-B: Search & Filtering

- **Search:** Located at the top of the Theory Library. It's case-insensitive and provides instant results as you type.
- **Filtering:** Use the category pills below the search bar to narrow results. Only one category can be active at a time.
- You can search and filter simultaneously for more specific results.

---

### Section 5-C: Theory Detail Page

When you click **Learn More**, a modal overlay appears with a focused, dark-themed interface for deep reading.

**Page sections:**
1. **Title Bar:** Theory name and a close button (X).
2. **Overview:** A summary of the theory.
3. **Historical Context:** Its origins and evolution.
4. **Key Concepts:** Core ideas explained.
5. **Key Thinkers:** Associated scholars and filmmakers.
6. **Representative Films:** Examples that demonstrate the theory.
7. **Key Citations:** Relevant academic sources.
8. **Footer Buttons:** Placeholders for future features like quizzes and discussions.

---

### Section 5-D: Representative Films

This section lists films that exemplify the theory, shown as cards with a poster image, title, director, and year. Use these as practical study examples.

---

### Section 5-E: Citations

This section lists scholarly sources (books, articles) related to the theory. Each entry includes the author, year, title, and a brief description, providing a starting point for your bibliography.

---

### Section 5-F: Vocabulary Hub

A quick-reference glossary for film theory terms. It features a search box and an alphabetical list of term cards, each with a definition and links to related theories.

---

## Section 6: Troubleshooting

#### **Issue 1: I can't find a theory.**
- **Solution:** Try different keywords, use category filters, or check the Vocabulary Hub. The theory may not be published yet.

#### **Issue 2: The page won't load or appears blank.**
- **Solution:** Refresh the page (Cmd/Ctrl + R), clear your browser cache, or try a different browser.

#### **Issue 3: Text is too small/large.**
- **Solution:** Reset your browser zoom to 100% (Cmd/Ctrl + 0) or adjust it with Cmd/Ctrl + +/-.

#### **Issue 4: I found an error in the content.**
- **Action:** Please report it! Provide the theory title, URL, and a description of the error.

#### **Issue 5: Action buttons (Test Your Knowledge, etc.) don't work.**
- **Cause:** These are placeholders for features currently in development.

---

## Section 7: Admin & Technical Notes

### Admin Access

Admin access is restricted to authorized users for content management. If you need access, contact the platform owner. The **Admin Dashboard** link only appears in the navigation for logged-in admins.

---

### Content Management (Admin Only)

For detailed instructions, see [CONTENT_MANAGEMENT.md](CONTENT_MANAGEMENT.md). The basic workflow is: Draft → Review → Publish.

---

### Data & Privacy

The platform uses anonymous analytics to improve the user experience. No personal information is collected, and no login is required for general use.

---

### Technical Architecture (Developers)

**For detailed technical information, see [ARCHITECTURE.md](ARCHITECTURE.md).**

**Quick facts:**
- **Frontend:** Built with React and TypeScript.
- **Styling:** Styled using SCSS with a custom design token system. The project does not use Tailwind CSS.
- **Backend:** Supabase (PostgreSQL) for data storage.
- **Data Source:** A combination of local data files and the live database.

**To contribute to the code:**
- See the project's `README.md` and [GIT_STRATEGY.md](GIT_STRATEGY.md).
- Local development setup instructions are in [ARCHITECTURE.md](ARCHITECTURE.md#local-development).

---

## Section 8: Glossary

| Term | Definition |
|------|-----------|
| **Theory** | A conceptual framework for understanding film and media. |
| **Citation** | A reference to an academic source. |
| **Representative film** | A film that exemplifies a theory. |
| **Theorist/Thinker** | A scholar or filmmaker who contributes to a theory. |
| **Slug** | A URL-friendly version of a theory name (e.g., "montage-theory"). |

---

## Section 9: Version History & Updates

### Version 1.1 (March 2026)
- **UI Overhaul:** Implemented a new dark theme and a consistent design system using SCSS variables.
- **Dependency Cleanup:** Removed Tailwind CSS and its related configurations to simplify the styling architecture.
- **Data Migration:** Successfully migrated citation data to the Supabase database.
- **Documentation:** Updated and cleaned up user-facing and internal documentation.

### Version 1.0 (March 2026)
- Initial launch with Theory Library, Vocabulary Hub, and foundation for Admin features.

---

## Appendix

### A: Keyboard Shortcuts

| Action | Mac | Windows |
|--------|-----|---------|
| Go back | Cmd + [ | Alt + ← |
| Go forward | Cmd + ] | Alt + → |
| Reload page | Cmd + R | Ctrl + R |
| Reset zoom | Cmd + 0 | Ctrl + 0 |

### B: Browser Recommendations

- **Supported:** Google Chrome, Mozilla Firefox, Apple Safari, Microsoft Edge (current and one prior version).
- **Not Recommended:** Internet Explorer.

### C: Frequently Asked Questions (FAQ)

**Q: Is Navigator free?**  
A: Yes, 100% free for all users.

**Q: Can I download theories to use offline?**  
A: Not currently. An internet connection is required.

**Q: How often is new content added?**  
A: New content is added periodically.

---

### D: Related Documentation

- [**ARCHITECTURE.md**](ARCHITECTURE.md) — Technical system design.
- [**CONTENT_MANAGEMENT.md**](CONTENT_MANAGEMENT.md) — Admin content workflow.
- [**GIT_STRATEGY.md**](GIT_STRATEGY.md) — Development and branching strategy.
- [**TECHNICAL_DEBT.md**](TECHNICAL_DEBT.md) — Known limitations and planned improvements.

---
**End of User Guide**


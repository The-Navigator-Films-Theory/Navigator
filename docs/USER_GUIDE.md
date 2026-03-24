# Film Theory Navigator — User Guide

**Version:** 1.0  
**Published:** March 2026  
**Last Updated:** [DATE]  
**Audience:** All users (students, educators, researchers, administrators)

---

## Quick Start (60 seconds)

1. Open Film Theory Navigator in your web browser
2. Click **Browse Theories** on the home page
3. Use the search bar to find a topic (e.g., "montage" or "cinematography")
4. Click **Learn More** on a theory card
5. Explore the overview, key points, films, and citations

**First time here?** → Skip to [Getting Started](#section-2-getting-started)  
**Looking for a specific task?** → See [Common Workflows](#section-4-common-user-workflows)  
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
- **Overview** — What the theory is and why it matters
- **Historical context** — Where it came from and how it evolved
- **Key concepts** — Core ideas and terminology
- **Key thinkers** — Scholars and filmmakers associated with the theory
- **Representative films** — Real-world examples you can study
- **Academic citations** — Scholarly sources for deeper learning

### Who Should Use This Guide?

| Audience | Primary Goal | Relevant Sections |
|----------|-------------|-------------------|
| **Students** | Understand film theory for coursework | [Workflows](#section-4-common-user-workflows), [Feature Guide](#section-5-feature-by-feature-guide) |
| **Educators** | Find teaching materials and references | [Feature Guide](#section-5-feature-by-feature-guide), [Glossary](#section-8-glossary) |
| **Researchers** | Access citations and academic context | [Citations feature](section-5-e-citations), [Technical Notes](#section-7-admin--technical-notes) |
| **Administrators** | Manage content and platform settings | [Admin Notes](#section-7-admin--technical-notes) |
| **Developers** | Understand platform architecture | [Architecture Guide](../ARCHITECTURE.md), [API Reference](../ARCHITECTURE.md#api-endpoints) |

### What Film Theory Navigator Is NOT

- NOT a video streaming service (films are referenced, not embedded)
- NOT a discussion forum (community features are in development)
- NOT a quiz or assessment tool (action buttons are placeholders for future features)
- NOT a replacement for primary academic sources (citations link to originals)

---

## Section 2: Getting Started

### Prerequisites

**To view Film Theory Navigator, you need:**
- A modern web browser (Chrome, Firefox, Safari, or Edge from the last 2 versions)
- An internet connection
- Optional: Zoom to 100% for optimal experience (most devices default correctly)

**To contribute or manage content, you need:**
- A platform admin account (contact support for access)
- Basic familiarity with film theory or media studies
- See [Admin & Technical Notes](#section-7-admin--technical-notes) for setup

### Accessing the Platform

**Step 1: Open your browser**
- Paste this URL into your address bar: `[INSERT_PRODUCTION_URL_HERE]`
- Or click the link from your course syllabus, learning management system (LMS), or email

**Step 2: You're in!**
- Navigator is **completely free** and requires **no login** for viewing
- If you see an admin button, that's for authorized administrators only

**Step 3: First look**
- You should see the **Home page** with an introduction and featured theories
- Click the **Browse Theories** button or **Theory Library** link to get started

### Bookmarking for Later

After you click on a theory, the URL changes to something like:
```
https://filmtheorynavigator.com/theory/montage
```

You can **bookmark this URL** in your browser to return directly to this theory later.

---

## Section 3: Navigation Overview

### Main Pages

The platform has four main areas accessible from the top navigation bar:

#### **1. Home**
- Entry point with platform overview
- Featured theories (curated highlights)
- Quick links to main areas
- **When to visit:** First time using the platform, or to see featured content

#### **2. Theory Library** ⭐ Main feature
- Browse and search all published theories
- Filter by category
- View theory cards with summaries
- **When to visit:** Looking for theories to study or research

#### **3. Vocabulary Hub**
- Glossary of film theory terms
- Definitions and context
- Links to related theories
- **When to visit:** Need quick definitions or context for unfamiliar terms

#### **4. Admin Dashboard** 🔒 Authorized users only
- Manage published theories
- View contributor submissions
- Monitor platform activity
- **When to visit:** Only if you have admin access (contact support)

### Navigation Bar Behavior

The top navigation bar appears on every page:
- **Logo/Home link** — Click to return to home page from anywhere
- **Main links** — Home, Theory Library, Vocabulary Hub (visible to all users)
- **Admin link** — Only visible to authorized admins
- **Search bar** — [See Section 5-B](#section-5-b-search--filtering)

### Returning to Previous Page

- Click the **back arrow** in your browser toolbar (or use keyboard shortcut ← on Mac: ⌘+← or Windows: Alt+←)
- Select **Back** from browser history menu
- Do NOT use the browser refresh button on detail pages (it may clear your position)

---

## Section 4: Common User Workflows

### Workflow A: Find a theory by keyword search

**Scenario:** You need to understand "montage" for a film class assignment.

**Steps:**
1. Click **Theory Library** from the main navigation
2. In the search box at the top, type `montage`
3. Results appear instantly as you type (no need to press Enter)
4. You should see 1–5 results; click **Learn More** on the most relevant one
5. Read the overview and key concepts
6. If you need more sources, scroll to the **Citations** section and note the academic references

**Time estimate:** 2–3 minutes

---

### Workflow B: Browse all theories in a category

**Scenario:** You want to explore theories in the "Color & Cinematography" category.

**Steps:**
1. Click **Theory Library**
2. Below the search bar, you'll see category filter pills (e.g., "Narrative Structure," "Color & Cinematography")
3. Click the category you're interested in
4. The list updates to show theories in that category only
5. Browse the cards; click **Learn More** on any that interest you
6. To clear the filter and see all theories again, click the **X** on the active category pill

**Time estimate:** 2–5 minutes (depending on how many theories you explore)

---

### Workflow C: Deep dive into a single theory

**Scenario:** You're writing a paper on "Slow Cinema" and need comprehensive information.

**Steps:**
1. Navigate to the **Theory Library** and search for `slow cinema`
2. Click **Learn More** on the result
3. You now see the **Theory Detail page** (a modal overlay), which includes:
   - **Overview** — High-level description and significance
   - **Historical Context** — Evolution and key milestones  
   - **Key Concepts** — Core ideas explained
   - **Key Thinkers** — Scholars and filmmakers you should know
   - **Representative Films** — Films that exemplify the theory
   - **Citations** — Academic sources with author, year, and description
4. Take notes on sections relevant to your paper
5. Use the **Citations** section to build your bibliography
6. If buttons appear at the bottom (Test Your Knowledge, Analyze a Film), these are placeholders for future features

**Pro tip:** Screenshot or save the page URL to reference later

**Time estimate:** 10–15 minutes for thorough reading

---

### Workflow D: Look up an unfamiliar term

**Scenario:** While reading a theory entry, you encounter "diegetic" and need a quick definition.

**Steps:**
1. Click **Vocabulary Hub** from the main navigation
2. Use the search box to type `diegetic`
3. Find the term and read its definition
4. Look for a "Related Theories" link to connect it to theory entries
5. Click the link if you want to explore the related theory

**Time estimate:** 1–2 minutes

---

### Workflow E: Gather sources for research

**Scenario:** You're compiling a bibliography and need all sources related to "Mise-en-Scène."

**Steps:**
1. Search for and open the "Mise-en-Scène" theory entry
2. Scroll to the **Citations** section
3. For each citation, note:
   - Author name
   - Publication year
   - Title (if shown)
   - Any description provided
4. Click any linked citations to access additional details
5. Cross-reference with your preferred citation manager (Zotero, Mendeley, etc.)
6. Compile into your bibliography using your preferred format (APA, Chicago, MLA, etc.)

**Time estimate:** 10–20 minutes depending on number of citations

---

## Section 5: Feature-by-Feature Guide

### Section 5-A: Theory Cards (Library View)

**What is a theory card?**  
A theory card is a summary display of a theory theory in the **Theory Library**. Think of it like a card catalog entry.

**What information does it show?**
- **Title** — Name of the theory (bold, clickable)
- **Category** — Topic area (color-coded tag)
- **Summary** — 1–2 sentence preview
- **Learn More button** — Opens the full theory detail page

**What can I do with a theory card?**
- **Click the title** — Opens the full theory detail page
- **Click Learn More** — Same as clicking the title
- **Read the summary** — Decide if this theory is relevant without opening
- **Hover over the card** — Visual feedback indicating it's clickable

**Screenshot placeholder**  
[INSERT SCREENSHOT: Theory card with title, category, summary, and button highlighted]

---

### Section 5-B: Search & Filtering

**Searching**
- **Search box location:** At the top of the Theory Library
- **How it works:**
  - Type any keyword (theory name, concept, filmmaker, author)
  - Results appear instantly (no need to press Enter)
  - Search is **not case-sensitive** (search for "MONTAGE" or "montage"—both work)
  - Partial matches work (search "film" returns "film noir," "film theory," etc.)
- **Tips:**
  - Use 2–3 keywords for better results
  - If no results, try shorter keywords
  - Clearing the search box shows all theories again

**Filtering by Category**
- **Filter location:** Category pills below the search box
- **How it works:**
  - Click a category pill to show only theories in that category
  - The pill highlights/darkens to show it's active
  - Click again or click the **X** to remove the filter
  - Only one category filter is active at a time (you can't combine categories, e.g., "Color" AND "Narrative" simultaneously)
  
**Combining search + filter**
- You can use the search box AND select a category at the same time
- Example: Search for "camera" while filtering by "Cinematography" category to narrow results

**Best practices**
- Use search for specific topics, use categories for broader browsing
- If search returns too many results, add a category filter
- If you see no results, try fewer keywords or different keywords

**Screenshot placeholder**  
[INSERT SCREENSHOT: Theory Library with search box, category pills, and filtered results]

---

### Section 5-C: Theory Detail Page

**What is the theory detail page?**  
When you click **Learn More** on a theory card, you open a full-page view with comprehensive information. This is your main learning interface.

**Page sections (top to bottom):**

1. **Title Bar**
   - Theory name (large, bold)
   - Close button (X) to return to the library

2. **Overview**
   - One-paragraph summary of what the theory is
   - Why it's important to film studies
   - Quick answer to "What am I reading?"

3. **Historical Context**
   - When the theory emerged
   - Key figures and movements that influenced it
   - How it evolved over time

4. **Key Concepts**
   - 3–5 core ideas central to the theory
   - Brief explanation of each
   - How they relate to one another

5. **Key Thinkers**
   - Names of scholars, philosophers, and filmmakers
   - Color-coded pills for easy scanning
   - Why each person matters to the theory

6. **Representative Films**
   - Movies or film clips that exemplify the theory
   - Director, year, and brief context
   - Films shown as clickable cards (cards show poster image if available)
   - Click a film card to see more details

7. **Key Citations**
   - Up to 3 relevant academic sources
   - Author, year, title, and brief description
   - "See all citations" link if more exist

8. **Footer Buttons** (placeholders for future features)
   - **Test Your Knowledge** — Planned: Self-check quiz
   - **Analyze a Film** — Planned: Guided film analysis tool
   - **Join Discussion** — Planned: Community forum link

**Screenshot placeholder**  
[INSERT SCREENSHOT: Full theory detail page showing all sections]

---

### Section 5-D: Representative Films

**What are representative films?**  
Films listed in a theory entry that demonstrate or exemplify the theory in practice.

**What information is shown?**
- Film poster image (if available)
- **Title** — Name of the film
- **Director** — Filmmaker's name
- **Year** — Release year
- **Context** — Why this film is an example of the theory

**How to use this information**
- Use these films to study the theory in a practical context
- Many are available through university libraries or streaming services
- Write down the title/director to search for them outside Navigator
- Watch with the theory's key concepts in mind
- Check your film studies bibliography—many films are seminal works

**What if no films are shown?**  
Some theories may not have representative films listed yet. This is being populated over time. If no films appear:
- Try searching for the theory name + "films" in a search engine
- Ask your instructor for film recommendations
- Check the theory's academic citations for film references

**Screenshot placeholder**  
[INSERT SCREENSHOT: Representative films section with poster cards]

---

### Section 5-E: Citations

**What are citations?**  
Scholarly sources (academic papers, books, journal articles) that are referenced by or related to the theory.

**What information is shown?**
- **Author** — Primary author's name
- **Year** — Publication year
- **Title** — Full title of the source
- **Type** — Book, journal article, conference paper, etc.
- **Description** — Brief note about relevance or content
- **Key quotation** (if available) — Directly relevant excerpt

**How to use citations**
1. **For your bibliography:** Note the author, year, and title; look up the full publication details in your library database
2. **For further reading:** Use a citation to deepen your understanding beyond Navigator
3. **For credibility:** Check citations to verify claims made in the theory description
4. **For cross-referencing:** Some citations link to other theories (click to explore)

**Building a bibliography from citations**
- Navigator provides author/year/title
- You'll need to look up publication details (journal, volume, pages, DOI, URL) in your library database or Google Scholar
- Use a citation manager (Zotero, Mendeley) or your preferred format (APA, MLA, Chicago) to format correctly

**Screenshot placeholder**  
[INSERT SCREENSHOT: Citations section with expanded citation cards]

---

### Section 5-F: Vocabulary Hub

**What is Vocabulary Hub?**  
A quick-reference glossary for film theory terms that appear throughout the platform.

**Features:**
- **Search box** — Type a term to find definitions
- **Alphabetical list** — Browse all terms A–Z (if search is empty)
- **Term cards** — Show term name, pronunciation (if available), definition
- **Related theories** — Links to theories using the term
- **Example usage** — How the term is used in a sentence (when provided)

**How to use Vocabulary Hub**
1. Navigate to **Vocabulary Hub** from main menu
2. Either search for a term or browse alphabetically
3. Click a term to see full definition and context
4. Follow "Related Theories" links to see the term in context
5. Bookmark important terms for quick reference

**Screenshot placeholder**  
[INSERT SCREENSHOT: Vocabulary Hub search and term cards]

---

## Section 6: Troubleshooting

### Common Issues & Solutions

#### **Issue 1: I can't find the theory I'm looking for**

**Cause:** The theory may not be published yet, or you're searching with the wrong keywords.

**Solutions:**
1. Try different keywords:
   - Search "directorial technique" instead of "camera work"
   - Search "Godard" instead of a specific theory name
2. Filter by category to browse related theories
3. Check the Vocabulary Hub—the term you want might be listed there with links to related theories
4. If you still can't find it, see [Feedback & Support](#feedback--support)

---

#### **Issue 2: Search returned no results**

**Cause:** The search keywords don't match any theory titles or content.

**Solutions:**
1. Use fewer words (search "cinema" instead of "early 20th century cinema theory")
2. Try synonyms (search "film technique" instead of "cinematographic method")
3. Clear all filter categories and search again
4. Check spelling (some film terms use non-English characters, e.g., "mise-en-scène")
5. Browse Theory Library without searching to see what's available

---

#### **Issue 3: The page won't load or appears blank**

**Cause:** Network connection issue, browser cache problem, or server issue.

**Solutions:**
1. **Refresh the page:**
   - Mac: Cmd + R
   - Windows: Ctrl + R
2. **Clear browser cache:**
   - Chrome: Settings → Privacy → Clear browsing data → Check "Cached images and files" → Clear data
   - Firefox: Preferences → Privacy & Security → Clear Data → Check all boxes → Clear
   - Safari: Develop → Empty Web Caches (must enable Developer menu first)
3. **Try a different browser** to rule out browser-specific issues
4. **Check your internet connection** (try another website to confirm)
5. If the problem persists, see [Feedback & Support](#feedback--support)

---

#### **Issue 4: Text is too small/large or layout looks weird**

**Cause:** Browser zoom is not at 100%, or your screen resolution is unusual.

**Solutions:**
1. **Reset zoom to 100%:**
   - Mac: Cmd + 0 (zero)
   - Windows: Ctrl + 0
2. **Zoom in to read better (if text is small):**
   - Mac: Cmd + + (plus)
   - Windows: Ctrl + + (plus)
3. **Zoom out if text is too large:**
   - Mac: Cmd + - (minus)
   - Windows: Ctrl + - (minus)
4. If layout is still broken, try a different browser

---

#### **Issue 5: I found an error or incorrect information**

**Cause:** Data entry error, outdated information, or broken link.

**Action:** Please report this! See [Feedback & Support](#feedback--support) with:
- Theory title and direct URL
- What's wrong (e.g., "author name is misspelled")
- Screenshot if possible
- Suggested correction (optional but helpful)

---

#### **Issue 6: Action buttons (Test Your Knowledge, etc.) don't work**

**Cause:** These are placeholders for future features not yet enabled.

**Status:** These are in active development. Features coming soon.

---

### Feedback & Support

**How to report a bug, suggest a feature, or request additional content:**

Include in your report:
- **Page URL** (copy from address bar)
- **Theory title** (if relevant)
- **Issue description** (what went wrong)
- **Expected behavior** (what should have happened)
- **Actual behavior** (what actually happened)
- **Your browser and OS** (e.g., Chrome on Mac, Firefox on Windows)
- **Screenshot** (if possible)

**Where to send reports:**
- 📧 Email: [INSERT_SUPPORT_EMAIL]
- 🐛 Bug tracker: [INSERT_BUG_TRACKER_URL]
- 📝 Feedback form: [INSERT_FEEDBACK_FORM_URL]
- 💬 Community: [INSERT_COMMUNITY_URL] (if applicable)

---

## Section 7: Admin & Technical Notes

### Admin Access

**Who has admin access?**  
Only authorized administrators can:
- View the Admin Dashboard
- Create, edit, or publish new theories
- Manage content status and metadata
- View platform analytics

**If you need admin access:**
1. Contact the platform owner or team leads (see [Contacts](../ARCHITECTURE.md#contacts))
2. Request will be reviewed and granted if appropriate

**Admin Dashboard location:**  
If you're an admin, the **Admin Dashboard** link appears in the top navigation. Non-admins will not see this link.

---

### Content Management (Admin Only)

**[This section is for administrators. Detailed content management instructions are in [CONTENT_MANAGEMENT.md](../CONTENT_MANAGEMENT.md). Key points:]**

**Publishing workflow:**
1. Draft theory in admin panel
2. Set status to "review" for peer feedback
3. Revise based on feedback
4. Set status to "published" to make visible to all users

**Guidelines for content:**
- Theories must be academically grounded
- Include author/year for all citations
- Add representative films when possible
- Keep overviews concise (150–200 words maximum)
- Use clear, accessible language

**For detailed instructions, see:** [Content Management Guide](../CONTENT_MANAGEMENT.md)

---

### Data & Privacy

**What data does Navigator collect?**
- Page views and user interactions (analytics only)
- No personal information is collected
- No accounts or logins required for general use

**Data usage:**
- Anonymous analytics help us improve the platform
- Data is never sold or shared with third parties

**For detailed privacy information, see:**
- [Privacy Policy](../ARCHITECTURE.md) (if available)
- Contact: [INSERT_PRIVACY_CONTACT_EMAIL]

---

### Performance & Accessibility

**Browser requirements:**
- Chrome, Firefox, Safari, or Edge (last 2 versions)
- JavaScript must be enabled
- Cookies may be used for preferences

**Accessibility features:**
- All text is readable with standard browser zoom
- Images have alt text for screen readers
- Navigation is keyboard-accessible (tabbing works throughout)
- Colors are chosen for colorblind-friendly contrast

**For accessibility issues or requests:**
- 📧 Email: [INSERT_ACCESSIBILITY_EMAIL]
- ♿ Report accessibility issue: [INSERT_ACCESSIBILITY_FORM]

---

### Technical Architecture (Developers)

**[For detailed technical information, see [ARCHITECTURE.md](../ARCHITECTURE.md)]**

**Quick facts:**
- Built with React 19 + TypeScript
- Hosted on [INSERT_HOSTING_PROVIDER]
- Backend: Supabase PostgreSQL database
- Data source: Curated JSON files + real-time database updates
- Open source? [YES/NO] → [GitHub repository if applicable]

**To contribute to code:**
- See [GitHub repository](../ARCHITECTURE.md#repository)
- Read [Git Strategy](../GIT_STRATEGY.md) for branch and commit conventions
- Development setup: [ARCHITECTURE.md#local-development](../ARCHITECTURE.md#local-development)

---

## Section 8: Glossary

**[This glossary defines key terms used throughout this guide and the platform. For a comprehensive glossary of film theory terminology, see Vocabulary Hub.]**

| Term | Definition |
|------|-----------|
| **Theory** | A systematic explanation or conceptual framework for understanding film and media |
| **Citation** | A reference to an academic source (book, article, etc.) used to support a theory |
| **Representative film** | A film that exemplifies or demonstrates a theory in practice |
| **Theorist/Thinker** | A scholar, philosopher, or filmmaker whose work contributes to a theory |
| **Metadata** | Information about information (e.g., author, date, category) |
| **Query** | A search request; asking the system to find content matching criteria |
| **Database** | The organized collection of all theories, films, and citations |
| **API** | Application Programming Interface; technical layer for accessing data |
| **Status (published/draft/review)** | Publishing state: published (visible to all), draft (admin only), review (pending approval) |
| **Slug** | URL-friendly version of a theory name (e.g., "montage-theory") |

---

## Section 9: Version History & Updates

### Version 1.0 (March 2026)

- **Published:** March 2026
- **Scope:** Initial launch with Theory Library, Vocabulary Hub, and Foundation for Admin features
- **Features available:**
  - ✅ Browse theories by search and category
  - ✅ View detailed theory information with citations
  - ✅ Vocabulary hub for quick definitions
  - ✅ Representative films display
  - 🚧 Admin dashboard (admin-only access)
  - ⏳ Quiz and analysis tools (in development)
  - ⏳ Community discussions (planned)

### How to Track Updates

**Release notes:** [INSERT_RELEASE_NOTES_URL]  
**Mailing list:** Subscribe at [INSERT_SUBSCRIPTION_URL]  
**Social media:** Follow us on [INSERT_SOCIAL_URLS]

---

### Update Process for Users

**When Navigator is updated:**
1. Most updates are invisible (backend improvements, bug fixes)
2. Major feature additions are announced via email and release notes
3. The URL never changes; your bookmarks remain valid
4. No action is required from you

**If an update affects you:**
- You may see a "New version available" message
- Refresh your browser or clear cache (see [Troubleshooting](#section-6-troubleshooting))
- Send feedback if something seems different: [INSERT_FEEDBACK_URL]

---

## Appendix

### A: Keyboard Shortcuts

| Action | Mac | Windows |
|--------|-----|---------|
| Go back | Cmd + [ | Alt + ← |
| Go forward | Cmd + ] | Alt + → |
| Reload page | Cmd + R | Ctrl + R |
| Hard refresh (bypass cache) | Cmd + Shift + R | Ctrl + Shift + R |
| Zoom in | Cmd + + | Ctrl + + |
| Zoom out | Cmd + - | Ctrl + - |
| Reset zoom to 100% | Cmd + 0 | Ctrl + 0 |
| Focus search box | Cmd + F | Ctrl + F (browser search, or try Cmd+K in app if available) |

---

### B: Browser Recommendations

**Supported browsers (all current and 1 prior version):**
- Google Chrome (recommended for best performance)
- Mozilla Firefox
- Apple Safari
- Microsoft Edge

**Not recommended:**
- Internet Explorer (outdated, not supported)
- Opera (untested, may work but not officially supported)

**Mac users:** Safari and Chrome are both excellent for Navigator. Choose whichever you prefer.

**Windows users:** Chrome and Edge are recommended. Firefox is also excellent.

---

### C: Accessibility & Support Resources

**External resources:**
- **WebAIM Contrast Checker:** Check text readability at [webaim.org/resources/contrastchecker/](https://webaim.org/resources/contrastchecker/)
- **Screen reader help:** 
  - Mac: Built-in VoiceOver (Cmd + F5)
  - Windows: Try NVDA (free) or JAWS
- **Keyboard navigation help:** [webaim.org/articles/keyboard/](https://webaim.org/articles/keyboard/)

**For accessibility support:**
- Report issues: [INSERT_ACCESSIBILITY_EMAIL]
- Request accommodations: [INSERT_ACCOMMODATION_REQUEST_URL]

---

### D: Frequently Asked Questions (FAQ)

**Q: Is Navigator free?**  
A: Yes, 100% free for all users. No login required for reading.

---

**Q: Can I download theories to use offline?**  
A: Not currently. Internet connection is required. This feature may be added in the future.

---

**Q: Can I print a theory page?**  
A: Yes. Use your browser's print function (Cmd+P on Mac, Ctrl+P on Windows). Citations and films may not print perfectly; screenshots work better for sharing.

---

**Q: Are the films embedded or will I have to watch elsewhere?**  
A: Films are referenced but not embedded. You'll watch them through your school's library, streaming services, or purchase them separately.

---

**Q: Who writes the theories?**  
A: Theories are written by academic contributors, film scholars, and educators. [INSERT_CONTRIBUTOR_BIOS_URL]

---

**Q: How often is new content added?**  
A: New theories are added [INSERT_FREQUENCY_HERE]. Subscribe to updates to be notified: [INSERT_SUBSCRIPTION_URL]

---

**Q: Can I suggest a theory or topic?**  
A: Yes! Send suggestions to [INSERT_SUGGESTIONS_EMAIL]. We review all suggestions.

---

**Q: What's the difference between "Key Thinkers" and "Citations"?**  
A: **Key Thinkers** are people (real individuals) who developed or advanced the theory. **Citations** are sources (articles, books) where the theory is discussed or referenced.

---

### E: Related Documentation

**For information beyond this user guide:**
- [**ARCHITECTURE.md**](../ARCHITECTURE.md) — Technical system design
- [**CONTENT_MANAGEMENT.md**](../CONTENT_MANAGEMENT.md) — Admin content workflow
- [**GIT_STRATEGY.md**](../GIT_STRATEGY.md) — Development and branching strategy
- [**TECHNICAL_DEBT.md**](../TECHNICAL_DEBT.md) — Known limitations and planned improvements

---

### F: Document Maintenance & Contributions

**This document is living and evolves as the platform changes.**

**To suggest improvements to this guide:**
1. Identify the section that needs updating
2. Submit your suggestion to: [INSERT_DOCUMENTATION_EMAIL]
3. Include: current text, proposed change, and reason for change

**Document governance:**
- Updates are reviewed by the product and documentation team
- Major changes are tracked in version history (Section 9)
- Changes are deployed with each platform release
- Archive of previous versions: [INSERT_VERSION_ARCHIVE_URL]

---

**End of User Guide**

---

**Questions? Suggestions? Feedback?**  
📧 Contact: [INSERT_SUPPORT_EMAIL]  
🐛 Report a bug: [INSERT_BUG_REPORT_URL]  
💬 Community forum: [INSERT_COMMUNITY_URL]  
📚 Documentation home: [INSERT_DOCS_URL]


# Changelog

All notable changes to Film Theory Navigator are documented here.

This changelog follows the [Keep a Changelog](https://keepachangelog.com/) format and is synchronized with the user guide version history in [USER_GUIDE.md](USER_GUIDE.md#section-9-version-history--updates).

**Status Key:**
- ✅ Completed / Available
- 🟡 Partial / Beta
- 🚧 In Development
- ⏳ Planned for Future Release
- ⚠️ Deprecated (no longer recommended)
- 🔒 Restricted (admin/staff only)

---

## Version 1.0 (March 2026)

**Release Date:** March 2026  
**Scope:** Initial public launch with core browsing and search features

### Features Added

- ✅ **Theory Library** — Browse curated library of 37+ published film theories
  - Full-text search with debounced input
  - Filter by 5+ categories
  - Theory cards showing title, category, summary
  - Click-to-detail interaction

- ✅ **Theory Detail View** — Comprehensive theory information page including:
  - Overview (what the theory is, why it matters)
  - Historical context (evolution and key periods)
  - Key concepts (core ideas with explanations)
  - Key thinkers (relevant scholars and filmmakers)
  - Representative films (exemplary films with director/year)
  - Academic citations (up to 3 featured, link to see all)

- ✅ **Vocabulary Hub** — Quick-reference glossary with:
  - 35+ film theory terms and definitions
  - Alphabetical browsing and search
  - Links to related theories

- ✅ **Home Page** — Landing page with:
  - Platform overview and value proposition
  - Featured theories (rotating selection)
  - Quick links to main areas
  - Call-to-action buttons

- ✅ **Navigation System** — Consistent header and routing:
  - React Router 7 for client-side navigation
  - Persistent top navigation bar
  - Bookmarkable theory URLs (`/theory/[slug]`)

- 🔒 **Admin Dashboard** — Restricted access for authorized administrators:
  - Dashboard placeholder with basic layout
  - Login required (credentials managed by platform team)
  - Foundation for content management (full features in v1.1+)

### Technical Implementation

- React 19 with TypeScript (strict mode)
- Vite 7 for build and dev server
- TanStack Query 5 for async data and caching
- Supabase JavaScript client for PostgreSQL backend
- SCSS modules for component styling
- ESLint + Prettier for code consistency

### Data

**Imported from raw_data.json:**
- 37 published theories with metadata (title, slug, category, description, etc.)
- 35 vocabulary terms with definitions and pronunciations (where available)
- 134 film references with directors and years
- 50+ academic citations with author, year, title, and descriptions

### Documentation

- 📖 [USER_GUIDE.md](USER_GUIDE.md) — Complete user guide for all audiences
- 📖 [DOCUMENTATION_FRAMEWORK.md](DOCUMENTATION_FRAMEWORK.md) — Maintenance guide for docs
- 🏗️ [ARCHITECTURE.md](../ARCHITECTURE.md) — Technical system design
- ⚙️ [CONTENT_MANAGEMENT.md](../CONTENT_MANAGEMENT.md) — Admin workflow
- 🔀 [GIT_STRATEGY.md](../GIT_STRATEGY.md) — Development practices

### Known Limitations

- 🚧 **Quiz/Assessment Tools** — "Test Your Knowledge" button is visual only (in development)
- 🚧 **Film Analysis Tool** — "Analyze a Film" button is visual only (in development)
- 🚧 **Community Discussion** — "Join Discussion" button is visual only (in development)
- 🟡 **Admin Content Management** — Dashboard exists but full CRUD interface not yet implemented
- 🟡 **Offline Mode** — No offline access; internet connection required
- 🟡 **Video Embedding** — Films are referenced, not embedded; users watch via external sources
- 🟡 **Rich Media** — Some theory entries lack associated images or videos

### Browser Support

- ✅ Chrome (last 2 versions)
- ✅ Firefox (last 2 versions)
- ✅ Safari (last 2 versions)
- ✅ Edge (last 2 versions)
- ❌ Internet Explorer (not supported)

### Accessibility

- ✅ Keyboard navigation throughout
- ✅ Screen reader compatible (ARIA labels)
- ✅ Color contrast meets WCAG AA standards
- ✅ Zoom to 100% recommended for optimal experience

### Performance

- ✅ Initial load: ~1.5s on typical connection
- ✅ Search is debounced for responsive UX
- ✅ Theory detail pages cached by TanStack Query
- ✅ Production bundle: ~180 KB (gzipped)

### Breaking Changes

None (initial release)

### Deprecated

None (initial release)

### Dependencies Updated

- React 19.0.0
- React Router 7.0.0
- Vite 7.3.1
- TanStack Query 5.0.0
- Supabase JS Client 2.99.0
- TypeScript 5.7.2

---

## Planned Features (Future Releases)

### Version 1.1 (Q2 2026)

- 🚧 **Admin Content Management** — Full CRUD interface
  - Create/edit/publish theories
  - Bulk uploads for films and citations
  - Rich text editor for descriptions
  - Preview before publishing

- 🚧 **Quiz Module** — Interactive self-assessment
  - Multiple choice questions
  - Instant feedback
  - Score tracking (client-side storage)
  - Link to relevant citations for wrong answers

- 🚧 **Film Analysis Tool** — Guided practice
  - Step-by-step analysis prompts
  - Theory application framework
  - User responses (saved locally)
  - Suggested rubrics for self-grading

- 🚧 **Email Notifications** — Subscribe to updates
  - New theory alerts
  - Release notes
  - Content recommendations based on browsing history

### Version 1.2 (Q3 2026)

- ⏳ **Community Discussion Board** — Moderated forum
  - Start discussions about theories
  - Comment threads
  - Upvoting/liking
  - Moderation tools

- ⏳ **User Accounts** — Optional login
  - Save favorite theories
  - Reading history
  - Personal notes or annotations
  - Progress tracking for courses

- ⏳ **Advanced Search** — More powerful filtering
  - Search by filmmaker, scholar, time period
  - Combine multiple filters
  - Save search queries

### Version 2.0 (Q4 2026+)

- ⏳ **Video Integration** — Embedded film clips
  - Short clips from representative films
  - Timestamp annotations
  - Theory application overlays

- ⏳ **Course Builder** — Curated collections
  - Educators create themed course paths
  - Sequence theories in learning order
  - Assign readings to students
  - Track student progress

- ⏳ **Localization** — Multi-language support
  - Spanish, French, German, Mandarin (initial priorities)
  - Right-to-left language support
  - Regional film references

- ⏳ **Mobile App** — Native iOS and Android applications
  - Download for offline reading
  - Native navigation
  - Push notifications

---

## Migration Guides

### Upgrading from v1.0 to v1.1

**For Users:** No action required. The platform will update automatically. New features will appear in top navigation.

**For Administrators:** Admin dashboard will include new content management tools. Access your dashboard and complete administrator onboarding in-app.

**For Developers:**  
```bash
# Update dependencies
npm install

# Run migrations (if database schema changes)
npm run db:migrate

# Rebuild if needed
npm run build
```

---

## Support & Feedback

**Report a bug:** [INSERT_BUG_REPORT_URL]  
**Request a feature:** [INSERT_FEATURE_REQUEST_URL]  
**Ask a question:** [INSERT_SUPPORT_EMAIL]  
**View roadmap:** [INSERT_ROADMAP_URL]

---

## Archive

### Historical Releases

- **Beta (January 2026):** Internal testing with 15 theories
- **Alpha (December 2025):** Proof of concept with 5 theories

---

## Document Metadata

**Changelog Version:** 1.0  
**Last Updated:** March 2026  
**Maintained By:** [INSERT_RELEASE_MANAGER_NAME]  
**Next Review Date:** [INSERT_DATE]  
**Related Documents:**
- [USER_GUIDE.md](USER_GUIDE.md)
- [DOCUMENTATION_FRAMEWORK.md](DOCUMENTATION_FRAMEWORK.md)
- [PROGRESS.md](PROGRESS.md)
- [TECHNICAL_DEBT.md](TECHNICAL_DEBT.md)

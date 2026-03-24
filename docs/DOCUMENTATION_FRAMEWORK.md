# Documentation Framework & Maintenance Guide

**Purpose:** This document explains how to maintain, update, and expand the living user guide to support long-term product documentation.

**Date Created:** March 2026  
**Last Updated:** [DATE]  
**Owner:** Documentation Team

---

## Table of Contents

1. [Overview](#overview)
2. [Documentation Architecture](#documentation-architecture)
3. [Maintenance Workflow](#maintenance-workflow)
4. [Update Procedures](#update-procedures)
5. [Style & Tone Guidelines](#style--tone-guidelines)
6. [Version Control & Release Process](#version-control--release-process)
7. [Audience Segmentation](#audience-segmentation)
8. [Common Patterns & Templates](#common-patterns--templates)
9. [Contribution Guidelines](#contribution-guidelines)
10. [Tools & Resources](#tools--resources)

---

## Overview

### What Is This Framework?

This framework establishes:
- **Document structure** for the user guide that supports modular updates
- **Maintenance process** for keeping documentation current as the product evolves
- **Quality standards** for consistency across all documentation
- **Workflow** for updating different sections without rewriting the entire guide
- **Version tracking** tied to product releases

### Why This Approach?

**Problem:** Traditional monolithic user guides become difficult to maintain, with small changes requiring large rewrites.

**Solution:** A modular, audience-aware documentation system that allows:
- **Section-level updates** without touching the entire guide
- **Audience-specific sections** that don't interfere with each other
- **Clear ownership** so maintainers know their responsibilities
- **Change tracking** that connects documentation to product releases
- **Future-proofing** for new features, pages, and platforms

---

## Documentation Architecture

### File Structure

```
docs/
├── USER_GUIDE.md              # Main user-facing guide (this is your document)
├── DOCUMENTATION_FRAMEWORK.md # How to maintain docs (this file)
├── CHANGELOG.md               # Version history & release notes
├── ARCHITECTURE.md            # Technical design (for developers)
├── CONTENT_MANAGEMENT.md      # Admin content workflow
├── GIT_STRATEGY.md            # Development practices
├── TECHNICAL_DEBT.md          # Known issues & improvements
├── TEAM_WORKFLOW.md           # Team processes
├── PROGRESS_REPO_CURRENT.md   # Current sprint snapshot
├── PROGRESS.md                # Long-term roadmap
└── branches/
    └── TEMPLETE.md            # Template for branch documentation
```

### Document Roles

| Document | Audience | Update Frequency | Owner |
|----------|----------|------------------|-------|
| **USER_GUIDE.md** | All users (non-tech to technical) | Per feature release | Product Manager + Tech Writer |
| **DOCUMENTATION_FRAMEWORK.md** | Maintainers & documentarians | Quarterly or as needed | Tech Lead / Doc Lead |
| **CHANGELOG.md** | Users and developers | Per release | Release Manager |
| **ARCHITECTURE.md** | Developers, architects | Per major change | Lead Developer |
| **CONTENT_MANAGEMENT.md** | Admins, content creators | Per platform change | Admin Lead |
| Other docs | Team-specific | As needed | Team leads |

---

## Maintenance Workflow

### Daily/Weekly Tasks

**No daily documentation tasks required.**

Review user support tickets, issues, and feedback to identify documentation gaps:
- [ ] Check support email for common questions
- [ ] Review bug reports—note if documentation could have prevented the issue
- [ ] Monitor community forums/Discord for confusion patterns
- [ ] Log potential documentation updates in the "Documentation Backlog"

### Per-Feature Release

**Before release (1 week before):**

1. **Identify documentation impact:**
   - What new features are being released?
   - What existing features are changing?
   - What workflows are affected?

2. **Plan documentation updates:**
   - Create a checklist of sections to update
   - Assign owners (who updates what?)
   - Identify placeholders that need filling

3. **Draft updates:**
   - Update feature descriptions in Section 5 (Feature-by-Feature Guide)
   - Add new workflows to Section 4 if applicable
   - Update troubleshooting if new known issues exist
   - Update version history in Section 9

4. **Review updates:**
   - Have product team verify accuracy
   - Have a peer review for clarity
   - Test links and references

**Release day:**

1. Publish updated USER_GUIDE.md
2. Update CHANGELOG.md with release notes
3. Commit changes with message: `docs: update for v[VERSION] release`
4. Deploy guide to documentation site (if hosted separately)
5. Announce updates to users via email/release notes

**After release (1 week):**

1. Monitor for documentation gaps or errors
2. Update based on user feedback
3. Create patches for any inaccuracies discovered

### Quarterly Review

**Every 3 months:**

1. **Audit all placeholders:**
   - Scan for `[INSERT_...]` text that should have been filled
   - Fill in any that are now applicable

2. **Review structure:**
   - Is the table of contents still logical?
   - Are sections in the right order?
   - Should anything be reorganized?

3. **Check for drift:**
   - Do descriptions match current product?
   - Are deprecated features still mentioned?
   - Are screenshots outdated?

4. **Update examples:**
   - Ensure workflow examples still work
   - Test all described steps on live platform
   - Update screenshots if UI has changed significantly

5. **Refresh framework:**
   - Update this maintenance guide if process has changed
   - Note any new audience types
   - Update style guidelines if needed

---

## Update Procedures

### Procedure 1: Add a New Feature

**When:** A new platform feature is released and users need to know how to use it.

**Steps:**

1. **Identify the feature's section:**
   - Does it fit into an existing section in the guide?
   - Or does it need a new subsection?

2. **Write feature documentation:**
   - Follow the format from Section 5 (Feature-by-Feature Guide)
   - Include: what it does, when to use it, step-by-step instructions
   - Add placeholder for screenshot

3. **Update related sections:**
   - Add new workflow to Section 4 if applicable
   - Add new glossary terms to Section 8
   - Update troubleshooting if there are potential issues

4. **Update version history:**
   - Add feature to CHANGELOG.md release notes
   - Mark "🚧" if in development, "🟡" if partial, "✅" if complete

5. **Review and merge:**
   - Get product team review for accuracy
   - Peer review for clarity
   - Test on live site

6. **Deploy:**
   - Publish updated USER_GUIDE.md
   - Update docs site if hosted separately
   - Link from release notes

---

### Procedure 2: Update an Existing Section

**When:** An existing feature changes (UI redesign, new options, renamed feature, etc.)

**Steps:**

1. **Locate the section:**
   - Use Ctrl+F to find the section in USER_GUIDE.md
   - Note: Major sections are in Section 5; workflows in Section 4

2. **Review current documentation:**
   - Read the existing text carefully
   - Identify what's accurate, what's outdated, what's wrong

3. **Make surgical edits:**
   - Update only the text that changed
   - Don't reorganize unless necessary
   - Preserve all other sections

4. **Update screenshots:**
   - If UI changed significantly, mark screenshot placeholder as outdated
   - Note what should be shown in the new screenshot

5. **Test the update:**
   - Verify the described steps still work
   - Check for broken links or references

6. **Quick review:**
   - Have someone else read the updated section
   - Confirm accuracy

7. **Commit:**
   - Use message: `docs: update [feature name] for [change reason]`

---

### Procedure 3: Fix an Error or Inaccuracy

**When:** You discover incorrect information in the guide.

**Steps:**

1. **Verify the error:**
   - Test on live platform
   - Confirm the documentation is wrong (not misunderstanding)

2. **Fix the error:**
   - Locate the incorrect text
   - Replace with accurate information
   - Add source or confirmation method if unusual

3. **Flag if systemic:**
   - Are there other errors like this?
   - Should the style guide be updated to prevent this in the future?

4. **Commit:**
   - Use message: `docs: fix [specific error description]`
   - Example: `docs: fix TheoryLibrary filter explanation (only 1 category at a time, not multiple)`

---

### Procedure 4: Expand Documentation

**When:** Documentation exists but is too brief or lacks detail.

**Steps:**

1. **Identify what needs expansion:**
   - Too few examples?
   - Missing step-by-step detail?
   - Not enough context for some audiences?

2. **Expand the section:**
   - Add more examples or use cases
   - Add step-by-step breakdowns
   - Add audience-specific notes where helpful

3. **Don't break structure:**
   - Keep headings and subsections same
   - Don't move content around unnecessarily
   - Preserve all existing correct information

4. **Review:**
   - Does the expanded section still feel cohesive?
   - Is there unnecessary repetition?
   - Is new content clear?

5. **Commit:**
   - Use message: `docs: expand [section name] with additional detail`

---

### Procedure 5: Deprecate or Remove a Feature

**When:** A feature is being removed and no longer available.

**Steps:**

1. **Mark the feature as deprecated:**
   - Find the section describing the feature
   - Add note at the top: "⚠️ DEPRECATED: This feature is no longer available as of [DATE]. See [replacement or alternative] instead."

2. **Provide replacement info:**
   - Direct users to what to do instead
   - Link to migration guide if complex

3. **Keep history:**
   - Don't delete the section
   - Leave it so existing documentation makes sense to users with older bookmarks

4. **Update CHANGELOG.md:**
   - Note when the feature was removed
   - Mention alternatives

5. **Update troubleshooting:**
   - Add entry: "This feature is no longer available"
   - Direct to alternative

6. **Commit:**
   - Use message: `docs: deprecate [feature name] (EOL [DATE])`

---

## Style & Tone Guidelines

### Core Principles

1. **Clarity over cleverness**
   - Use simple words
   - Short sentences (aim for 15 words max when possible)
   - Avoid jargon unless defined

2. **Action-oriented**
   - Make instructions imperative: "Click X," not "You can click X"
   - Use numbered lists for steps, bullets for info
   - Answer "what do I do?" before "how does this work?"

3. **Inclusive language**
   - "You" language (avoid passive voice)
   - Gender-neutral pronouns
   - Consider non-native English speakers

4. **Conversational, not corporate**
   - "Learn More" button is okay; "Unfantastical theory discovery mechanism" is not
   - "Try" and "you" make it friendly
   - Professional but not robotic

### Writing Patterns

**For instructions:**
```markdown
### How to [do something]

**Scenario:** You need to [real-world context]

**Steps:**
1. [Action]
2. [Action]
3. [Result]

**Time estimate:** [time range]
**Pro tip:** [helpful shortcut or context]
```

**For feature descriptions:**
```markdown
### What is [feature name]?
[1 paragraph what it does]

**When to use it:**
[Benefits and scenarios]

**What information is shown:**
- [Item 1]
- [Item 2]

**How to use this information:**
[Practical steps]

**Screenshot placeholder**
[INSERT SCREENSHOT: [description]]
```

**For troubleshooting:**
```markdown
#### **Issue: [User problem]**

**Cause:** [Root cause]

**Solutions:**
1. [Solution 1]
2. [Solution 2]
```

### Formatting Rules

- **Bold** for UI elements: Click the **Learn More** button
- **Keyboard combinations:** `Cmd + R` or `Ctrl + Alt + Del`
- **Code/URLs:** `https://example.com/path`
- **Tips:** Use `**Pro tip:**` for helpful context
- **Warnings:** Use `⚠️` for important info
- **Development status:** Use `✅` (done), `🚧` (in progress), `⏳` (planned), `🔒` (restricted), `🟡` (partial)

### Tone Examples

❌ **Too technical:**  
"Utilize the query handler to iterate through the document object model of the theory entities."

✅ **Clear and simple:**  
"Use the search box to find theories by keyword."

---

❌ **Too passive:**  
"It is recommended that the theory be read twice for optimal comprehension."

✅ **Action-oriented:**  
"Read the theory twice for better understanding."  
Or even simpler: "Reread the theory for better understanding."

---

## Version Control & Release Process

### Version Numbering

Use semantic versioning for documentation:
- **MAJOR** — Large restructure, removed sections, significant format change
- **MINOR** — New sections, new features documented, major updates
- **PATCH** — Bug fixes, typos, clarifications, small updates

**Examples:**
- v1.0 → v2.0 (restructure)
- v1.0 → v1.1 (add new feature section)
- v1.0 → v1.0.1 (fix typo)

### Changelog Format

Each release gets an entry in CHANGELOG.md:

```markdown
### Version X.Y.Z (Release Date)

**Features:**
- ✅ [New feature documented]
- ✅ [Another feature]

**Updates:**
- 🟡 [Section name updated for changed UI]
- 🟡 [New workflow added]

**Fixes:**
- 🔧 [Bug fix]
- 🔧 [Clarification]

**Known Issues:**
- [Issue description - if applicable]
```

### Release Checklist

Before publishing a new version:

- [ ] All changes reviewed and tested
- [ ] Version number updated in USER_GUIDE.md front matter
- [ ] CHANGELOG.md updated with new entry
- [ ] Links verified (no broken `[INSERT_...]` placeholders should remain in primary sections)
- [ ] Peer review completed
- [ ] Product team confirms accuracy
- [ ] Screenshots added (or flagged as needed)
- [ ] Commit message follows pattern: `docs: [version] release`

---

## Audience Segmentation

### How Documentation Is Organized for Different Audiences

**General Users (Students, Educators, Researchers):**
- Sections 1–6: Purpose, Getting Started, Navigation, Workflows, Features, Troubleshooting
- **Skip:** Section 7 (Admin & Technical), Section 8 (some glossary terms)

**Administrators:**
- Sections 1–6 (to understand user perspective)
- Section 7 (Admin & Technical Notes)
- [CONTENT_MANAGEMENT.md](CONTENT_MANAGEMENT.md)
- [TEAM_WORKFLOW.md](../TEAM_WORKFLOW.md)

**Developers:**
- Section 7 (Tech architecture overview)
- [ARCHITECTURE.md](../ARCHITECTURE.md)
- [CONTENT_MANAGEMENT.md](../CONTENT_MANAGEMENT.md)
- [GIT_STRATEGY.md](../GIT_STRATEGY.md)

**Support Staff:**
- Sections 4–6 (Workflows, Features, Troubleshooting)
- Appendix (FAQs and keyboard shortcuts)
- [CONTENT_MANAGEMENT.md](../CONTENT_MANAGEMENT.md) for admin features

### Audience-Specific Sections

Within USER_GUIDE.md:

- **Section 5-A through 5-F** are written for all users but include technical details for developers
- **Section 7** is explicitly marked as "Admin & Technical—Authorized users only"
- **Appendix C-D** provides links to external resources for accessibility and browser support

### Accommodation Examples

**Same feature, different explanations:**

For students:
> "Click **Learn More** to see how this theory applies to real movies."

For developers:
> "TheoryDetailModal component fetches citations via `fetchTheoryCitations(theoryId)` and renders them with fallback to inline citation strings if no linked records exist."

Both explanations are in the same feature guide but separated or nested appropriately.

---

## Common Patterns & Templates

### Template 1: Feature Section

Copy and customize this for new features:

```markdown
### Section 5-[Letter]: [Feature Name]

**What is [feature name]?**  
[1–2 sentence explanation of what it does]

**When to use it:**
[List 2–3 scenarios where user would access this]

**How to access it:**
[Navigation path: Click X → Click Y → Feature appears]

**What it shows:**
- [Information element 1]
- [Information element 2]
- [Interactive element]

**How to use it:**
[Step-by-step instructions or use cases]

**Screenshot placeholder**  
[INSERT SCREENSHOT: [description of what should appear]]

**Related features:**
- [Link to related feature]
- [Link to glossary term if needed]
```

### Template 2: Workflow Section

```markdown
### Workflow [Letter]: [Scenario]

**Scenario:** [User's real-world goal]

**Steps:**
1. [Action] — [brief explanation if needed]
2. [Action]
3. [Result]

**Result:** [What should happen]

**Pro tip:** [Helpful shortcut or context]

**Time estimate:** [time range]

**Common mistakes:**
- [Mistake 1 and how to avoid it]
- [Mistake 2 and how to avoid it]
```

### Template 3: Troubleshooting Issue

```markdown
#### **Issue: [What the user sees]**

**Cause:** [Root cause]

**Severity:** [Minor / Moderate / Blocking]

**Solutions (try in order):**
1. [Solution 1]
   - Detailed step (if needed)
2. [Solution 2]

**If still not working:**
[Where to get support]

**Related issues:**
- [Link to similar issue]
```

---

## Contribution Guidelines

### For Team Members Contributing Updates

1. **Before you start:**
   - Read this framework document
   - Review the "Style & Tone Guidelines" section
   - Identify which procedure applies (Add/Update/Fix/Expand/Remove)

2. **Make your edits:**
   - Follow the procedure for your change type
   - Adhere to style guidelines
   - Test any described steps on live platform

3. **Prepare for review:**
   - Summarize your changes (1–2 sentences)
   - Note any sections you modified
   - Flag if breaking changes or restructuring

4. **Submit for review:**
   - Create a pull request or share the updated file
   - Tag product team and at least one peer reviewer
   - Request review within 48 hours

5. **Address feedback:**
   - Make requested changes
   - Respond to comments
   - Resubmit for approval

6. **Merge and release:**
   - Once approved, merge changes
   - Update version in USER_GUIDE.md front matter
   - Update CHANGELOG.md
   - Commit with appropriate message

---

## Tools & Resources

### Recommended Tools

| Tool | Use Case | Notes |
|------|----------|-------|
| **VS Code** | Edit markdown files | Built-in preview available |
| **GitHub** | Version control and collaboration | Issues for tracking documentation backlog |
| **Markdown Preview** | Verify formatting | Chrome/Firefox extensions available |
| **Grammarly** | Spelling and grammar | Free version adequate |
| **Screenshot tool** | Capture UI for placeholders | Built into OS or use Snagit/Loom |

### Resources for Documentation

- **Markdown guide:** [markdown-guide.readthedocs.io](https://markdown-guide.readthedocs.io/)
- **Best practices:** [www.writethedocs.org](https://www.writethedocs.org/)
- **Accessibility:** [webaim.org](https://webaim.org/)
- **Style references:** Chicago Manual of Style, Apple Style Guide (check org preferences)

### Documentation Backlog

Track improvement ideas here:

```
[ ] [Issue/Idea description]
     Priority: [High/Medium/Low]
     Owner: [Name if assigned]
     Related to: [Feature/Section]
     
[ ] [Another issue]
     ...
```

---

## FAQ for Maintainers

**Q: How often should I update the user guide?**  
A: At minimum, once per feature release. Add urgent updates (bug fixes, critical errors) immediately.

---

**Q: Can I reorganize sections?**  
A: Sparingly. Major reorganization should be scheduled as a MAJOR version bump. Small improvements are okay if you update links.

---

**Q: What about screenshots—how do I keep them current?**  
A: Use placeholders like `[INSERT SCREENSHOT: description]` for new features. Assign screenshot capture to a designer/PM. Update every major release.

---

**Q: Should I document planned features that aren't live yet?**  
A: Yes, but mark them `🚧 In development` or `⏳ Planned`. Use Section 9 (Version History) to show what's coming.

---

**Q: What if the product changes and the documentation is suddenly wrong?**  
A: Follow Procedure 2 (Update Existing Section). If urgent, post an immediate patch. Schedule full review at next release.

---

**Q: How do I know what to document?**  
A: Ask: "Would a user need to know this to use the platform?" If yes, document it. If unsure, ask product team.

---

## Document Metadata

**Framework Version:** 1.0  
**Document Owner:** [INSERT_DOC_OWNER_NAME]  
**Last Reviewed:** [DATE]  
**Next Review:** [DATE + 3 MONTHS]  
**Related Documents:**
- USER_GUIDE.md (main guide)
- CHANGELOG.md (version tracking)
- ARCHITECTURE.md (technical reference)

---

**Questions about this framework?**  
📧 Contact: [INSERT_DOCUMENTATION_EMAIL]  
📝 Open an issue: [INSERT_GITHUB_ISSUES_URL]

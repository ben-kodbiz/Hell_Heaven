# Task: Implement "Arguments & Counters" Section in Islamic Heaven/Hell Web App

## 1. Data Layer
- [ ] Load `doubt.json` (contains arguments + counterarguments).
- [ ] Ensure each entry has:
  - `id` (unique identifier)
  - `argument` (misconception/question)
  - `counter` (Islamic perspective/explanation)
  - `source` (optional: Qur’an, Hadith, scholar reference)

## 2. UI/UX Layout
- [ ] Add a new section to **Landing Page**: "Common Questions & Answers".
- [ ] Present each argument as a **clickable card**:
  - Front: Show **argument/misconception** (bold, captivating, in red/dark tone).
  - On click/expand: Reveal **counterargument** (calm, enlightening tone, styled differently).
- [ ] Use simple, lightweight CSS (e.g., **Pico.css** or custom minimal CSS Grid/Flexbox).
- [ ] Provide smooth animations (accordion expand/collapse).

## 3. Interaction Design
- [ ] Each card should **toggle open/close** on click/tap.
- [ ] Allow multiple cards open at once.
- [ ] Include "Show All Answers" / "Hide All" button for accessibility.

## 4. Navigation Integration
- [ ] Add a **third door** on the landing page:
  - "Questions?" → leads directly to the arguments/counters section.
- [ ] Or, optionally, display the section at the bottom of the landing page.

## 5. Content Styling
- [ ] Arguments styled with ❓ icon, counter styled with ✅ or ✨.
- [ ] Use **different colors**:
  - Argument → Dark Red / Gray (fear, doubt, confusion).
  - Counter → Emerald Green / Blue (calm, clarity, truth).
- [ ] Include **source footnotes** (small italic text).

## 6. Responsiveness
- [ ] Ensure layout works well on mobile (cards stack vertically).
- [ ] Desktop view: grid of 2-3 columns for better readability.

## 7. Deployment
- [ ] Save updated arguments/counters in `public/data/arguments.json`.
- [ ] Auto-load them dynamically in the landing page.
- [ ] Test on GitHub Pages deployment (no backend needed).

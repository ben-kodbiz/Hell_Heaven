# 🌿🔥 Heaven & Hell Web App

## 🎯 Goal
An interactive web app introducing non-Muslims to the Islamic view of **Heaven (Jannah)** and **Hell (Jahannam)**.  
The landing page has **two doors/buttons**. Clicking each opens a storytelling experience with Qur’an + Hadith quotes.

---

## 🛠️ Tech Stack
- **Framework**: SvelteKit
- **Styling**: PicoCSS (classless, semantic, ultra-light)
- **Animations**: CSS keyframes (simple hover, fade, glow)
- **Deployment**: Netlify or Vercel (static, zero maintenance)

---

## 📌 Tasks

### 1. Setup
- [ ] Initialize SvelteKit project (`npm create svelte@latest heaven-hell-app`)
- [ ] Install **PicoCSS** via npm or CDN
- [ ] Configure routes: `/` (landing), `/heaven`, `/hell`

---

### 2. Landing Page (`/`)
- [ ] Create **two giant buttons/doors**:
  - Heaven Door → `/heaven` 🌿
  - Hell Door → `/hell` 🔥
- [ ] Style:
  - Heaven: soft gradients (sky blue, green), gentle glow
  - Hell: black-red gradient, flickering hover effect
- [ ] Add text:  
  - Heaven: *“Step into Eternal Gardens of Light”*  
  - Hell: *“Face the Fire of Regret”*  

---

### 3. Heaven Page (`/heaven`)
- Hero section: “🌿 The Eternal Reward”
- Add **Qur’an & Hadith snippets**:

  - Qur’an:  
    > *“Indeed, the righteous will be amid gardens and rivers, in a seat of honor near a Sovereign, Perfect in Ability.”*  
    (Qur’an 54:54-55)

  - Hadith:  
    > The Prophet ﷺ said: *“Allah says: I have prepared for My righteous servants what no eye has seen, no ear has heard, and no human heart has ever conceived.”*  
    (Bukhari & Muslim)

- UI Effects:
  - Fade-in text
  - Light particle background (subtle CSS animation)
- Sections:
  - **Promise of Peace** (short verses)
  - **Rewards Beyond Imagination** (expandable details)
  - **Motivation to Strive** (closing reflection)

---

### 4. Hell Page (`/hell`)
- Hero section: “🔥 The Fire of Regret”
- Add **Qur’an & Hadith snippets**:

  - Qur’an:  
    > *“Indeed, those who disbelieve — for them is the Fire of Hell. Every time they want to escape from it, they will be returned to it, and it will be said: Taste the punishment of the Fire which you used to deny.”*  
    (Qur’an 32:20)

  - Hadith:  
    > The Prophet ﷺ said: *“The fire you see in this world is one part of seventy parts of the Fire of Hell.”*  
    (Bukhari)

- UI Effects:
  - Flickering flame-like background
  - Shaking text effect on scroll
- Sections:
  - **Agony & Despair** (short verses)
  - **Consequences of Arrogance** (expandable content)
  - **A Call to Reflection** (final warning)

---

### 5. Shared Components
- [ ] Navigation (Back to Doors)
- [ ] Footer with:
  - Disclaimer: *“This site is for educational purposes. All content sourced from Qur’an & Hadith.”*
  - Reference links

---

### 6. Deployment
- [ ] Push repo to GitHub
- [ ] Connect with Netlify or Vercel for auto-deploy
- [ ] Test on mobile & desktop
- [ ] Add SEO metadata:
  - Title: *“Heaven & Hell in Islam — An Interactive Exploration”*
  - Description: *“Discover what Islam teaches about Paradise and the Fire, through Qur’an and Hadith.”*

---

## ✅ Deliverables
1. Working SvelteKit app with `/`, `/heaven`, `/hell`
2. Heaven page with peaceful, motivational UX
3. Hell page with fear-inspiring, serious UX
4. Deployed link live on Netlify/Vercel

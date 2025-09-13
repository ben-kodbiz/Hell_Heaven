# 🌿🔥 Heaven & Hell Web App

## 🎯 Goal
An interactive web app introducing non-Muslims to the Islamic view of **Heaven (Jannah)** and **Hell (Jahannam)**.
The landing page has **two doors/buttons**. Clicking each opens a storytelling experience with Qur'an + Hadith quotes.

## 🛠️ Tech Stack
- **Framework**: SvelteKit
- **Styling**: PicoCSS (classless, semantic, ultra-light)
- **Animations**: CSS keyframes (simple hover, fade, glow)
- **Deployment**: Netlify or Vercel (static, zero maintenance)

## 🚀 Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

4. Preview the production build:
   ```bash
   npm run preview
   ```

## 📁 Project Structure
- `src/routes/+page.svelte` - Landing page with two doors
- `src/routes/heaven/+page.svelte` - Heaven content page
- `src/routes/hell/+page.svelte` - Hell content page
- `src/data/verses.json` - Qur'an verses, Hadith, and scholar quotes
- `src/data/doubt.json` - Common arguments and counterarguments
- `src/app.css` - Global styles and animations

## 📌 Features
- Interactive navigation between Heaven and Hell
- Animated doors with hover effects
- Expandable sections with additional content
- Particle background effect on Heaven page
- Flickering flame effect on Hell page
- **"Arguments & Counters" section** addressing common doubts
- Responsive design for all devices
- Educational content sourced from authentic Islamic texts

## 📚 Content Sources
All content is sourced from:
- Qur'an (translated)
- Sahih Hadith collections (Bukhari, Muslim)
- Classical Islamic scholars

## ☁️ Deployment

### Netlify
1. Push your code to a GitHub repository
2. Connect your repository to Netlify
3. Set the build command to `npm run build`
4. Set the publish directory to `build`

### Vercel
1. Push your code to a GitHub repository
2. Connect your repository to Vercel
3. Set the build command to `npm run build`
4. Set the output directory to `build`

### Manual Deployment
1. Build the project:
   ```bash
   npm run build
   ```
2. The built files will be in the `build` directory
3. Upload these files to any static hosting service

## ⚠️ Disclaimer
This site is for educational purposes only. For accurate study, consult full translations and scholars.
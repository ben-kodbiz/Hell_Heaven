// Language Switcher JavaScript for the Heaven & Hell App

// Current language (default to English)
let currentLanguage = 'en';

// Load language file
async function loadLanguage(lang) {
  try {
    const response = await fetch(`lang/${lang}.json`);
    if (!response.ok) {
      throw new Error(`Failed to load language file: ${lang}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error loading language file:', error);
    return null;
  }
}

// Translate the page content
async function translatePage(lang) {
  const translations = await loadLanguage(lang);
  if (!translations) return;
  
  // Update page content based on translations
  document.querySelector('h1').innerHTML = translations.choose_door;
  document.querySelector('.header-subtitle').innerHTML = translations.subtitle;
  
  // Update door content
  const heavenDoor = document.querySelector('.door-heaven');
  const hellDoor = document.querySelector('.door-hell');
  
  if (heavenDoor) {
    heavenDoor.querySelector('h2').textContent = translations.enter_heaven;
    heavenDoor.querySelector('p').textContent = translations.heaven_description;
  }
  
  if (hellDoor) {
    hellDoor.querySelector('h2').textContent = translations.enter_hell;
    hellDoor.querySelector('p').textContent = translations.hell_description;
  }
  
  // Update questions section
  const questionsSection = document.querySelector('.questions-section');
  if (questionsSection) {
    questionsSection.querySelector('h2').textContent = translations.common_questions;
    questionsSection.querySelector('p').textContent = translations.questions_subtitle;
    const toggleButton = document.getElementById('toggleAllButton');
    if (toggleButton) {
      const isExpanded = toggleButton.classList.contains('expanded');
      const buttonText = toggleButton.querySelector('span:last-child');
      if (buttonText) {
        buttonText.textContent = isExpanded ? translations.hide_all : translations.show_all;
      }
    }
  }
  
  // Update footer
  const footerParagraphs = document.querySelectorAll('.app-footer p');
  if (footerParagraphs.length >= 2) {
    footerParagraphs[0].innerHTML = `<small>${translations.footer_text}</small>`;
    footerParagraphs[1].innerHTML = `<small><a href="README.md">${translations.footer_readme}</a></small>`;
  }
  
  // Update current language
  currentLanguage = lang;
  
  // Update language switcher button text
  const langSwitcher = document.getElementById('languageSwitcher');
  if (langSwitcher) {
    const nextLang = lang === 'en' ? 'ms' : 'en';
    const nextLangName = nextLang === 'en' ? 'English' : 'Bahasa Melayu';
    langSwitcher.innerHTML = `
      <span class="material-icons">language</span>
      <span>${nextLangName}</span>
    `;
  }
  
  // Save language preference to localStorage
  localStorage.setItem('preferredLanguage', lang);
}

// Initialize language switcher
document.addEventListener('DOMContentLoaded', async function() {
  // Create language switcher element
  const langSwitcherContainer = document.getElementById('languageSwitcherContainer');
  if (langSwitcherContainer) {
    const langSwitcher = document.createElement('div');
    langSwitcher.id = 'languageSwitcher';
    langSwitcher.className = 'language-switcher';
    langSwitcher.innerHTML = `
      <span class="material-icons">language</span>
      <span>Bahasa Melayu</span>
    `;
    langSwitcherContainer.appendChild(langSwitcher);
    
    // Add event listener to switch language
    langSwitcher.addEventListener('click', async function() {
      const newLang = currentLanguage === 'en' ? 'ms' : 'en';
      await translatePage(newLang);
    });
  }
  
  // Load preferred language from localStorage or default to English
  const preferredLanguage = localStorage.getItem('preferredLanguage') || 'en';
  if (preferredLanguage !== 'en') {
    await translatePage(preferredLanguage);
  }
});
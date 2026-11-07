// Main Application Script for Vaidik Sanskar Vidhi

let currentLang = localStorage.getItem('sanskar_lang') || 'hi';
let currentCategory = 'all';
let searchQuery = '';

// Initialize on DOM Load
document.addEventListener('DOMContentLoaded', () => {
  setupLanguageSwitcher();
  setupMobileNav();
  setupContactForm();
  
  // If on index page with sanskar-grid
  if (document.getElementById('sanskarGrid')) {
    setupFiltersAndSearch();
    renderCards();
  }

  // If on individual sanskar detail page
  if (document.getElementById('detailContainer')) {
    renderDetailPage();
  }

  // Update UI strings according to active language
  updateStaticTexts();
});

// Setup Language Switcher
function setupLanguageSwitcher() {
  const langButtons = document.querySelectorAll('.lang-btn');
  langButtons.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
    btn.addEventListener('click', () => {
      currentLang = btn.dataset.lang;
      localStorage.setItem('sanskar_lang', currentLang);
      
      langButtons.forEach(b => b.classList.toggle('active', b.dataset.lang === currentLang));
      
      // Update body class for font switching
      document.body.className = `lang-${currentLang}`;
      
      updateStaticTexts();
      
      if (document.getElementById('sanskarGrid')) {
        renderCards();
      }
      if (document.getElementById('detailContainer')) {
        renderDetailPage();
      }
    });
  });

  // Set initial body language class
  document.body.className = `lang-${currentLang}`;
}

// Update static elements that have data-i18n attributes
function updateStaticTexts() {
  const trans = siteTranslations[currentLang] || siteTranslations.hi;
  
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (trans[key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = trans[key];
      } else {
        el.textContent = trans[key];
      }
    }
  });

  // Update category buttons text if they have data-i18n
  document.querySelectorAll('.cat-btn[data-i18n]').forEach(btn => {
    const key = btn.getAttribute('data-i18n');
    if (trans[key]) btn.textContent = trans[key];
  });

  // Update Sanskar Select dropdown on Contact page
  const sanskarSelect = document.getElementById('sanskarSelect');
  if (sanskarSelect) {
    const urlSanskar = new URLSearchParams(window.location.search).get('sanskar');
    const selectedVal = sanskarSelect.value || urlSanskar || '';
    sanskarSelect.innerHTML = `
      <option value="">${trans.contactSelectDefault || '-- Select a Sanskar --'}</option>
      ${sanskarData.map(s => `
        <option value="${s.id}" ${selectedVal == s.id ? 'selected' : ''}>
          ${s.id}. ${s.name[currentLang] || s.name.hi}
        </option>
      `).join('')}
    `;
  }
}

// Setup Contact Form with WhatsApp Modal Selection (Tithi Arya & Priyanka Arya)
function setupContactForm() {
  const contactForm = document.getElementById('contactForm');
  const waModal = document.getElementById('waModal');
  const closeWaModal = document.getElementById('closeWaModal');
  
  if (!contactForm || contactForm.dataset.listenerAttached) return;
  contactForm.dataset.listenerAttached = 'true';

  let currentWaMessage = '';

  // Handle Form Submission -> Open Choice Modal
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name')?.value.trim() || '';
    const phone = document.getElementById('phone')?.value.trim() || '';
    const email = document.getElementById('email')?.value.trim() || '';
    const sanskarSelect = document.getElementById('sanskarSelect');
    const sanskarText = sanskarSelect && sanskarSelect.selectedIndex > 0 ? sanskarSelect.options[sanskarSelect.selectedIndex].text : '';
    const location = document.getElementById('location')?.value.trim() || '';
    const message = document.getElementById('message')?.value.trim() || '';

    // Construct formatted WhatsApp message
    let waMessage = `🕉️ *વૈદિક સંસ્કાર પૂછપરછ (Sanskar Inquiry)* 🕉️\n`;
    waMessage += `━━━━━━━━━━━━━━━━━━━━━\n`;
    waMessage += `👤 *નામ (Name):* ${name}\n`;
    waMessage += `📱 *મોબાઇલ (Phone):* ${phone}\n`;
    if (email) waMessage += `📧 *ઈમેલ (Email):* ${email}\n`;
    if (sanskarText) waMessage += `🪷 *સંસ્કાર (Sanskar):* ${sanskarText}\n`;
    if (location) waMessage += `📍 *સ્થળ (Location):* ${location}\n`;
    if (message) waMessage += `💬 *સંદેશ (Message):* ${message}\n`;
    waMessage += `━━━━━━━━━━━━━━━━━━━━━\n`;
    waMessage += `_વેબસાઇટ પરથી મોકલેલ પૂછપરછ_`;

    currentWaMessage = waMessage;

    // Save to localStorage as backup
    try {
      const inquiries = JSON.parse(localStorage.getItem('sanskar_inquiries') || '[]');
      inquiries.unshift({
        name, phone, email, sanskar: sanskarText, location, message, date: new Date().toLocaleString()
      });
      localStorage.setItem('sanskar_inquiries', JSON.stringify(inquiries.slice(0, 50)));
    } catch (err) {
      console.error(err);
    }

    // Open WhatsApp selection modal
    if (waModal) {
      waModal.classList.add('active');
    } else {
      // Fallback if modal is not present
      window.open(`https://wa.me/918128721106?text=${encodeURIComponent(currentWaMessage)}`, '_blank');
      contactForm.reset();
    }
  });

  // Close modal button
  if (closeWaModal && waModal) {
    closeWaModal.addEventListener('click', () => {
      waModal.classList.remove('active');
    });

    // Close when clicking outside modal card
    waModal.addEventListener('click', (e) => {
      if (e.target === waModal) {
        waModal.classList.remove('active');
      }
    });
  }

  // Handle Option Clicks (Tithi Arya / Priyanka Arya)
  const optionCards = document.querySelectorAll('.wa-option-card');
  optionCards.forEach(card => {
    card.addEventListener('click', () => {
      const phoneNum = card.dataset.phone;
      if (phoneNum && currentWaMessage) {
        const waUrl = `https://wa.me/${phoneNum}?text=${encodeURIComponent(currentWaMessage)}`;
        window.open(waUrl, '_blank');
        
        if (waModal) waModal.classList.remove('active');
        contactForm.reset();
        currentWaMessage = '';
      }
    });
  });
}

// Mobile Nav Toggle
function setupMobileNav() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');
  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isActive = navMenu.classList.toggle('active');
      toggleBtn.textContent = isActive ? '✕' : '☰';
    });

    // Close menu when clicking on any nav link
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        toggleBtn.textContent = '☰';
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !toggleBtn.contains(e.target)) {
        navMenu.classList.remove('active');
        toggleBtn.textContent = '☰';
      }
    });
  }
}

// Filter and Search Setup
function setupFiltersAndSearch() {
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderCards();
    });
  }

  const catButtons = document.querySelectorAll('.cat-btn');
  catButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      catButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.dataset.category;
      renderCards();
    });
  });
}

// Render Sanskar Cards on Homepage
function renderCards() {
  const grid = document.getElementById('sanskarGrid');
  if (!grid) return;

  const trans = siteTranslations[currentLang] || siteTranslations.hi;

  // Filter items
  const filtered = sanskarData.filter(item => {
    // Category check
    let matchesCategory = true;
    if (currentCategory === 'prenatal') matchesCategory = item.id >= 1 && item.id <= 3;
    else if (currentCategory === 'childhood') matchesCategory = item.id >= 4 && item.id <= 9;
    else if (currentCategory === 'educational') matchesCategory = item.id >= 10 && item.id <= 14;
    else if (currentCategory === 'social') matchesCategory = item.id >= 15 && item.id <= 16;

    if (!matchesCategory) return false;

    // Search check
    if (!searchQuery) return true;
    const nameStr = (item.name[currentLang] || '' + item.name.en + item.name.hi).toLowerCase();
    const meaningStr = (item.meaning[currentLang] || '').toLowerCase();
    const descStr = (item.description ? item.description[currentLang] : item.significance[currentLang] || '').toLowerCase();
    
    return nameStr.includes(searchQuery) || meaningStr.includes(searchQuery) || descStr.includes(searchQuery);
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 50px 20px; color: var(--maroon);">
        <h3>ॐ कोई संस्कार नहीं मिला (No Sanskar Found)</h3>
        <p style="margin-top: 10px; color: var(--text-muted);">कृपया अन्य शब्द या श्रेणी चुनकर पुनः प्रयास करें।</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(item => {
    const stageLabel = getStageLabel(item.id, currentLang);
    const name = item.name[currentLang] || item.name.hi;
    const meaning = item.meaning[currentLang] || item.meaning.hi;
    const timing = item.timing[currentLang] || item.timing.hi;
    const significance = item.significance[currentLang] || item.significance.hi;

    return `
      <article class="sanskar-card fade-in">
        <div class="card-top">
          <div class="number-badge">${item.id}</div>
          <span class="stage-pill">${stageLabel}</span>
        </div>
        <h3 class="card-title">${name}</h3>
        <div class="card-meaning">${meaning}</div>
        
        <div class="card-timing">
          <strong>${trans.timingLabel}</strong> ${timing}
        </div>

        <p class="card-desc">${significance.substring(0, 150)}...</p>

        <div class="card-mantra-preview">${item.mantra.substring(0, 50)}...</div>

        <a href="sanskar.html?id=${item.id}" class="card-btn">
          ${trans.readMore} →
        </a>
      </article>
    `;
  }).join('');
}

// Stage pill text helper
function getStageLabel(id, lang) {
  if (id <= 3) {
    return lang === 'gu' ? 'જન્મ પૂર્વે' : (lang === 'hi' ? 'जन्म पूर्व' : 'Prenatal');
  } else if (id <= 9) {
    return lang === 'gu' ? 'બાળપણ' : (lang === 'hi' ? 'शैशव व बाल्य' : 'Childhood');
  } else if (id <= 14) {
    return lang === 'gu' ? 'વિદ્યાભ્યાસ' : (lang === 'hi' ? 'शिक्षा व ब्रह्मचर्य' : 'Education');
  } else {
    return lang === 'gu' ? 'ગૃહસ્થ/મોક્ષ' : (lang === 'hi' ? 'गृहस्थ व मोक्ष' : 'Life & Beyond');
  }
}

// Specific Havan & Puja Samagri Data for Sanskars 1, 2, 3, 7 (Built-in guarantee)
const specificSamagriData = {
  1: {
    gu: [
      "બાજોટ (નોંધ: બાજોટ ના હોય તો પાટલો કાતો ત્રિપાઈ પણ ચાલશે)",
      "ઘી (દેશી ગાયનું ઘી ૨૫૦ ગ્રામ)",
      "શ્રીફળ (૧) (આસોપાલવ ૫ પાન)",
      "ત્રાંબાનો લોટો (૧)",
      "પ્રસાદ",
      "૫-૬ કોઈ પણ ફૂલ (ગુલાબ, ગલગોટા, જાસૂદ વગેરેમાંથી)",
      "વરમાળા (૨)",
      "કાંસાનો વાટકો, ખીર",
      "અડધી કાચલી સૂકું નારિયેળ, કાજુ, બદામ (સૂકોમેવો)"
    ],
    hi: [
      "बाजोट / चौकी (नोट: बाजोट न हो तो पाटा या तिपाई भी चलेगी)",
      "घी (देशी गाय का घी २५० ग्राम)",
      "श्रीफल (१) (अशोक के ५ पत्ते)",
      "तांबे का लोटा (१)",
      "प्रसाद",
      "५-६ कोई भी पुष्प (गुलाब, गेंदा, गुड़हल आदि में से)",
      "वरमाला (२)",
      "कांस्य का कटोरा, खीर",
      "सूखे नारियल की आधी वाटी, काजू, बादाम (सूखा मेवा)"
    ],
    en: [
      "Bajot / Low wooden stool (Note: Flat wooden board or tripod stool also works)",
      "Ghee (Pure Desi Cow Ghee 250g)",
      "Coconut (1) with 5 Ashoka leaves",
      "Copper Lota / Kalash (1)",
      "Prasada",
      "5 to 6 fresh flowers (Rose, Marigold, Hibiscus, etc.)",
      "Floral Garlands / Varamala (2)",
      "Bronze (Kansa) bowl and sweet milk pudding (Kheer)",
      "Half dry coconut shell, cashews, almonds (Dry fruits)"
    ]
  },
  2: {
    gu: [
      "બાજોટ (નોંધ: બાજોટ ના હોય તો પાટલો કાતો ત્રિપાઈ પણ ચાલશે)",
      "ઘી (દેશી ગાયનું ઘી ૨૫૦ ગ્રામ)",
      "શ્રીફળ (૧) (આસોપાલવ ૫ પાન)",
      "ત્રાંબાનો લોટો (૧)",
      "પ્રસાદ",
      "૫-૬ કોઈ પણ ફૂલ (ગુલાબ, ગલગોટા, જાસૂદ વગેરેમાંથી)",
      "વરમાળા (૨)",
      "ગિલોયનો રસ અને વડના પાનનો રસ મિક્સ કરીને કપડાથી ગાળીને રાખવો",
      "અડધી કાચલી સૂકું નારિયેળ, કાજુ, બદામ (સૂકોમેવો)"
    ],
    hi: [
      "बाजोट / चौकी (नोट: बाजोट न हो तो पाटा या तिपाई भी चलेगी)",
      "घी (देशी गाय का घी २५० ग्राम)",
      "श्रीफल (१) (अशोक के ५ पत्ते)",
      "तांबे का लोटा (१)",
      "प्रसाद",
      "५-६ कोई भी पुष्प (गुलाब, गेंदा, गुड़हल आदि में से)",
      "वरमाला (२)",
      "गिलोय का रस और बरगद के पत्ते का रस मिलाकर कपड़े से छानकर रखना",
      "सूखे नारियल की आधी वाटी, काजू, बादाम (सूखा मेवा)"
    ],
    en: [
      "Bajot / Low wooden stool (Note: Flat wooden board or tripod stool also works)",
      "Ghee (Pure Desi Cow Ghee 250g)",
      "Coconut (1) with 5 Ashoka leaves",
      "Copper Lota / Kalash (1)",
      "Prasada",
      "5 to 6 fresh flowers (Rose, Marigold, Hibiscus, etc.)",
      "Floral Garlands / Varamala (2)",
      "Fresh Giloy juice mixed with Banyan (Vada) leaf juice, strained through a clean cloth",
      "Half dry coconut shell, cashews, almonds (Dry fruits)"
    ]
  },
  3: {
    gu: [
      "બાજોટ (નોંધ: બાજોટ ના હોય તો પાટલો કાતો ત્રિપાઈ પણ ચાલશે)",
      "ઘી (દેશી ગાયનું ઘી ૨૫૦ ગ્રામ)",
      "શ્રીફળ (૧) (આસોપાલવ ૫ પાન)",
      "ત્રાંબાનો લોટો (૧)",
      "પ્રસાદ",
      "અડધી કાચલી સૂકું નારિયેળ, કાજુ, બદામ (સૂકોમેવો)",
      "૫-૬ કોઈ પણ ફૂલ (ગુલાબ, ગલગોટા, જાસૂદ વગેરેમાંથી)",
      "વરમાળા (૨)",
      "ખીચડી (મીઠું નાખવું નહીં)",
      "માથામાં નાખવાનું તેલ, કાંસકો, ગુલાબનું ફૂલ"
    ],
    hi: [
      "बाजोट / चौकी (नोट: बाजोट न हो तो पाटा या तिपाई भी चलेगी)",
      "घी (देशी गाय का घी २५० ग्राम)",
      "श्रीफल (१) (अशोक के ५ पत्ते)",
      "तांबे का लोटा (१)",
      "प्रसाद",
      "सूखे नारियल की आधी वाटी, काजू, बादाम (सूखा मेवा)",
      "५-६ कोई भी पुष्प (गुलाब, गेंदा, गुड़हल आदि में से)",
      "वरमाला (२)",
      "खिचड़ी (नमक नहीं डालना)",
      "बालों का तेल, कंघी, गुलाब का फूल"
    ],
    en: [
      "Bajot / Low wooden stool (Note: Flat wooden board or tripod stool also works)",
      "Ghee (Pure Desi Cow Ghee 250g)",
      "Coconut (1) with 5 Ashoka leaves",
      "Copper Lota / Kalash (1)",
      "Prasada",
      "Half dry coconut shell, cashews, almonds (Dry fruits)",
      "5 to 6 fresh flowers (Rose, Marigold, Hibiscus, etc.)",
      "Floral Garlands / Varamala (2)",
      "Khichdi (Strictly without salt)",
      "Hair oil, comb, and a fresh Rose flower"
    ]
  },
  7: {
    gu: [
      "બાજોટ (નોંધ: બાજોટ ના હોય તો પાટલો કાતો ત્રિપાઈ પણ ચાલશે)",
      "ઘી (દેશી ગાયનું ઘી ૨૫૦ ગ્રામ)",
      "શ્રીફળ (૧) (આસોપાલવ ૫ પાન)",
      "ત્રાંબાનો લોટો (૧)",
      "પ્રસાદ",
      "૫-૬ કોઈ પણ ફૂલ (ગુલાબ, ગલગોટા, જાસૂદ વગેરેમાંથી)",
      "ખીર નાની વાટકી જેટલી",
      "અડધી કાચલી સૂકું નારિયેળ, કાજુ, બદામ (સૂકોમેવો)"
    ],
    hi: [
      "बाजोट / चौकी (नोट: बाजोट न हो तो पाटा या तिपाई भी चलेगी)",
      "घी (देशी गाय का घी २५० ग्राम)",
      "श्रीफल (१) (अशोक के ५ पत्ते)",
      "तांबे का लोटा (१)",
      "प्रसाद",
      "५-६ कोई भी पुष्प (गुलाब, गेंदा, गुड़हल आदि में से)",
      "खीर (छोटी कटोरी जितनी)",
      "सूखे नारियल की आधी वाटी, काजू, बादाम (सूखा मेवा)"
    ],
    en: [
      "Bajot / Low wooden stool (Note: Flat wooden board or tripod stool also works)",
      "Ghee (Pure Desi Cow Ghee 250g)",
      "Coconut (1) with 5 Ashoka leaves",
      "Copper Lota / Kalash (1)",
      "Prasada",
      "5 to 6 fresh flowers (Rose, Marigold, Hibiscus, etc.)",
      "Sweet milk rice pudding (Kheer - one small bowl)",
      "Half dry coconut shell, cashews, almonds (Dry fruits)"
    ]
  }
};

// Render Individual Sanskar Detail Page (sanskar.html)
function renderDetailPage() {
  const container = document.getElementById('detailContainer');
  if (!container) return;

  const urlParams = new URLSearchParams(window.location.search);
  const sanskarId = parseInt(urlParams.get('id')) || 1;
  const sanskar = sanskarData.find(s => s.id === sanskarId) || sanskarData[0];
  const trans = siteTranslations[currentLang] || siteTranslations.hi;
  const samagriObj = (sanskar && sanskar.samagri) || specificSamagriData[sanskar.id];
  const samagriList = samagriObj ? (samagriObj[currentLang] || samagriObj.gu || samagriObj.hi || []) : [];

  // Set document title
  document.title = `${sanskar.name[currentLang] || sanskar.name.hi} | ${trans.siteTitle}`;

  // Update hero header elements
  const heroNumber = document.getElementById('detailHeroNumber');
  const heroTitle = document.getElementById('detailHeroTitle');
  const heroMeaning = document.getElementById('detailHeroMeaning');

  if (heroNumber) heroNumber.textContent = `${getStageLabel(sanskar.id, currentLang)} • ${currentLang === 'gu' ? 'સંસ્કાર' : (currentLang === 'hi' ? 'संस्कार' : 'Sanskar')} ${sanskar.id} / 16`;
  if (heroTitle) heroTitle.textContent = sanskar.name[currentLang] || sanskar.name.hi;
  if (heroMeaning) heroMeaning.textContent = sanskar.meaning[currentLang] || sanskar.meaning.hi;

  // Previous and Next IDs
  const prevId = sanskar.id > 1 ? sanskar.id - 1 : 16;
  const nextId = sanskar.id < 16 ? sanskar.id + 1 : 1;
  const prevSanskar = sanskarData.find(s => s.id === prevId);
  const nextSanskar = sanskarData.find(s => s.id === nextId);

  // Render detail body
  container.innerHTML = `
    <div class="detail-box fade-in">
      
      <!-- Timing section -->
      <div class="detail-section">
        <h3 class="detail-section-title">
          <span>🕒</span> ${trans.timingLabel}
        </h3>
        <p style="font-size: 1.05rem; color: var(--text-dark);">
          ${sanskar.timing[currentLang] || sanskar.timing.hi}
        </p>
      </div>

      <!-- Sacred Mantra section -->
      <div class="detail-section">
        <h3 class="detail-section-title">
          <span>🕉️</span> ${trans.mantraLabel}
        </h3>
        <div class="mantra-card-full">
          ${sanskar.mantra}
        </div>
      </div>

      <!-- Significance section -->
      <div class="detail-section">
        <h3 class="detail-section-title">
          <span>✨</span> ${trans.significanceLabel}
        </h3>
        <p style="font-size: 1.05rem; line-height: 1.8; color: var(--text-dark);">
          ${sanskar.significance[currentLang] || sanskar.significance.hi}
        </p>
      </div>

      <!-- Key Rituals section -->
      <div class="detail-section">
        <h3 class="detail-section-title">
          <span>🔥</span> ${trans.ritualsLabel}
        </h3>
        <ul class="ritual-steps">
          ${(sanskar.rituals[currentLang] || sanskar.rituals.hi).map((step, idx) => `
            <li class="ritual-step-item">
              <span class="step-num">${idx + 1}</span>
              <div>${step}</div>
            </li>
          `).join('')}
        </ul>
      </div>

      <!-- Required Havan & Puja Samagri section (Only for Annaprashana, Pumsavana, Garbhadhana, Simantonnayana) -->
      ${samagriList && samagriList.length > 0 ? `
      <div class="detail-section">
        <h3 class="detail-section-title">
          <span>🌿</span> ${(trans && trans.samagriLabel) || (currentLang === 'gu' ? 'જરૂરી હવન તેમજ પૂજન સામગ્રી યાદી:' : (currentLang === 'hi' ? 'आवश्यक हवन एवं पूजन सामग्री सूची:' : 'Required Havan & Puja Samagri List:'))}
        </h3>
        <div class="samagri-container" style="background: linear-gradient(145deg, #FCF9F2, #F8F1E5); border: 1.5px solid #E6D7BD; border-radius: 16px; padding: 22px 20px; box-shadow: inset 0 2px 6px rgba(104, 13, 13, 0.03); margin-top: 15px;">
          <ul class="samagri-grid-list" style="list-style: none; padding: 0; margin: 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(290px, 1fr)); gap: 12px;">
            ${samagriList.map((item, idx) => `
              <li class="samagri-item" style="display: flex; align-items: flex-start; gap: 12px; background: #FFFFFF; border: 1px solid #EEDFCA; border-radius: 12px; padding: 12px 14px; box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);">
                <span class="samagri-num" style="background: linear-gradient(135deg, #2D6A4F, #1B4332); color: #FFFFFF; min-width: 26px; height: 26px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-size: 0.82rem; font-weight: 700; flex-shrink: 0; margin-top: 2px;">${idx + 1}</span>
                <span class="samagri-text" style="font-size: 0.98rem; color: #2D241E; line-height: 1.55; font-weight: 500;">${item}</span>
              </li>
            `).join('')}
          </ul>
        </div>
      </div>
      ` : ''}

      <!-- Direct Contact CTA for this Sanskar -->
      <div style="background: linear-gradient(135deg, #FFF6E5, #FFEACC); border: 1.5px solid var(--gold); border-radius: 14px; padding: 18px 20px; margin-top: 25px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 15px;">
        <div>
          <h4 style="color: var(--maroon); margin: 0 0 4px 0; font-size: 1.15rem; font-weight: 700;">
            🕉️ ${currentLang === 'gu' ? 'આ સંસ્કાર વિધિ કે મુહૂર્ત માટે સંપર્ક કરો' : (currentLang === 'hi' ? 'इस संस्कार विधि या मुहूर्त हेतु संपर्क करें' : 'Inquire for this Sanskar Vidhi & Muhurta')}
          </h4>
          <p style="margin: 0; color: #555; font-size: 0.92rem;">
            ${currentLang === 'gu' ? 'તિથી આર્ય અને પ્રિયંકા આર્ય સાથે પરામર્શ કરો' : (currentLang === 'hi' ? 'तिथि आर्य एवं प्रियंका आर्य से परामर्श करें' : 'Consult with Tithi Arya & Priyanka Arya')}
          </p>
        </div>
        <a href="contact.html?sanskar=${sanskar.id}" class="btn-primary" style="padding: 9px 20px; font-size: 0.92rem; border-radius: 20px; text-decoration: none; display: inline-flex; align-items: center; gap: 6px; white-space: nowrap;">
          💬 ${currentLang === 'gu' ? 'પૂછપરછ / નોંધણી' : (currentLang === 'hi' ? 'पूछताछ / पंजीकरण' : 'Inquire / Register')}
        </a>
      </div>

      <!-- Pagination Next / Prev -->
      <div class="pagination-nav">
        <a href="sanskar.html?id=${prevId}" class="btn-secondary">
          ← ${prevSanskar.name[currentLang] || prevSanskar.name.hi} (${prevId})
        </a>
        <a href="index.html" class="btn-secondary" style="border: none;">
          ${trans.backToHome}
        </a>
        <a href="sanskar.html?id=${nextId}" class="btn-primary">
          ${nextSanskar.name[currentLang] || nextSanskar.name.hi} (${nextId}) →
        </a>
      </div>

    </div>
  `;
}

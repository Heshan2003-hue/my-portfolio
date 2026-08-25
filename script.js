/* ============================================================================
   RAVINDU HESHAN PORTFOLIO - PURE VANILLA JAVASCRIPT
   Dynamic Interactivity, Animations, Modals & State Management
   ============================================================================ */

function initPortfolioApp() {
  // Initialize Lucide Icons
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }

  // --------------------------------------------------------------------------
  // 1. DYNAMIC ROTATING HERO ROLES ANIMATION
  // --------------------------------------------------------------------------
  const roles = [
    "Business Information Systems Undergraduate",
    "Physical Fitness Trainer",
    "UI Designer",
    "AI Enthusiast"
  ];
  let currentRoleIdx = 0;
  const roleElement = document.getElementById('hero-role-text');

  if (roleElement) {
    setInterval(() => {
      currentRoleIdx = (currentRoleIdx + 1) % roles.length;
      roleElement.style.opacity = '0';
      roleElement.style.transform = 'translateY(6px)';
      
      setTimeout(() => {
        roleElement.textContent = roles[currentRoleIdx];
        roleElement.style.opacity = '1';
        roleElement.style.transform = 'translateY(0)';
      }, 250);
    }, 3000);
  }

  // --------------------------------------------------------------------------
  // 2. SCROLL PROGRESS BAR, BACK-TO-TOP & HEADER ACTIVE NAVIGATION
  // --------------------------------------------------------------------------
  const progressBar = document.getElementById('scroll-progress-bar');
  const backToTopBtn = document.getElementById('back-to-top');
  const siteHeader = document.getElementById('site-header');
  const navLinks = document.querySelectorAll('.nav-link');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;

    // Scroll progress bar
    if (progressBar && totalHeight > 0) {
      const progressPercent = (scrollY / totalHeight) * 100;
      progressBar.style.width = `${progressPercent}%`;
    }

    // Back-to-top visibility
    if (backToTopBtn) {
      if (scrollY > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }

    // Active Section Tracking
    const scrollPos = scrollY + 220;
    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });

        mobileNavLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });

  // Back-to-top click
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // --------------------------------------------------------------------------
  // 3. MOBILE NAVIGATION DRAWER
  // --------------------------------------------------------------------------
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');

  if (mobileMenuToggle && mobileDrawer) {
    mobileMenuToggle.addEventListener('click', () => {
      mobileDrawer.classList.toggle('open');
    });

    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
      });
    });
  }

  // --------------------------------------------------------------------------
  // 4. SKILLS SECTION CATEGORY TABS
  // --------------------------------------------------------------------------
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-content-panel');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');

      tabBtns.forEach(b => b.classList.remove('active'));
      tabPanels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetPanel = document.getElementById(`tab-${targetTab}`);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });

  // --------------------------------------------------------------------------
  // 5. PROFILE PHOTO CUSTOMIZATION (LOCALSTORAGE PERSISTENCE)
  // --------------------------------------------------------------------------
  const savedPhoto = localStorage.getItem('ravindu_profile_image');
  const heroImg = document.getElementById('hero-avatar-img');
  const aboutImg = document.getElementById('about-avatar-img');
  const heroPlaceholder = document.getElementById('hero-avatar-placeholder');
  const aboutPlaceholder = document.getElementById('about-avatar-placeholder');

  function applyProfilePhoto(url) {
    if (!url) return;

    if (heroImg && heroPlaceholder) {
      heroImg.src = url;
      heroImg.style.display = 'block';
      heroPlaceholder.style.display = 'none';
    }

    if (aboutImg && aboutPlaceholder) {
      aboutImg.src = url;
      aboutImg.style.display = 'block';
      aboutPlaceholder.style.display = 'none';
    }
  }

  if (savedPhoto) {
    applyProfilePhoto(savedPhoto);
  }

  // Photo Modal Handlers
  const photoModal = document.getElementById('modal-photo');
  const openPhotoBtns = document.querySelectorAll('.btn-open-photo-modal');
  const closePhotoBtn = document.getElementById('close-photo-modal');
  const savePhotoUrlBtn = document.getElementById('btn-save-photo-url');
  const photoUrlInput = document.getElementById('photo-url-input');
  const fileInput = document.getElementById('photo-file-input');

  openPhotoBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (photoModal) photoModal.classList.add('open');
    });
  });

  if (closePhotoBtn && photoModal) {
    closePhotoBtn.addEventListener('click', () => {
      photoModal.classList.remove('open');
    });
  }

  if (savePhotoUrlBtn && photoUrlInput) {
    savePhotoUrlBtn.addEventListener('click', () => {
      const url = photoUrlInput.value.trim();
      if (url) {
        localStorage.setItem('ravindu_profile_image', url);
        applyProfilePhoto(url);
        if (photoModal) photoModal.classList.remove('open');
      }
    });
  }

  if (fileInput) {
    fileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
          const base64 = event.target.result;
          localStorage.setItem('ravindu_profile_image', base64);
          applyProfilePhoto(base64);
          if (photoModal) photoModal.classList.remove('open');
        };
        reader.readAsDataURL(file);
      }
    });
  }

  // --------------------------------------------------------------------------
  // 6. GENERAL MODAL OPEN/CLOSE HANDLERS
  // --------------------------------------------------------------------------
  // CV Modal
  const cvModal = document.getElementById('modal-cv');
  const openCvBtns = document.querySelectorAll('.btn-open-cv-modal');
  const closeCvBtn = document.getElementById('close-cv-modal');

  openCvBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (cvModal) cvModal.classList.add('open');
    });
  });

  if (closeCvBtn && cvModal) {
    closeCvBtn.addEventListener('click', () => {
      cvModal.classList.remove('open');
    });
  }

  // Close modals on clicking overlay backdrop
  const allModals = document.querySelectorAll('.modal-backdrop');
  allModals.forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('open');
      }
    });
  });

  // Close modals on ESC key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      allModals.forEach(m => m.classList.remove('open'));
    }
  });

  // --------------------------------------------------------------------------
  // 7. SIMULATOR 1: FITNESS TRACKER WORKOUT LOGGER
  // --------------------------------------------------------------------------
  const fitnessModal = document.getElementById('modal-fitness');
  const openFitnessBtn = document.getElementById('btn-open-fitness-sim');
  const closeFitnessBtn = document.getElementById('close-fitness-modal');
  const workoutForm = document.getElementById('workout-logger-form');
  const workoutTableBody = document.getElementById('workout-table-body');
  const totalCaloriesEl = document.getElementById('total-calories-val');
  const totalMinutesEl = document.getElementById('total-minutes-val');

  let workoutsData = [
    { id: '1', type: 'Cardio Run', duration: 30, calories: 340, time: '10:15 AM' },
    { id: '2', type: 'Strength Lift', duration: 45, calories: 280, time: '01:30 PM' },
    { id: '3', type: 'Yoga & Stretch', duration: 20, calories: 90, time: 'Yesterday' }
  ];

  function renderWorkouts() {
    if (!workoutTableBody) return;
    workoutTableBody.innerHTML = '';

    let sumCals = 0;
    let sumMins = 0;

    workoutsData.forEach((w) => {
      sumCals += w.calories;
      sumMins += w.duration;

      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td><strong>${w.type}</strong></td>
        <td>${w.duration} mins</td>
        <td><span style="color: var(--gold-400); font-weight:700;">${w.calories} kcal</span></td>
        <td><span style="color: var(--slate-400); font-size: 0.75rem;">${w.time}</span></td>
        <td><button class="btn-danger-sm delete-workout-btn" data-id="${w.id}">Delete</button></td>
      `;
      workoutTableBody.appendChild(tr);
    });

    if (totalCaloriesEl) totalCaloriesEl.textContent = `${sumCals} kcal`;
    if (totalMinutesEl) totalMinutesEl.textContent = `${sumMins} mins`;

    // Rebind delete actions
    document.querySelectorAll('.delete-workout-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.target.getAttribute('data-id');
        workoutsData = workoutsData.filter(item => item.id !== id);
        renderWorkouts();
      });
    });
  }

  if (openFitnessBtn && fitnessModal) {
    openFitnessBtn.addEventListener('click', () => {
      fitnessModal.classList.add('open');
      renderWorkouts();
    });
  }

  if (closeFitnessBtn && fitnessModal) {
    closeFitnessBtn.addEventListener('click', () => {
      fitnessModal.classList.remove('open');
    });
  }

  if (workoutForm) {
    workoutForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const type = document.getElementById('workout-type-input').value;
      const duration = parseInt(document.getElementById('workout-duration-input').value) || 20;
      const calories = Math.round(duration * 8.5);

      workoutsData.unshift({
        id: Date.now().toString(),
        type,
        duration,
        calories,
        time: 'Just Now'
      });

      renderWorkouts();
      workoutForm.reset();
    });
  }

  // --------------------------------------------------------------------------
  // 8. SIMULATOR 2: AURA WELLNESS MEDITATION & AMBIENT SYNTH
  // --------------------------------------------------------------------------
  const auraModal = document.getElementById('modal-aura');
  const openAuraBtn = document.getElementById('btn-open-aura-sim');
  const closeAuraBtn = document.getElementById('close-aura-modal');

  const breatheCircle = document.getElementById('breathe-circle');
  const breathePhaseText = document.getElementById('breathe-phase-text');
  const breatheTimerText = document.getElementById('breathe-timer-text');
  const toggleBreatheBtn = document.getElementById('btn-toggle-breathe');

  const toggleSynthBtn = document.getElementById('btn-toggle-synth');
  let audioCtx = null;
  let synthOsc = null;
  let isSynthPlaying = false;

  let breatheInterval = null;
  let isBreathing = false;
  let phase = 'Inhale'; // 'Inhale' (4s), 'Hold' (2s), 'Exhale' (4s)
  let timerVal = 4;

  function updateBreatheUI() {
    if (breathePhaseText) breathePhaseText.textContent = phase;
    if (breatheTimerText) breatheTimerText.textContent = `${timerVal}s`;

    if (breatheCircle) {
      if (phase === 'Inhale') {
        breatheCircle.className = 'breathe-circle inhale';
      } else if (phase === 'Exhale') {
        breatheCircle.className = 'breathe-circle exhale';
      } else {
        breatheCircle.className = 'breathe-circle';
      }
    }
  }

  function startBreathing() {
    isBreathing = true;
    if (toggleBreatheBtn) toggleBreatheBtn.textContent = 'Pause Guided Session';

    breatheInterval = setInterval(() => {
      timerVal--;
      if (timerVal <= 0) {
        if (phase === 'Inhale') {
          phase = 'Hold';
          timerVal = 2;
        } else if (phase === 'Hold') {
          phase = 'Exhale';
          timerVal = 4;
        } else {
          phase = 'Inhale';
          timerVal = 4;
        }
      }
      updateBreatheUI();
    }, 1000);
  }

  function stopBreathing() {
    isBreathing = false;
    clearInterval(breatheInterval);
    if (toggleBreatheBtn) toggleBreatheBtn.textContent = 'Start Guided Session';
  }

  if (toggleBreatheBtn) {
    toggleBreatheBtn.addEventListener('click', () => {
      if (isBreathing) {
        stopBreathing();
      } else {
        startBreathing();
      }
    });
  }

  // Web Audio API Ambient Sound
  if (toggleSynthBtn) {
    toggleSynthBtn.addEventListener('click', () => {
      if (!isSynthPlaying) {
        try {
          audioCtx = new (window.AudioContext || window.webkitAudioContext)();
          synthOsc = audioCtx.createOscillator();
          const gainNode = audioCtx.createGain();

          synthOsc.type = 'sine';
          synthOsc.frequency.setValueAtTime(174, audioCtx.currentTime); // 174 Hz Solfeggio frequency
          gainNode.gain.setValueAtTime(0.08, audioCtx.currentTime);

          synthOsc.connect(gainNode);
          gainNode.connect(audioCtx.destination);
          synthOsc.start();

          isSynthPlaying = true;
          toggleSynthBtn.textContent = 'Stop Ambient Tone';
          toggleSynthBtn.style.background = 'rgba(225, 29, 72, 0.4)';
        } catch (e) {
          console.warn('AudioContext failed:', e);
        }
      } else {
        if (synthOsc) synthOsc.stop();
        if (audioCtx) audioCtx.close();
        isSynthPlaying = false;
        toggleSynthBtn.textContent = 'Play Ambient Tone';
        toggleSynthBtn.style.background = 'var(--gold-600)';
      }
    });
  }

  if (openAuraBtn && auraModal) {
    openAuraBtn.addEventListener('click', () => {
      auraModal.classList.add('open');
    });
  }

  if (closeAuraBtn && auraModal) {
    closeAuraBtn.addEventListener('click', () => {
      auraModal.classList.remove('open');
      stopBreathing();
      if (isSynthPlaying) {
        if (synthOsc) synthOsc.stop();
        if (audioCtx) audioCtx.close();
        isSynthPlaying = false;
        if (toggleSynthBtn) {
          toggleSynthBtn.textContent = 'Play Ambient Tone';
          toggleSynthBtn.style.background = 'var(--gold-600)';
        }
      }
    });
  }

  // --------------------------------------------------------------------------
  // 9. SIMULATOR 3: SQL RESEARCH & BUSINESS ANALYTICS
  // --------------------------------------------------------------------------
  const sqlModal = document.getElementById('modal-sql');
  const openSqlBtn = document.getElementById('btn-open-sql-sim');
  const closeSqlBtn = document.getElementById('close-sql-modal');

  const sqlQuerySelect = document.getElementById('sql-preset-select');
  const sqlSearchInput = document.getElementById('sql-search-input');
  const sqlTableHead = document.getElementById('sql-table-head');
  const sqlTableBody = document.getElementById('sql-table-body');

  const sqlDatasets = {
    STUDENTS: {
      columns: ['Student ID', 'Full Name', 'Degree Program', 'GPA', 'Status'],
      rows: [
        { id: 'USJP-892', name: 'Ravindu Heshan', degree: 'BSc Business Info Systems', gpa: '3.85', status: 'Active' },
        { id: 'USJP-893', name: 'Kamal Perera', degree: 'BSc Computer Science', gpa: '3.62', status: 'Active' },
        { id: 'USJP-894', name: 'Nimali Silva', degree: 'BSc Software Engineering', gpa: '3.91', status: 'Active' },
        { id: 'USJP-895', name: 'Dilshan Fernando', degree: 'BSc Business Info Systems', gpa: '3.50', status: 'Graduated' }
      ]
    },
    FITNESS_CLIENTS: {
      columns: ['Client ID', 'Client Name', 'Goal', 'Sessions Completed', 'Trainer'],
      rows: [
        { id: 'FIT-101', name: 'Sahan Wickrama', goal: 'Muscle Gain & Bulk', sessions: '24', trainer: 'Ravindu Heshan' },
        { id: 'FIT-102', name: 'Anura Kumara', goal: 'Weight Loss & HIIT', sessions: '18', trainer: 'Ravindu Heshan' },
        { id: 'FIT-103', name: 'Tashmi Jayasinghe', goal: 'Mobility & Strength', sessions: '30', trainer: 'Ravindu Heshan' }
      ]
    }
  };

  function renderSqlTable() {
    if (!sqlTableHead || !sqlTableBody || !sqlQuerySelect) return;

    const datasetKey = sqlQuerySelect.value;
    const dataset = sqlDatasets[datasetKey] || sqlDatasets.STUDENTS;
    const search = sqlSearchInput ? sqlSearchInput.value.toLowerCase() : '';

    // Render Headers
    sqlTableHead.innerHTML = `<tr>${dataset.columns.map(c => `<th>${c}</th>`).join('')}</tr>`;

    // Filter Rows
    const filteredRows = dataset.rows.filter(row => {
      return Object.values(row).some(val => String(val).toLowerCase().includes(search));
    });

    // Render Rows
    sqlTableBody.innerHTML = filteredRows.map(r => {
      const vals = Object.values(r);
      return `<tr>${vals.map(v => `<td>${v}</td>`).join('')}</tr>`;
    }).join('');
  }

  if (sqlQuerySelect) sqlQuerySelect.addEventListener('change', renderSqlTable);
  if (sqlSearchInput) sqlSearchInput.addEventListener('input', renderSqlTable);

  if (openSqlBtn && sqlModal) {
    openSqlBtn.addEventListener('click', () => {
      sqlModal.classList.add('open');
      renderSqlTable();
    });
  }

  if (closeSqlBtn && sqlModal) {
    closeSqlBtn.addEventListener('click', () => {
      sqlModal.classList.remove('open');
    });
  }

  // --------------------------------------------------------------------------
  // 10. CONTACT FORM CLIENT-SIDE VALIDATION & FEEDBACK
  // --------------------------------------------------------------------------
  const contactForm = document.getElementById('contact-form');
  const formStatusBanner = document.getElementById('form-status-banner');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('contact-name').value.trim();
      const email = document.getElementById('contact-email').value.trim();
      const message = document.getElementById('contact-message').value.trim();

      if (!name || !email || !message) {
        alert('Please fill out all required fields.');
        return;
      }

      const submitBtn = contactForm.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending Message...';
      }

      setTimeout(() => {
        if (formStatusBanner) {
          formStatusBanner.style.display = 'flex';
          formStatusBanner.classList.add('success');
          formStatusBanner.innerHTML = `
            <i data-lucide="check-circle-2"></i>
            <span>Thank you, ${name}! Your message has been sent successfully. I will get back to you shortly.</span>
          `;
          if (window.lucide) window.lucide.createIcons();
        }

        contactForm.reset();
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = 'Send Message';
        }
      }, 1200);
    });
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPortfolioApp);
} else {
  initPortfolioApp();
}

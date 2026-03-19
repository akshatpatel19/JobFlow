// HCI Modal Management
// HCI Principles Data Mapping
const HCI_PRINCIPLES_MAP = {
  'landing': [
    { title: 'Aesthetic and Minimalist Design', content: 'The landing page uses a clean, spacious layout with a clear visual hierarchy to direct attention to the primary calls to action.' },
    { title: 'Match Between System and Real World', content: 'Familiar terms like "Sign In", "Get Started", and clear, descriptive icons are used to immediately convey meaning.' }
  ],
  'login': [
    { title: 'Consistency and Standards', content: 'Standard login patterns (email/password) and consistent button placement help users access their accounts without guesswork.' },
    { title: 'Visibility of System Status', content: 'The login process provides immediate feedback for incorrect credentials or loading states.' }
  ],
  'signup': [
    { title: 'Error Prevention', content: 'Real-time validation on inputs helps users identify and fix errors before they even click "Submit".' },
    { title: 'Help and Documentation', content: 'Helpful hints under fields (like password requirements) guide the user through a complex multi-step process.' }
  ],
  'dashboard': [
    { title: 'Recognition Rather Than Recall', content: 'The dashboard provides a visual overview of recent activity and stats, so users don\'t have to remember their application status.' },
    { title: 'User Control and Freedom', content: 'Clear links for editing profile or logging out allow users to easily navigate or exit their current workflow.' }
  ],
  'jobs': [
    { title: 'Flexibility and Efficiency of Use', content: 'Advanced filters and search functionality allow both new and experienced users to quickly find relevant roles.' },
    { title: 'Recognition Rather Than Recall', content: 'Badges and tags (e.g. "React", "Remote") provide instant recognition of key job attributes.' }
  ],
  'profile': [
    { title: 'Consistency and Standards', content: 'Information is grouped logically (Skills, Education, Experience) in a format traditional to professional profiles.' },
    { title: 'Aesthetic and Minimalist Design', content: 'The profile avoids visual clutter, using clear headings and whitespace to make content readable for recruiters.' }
  ],
  'recruiter-dashboard': [
    { title: 'Visibility of System Status', content: 'Real-time stats on "Active Job Postings" and "Total Applications" keep recruiters informed about their hiring health.' },
    { title: 'Consistency and Standards', content: 'The dashboard maintains the same layout for both job seeker and recruiter, reducing complexity for multi-role users.' }
  ],
  'post-job': [
    { title: 'Error Prevention', content: 'Clearly marked required fields and structured forms help recruiters post high-quality job listings without missing details.' },
    { title: 'Help and Documentation', content: 'Placeholders give examples of what to type, assisting users in providing the right information.' }
  ],
  'applicant-list': [
    { title: 'Recognition Rather Than Recall', content: 'Applicant status badges (e.g. "Under Review") let recruiters quickly scan the list without remembering individual progress.' },
    { title: 'Flexibility and Efficiency of Use', content: 'Quick actions on each applicant row enable efficient screening of large candidate pools.' }
  ],
  'candidate-profile': [
    { title: 'Recognition Rather Than Recall', content: 'A visually distinct "match confidence" or skill summary helps recruiters quickly identify top candidates.' },
    { title: 'Match Between System and Real World', content: 'The layout mimics a physical resume format while adding interactive, web-native enhancements.' }
  ],
  'notifications': [
    { title: 'Visibility of System Status', content: 'Badges and timestamps clearly show which notifications are new and when they arrived.' },
    { title: 'User Control and Freedom', content: 'Users can easily mark all as read or delete notifications to manage their inbox as they see fit.' }
  ],
  'saved': [
    { title: 'User Control and Freedom', content: 'The ability to easily "unsave" a job gives users full control over their personal job stash.' },
    { title: 'Recognition Rather Than Recall', content: 'Visual cards for saved jobs allow for quick scanning of opportunities of interest.' }
  ],
  'applications': [
    { title: 'Visibility of System Status', content: 'A clear progress timeline for each application shows exactly where the user stands in the hiring process.' },
    { title: 'Recognition Rather Than Recall', content: 'Company logos and clear titles help seekers quickly identify their various application paths.' }
  ]
};

function updateHCIModalContent() {
  const pageName = document.body.getAttribute('data-page');
  const principles = HCI_PRINCIPLES_MAP[pageName] || [
    { title: 'Consistency and Standards', content: 'The interface uses familiar UI patterns, standard icons, and consistent styling to reduce the learning curve.' },
    { title: 'Aesthetic and Minimalist Design', content: 'The layout avoids clutter, focusing only on essential information to minimize cognitive load.' }
  ];

  const modalBody = document.querySelector('.modal-body');
  if (modalBody) {
    modalBody.innerHTML = principles.map(p => `
      <div class="hci-principle">
        <h4>${p.title}</h4>
        <p>${p.content}</p>
      </div>
    `).join('');
  }
}

const hciModal = document.getElementById('hci-modal');
const helpBtn = document.getElementById('help-btn');
const modalClose = document.querySelector('.modal-close');

if (helpBtn) {
  helpBtn.addEventListener('click', openHCIModal);
}

if (modalClose) {
  modalClose.addEventListener('click', closeHCIModal);
}

// Close modal when clicking outside
if (hciModal) {
  hciModal.addEventListener('click', (e) => {
    if (e.target === hciModal) {
      closeHCIModal();
    }
  });
}

function openHCIModal() {
  if (hciModal) {
    updateHCIModalContent();
    hciModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeHCIModal() {
  if (hciModal) {
    hciModal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
}

// Keyboard navigation for modal
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && hciModal && hciModal.classList.contains('active')) {
    closeHCIModal();
  }
});

// Navigation
function setActivePage(pageName) {
  const navLinks = document.querySelectorAll('.sidebar-nav a, .top-nav a');
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('data-page') === pageName) {
      link.classList.add('active');
    }
  });
}

// Form Validation
function validateForm(formId) {
  const form = document.getElementById(formId);
  if (!form) return true;

  let isValid = true;
  const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');

  inputs.forEach(input => {
    const error = document.getElementById(input.id + '-error');
    
    if (!input.value.trim()) {
      input.classList.add('error');
      if (error) {
        error.style.display = 'block';
      }
      isValid = false;
    } else {
      input.classList.remove('error');
      if (error) {
        error.style.display = 'none';
      }

      // Email validation
      if (input.type === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(input.value)) {
          input.classList.add('error');
          if (error) {
            error.textContent = 'Please enter a valid email address';
            error.style.display = 'block';
          }
          isValid = false;
        }
      }

      // Phone validation
      if (input.type === 'tel') {
        const phoneRegex = /^[\d\-\+\s\(\)]+$/;
        if (!phoneRegex.test(input.value)) {
          input.classList.add('error');
          if (error) {
            error.textContent = 'Please enter a valid phone number';
            error.style.display = 'block';
          }
          isValid = false;
        }
      }
    }
  });

  return isValid;
}

// Real-time validation
document.querySelectorAll('input, textarea, select').forEach(input => {
  input.addEventListener('blur', function() {
    if (this.hasAttribute('required') && !this.value.trim()) {
      this.classList.add('error');
      const error = document.getElementById(this.id + '-error');
      if (error) {
        error.style.display = 'block';
      }
    }
  });

  input.addEventListener('input', function() {
    if (this.value.trim()) {
      this.classList.remove('error');
      const error = document.getElementById(this.id + '-error');
      if (error) {
        error.style.display = 'none';
      }
    }
  });
});

// Dummy credentials for demo
const DUMMY_USERS = {
  'seeker@jobflow.com': { password: 'seeker123', role: 'seeker', redirect: '4-job-seeker-dashboard.html' },
  'recruiter@jobflow.com': { password: 'recruiter123', role: 'recruiter', redirect: '14-recruiter-dashboard.html' }
};

// Login form handler
const loginForm = document.getElementById('login-form');
if (loginForm) {
  loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value.trim().toLowerCase();
    const password = document.getElementById('password').value;

    const user = DUMMY_USERS[email];
    let loginError = document.getElementById('login-error');

    // Create error element if it doesn't exist
    if (!loginError) {
      loginError = document.createElement('p');
      loginError.id = 'login-error';
      loginError.style.cssText = 'color: var(--color-error, #ef4444); font-size: 0.9rem; margin: 12px 0 0 0; text-align: center; font-weight: 500;';
      loginForm.appendChild(loginError);
    }

    if (user && user.password === password) {
      loginError.style.display = 'none';
      // Redirect to the appropriate dashboard
      window.location.href = user.redirect;
    } else {
      loginError.style.display = 'block';
      loginError.textContent = '❌ Invalid email or password. Check the demo credentials below.';
    }
  });
} else {
  // Generic form submission for all other forms
  document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(e) {
      if (!validateForm(this.id)) {
        e.preventDefault();
      }
    });
  });
}

// Keyboard navigation for modal
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && hciModal && hciModal.classList.contains('active')) {
    closeHCIModal();
  }
});

// Form Swipe Logic
function initSwipeForms() {
  const swipeContainers = document.querySelectorAll('.swipe-container');
  
  swipeContainers.forEach(container => {
    const wrapper = container.querySelector('.swipe-wrapper');
    const steps = container.querySelectorAll('.swipe-step');
    const nextBtns = container.querySelectorAll('.btn-next');
    const prevBtns = container.querySelectorAll('.btn-prev');
    
    // Find progress items within the same form or closest parent container
    const form = container.closest('form') || container.parentElement;
    const progressItems = form.querySelectorAll('.swipe-progress-item');
    
    if (!wrapper || steps.length === 0) return;

    let currentStep = 0;
    const totalSteps = steps.length;

    function goToStep(index) {
      if (index < 0 || index >= totalSteps) return;
      
      // Update wrapper transform
      wrapper.style.transform = `translateX(-${index * 100}%)`;
      
      // Update active classes for steps
      steps.forEach((step, i) => {
        if (i === index) {
          step.classList.add('active');
        } else {
          step.classList.remove('active');
        }
      });
      
      // Dynamically resize wrapper to fit current step
      const activeStep = steps[index];
      if (activeStep) {
        // Calculate total height including margins
        const style = window.getComputedStyle(activeStep);
        const marginTop = parseInt(style.marginTop, 10) || 0;
        const marginBottom = parseInt(style.marginBottom, 10) || 0;
        wrapper.style.height = (activeStep.offsetHeight + marginTop + marginBottom) + 'px';
      }
      
      // Update progress indicators if they exist
      if (progressItems.length > 0) {
        progressItems.forEach((item, i) => {
          if (i <= index) {
            item.classList.add('active');
          } else {
            item.classList.remove('active');
          }
        });
      }
      
      currentStep = index;
    }

    // Adjust height on window resize
    window.addEventListener('resize', () => {
      goToStep(currentStep);
    });

    // Button event listeners
    nextBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Optional: Trigger validation on the current step before proceeding
        const currentStepEl = steps[currentStep];
        const inputs = currentStepEl.querySelectorAll('input[required], textarea[required], select[required]');
        let isValid = true;
        inputs.forEach(input => {
          if (!input.value.trim()) {
            input.classList.add('error');
            isValid = false;
          } else {
            input.classList.remove('error');
          }
        });
        
        if (isValid) {
          goToStep(currentStep + 1);
        }
      });
    });

    prevBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        goToStep(currentStep - 1);
      });
    });

    // Touch event listeners for swiping
    let startX = 0;
    let endX = 0;
    const threshold = 50; // minimum distance to trigger swipe

    container.addEventListener('touchstart', (e) => {
      startX = e.changedTouches[0].screenX;
    }, {passive: true});

    container.addEventListener('touchend', (e) => {
      endX = e.changedTouches[0].screenX;
      handleSwipe();
    }, {passive: true});

    function handleSwipe() {
      if (startX - endX > threshold) {
        // Swiped left, go next
        // Assuming validation is fine or handled differently, but here we enforce button clicks for validation
        // To keep swipe seamless we can trigger Next logic if we want, or skip validation on swipe
        goToStep(currentStep + 1);
      } else if (endX - startX > threshold) {
        // Swiped right, go prev
        goToStep(currentStep - 1);
      }
    }

    // Initialize first step
    goToStep(0);
  });
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
  // Auto-set active navigation based on current page
  const currentPage = document.body.getAttribute('data-page');
  if (currentPage) {
    setActivePage(currentPage);
  }
  
  // Initialize swipe forms
  initSwipeForms();
});

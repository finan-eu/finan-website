// Mobile menu and dropdown functionality
function initializeNavbar() {
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuButton && mobileMenu) {
    // Remove any existing listeners
    const newMobileMenuButton = mobileMenuButton.cloneNode(true);
    mobileMenuButton.parentNode.replaceChild(newMobileMenuButton, mobileMenuButton);

    newMobileMenuButton.addEventListener('click', function () {
      const isExpanded =
        newMobileMenuButton.getAttribute('aria-expanded') === 'true';

      newMobileMenuButton.setAttribute(
        'aria-expanded',
        (!isExpanded).toString()
      );
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Desktop Chapters dropdown functionality
  const chaptersButton = document.getElementById('chapters-button');
  const chaptersMenu = document.getElementById('chapters-menu');

  if (chaptersButton && chaptersMenu) {
    // Remove any existing listeners
    const newChaptersButton = chaptersButton.cloneNode(true);
    chaptersButton.parentNode.replaceChild(newChaptersButton, chaptersButton);

    newChaptersButton.addEventListener('click', function (e) {
      e.stopPropagation();
      const isExpanded = newChaptersButton.getAttribute('aria-expanded') === 'true';

      newChaptersButton.setAttribute('aria-expanded', (!isExpanded).toString());

      if (isExpanded) {
        chaptersMenu.classList.add('opacity-0', 'invisible', 'scale-95');
        chaptersMenu.classList.remove('opacity-100', 'visible', 'scale-100');
      } else {
        chaptersMenu.classList.remove('opacity-0', 'invisible', 'scale-95');
        chaptersMenu.classList.add('opacity-100', 'visible', 'scale-100');
      }
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function () {
      newChaptersButton.setAttribute('aria-expanded', 'false');
      chaptersMenu.classList.add('opacity-0', 'invisible', 'scale-95');
      chaptersMenu.classList.remove('opacity-100', 'visible', 'scale-100');
    });
  }

  // Mobile Chapters dropdown functionality
  const mobileChaptersButton = document.getElementById('mobile-chapters-button');
  const mobileChaptersMenu = document.getElementById('mobile-chapters-menu');
  const mobileChaptersIcon = document.getElementById('mobile-chapters-icon');

  if (mobileChaptersButton && mobileChaptersMenu && mobileChaptersIcon) {
    // Remove any existing listeners
    const newMobileChaptersButton = mobileChaptersButton.cloneNode(true);
    mobileChaptersButton.parentNode.replaceChild(newMobileChaptersButton, mobileChaptersButton);

    newMobileChaptersButton.addEventListener('click', function () {
      const isExpanded = newMobileChaptersButton.getAttribute('aria-expanded') === 'true';

      newMobileChaptersButton.setAttribute('aria-expanded', (!isExpanded).toString());
      mobileChaptersMenu.classList.toggle('hidden');

      // Rotate the chevron icon
      if (isExpanded) {
        mobileChaptersIcon.classList.remove('rotate-180');
      } else {
        mobileChaptersIcon.classList.add('rotate-180');
      }
    });
  }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', initializeNavbar);

// Re-initialize after view transitions
document.addEventListener('astro:after-swap', initializeNavbar);
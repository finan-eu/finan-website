// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function () {
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', function () {
      const isExpanded =
        mobileMenuButton.getAttribute('aria-expanded') === 'true';

      mobileMenuButton.setAttribute('aria-expanded', (!isExpanded).toString());
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Desktop Chapters dropdown functionality
  const chaptersButton = document.getElementById('chapters-button');
  const chaptersMenu = document.getElementById('chapters-menu');

  if (chaptersButton && chaptersMenu) {
    chaptersButton.addEventListener('click', function (e) {
      e.stopPropagation();
      const isExpanded =
        chaptersButton.getAttribute('aria-expanded') === 'true';

      chaptersButton.setAttribute('aria-expanded', (!isExpanded).toString());

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
      chaptersButton.setAttribute('aria-expanded', 'false');
      chaptersMenu.classList.add('opacity-0', 'invisible', 'scale-95');
      chaptersMenu.classList.remove('opacity-100', 'visible', 'scale-100');
    });
  }

  // Mobile Chapters dropdown functionality
  const mobileChaptersButton = document.getElementById(
    'mobile-chapters-button'
  );
  const mobileChaptersMenu = document.getElementById('mobile-chapters-menu');
  const mobileChaptersIcon = document.getElementById('mobile-chapters-icon');

  if (mobileChaptersButton && mobileChaptersMenu && mobileChaptersIcon) {
    mobileChaptersButton.addEventListener('click', function () {
      const isExpanded =
        mobileChaptersButton.getAttribute('aria-expanded') === 'true';

      mobileChaptersButton.setAttribute(
        'aria-expanded',
        (!isExpanded).toString()
      );
      mobileChaptersMenu.classList.toggle('hidden');

      // Rotate the chevron icon
      if (isExpanded) {
        mobileChaptersIcon.classList.remove('rotate-180');
      } else {
        mobileChaptersIcon.classList.add('rotate-180');
      }
    });
  }
});

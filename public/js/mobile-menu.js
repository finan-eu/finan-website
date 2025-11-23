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

  // Desktop Representation dropdown functionality
  const representationButton = document.getElementById('representation-button');
  const representationMenu = document.getElementById('representation-menu');

  if (representationButton && representationMenu) {
    representationButton.addEventListener('click', function (e) {
      e.stopPropagation();
      const isExpanded =
        representationButton.getAttribute('aria-expanded') === 'true';

      representationButton.setAttribute('aria-expanded', (!isExpanded).toString());

      if (isExpanded) {
        representationMenu.classList.add('opacity-0', 'invisible', 'scale-95');
        representationMenu.classList.remove('opacity-100', 'visible', 'scale-100');
      } else {
        representationMenu.classList.remove('opacity-0', 'invisible', 'scale-95');
        representationMenu.classList.add('opacity-100', 'visible', 'scale-100');
      }
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function () {
      representationButton.setAttribute('aria-expanded', 'false');
      representationMenu.classList.add('opacity-0', 'invisible', 'scale-95');
      representationMenu.classList.remove('opacity-100', 'visible', 'scale-100');
    });
  }

  // Mobile Representation dropdown functionality
  const mobileRepresentationButton = document.getElementById(
    'mobile-representation-button'
  );
  const mobileRepresentationMenu = document.getElementById('mobile-representation-menu');
  const mobileRepresentationIcon = document.getElementById('mobile-representation-icon');

  if (mobileRepresentationButton && mobileRepresentationMenu && mobileRepresentationIcon) {
    mobileRepresentationButton.addEventListener('click', function () {
      const isExpanded =
        mobileRepresentationButton.getAttribute('aria-expanded') === 'true';

      mobileRepresentationButton.setAttribute(
        'aria-expanded',
        (!isExpanded).toString()
      );
      mobileRepresentationMenu.classList.toggle('hidden');

      // Rotate the chevron icon
      if (isExpanded) {
        mobileRepresentationIcon.classList.remove('rotate-180');
      } else {
        mobileRepresentationIcon.classList.add('rotate-180');
      }
    });
  }
});

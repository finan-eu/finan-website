// Mobile menu and dropdown functionality
function initializeNavbar() {
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuButton && mobileMenu) {
    // Remove any existing listeners
    const newMobileMenuButton = mobileMenuButton.cloneNode(true);
    mobileMenuButton.parentNode.replaceChild(
      newMobileMenuButton,
      mobileMenuButton
    );

    newMobileMenuButton.addEventListener('click', function () {
      const isExpanded =
        newMobileMenuButton.getAttribute('aria-expanded') === 'true';
      const hamburgerIcon = document.getElementById('hamburger-icon');
      const closeIcon = document.getElementById('close-icon');

      newMobileMenuButton.setAttribute(
        'aria-expanded',
        (!isExpanded).toString()
      );
      mobileMenu.classList.toggle('hidden');

      // Toggle between hamburger and X icon
      if (hamburgerIcon && closeIcon) {
        if (isExpanded) {
          hamburgerIcon.classList.remove('hidden');
          hamburgerIcon.classList.add('block');
          closeIcon.classList.remove('block');
          closeIcon.classList.add('hidden');
        } else {
          hamburgerIcon.classList.remove('block');
          hamburgerIcon.classList.add('hidden');
          closeIcon.classList.remove('hidden');
          closeIcon.classList.add('block');
        }
      }
    });
  }

  // Desktop Representation dropdown functionality
  const representationButton = document.getElementById('representation-button');
  const representationMenu = document.getElementById('representation-menu');

  if (representationButton && representationMenu) {
    // Remove any existing listeners
    const newRepresentationButton = representationButton.cloneNode(true);
    representationButton.parentNode.replaceChild(
      newRepresentationButton,
      representationButton
    );

    newRepresentationButton.addEventListener('click', function (e) {
      e.stopPropagation();
      const isExpanded =
        newRepresentationButton.getAttribute('aria-expanded') === 'true';

      newRepresentationButton.setAttribute(
        'aria-expanded',
        (!isExpanded).toString()
      );

      if (isExpanded) {
        representationMenu.classList.add('opacity-0', 'invisible', 'scale-95');
        representationMenu.classList.remove(
          'opacity-100',
          'visible',
          'scale-100'
        );
      } else {
        representationMenu.classList.remove(
          'opacity-0',
          'invisible',
          'scale-95'
        );
        representationMenu.classList.add('opacity-100', 'visible', 'scale-100');
      }
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function () {
      newRepresentationButton.setAttribute('aria-expanded', 'false');
      representationMenu.classList.add('opacity-0', 'invisible', 'scale-95');
      representationMenu.classList.remove(
        'opacity-100',
        'visible',
        'scale-100'
      );
    });
  }

  // Mobile Representation dropdown functionality
  const mobileRepresentationButton = document.getElementById(
    'mobile-representation-button'
  );
  const mobileRepresentationMenu = document.getElementById(
    'mobile-representation-menu'
  );

  if (mobileRepresentationButton && mobileRepresentationMenu) {
    // Remove any existing listeners
    const newMobileRepresentationButton =
      mobileRepresentationButton.cloneNode(true);
    mobileRepresentationButton.parentNode.replaceChild(
      newMobileRepresentationButton,
      mobileRepresentationButton
    );

    newMobileRepresentationButton.addEventListener('click', function () {
      const isExpanded =
        newMobileRepresentationButton.getAttribute('aria-expanded') === 'true';
      const mobileRepresentationIcon = document.getElementById(
        'mobile-representation-icon'
      );

      newMobileRepresentationButton.setAttribute(
        'aria-expanded',
        (!isExpanded).toString()
      );
      mobileRepresentationMenu.classList.toggle('hidden');

      // Rotate the chevron icon
      if (mobileRepresentationIcon) {
        if (isExpanded) {
          mobileRepresentationIcon.classList.remove('rotate-180');
        } else {
          mobileRepresentationIcon.classList.add('rotate-180');
        }
      }
    });
  }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', initializeNavbar);

// Re-initialize after view transitions
document.addEventListener('astro:after-swap', initializeNavbar);

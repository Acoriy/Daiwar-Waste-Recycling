
// Utility function to check if an element is in viewport
export const isInViewport = (element: Element): boolean => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
    rect.bottom >= 0
  );
};

// Utility function to add reveal animations to elements
export const initRevealAnimations = (): void => {
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-up');

  const revealOnScroll = () => {
    for (let i = 0; i < revealElements.length; i++) {
      if (isInViewport(revealElements[i])) {
        revealElements[i].classList.add('active');
      }
    }
  };

  // Initial check
  setTimeout(revealOnScroll, 100);

  // Add scroll event listener
  window.addEventListener('scroll', revealOnScroll);
};

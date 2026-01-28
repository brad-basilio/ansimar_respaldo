/**
 * Función easing para animación suave
 */
const easeInOutCubic = (t) => {
  return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
};

/**
 * Realiza un scroll suave con animación personalizada
 * @param {number} targetPosition - Posición Y objetivo en píxeles
 * @param {number} duration - Duración de la animación en milisegundos (default: 1200)
 */
const animateScroll = (targetPosition, duration = 1200) => {
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime = null;

  const animation = (currentTime) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    
    const ease = easeInOutCubic(progress);
    window.scrollTo(0, startPosition + distance * ease);
    
    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  };

  requestAnimationFrame(animation);
};

/**
 * Realiza un scroll suave hacia un elemento específico
 * @param {string} elementId - ID del elemento al que hacer scroll (sin #)
 * @param {number} offset - Offset en píxeles para ajustar la posición final (default: 0)
 * @param {number} duration - Duración de la animación en milisegundos (default: 1200)
 */
export const scrollToElement = (elementId, offset = 0, duration = 1200) => {
  const element = document.getElementById(elementId);
  
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    
    animateScroll(offsetPosition, duration);
  }
};

/**
 * Realiza un scroll suave hacia una posición específica
 * @param {number} position - Posición Y en píxeles
 * @param {number} duration - Duración de la animación en milisegundos (default: 1200)
 */
export const scrollToPosition = (position, duration = 1200) => {
  animateScroll(position, duration);
};

/**
 * Realiza un scroll suave hacia arriba (top)
 * @param {number} duration - Duración de la animación en milisegundos (default: 1200)
 */
export const scrollToTop = (duration = 1200) => {
  animateScroll(0, duration);
};

/**
 * Maneja el click en enlaces con href que comienzan con # para hacer scroll suave
 * @param {Event} event - Evento del click
 * @param {number} offset - Offset en píxeles para ajustar la posición final (default: 80)
 * @param {number} duration - Duración de la animación en milisegundos (default: 1200)
 */
export const handleSmoothScroll = (event, offset = 80, duration = 1200) => {
  const href = event.currentTarget.getAttribute('href');
  
  if (href && href.startsWith('#')) {
    event.preventDefault();
    const elementId = href.substring(1);
    scrollToElement(elementId, offset, duration);
  }
};

export default {
  scrollToElement,
  scrollToPosition,
  scrollToTop,
  handleSmoothScroll
};

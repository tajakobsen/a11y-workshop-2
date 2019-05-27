function initAccordion() {
  const accordionEl = document.getElementById("guest-accordion");
  const accordionTriggerEls = accordionEl.querySelectorAll(".accordion-trigger");
  const accordionPanelEls = accordionEl.querySelectorAll(".accordion-panel");

  accordionTriggerEls.forEach(el => {
    el.addEventListener('click', (e) => {
      const panelEl = document.getElementById(el.dataset.body);
      accordionPanelEls.forEach(hide);
      show(panelEl);
    });
  });
}

/**
 * Removes the hidden class from an element
 *
 * @param {HTMLElement} element
 */
function show(element) {
  element.classList.remove('hidden');
}

/**
 * Add the hidden class to an element
 *
 * @param {HTMLElement} element
 */
function hide(element) {
  element.classList.add('hidden');
}

initAccordion();
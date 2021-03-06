const CLASS_FIELD_ERROR = 'field-error';

const REGEX_EMAIL = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const REGEX_DATE = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;

function init() {
  initBookingForm();
}

function initBookingForm() {
  const bookNowForm = document.getElementById('book-now-form');

  bookNowForm.addEventListener('submit', (e) => {
    e.preventDefault();
    pretendToSendBookingViaAjax(new FormData(e.target))
      .then(showBookingSuccess)
      .catch(showBookingErrors);
  });
}

/**
 * Pretends to send a booking via a (fake) fetch()
 *
 * @param {FormData} formData
 * @return {Promise}
 */
function pretendToSendBookingViaAjax(formData) {
  const errors = {};
  const name = formData.get('full-name');
  const email = formData.get('email');
  const date = formData.get('date-of-booking');

  if (!name || name.length < 2) {
    errors['full-name'] = ["You must enter a name for the reservation"];
  }
  if (!email || !REGEX_EMAIL.test(email)) {
    errors['email'] = ["You must enter a valid email"];
  }
  if (!date || !REGEX_DATE.test(date)) {
    errors['date-of-booking'] = ["You must enter a valid date for your reservation"];
  }

  const hasErrors = Object.keys(errors).length > 0;

  return new Promise(function(resolve, reject) {
    if (hasErrors) {
      reject(errors);
    } else {
      resolve({
        message: 'Thank you for your reservation.'
      });
    }
  });
}

/**
 * Shows the success message when submitting a booking
 *
 * @param {Object} success
 * @param {String} success.message
 */
function showBookingSuccess(success) {
  const alert = document.getElementById("book-now-form-alert");

  removeBookingFormErrors();

  alert.innerText = success.message;
  show(alert);

}

/**
 * Displays errors in the booking form
 *
 * @param {String[]} errors
 */
function showBookingErrors(errors) {
  removeBookingFormErrors();

  const errorFieldNames = Object.keys(errors);

  errorFieldNames
    .forEach((fieldName) => {
      const fieldEl = getElementByName(fieldName);
      const messageEl = getErrorMessageElementForByName(fieldName);

      fieldEl.classList.add(CLASS_FIELD_ERROR);
      messageEl.innerText = errors[fieldName].join(' ');
    });
}

/**
 * Removes the error styles from all the form inputs,
 * and removes any error messages shown
 */
function removeBookingFormErrors() {
  ['full-name', 'email', 'date-of-booking']
    .forEach((fieldName) => {
      getElementByName(fieldName).classList.remove(CLASS_FIELD_ERROR);
      getErrorMessageElementForByName(fieldName).innerText = "";
    });
}

/**
 * Returns an element by the name
 *
 * @param {String} fieldName
 * @return {Element}
 */
function getElementByName(fieldName) {
  return document.querySelector(`[name="${fieldName}"]`);
}


/**
 * Returns the error message element of a field, by field name
 *
 * @param {String} fieldName
 * @return {HTMLElement}
 */
function getErrorMessageElementForByName(fieldName) {
  const messageId = getElementByName(fieldName).dataset.errormessage;
  return document.getElementById(messageId);
}

/**
 * Removes the hidden class from an element
 *
 * @param {HTMLElement} element
 */
function show(element) {
  element.classList.remove('hidden');
}

init();
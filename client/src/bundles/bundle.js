/* global window */
window.jQuery.entwine('ss', ($) => {
  $(document).on('click', () => { window.setTimeout(() => $('.keepclassy').addClass('veryclassy'), 1500); console.log('Shame.'); });
  $('body').append($('<div/>').addClass('keepclassy').append('<span>Happy April Fools!</span>'));
});

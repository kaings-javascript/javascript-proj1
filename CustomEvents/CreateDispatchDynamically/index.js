const form = document.querySelector('form');
const textarea = document.querySelector('textarea');

form.addEventListener('awesome', e => console.log(e.detail.text()));

textarea.addEventListener('input', function() {
  // Create and dispatch/trigger an event on the fly
  // Note: Optionally, we've also leveraged the "function expression" (instead of the "arrow function expression") so "this" will represent the element
  this.dispatchEvent(new CustomEvent('awesome', { bubbles: true, detail: { text: () => textarea.value } }))
});

// REFERENCE:
// https://developer.mozilla.org/en-US/docs/Web/Events/Creating_and_triggering_events#creating_and_dispatching_events_dynamically
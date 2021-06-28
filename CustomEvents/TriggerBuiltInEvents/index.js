function preventDef(event) {
  event.preventDefault();
}

function addHandler() {
  document.getElementById("checkbox").addEventListener("click", 
    preventDef, false);
}

function removeHandler() {
  document.getElementById("checkbox").removeEventListener("click",
    preventDef, false);
}

function simulateClick() {
  const event = new MouseEvent('click', {
    view: window,
    bubbles: true,
    cancelable: true
  });
  const cb = document.getElementById('checkbox');
  const cancelled = !cb.dispatchEvent(event);

  console.log('cancelled..... ', cancelled);
  console.log('cb_element..... ', cb.dispatchEvent(event));

  if (cancelled) {
    // A handler called preventDefault.
    alert("cancelled");
  } else {
    // None of the handlers called preventDefault.
    alert("not cancelled");
  }
}

// REFERENCE:
// https://developer.mozilla.org/en-US/docs/Web/Events/Creating_and_triggering_events#triggering_built-in_events
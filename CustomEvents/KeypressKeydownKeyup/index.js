window.addEventListener('load', ()=>{
  document.querySelector('button').addEventListener('click', ()=>{
      document.dispatchEvent(new KeyboardEvent('keypress', {'key': 'H'}));
      document.dispatchEvent(new KeyboardEvent('keypress', {'key': 'e'}));
      document.dispatchEvent(new KeyboardEvent('keypress', {'key': 'y'}));
      document.dispatchEvent(new KeyboardEvent('keypress', {'key': ' '}));
      document.dispatchEvent(new KeyboardEvent('keypress', {'key': 'G'}));
      document.dispatchEvent(new KeyboardEvent('keypress', {'key': 'e'}));
      document.dispatchEvent(new KeyboardEvent('keypress', {'key': 'e'}));
      document.dispatchEvent(new KeyboardEvent('keypress', {'key': 'k'}));
  });
});
document.addEventListener('keypress', (event)=>{
  document.querySelector('h1').innerHTML += event.key;
});
// REFERENCE:
// https://www.geeksforgeeks.org/trigger-a-keypress-keydown-keyup-event-in-js-jquery/
/* 
//Special Keys - and their codes
            var special_keys = {
                'esc':27,
                'escape':27,
                'tab':9,
                'space':32,
                'return':13,
                'enter':13,
                'backspace':8,
 
                'scrolllock':145,
                'scroll_lock':145,
                'scroll':145,
                'capslock':20,
                'caps_lock':20,
                'caps':20,
                'numlock':144,
                'num_lock':144,
                'num':144,
 
                'pause':19,
                'break':19,
 
                'insert':45,
                'home':36,
                'delete':46,
                'end':35,
 
                'pageup':33,
                'page_up':33,
                'pu':33,
 
                'pagedown':34,
                'page_down':34,
                'pd':34,
 
                'left':37,
                'up':38,
                'right':39,
                'down':40,
 
                'f1':112,
                'f2':113,
                'f3':114,
                'f4':115,
                'f5':116,
                'f6':117,
                'f7':118,
                'f8':119,
                'f9':120,
                'f10':121,
                'f11':122,
                'f12':123
            }
*/

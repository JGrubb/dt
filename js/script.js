/* Author:
  Grubb
*/

$('#the-form label').hideLabels();

$('#the-form').submit(function(e) {
  if (!$('input.required').val().length) {
    $('#messages').html('<p>Please fill out <em>the whole</em> form.</p>');
    e.preventDefault();
  }
});
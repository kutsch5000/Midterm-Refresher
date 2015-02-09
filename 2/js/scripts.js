// Three *new* message when page loads
// Show Date
// Show Number of Messages in Inbox
// Add JavaScript to close button
var msg1='Better your life with more stuff!';
var msg2='Read. Read. Read. Read. Read.';
$('.header').text(msg2);

var total= 100 + 4561;

$('.content p').text('Unread Messages: ' + total);

$('.message .close').on('click', function() {
  $(this).closest('.message').fadeOut('fast');
});
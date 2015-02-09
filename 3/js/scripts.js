// Remove explitives from comments
// REF: http://api.jquery.com/contains-selector
// REF: http://api.jquery.com/addclass/
// Extend into an array of explitives

console.log($('.text:contains(bad[2])').length);

$('.text:contains("fucking")').addClass('bad');

var bad=['fucking', 'dude', 'research'];
for (var i=0; i<bad.length; i++){

	console.log(bad[i]);
}
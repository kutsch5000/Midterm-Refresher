// Check for User's Birthday
// REF: http://codepen.io/manikoth/pen/BymXwR?editors=101
// REF: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
var date= new Date();
console.log(date);

var birthday = {
	month: date.getMonth(),
	day: date.getUTCDate(),
	check: date.getMonth() + '/' + date.getUTCDate()
};

console.log(birthday.month);
console.log(birthday.day);
console.log(birthday.check);

if (birthday.check == '2/9'){
		alert('HAPPY BIRTHDAY!')
		$('.date').addClass('.bday');
};
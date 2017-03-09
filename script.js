//Test that Javascript and jQuery are working.
function test( ) {
	console.log("Hello Me!");
}
test();
$(document).ready(function(){
	$("span").click(function(){
		$(this).html("jQuery is working.");
	});

//jQuery************************************//



//Javascript********************************//
var string = prompt('Enter 5 numbers separated by a comma.')
console.log(string);
var res = string.split(",");
console.log(res);

var integer = [];

for (var i = 0; i < res.length; i++) {
	var int = parseInt(res[i].valueOf());
	console.log(int);
	integer.push(int);
}
console.log(integer);

function max(integer) {
    var m = -Infinity, i = 0, n = integer.length;
    for (; i != n; ++i) {
        if (integer[i] > m) {
            m = integer[i];
        }
    }
    return m;
}
//Math.max.apply(null, integer)
console.log(max(integer) + " Is the largest number in the set.");

function avg(integer) {
var total = 0;
	for(var i = 0; i < integer.length; i++) {
    total += integer[i];
	}
	var avg = total / integer.length;
	return avg;
}
console.log(avg(integer) + " Is the average of the set.")
});
//Test that Javascript and jQuery are working.
function test( ) {
	console.log("Hello Me!");
}
test();

//jQuery************************************//



//Javascript********************************//
$(document).ready(function() {
		$('input:radio[name=aOM]').change(function () {
				function convertToInteger() {
		var integer = [];
		var input = document.getElementById("input").value;
		console.log(input + " fart");
		var res = input.split(",");
		console.log(res + " phlbbbtt");

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
		}; console.log(max(integer) + " Is the Max.");
//Math.max.apply(null, integer)

		function avg(integer) {
		var total = 0;
			for(var i = 0; i < integer.length; i++) {
    		total += integer[i];
			}
			var avg = total / integer.length;
			return avg;
		};console.log(avg(integer) + " Is the Avg.");
	};

				if (this.value == 'average') {
					$("#output").innerHTML(avg(integer));
				}
				else if (this.value == 'max') {
					$("#output").innerHTML(max(integer));
				}
		})
	});
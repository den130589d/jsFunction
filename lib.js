
		
		function sum(a,b) {
			if(isNumber(a) && isNumber(b)){
				return a+b;
			} else {
				return 'NaN'
			}
			
		}

		function isNumber(n) {
			n = +n;
			if (isNaN(n)) {
				return false;
			}
			return true;
		}
		function toNumber(n) {
			return +n;
		}

		function getData() {
			return prompt();
		}

		function showData(data) {
			console.log(data);
		}

		function showSum() {
			var n1 = getData('Enter num1');
			var n2 = getData('Enter num2');
			var result = sum(n1, n2);
			showData(result);
		}
	
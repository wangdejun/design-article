function outer(){
	var x = 11;
	function inner(){
		x = x + 1;
	}
	return inner();
}

let test = outer();
console.log(test);
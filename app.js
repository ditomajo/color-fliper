const colors = [ 'green', 'red', 'rgba(133,122,200)', '#f15025' ];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function() {
	// get ramdomNumber between 0 - 3
	const ramdomNumber = getRamdomNumber();
	// console.log(ramdomNumber);

	document.body.style.backgroundColor = colors[ramdomNumber];
	color.textContent = colors[ramdomNumber];
});

function getRamdomNumber() {
	return Math.floor(Math.random() * colors.length);
}
 


let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.addEventListener("click", function () {
  navbar.classList.toggle("active");
});

window.onscroll = () => {
  navbar.classList.remove("active");
};

// script.js 
function changeReadMore() { 
	const mycontent = 
		document.getElementById('mybox1id'); 
	const mybutton = 
		document.getElementById('mybuttonid'); 
	const span1 = document.getElementById("span1") 

	if (mycontent.style.display === 'none'
		|| mycontent.style.display === '') { 
		mycontent.style.display = 'inline'; 
		span1.style.display = "none"; 
		mybutton.textContent = 'Package Included'; 
	} else { 
		mycontent.style.display = 'none'; 
		mybutton.textContent = 'Package Included'; 
		span1.style.display = "inline"; 
	} 
}



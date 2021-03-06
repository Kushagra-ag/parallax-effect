
//Test for passive option compatibility
let supportsPassive = false;

let opts = Object.defineProperty({}, 'passive', {
  	get: function() {
    supportsPassive = true;
	}
});
window.addEventListener("testPassive", null, opts);
window.removeEventListener("testPassive", null, opts);


window.onload
{
	const sec1 = document.querySelector('#grp1>div.text');
	const sec2 = document.querySelector('#grp2>div.text');
	const sec3 = document.querySelector('#grp4>div.text');
	const sec4 = document.querySelector('#grp6>div.text');
	const navbar = document.querySelector('nav');
	const labels = document.querySelectorAll('.label');
	let p = document.querySelector('.parallax');


	let w_x = window.innerWidth;
	let w_y = window.innerHeight;

	//debouncing scroll function
	let debounce;
	let e1 = document.querySelector('nav>div:nth-child(1)');
	let e2 = document.querySelector('nav>div:nth-child(2)');
	let e3 = document.querySelector('nav>div:nth-child(3)');
	let e4 = document.querySelector('nav>div:nth-child(4)');

	p.addEventListener("scroll", function() {
		
		//console.log(debounce);
		debounce = setTimeout(function(){
		clearTimeout(debounce);
		
		let coord1 = sec1.getBoundingClientRect();
		let coord2 = sec2.getBoundingClientRect();
		let coord3 = sec3.getBoundingClientRect();
		let coord4 = sec4.getBoundingClientRect();

		

		if(coord1.top>(-0.5*w_x) && w_x - coord1.top > 0.4*w_x)
		{	
			b(e1);
			document.querySelector('#grp3>picture>source:nth-child(1)').setAttribute('srcset','./images/bg3.webp');
			document.querySelector('#grp3>picture>source:nth-child(2)').setAttribute('srcset','./images/bg3.png');
			document.querySelector('#grp3>picture>img').setAttribute('src','./images/bg3.png');
		}
		else if(coord2.top>(-0.4*w_x) && w_x - coord2.top > 0.8*w_x)
		{
			b(e2);
			document.querySelector('#grp5>picture>source:nth-child(1)').setAttribute('srcset','./images/bg5.webp');
			document.querySelector('#grp5>picture>source:nth-child(2)').setAttribute('srcset','./images/bg5.png');
			document.querySelector('#grp5>picture>img').setAttribute('src','./images/bg5.png');
		}


		else if(coord3.top>(-0.5*w_x) && w_x - coord3.top > 0.5*w_x)
		{
			b(e3);
			document.querySelector('#grp7>picture>source:nth-child(1)').setAttribute('srcset','./images/bg7.webp');
			document.querySelector('#grp7>picture>source:nth-child(2)').setAttribute('srcset','./images/bg7.png');
			document.querySelector('#grp7>picture>img').setAttribute('src','./images/bg7.png');
		}

		
		else if(coord4.top>(-0.5*w_x) && w_x - coord4.top > 0.5*w_x)

			b(e4);
		
	}, 300);
	}, supportsPassive ? {passive:true} : false);


	//click event on navbar
	navbar.addEventListener("click", function(e){
		if(e.target !== e.currentTarget)
		{	
			//b(e.target);

			if(e.target === e1)
			{
				let scroll = sec1;
				scroll.scrollIntoView({behavior: "smooth", block: "end"});
			}

			else if(e.target === e2)
			{
				let scroll = labels[0];
				scroll.scrollIntoView({behavior: "smooth", block: "start"});
			}

			else if(e.target === e3)
			{
				let scroll = labels[1];
				scroll.scrollIntoView({behavior: "smooth", block: "start"});
			}

			else if(e.target === e4)
			{
				let scroll = labels[2];
				scroll.scrollIntoView({behavior: "smooth", block: "start"});
			}

		}
		
	});

	function b(target)
	{
		e1.classList.remove("active_nav");

		e2.classList.remove("active_nav");

		e3.classList.remove("active_nav");

		e4.classList.remove("active_nav");

		target.classList.add("active_nav");
	}
}

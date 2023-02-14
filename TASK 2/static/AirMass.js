const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('nav a').forEach(link => {    
    if(link.href.includes(`${activePage}`)){
      link.classList.add('active');
    }
  });
  

var d = new Date();
	var n = d.getHours();
	if (n > 17 || n < 6)
	  // If time is after 19PM or before 6AM, apply night theme to ‘body’
	  document.body.className = "night";

    
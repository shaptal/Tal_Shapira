var fetchWeather = "/weather"

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');



const weatherCondition = document.querySelector('.weatherCondition')
const tempElement = document.querySelector('.temprature span')
const locationElement = document.querySelector('.place')
const dateElement = document.querySelector('.date')
const warningElement = document.querySelector('.warning')

const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']

dateElement.textContent=new Date().getDate() +", " + monthNames[new Date().getUTCMonth()] +" "+ new Date().getUTCFullYear()+"  "+ new Date().getUTCHours()+":"+new Date().getUTCMinutes()+" UTC";

weatherForm.addEventListener('submit', (event) =>{
    event.preventDefault();
    console.log(search.value);
    locationElement.textContent= "Loading...";
    tempElement.textContent="";
    weatherCondition.textContent="";
    warningElement.textContent="";
    const locationApi= fetchWeather + "?address=" + search.value;
    fetch(locationApi).then(response => {
        response.json().then(data => {
            if (data.error){
                locationElement.textContent= data.error;
                tempElement.textContent="";
                weatherCondition.textContent="";
                warningElement.textContent="";
            }else{
                let numOfWarnings=0;
                locationElement.textContent= data.cityName;
                tempElement.textContent=data.temprature + String.fromCharCode(176);
                weatherCondition.textContent=data.description.toUpperCase();
                if (data.temprature > 30) {
                    warningElement.textContent += "WARNING! HIGH TEMPERATURE!!\n";
                    numOfWarnings++;
                }
                if (data.temprature < 0) {
                    warningElement.textContent += "WARNING! LOW TEMPERATURE!!\n";
                    numOfWarnings++;
                }
                if (data.description.toUpperCase().includes("OVERCAST") || data.description == "FOG" || data.description.toUpperCase().includes("BROKEN")) {
                    warningElement.textContent += "WARNING! DANGEROUS CLOUD COVER!!\n";
                    numOfWarnings++;
                }
                if (data.description.toUpperCase().includes("RAIN")) {
                    warningElement.textContent += "WARNING! WET RUNWAYS!!\n";
                    numOfWarnings++;
                }
                if (data.description.toUpperCase().includes("SNOW")) {
                    warningElement.textContent += "WARNING! SNOW CONDITIONS!!\n";
                    numOfWarnings++;
                }
                if (numOfWarnings > 0) {
                    warningElement.classList.replace('noWarn', 'warning');
                } else {
                    warningElement.textContent = "NO WEATHER WARNINGS";
                    warningElement.classList.replace('warning', 'noWarn');
                }
            }
        })
    })
})
const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('nav a').forEach(link => {    
    if(link.href.includes(`${activePage}`)){
      link.classList.add('active');
    }
  });
  

var d = new Date();
	var n = d.getHours();
	if (n > 17 || n < 6)
	  // If time is after 18PM or before 6AM, apply night theme to ‘body’
	  document.body.className = "night";

      

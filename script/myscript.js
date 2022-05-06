console.log("Inizio");

// funzione per dark theme
ThemeButton.addEventListener("click", ChangeThemeColor);

//TODO mettere toggle
function ChangeThemeColor() { 

}


//------------------------------

/* chiamata API per temperatura */
var token = config.MY_API_TOKEN;
var key = config.SECRET_API_KEY;

async function getWeather() {
	// meteo milano
	let responseMI = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=45.4654219&lon=9.1859243&units=metric&appid=" + key,{
		method: "GET"
	});

	let jsonObjMI = await responseMI.json();
	console.log(jsonObjMI);
	document.getElementById("Milano-Temp").innerText = jsonObjMI.main.temp + "°";

	// meteo roma
	let responseRO = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=41.90&lon=12.49&units=metric&appid=" + key,{
		method: "GET"
	});

	let jsonObjRO = await responseRO.json();
	console.log(jsonObjRO);
	document.getElementById("Roma-Temp").innerText = jsonObjRO.main.temp + "°";

	// meteo sidney
	let responseSID = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=-33.86&lon=151.20&units=metric&appid=" + key,{
		method: "GET"
	});

	let jsonObjSID = await responseSID.json();
	console.log(jsonObjSID);
	document.getElementById("Sidney-Temp").innerText = jsonObjSID.main.temp + "°";

	// meteo andria
	let responseAND = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=41.22&lon=16.29&units=metric&appid=" + key,{
		method: "GET"
	});

	let jsonObjAND = await responseAND.json();
	console.log(jsonObjAND);
	document.getElementById("Andria-Temp").innerText = jsonObjAND.main.temp + "°";

	// meteo parigi
	let responsePAR = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=48.85&lon=2.35&units=metric&appid=" +key,{
		method: "GET"
	});

	let jsonObjPAR = await responsePAR.json();
	console.log(jsonObjPAR);
	document.getElementById("Parigi-Temp").innerText = jsonObjPAR.main.temp + "°";

	// meteo oslo
	let responseOSL = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=59.91&lon=10.75&units=metric&appid=" + key,{
		method: "GET"
	});

	let jsonObjOSL = await responseOSL.json();
	console.log(jsonObjOSL);
	document.getElementById("Oslo-Temp").innerText = jsonObjOSL.main.temp + "°";
}

getWeather(); /*chiamo la funzione sopra descritta*/
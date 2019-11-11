function parsujInt() {
	var liczba = document.getElementById("poleINT").value;
	liczba = parseInt(liczba);
	document.getElementById("parsInt").innerHTML=liczba;
}

function parsujFloat() {
	var liczba = document.getElementById("poleFLOAT").value;
	liczba = parseFloat(liczba);
	document.getElementById("parsFloat").innerHTML=liczba;
}

function losujLiczbe() {
	var liczba = Math.floor(Math.random() * 100);
	document.getElementById("wylosowanaLiczba").innerHTML = liczba;
}

function jakaLiczba() {
	var liczbaINT = document.getElementById("poleINT").value;
	var liczbaFLOAT = document.getElementById("poleFLOAT").value;
	
	if (liczbaINT > 0) document.getElementById("parsInt").innerHTML="Ta liczba jest dodatnia.";
	else if(liczbaINT < 0) document.getElementById("parsInt").innerHTML="Ta liczba jest ujenna.";
	else if (liczbaINT == "0")document.getElementById("parsInt").innerHTML="Ta liczba jest równa zero.";
	
	if (liczbaFLOAT > 0) document.getElementById("parsFloat").innerHTML="Ta liczba jest dodatnia.";
	else if(liczbaFLOAT < 0) document.getElementById("parsFloat").innerHTML="Ta liczba jest ujenna.";
	else if (liczbaFLOAT == "0") document.getElementById("parsFloat").innerHTML="Ta liczba jest równa zero.";
}

function jakiDzien(){
	var dzien;
	switch(new Date().getDay()) {
		case 0:
			dzien = "Niedziela";
			break;
		case 1:
			dzien = "Poniedziałek";
			break;
		case 2:
			dzien = "Wtorek";
			break;
		case 3:
			dzien = "Środa";
			break;
		case 4:
			dzien = "Czwartek";
			break;
		case 5:
			dzien = "Piątek";
			break;
		case 6:
			dzien = "Sobota";
			break;
	}
	
	document.getElementById("jakiDzien").innerHTML = "Dzisiaj jest " + dzien + ".";
}

function odliczanieWhile() {
	var i = 0;
	var liczba = document.getElementById("poleOdlicz").value;
	var liczby = "";
	while (i <= liczba) {
		liczby += " " + i;
		i++;
	}
	document.getElementById("odlicz").innerHTML = liczby;
}

function odliczanieDoWhile() {
	var i = 0;
	var liczba = document.getElementById("poleOdliczDo").value;
	var liczby = "";
	while (i <= liczba) {
		liczby += " " + i;
		i++;
	}
	document.getElementById("odliczDo").innerHTML = liczby;
}

function odliczanieF() {
	var i;
	var liczba = document.getElementById("poleOdliczFor").value;
	var liczby = "";
	for(i=0; i<=liczba; i++){
		liczby += " " + i;
	}
	document.getElementById("odliczFor").innerHTML = liczby
}


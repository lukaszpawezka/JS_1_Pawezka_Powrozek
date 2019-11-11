
function fillNameInput() {
    let name = window.prompt("Wpisz swoję imię")
    document.getElementById("input_name").value = name;
}

function hateAlert() {
   window.alert("Weź ty się zastanów nad sobą...");
   document.writeln("Wróć tu jak się zastanowisz nad sobą.");
   document.writeln("Na razie nie masz prawa przeglądać wspaniałych serniczków.")
}

function addEventListenerToHateButton() {
    document.getElementById("hate_button").addEventListener("mouseover", function(){
        document.getElementById("hate_paragraph").innerHTML = "Przepraszam co ty chcesz kliknąć???";
        sleep(1500).then(() => {
            document.getElementById("hate_paragraph").innerHTML = "";
        })
    });
}

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}
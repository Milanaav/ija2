var smerovi = ["Veb dizajn", "IT", "Mašinstvo"];


function velikoSlovo(t){
    return t.toUpperCase();
}

function brojKaraktera(t){
    return t.length;
}


var imeInput = document.getElementById("ime");

if(imeInput){
    imeInput.onkeyup = function(){
        this.style.background = "yellow";
    };
}



function promeniBoju(){

    var vesti = document.querySelectorAll(".vest");

    for(var i = 0; i < vesti.length; i++){
        vesti[i].style.background = "lightblue";
        vesti[i].style.color = "black";
    }
}




function prijava(){

    var ime = document.getElementById("ime").value;
    var smer = document.getElementById("smer").value;


    if(ime == ""){
        alert("Unesi ime!");
        return;
    }

    smerovi.push(smer);

    var ispis = document.getElementById("ispis");

    if(ispis){
        ispis.innerHTML =
            "<h3>" + velikoSlovo(ime) + "</h3>" +
            "<p>Broj karaktera: " + brojKaraktera(ime) + "</p>" +
            "<p>Smer: " + smer + "</p>";
    }
}
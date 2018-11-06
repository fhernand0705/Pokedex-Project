
let allPokemon = [];

class Pokemon {
        contructor(name, hp, atk, def, abilities[]) {
            this.name = name;
            this.hp = hp;
            this.atk = atk;
            this.def = def;
            this.abilities = [];
        }
}

//get data on Pichu
function getPokemon() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
        data = JSON.parse(this.reponseText);
        console.log(data);
            // what result you want to achieve
        }
    };
    xhttp.open("GET", "http://fizal.me/pokeapi/api/v2/name/pichu.json", true);
    xhttp.send();
}


//get data on Lugia
function getPokemon() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
        data = JSON.parse(this.reponseText);
        console.log(data);
            // what result you want to achieve
        }
    };
    xhttp.open("GET", "http://fizal.me/pokeapi/api/v2/name/lugia.json", true);
    xhttp.send();
}

//get data on Entei
function getPokemon() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
        data = JSON.parse(this.reponseText);
        console.log(data);
            // what result you want to achieve
        }
    };
    xhttp.open("GET", "http://fizal.me/pokeapi/api/v2/name/entei.json", true);
    xhttp.send();
}

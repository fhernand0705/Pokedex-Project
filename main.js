//Array containing all pokeman objects

let allPokemon = [];


//Defining trainer class with methods

class Trainer {
  constructor(name){
       this.name = name;
  }

  all() {
    return allPokemon;
  }

  get(name) {
     if (name == 'pichu') {
       return getPichu();
     } else if (name == 'lugia') {
       return getLugia();
     } else if (name == 'entei') {
       return getEntei();
     } else {
       console.log('pokemon not found');
     }
   }
}

let trainer = new Trainer ('Young Master Duck');

//Defining pokemon class

class Pokemon {
        contructor(name, hp, atk, def, abil) {
            this.name = name;
            this.hp = hp;
            this.atk = atk;
            this.def = def;
            this.abil = [];
        }
}


//Requesting data on Pichu

function getPichu() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        data = JSON.parse(this.responseText);
        // console.log(data);
        let pichu = {
            hp: data.stats[5].base_stat,
           atk: data.stats[4].base_stat,
           def: data.stats[3].base_stat,
         abil1: data.abilities[0].ability.name,
         abil2: data.abilities[1].ability.name
        }
          // console.log(pokeInfo);
          allPokemon.push(pichu);
          printToDom(pichu);

    };
    xhttp.open("GET", "http://fizal.me/pokeapi/api/v2/name/pichu.json", true);
    xhttp.send();
}


//Requesting data on Lugia

function getLugia() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        data = JSON.parse(this.responseText);
        // console.log(data);
        let lugia = {
            hp: data.stats[5].base_stat,
           atk: data.stats[4].base_stat,
           def: data.stats[3].base_stat,
           abil1: data.abilities[0].ability.name,
           abil2: data.abilities[1].ability.name
        }
        // console.log(pokeInfo);
        allPokemon.push(lugia);
        printToDom(lugia);

      }
    };
    xhttp.open("GET", "http://fizal.me/pokeapi/api/v2/name/lugia.json", true);
    xhttp.send();
}


//Requesting data on Entei

function getEntei() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        data = JSON.parse(this.responseText);
        // console.log(data);
        let entei = {
            hp: data.stats[5].base_stat,
           atk: data.stats[4].base_stat,
           def: data.stats[3].base_stat,
           abil1: data.abilities[0].ability.name,
           abil2: data.abilities[1].ability.name
        }
        // console.log(pokeInfo);
        allPokemon.push(entei);
        printToDom(entei);

      }
    };
    xhttp.open("GET", "http://fizal.me/pokeapi/api/v2/name/entei.json", true);
    xhttp.send();
}

//Prints pokemon attribute to the html screen

function printToDom(pokemon) {
  var pokeHp = document.getElementById('pokeHp');
  var pokeAtk = document.getElementById('pokeAtk');
  var pokeDef = document.getElementById('pokeDef');
  var pokeAbil1 = document.getElementById('pokeAbil1');
  var pokeAbil2 = document.getElementById('pokeAbil2');

  pokeHp.innerHTML = "HP: " + pokemon.hp;
  pokeAtk.innerHTML = "Attack: " + pokemon.atk;
  pokeDef.innerHTML = "Defense: " + pokemon.def;
  pokeAbil1.innerHTML = "Abilities: " + pokemon.abil1.toUpperCase() + ", ";
  pokeAbil2.innerHTML = pokemon.abil2.toUpperCase();

}

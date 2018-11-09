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
     if (name == 'pichu' || name == 'Pichu') {
       return getPichu();
     } else if (name == 'lugia' || name == 'Lugia') {
       return getLugia();
     } else if (name == 'entei' || name == 'Entei' ) {
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
            this.img = img;
        }
}


//Requesting data on Pichu

function getPichu() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        data = JSON.parse(this.responseText);
        // console.log(data);
        let poke = {
          name: data.name,
            hp: data.stats[5].base_stat,
           atk: data.stats[4].base_stat,
           def: data.stats[3].base_stat,
           abil1: data.abilities[0].ability.name,
           abil2: data.abilities[1].ability.name,
             img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/172.png"
        }
        // console.log(poke);
        allPokemon.push(poke);
        printToDom(poke);

      }
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
        let poke = {
          name: data.name,
            hp: data.stats[5].base_stat,
           atk: data.stats[4].base_stat,
           def: data.stats[3].base_stat,
           abil1: data.abilities[0].ability.name,
           abil2: data.abilities[1].ability.name,
             img: "https://cdn.bulbagarden.net/upload/4/44/249Lugia.png"
        }
        // console.log(poke);
        allPokemon.push(poke);
        printToDom(poke);

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
        let poke = {
          name: data.name,
            hp: data.stats[5].base_stat,
           atk: data.stats[4].base_stat,
           def: data.stats[3].base_stat,
           abil1: data.abilities[0].ability.name,
           abil2: data.abilities[1].ability.name,
             img: "https://cdn.bulbagarden.net/upload/f/f9/244Entei.png"
        }
        // console.log(poke);
        allPokemon.push(poke);

        printToDom(poke);

      }
    };
    xhttp.open("GET", "http://fizal.me/pokeapi/api/v2/name/entei.json", true);
    xhttp.send();
}

//Prints pokemon properties to the html body

function printToDom(poke) {
  var image = document.getElementById('image');
  var pokeName = document.getElementById('pokeName');
  var pokeHp = document.getElementById('pokeHp');
  var pokeAtk = document.getElementById('pokeAtk');
  var pokeDef = document.getElementById('pokeDef');
  var pokeAbil1 = document.getElementById('pokeAbil1');
  var pokeAbil2 = document.getElementById('pokeAbil2');

  pokeName.innerHTML = poke.name.toUpperCase();
  pokeHp.innerHTML = "<b>HP:</b> " + poke.hp;
  pokeAtk.innerHTML = "<b>Attack:</b> " + poke.atk;
  pokeDef.innerHTML = "<b>Defense:</b> " + poke.def;
  pokeAbil1.innerHTML = "<b>Abilities:</b> " + poke.abil1.toUpperCase() + ", " + poke.abil2.toUpperCase();
  image.src = poke.img;
}

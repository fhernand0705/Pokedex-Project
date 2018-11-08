//defining pokemon parent class

let allPokemon = [];

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

class Pokemon {
        contructor(name, hp, atk, def, abil) {
            this.name = name;
            this.hp = hp;
            this.atk = atk;
            this.def = def;
            this.abil = [];
        }
}


//requesting data on Pichu

function getPichu() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        data = JSON.parse(this.responseText);
        // console.log(data);
        let pokeInfo = {
          name: data.name,
            hp: data.stats[5].base_stat,
           atk: data.stats[4].base_stat,
           def: data.stats[3].base_stat,
         abil1: data.abilities[0].ability.name,
         abil2: data.abilities[1].ability.name
        }
          console.log(pokeInfo);
          allPokemon.push(pokeInfo);

          document.getElementById('pichu-name').innerHTML = 'POKEMON NAME: ' + pokeInfo.name.toUpperCase();
          document.getElementById('pichu-hp').innerHTML = 'HP: ' + pokeInfo.hp;
          document.getElementById('pichu-atk').innerHTML = 'ATTACK: ' + pokeInfo.atk;
          document.getElementById('pichu-def').innerHTML = 'DEFENSE: ' + pokeInfo.def;
          document.getElementById('pichu-abil').innerHTML = 'ABILITIES: ' + pokeInfo.abil1.toUpperCase() + ', ' + pokeInfo.abil2.toUpperCase();
          document.getElementById('pichu-img').src = 'pichu-block.png'; //accessing pokemon image
      }

    };
    xhttp.open("GET", "http://fizal.me/pokeapi/api/v2/name/pichu.json", true);
    xhttp.send();
}


//hides and reveals block with pichu image

function showPichu() {
  var x = document.getElementById('pichu-img');
  if (x.style.display === 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
}


//requesting data on Lugia


function getLugia() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        data = JSON.parse(this.responseText);
        // console.log(data);
        let pokeInfo = {
          name: data.name,
            hp: data.stats[5].base_stat,
           atk: data.stats[4].base_stat,
           def: data.stats[3].base_stat,
           abil1: data.abilities[0].ability.name,
           abil2: data.abilities[1].ability.name
        }
        console.log(pokeInfo);
        allPokemon.push(pokeInfo);

        document.getElementById('lugia-name').innerHTML = 'POKEMON NAME: ' + pokeInfo.name.toUpperCase();
        document.getElementById('lugia-hp').innerHTML = 'HP: ' + pokeInfo.hp;
        document.getElementById('lugia-atk').innerHTML = 'ATTACK: ' + pokeInfo.atk;
        document.getElementById('lugia-def').innerHTML = 'DEFENSE: ' + pokeInfo.def;
        document.getElementById('lugia-abil').innerHTML = 'ABILITIES: ' + pokeInfo.abil1.toUpperCase() + ', ' + pokeInfo.abil2.toUpperCase();
        document.getElementById('lugia-img').src = 'pichu-block.png'; //accessing pokemon image
      }
    };
    xhttp.open("GET", "http://fizal.me/pokeapi/api/v2/name/lugia.json", true);
    xhttp.send();
}



//get data on Entei


function getEntei() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        data = JSON.parse(this.responseText);
        // console.log(data);
        let pokeInfo = {
          name: data.name,
            hp: data.stats[5].base_stat,
           atk: data.stats[4].base_stat,
           def: data.stats[3].base_stat,
           abil1: data.abilities[0].ability.name,
           abil2: data.abilities[1].ability.name
        }
        // console.log(pokeInfo);
        allPokemon.push(pokeInfo);

        // i = 0;
        // for (prop in pokeInfo) {
        //   console.log(pokeInfo.name, pokeInfo.hp, pokeInfo.atk, pokeInfo.def, pokeInfo.abil1);
        //   i++;
        //   if (i > 5) {
        //     console.log('');
        //   }
        // }

        // writeToDom(pokeInfo[pokeInfo]);

        // document.getElementById('entei-name').innerHTML = 'POKEMON NAME: ' + pokeInfo.name.toUpperCase();
        // document.getElementById('entei-hp').innerHTML = 'HP: ' + pokeInfo.hp;
        // document.getElementById('entei-atk').innerHTML = 'ATTACK: ' + pokeInfo.atk;
        // document.getElementById('entei-def').innerHTML = 'DEFENSE: ' + pokeInfo.def;
        // document.getElementById('entei-abil').innerHTML = 'ABILITIES: ' + pokeInfo.abil1.toUpperCase() + ' , ' + pokeInfo.abil2.toUpperCase();
        // document.getElementById('entei-img').src = 'pichu-block.png'; //accessing pokemon image

      }
    };
    xhttp.open("GET", "http://fizal.me/pokeapi/api/v2/name/entei.json", true);
    xhttp.send();
}

// function writeToDom(pok) {
//   let node = document.createElement('div');
//   node.innerHTML = getEntei();
//   document.getElementById('block').appendChild(node);
// }

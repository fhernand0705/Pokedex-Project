// let pichuName = getElementById('pichuName')

// for (prop in POKEMON) { pichuName.innerHTML = prop.name}

class Pokemon {
        contructor(name, hp, atk, def, abili) {
            this.name = name;
            this.hp = hp;
            this.atk = atk;
            this.def = def;
            this.abil = [];
        }
}

//get data on Pichu
function getPichu() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
        data = JSON.parse(this.responseText);
        console.log(data);
        let pichu = {
          name: data.name,
            hp: data.stats[5].base_stat,
           atk: data.stats[4].base_stat,
           def: data.stats[3].base_stat,
         abil: data.abilities[0].ability.name
        }
          // pichuName.innerHTML = pichu.name;
      }

    };
    xhttp.open("GET", "http://fizal.me/pokeapi/api/v2/name/pichu.json", true);
    xhttp.send();
}


//get data on Lugia
function getLugia() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
        data = JSON.parse(this.responseText);
        console.log(data);
        let lugia = {
          name: data.name,
            hp: data.stats[5].base_stat,
           atk: data.stats[4].base_stat,
           def: data.stats[3].base_stat,
          abil: data.abilities[0].ability.name
        }
      }
    };
    xhttp.open("GET", "http://fizal.me/pokeapi/api/v2/name/lugia.json", true);
    xhttp.send();
}

//get data on Entei
function getEntei() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
        data = JSON.parse(this.responseText);
        console.log(data);
        let lugia = {
          name: data.name,
            hp: data.stats[5].base_stat,
           atk: data.stats[4].base_stat,
           def: data.stats[3].base_stat,
          abil: data.abilities[0].ability.name
        }

      }
    };
    xhttp.open("GET", "http://fizal.me/pokeapi/api/v2/name/entei.json", true);
    xhttp.send();
}

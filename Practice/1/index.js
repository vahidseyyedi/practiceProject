class player {
    constructor(name, age, position) {
        this.name = name;
        this.age = age;
        this.position = position;
    }
}
class team {
    constructor(name, coach) {
        this.name = name;
        this.coach = coach;
        this.pl = [];
    }

    addPlayer(player) {
        this.pl.push(player);
    }
    removePlayer(name) {
        this.pl = this.pl.filter(player => player.name !== name)
    }
    selectall() {
        for (let i = 0; i < this.pl.length; i++) {
            const s = this.pl[i];
            console.log(s);
        }
    }
}
// const p = new player("vahid","21","d");
// const t = new team("g" , "ff");
// t.addPlayer(p);
// t.selectall();
var isteam = false;
var t;
var index = 0;
var buttons;
const teamName = document.getElementById("teamName");
const coach = document.getElementById("coach");
const submit = document.getElementById("su");
const playerName = document.getElementById("playerName");
const age = document.getElementById("age");
const position = document.getElementById("position");
const save = document.getElementById("save");
submit.addEventListener("click", (e) => {
    e.preventDefault();
    if (teamName.value != "" || coach.value != "") {
        t = new team(teamName.value, coach.value);
        alert("save");
        teamName.value = "";
        coach.value = "";
        isteam = true;
    } else {
        alert("no");
    }
});

save.addEventListener("click", (e) => {
    e.preventDefault();
    if (isteam == true) {
        if (playerName.value == "" || age.value == "" || position.value == "") {
            alert("please enter name , age , position");
        }
        else {
            const player1 = new player(playerName.value, age.value, position.value);
            t.addPlayer(player1);
            show();
            playerName.value = "";
            age.value = "";
            position.value = "";
        }
    }
    else {
        alert("please enter team");
    }
});

function show() {
    const container = document.createElement('div');
    const div = document.createElement('div');
    const button = document.createElement('button');
    button.innerHTML = "X"
    div.innerText = "name: " + t.pl[index].name + "|   age: " + t.pl[index].age + "|   position: " + t.pl[index].position + "=>";
    button.id = index;
    button.className = "btnDel"
    index++;
    div.append(button);
    container.append(div);
    document.body.append(container);
}


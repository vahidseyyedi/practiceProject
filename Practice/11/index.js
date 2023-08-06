var north = 0;
var south = 0;
var east = 0;
var west = 0;
var y = 0;
var x = 0;
var result = "";
const select = document.getElementById("select");
const save = document.getElementById("save");
const show = document.getElementById("show");
const text = document.getElementById("text");

save.addEventListener("click", () => {
    switch (select.selectedIndex) {
        case 0: north++; break;
        case 1: south++; break;
        case 2: east++; break;
        case 3: west++; break;
        default: alert("no");
    }
});

show.addEventListener("click", () => {
    y = north - south;
    x = east - west;
    if (y > 0) {
        result += "north =" + y + "|";
    } else {
        result += "south =" + Math.abs(y) + "|";
    }
    if (x > 0) {
        result += "east =" + y;
    } else {
        result += "west =" + Math.abs(y);
    }
    text.innerText = result;
})
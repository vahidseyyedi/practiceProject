const time = document.getElementById("time");
const submit = document.getElementById("submit");
const show = document.getElementById("show");
submit.addEventListener("click", (e) => {
    e.preventDefault();
    if (time.value < 0 || time.value > 359999) {
        alert("no");
    } else {
        var divisonH = Math.floor(time.value / 3600);
        var leftOverH = time.value % 3600;
        var min = Math.floor(leftOverH / 60);
        var leftOverM = leftOverH % 60;
        var leftOverS = Math.floor(leftOverM % 60);
        show.innerText =divisonH + ":" + min + ":" + leftOverS;
    }
})
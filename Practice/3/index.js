const number = document.getElementById("number");
const submit = document.getElementById("submit");
submit.addEventListener("click", () => {
    if (number.value <= 0) {
        alert("no");
    } else {
        alert(facto(number.value));
    }
});
function facto(num) {
    var pro = 1;

    for (let i = num; i > 1; i--) {
        pro = pro * i;
    }
    return pro;

}
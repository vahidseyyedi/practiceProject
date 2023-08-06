const number = document.getElementById("number");
const submit = document.getElementById("sub");
const div = document.getElementById("show");
const prime = document.getElementById("prime");
const result = document.getElementById("result");

var entrance = [];
var output = [];

submit.addEventListener("click", (e) => {
    e.preventDefault();
    if (number.value == "") {
        alert("no");
    } else {
        entrance.push(number.value);
        number.value = "";
        var s = "";
        for (let i in entrance) {
            s += entrance[i] + "|";
        }
        div.innerText = s;
    }
});
prime.addEventListener("click", calc);

function calc() {
    for (let i in entrance) {
        var index = false;

        for (let j = 2; j < entrance[i]; j++) {
            if (entrance[i] % j == 0) {
                index = true;
            }
        }
        if(index == false){
            output.push(entrance[i]);
        }
    }
    var q = "";
    for (let i in output) {
        q += output[i] + "|";
        console.log(output[i])
    }
    result.innerText = "result: " + q;
}

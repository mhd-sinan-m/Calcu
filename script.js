let val;

function anas(n) {
    val = document.getElementById("input").innerHTML += n;
}
// RESULT
function result() {
    rslt = '';
    rslt = solve(val);
    // alert(rslt);
    console.log(rslt);
    val = document.getElementById("input").innerHTML = rslt;
}
console.log("Created By Sinan M");
console.log('................................................................');

// KEYBORD
document.addEventListener("keydown", function (event) {
    if (event.key == "0") anas(0); if (event.key == "1") anas(1); if (event.key == "2") anas(2);
    if (event.key == "3") anas(3); if (event.key == "4") anas(4); if (event.key == "5") anas(5);
    if (event.key == "6") anas(6); if (event.key == "7") anas(7); if (event.key == "8") anas(8);
    if (event.key == "9") anas(9); if (event.key == ".") anas('.'); if (event.key == "-") anas('-');
    if (event.key == "+") anas('+'); if (event.key == "*") anas('*'); if (event.key == "/") anas('/');
    if (event.key == "%") anas('%'); if (event.key == "Enter") result(); if (event.key == "Backspace") document.getElementById('input').innerHTML = val = val.substring(0, val.length - 1);
})

// EVALUATION
function solve(str) {
    try {
        // MAKE IT ARRAY
        const arr = str.split("-").join(" - ")
            .split("+").join(" + ")
            .split("*").join(" * ")
            .split("/").join(" / ")
            .split(" ")

        //DMAS
        // division and multiplication
        while (arr.includes("/") || arr.includes("*")) {
            const mul = arr.indexOf("*")
            const div = arr.indexOf("/")

            if (div != -1) {
                calc(arr, div, "/")
            }
            else if (mul !== -1) {
                calc(arr, mul, "/")
            }
        }

        // ADDITION & SUBTRACTION
        while (arr.includes("+") || arr.includes("-")) {
            const sub = arr.indexOf("-")
            const add = arr.indexOf("+")

            if (add != -1) {
                calc(arr, add, "+")
            }
            else if ((sub !== -1)) {
                calc(arr, add, "-")
            }
        }

        return parseFloat(arr[0]);

        // CALCULATE OPERATORS
        function calc(arr, index, operator) {
            const a = parseFloat(arr[index - 1]);
            const b = parseFloat(arr[index + 1]);
            let c;

            if (operator === "/") {
                c = a / b;
            } else if (operator === "*") {
                c = a * b;
            } else if (operator === "+") {
                c = a + b;
            } else if (operator === "-") {
                c = a - b;
            }
            arr.splice(index - 1, 3, c)
        }
    }
    catch {
        return "ERROR";
    }
}
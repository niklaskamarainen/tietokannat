const prompt = require("prompt-sync")();

function findLargerNumber() {

    let num1 = parseFloat(prompt("Anna ensimmäinen luku: "));
    let num2 = parseFloat(prompt("Anna toinen luku: "));
    
    if (num1 > num2) {
        return console.log("Suurempi luku oli ensimmäinen");
    } else if (num1 === num2) {
        return console.log("Luvut ovat samansuuruiset");
    } else {
        return console.log("Suurempi luku oli toinen")
    }
}

//console.log(findLargerNumber());

function findPalindrome() {

    let word = prompt("Anna sana: ").toLowerCase();
    let reversedWord = word.split("").reverse().join("");

    if (word === reversedWord) {
        return console.log("Sana on palindromi");
    } else {
        return console.log("Sana ei ole palindromi");
    }
}

findPalindrome();
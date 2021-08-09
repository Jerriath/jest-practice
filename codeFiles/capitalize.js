export default function(string){
    let firstLetter = string.charAt(0);
    let numbers = /\d/;
    if (numbers.test(firstLetter)) {
        return string;
    }
    else if (string === "") {
        return "";
    }
    else if (firstLetter === " ") {
        return string;
    }
    else {
        let restOfString = string.slice(1);
    firstLetter = firstLetter.toUpperCase();
    let output = firstLetter + restOfString;
    return output;
    }
}
//Ascii values: A-Z == 65-90,    a-z == 97-122; Uses string.prototype.charCodeAt() and string.prototype.fromCharCode()

export default function(string, key) {
    let strLength = string.length;
    let output = "";
    for (let i = 0; i < strLength; i++) {
        let asciiCode = string.charCodeAt(i);
        if (asciiCode >= 65 && asciiCode <= 90) { //For upper case letters
            output += upperShift(asciiCode, key);
        }
        else if (asciiCode >= 97 && asciiCode <= 122) { //For lower case letters
            output += lowerShift(asciiCode, key);
        }
        else {//For characters that are not letters; i.e. spaces, punctuation marks, etc.
            output += String.fromCharCode(asciiCode);
        }
    }
    return output;
}

//Function for shifting lower case letters; returns final letter
function lowerShift(ascii, key) {
    ascii += key;
    if (ascii > 122) {
        return String.fromCharCode(ascii - 26); //123(a) will go back to 97(z);
    }
    else {
        return String.fromCharCode(ascii);
    }
}

//Function for shifting upper case letters; returns final letter
function upperShift(ascii, key) {
    ascii += key;
    if (ascii > 90) {
        return String.fromCharCode(ascii - 26); //65(A) will go back to 90(Z);
    }
    else {
        return String.fromCharCode(ascii);
    }
}
export default function(string) {
    if (string === "") {
        return "";
    }
    else {
        let lastIndex = string.length - 1;
        let reverseString = "";
        for (let i = lastIndex; i >= 0; i--) {
            reverseString += string.charAt(i);
        };
        return reverseString;
    }
}
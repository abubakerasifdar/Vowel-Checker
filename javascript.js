document.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        myFunction();
        document.getElementById("input").value = "";
    }
})
function myFunction() {
    let value = document.getElementById("input").value;
    switch (value) {
        case "a": {
            result = `The Entered input is ${value} which is Vowel`
            document.getElementById("output").style.background = "red"
            break;
        }
        case "e": {
            result = `The Entered input is ${value} which is Vowel`
            document.getElementById("output").style.background = "red"
            break;
        }
        case "i": {
            result = `The Entered input is ${value} which is Vowel`
            document.getElementById("output").style.background = "red"
            break;
        }
        case "o": {
            result = `The Entered input is ${value} which is Vowel`
            document.getElementById("output").style.background = "red"
            break;
        }
        case "u": {
            result = `The Entered input is ${value} which is Vowel`
            document.getElementById("output").style.background = "red"
            break;

        }
        default: {
            result = `The Entered input is ${value} which is Consonant`
            document.getElementById("output").style.background = "green"
            break;
        }
    }

    document.getElementById("output").style.display = "flex";
    document.getElementById("output").innerHTML = result;
    document.getElementById("output").value = "";
}

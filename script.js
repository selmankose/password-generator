const display = document.querySelector("input"),
button = document.querySelector("button");
let chars = "abcdefghijklmnoprstuvwxyzABCDEFGHIJKLMNOPRSTUVWXYZ0123456789!@#$%^&*()_+~`|{}[]:;?><,./-=";
button.onclick = () => {
    let i,
    randomPassword = "";
    for (i = 0; i < 10; i++){
        randomPassword = randomPassword + chars.charAt(
            Math.floor(Math.random() * chars.length)
        );
    }
    display.value = randomPassword;
}

function copy() {
    var copyText = document.getElementById("myCopy");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
}
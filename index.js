const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let text_a = document.getElementById('text-a');
let text_b = document.getElementById('text-b');

function generate() {

    text_a.textContent = ""
    text_b.textContent = ""

    for(let i = 0; i < 8; i++) {
        text_a.textContent += characters[random()]
    }

    for(let i = 0; i < 8; i++) {
        text_b.textContent += characters[random()]
    }
}

function random() {
    return Math.floor(Math.random() * characters.length)
}


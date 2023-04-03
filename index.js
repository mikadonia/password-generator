const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pass1 = ""
let pass2 = ""
let field1El = document.getElementById("field1-el")
let field2El = document.getElementById("field2-el")


function generate() {
    for (let i = 0; i < 15; i++) {
        random = Math.floor(Math.random()*characters.length)
        pass1 += characters[random]
    }
    field1El.textContent = pass1
    pass1 = ""

    for (let i = 0; i < 15; i++) {
        random = Math.floor(Math.random()*characters.length)
        pass2 += characters[random]
    }
    field2El.textContent = pass2
    pass2 = ""
}






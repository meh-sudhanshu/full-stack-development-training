


const keyBoard = document.getElementsByClassName("bottom")[0]
const equationH2 = document.getElementsByClassName("equation")[0]



const keyboardHandler = (event)=>{
    if(String(event.target.textContent) === "C"){
        equationH2.innerHTML = ""
        return
    }
    const currentCharacter = String(event.target.textContent)
    const newEquation = String(equationH2.innerHTML)+currentCharacter
    equationH2.innerHTML = newEquation
}







keyBoard.addEventListener("click",keyboardHandler)
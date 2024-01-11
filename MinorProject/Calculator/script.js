


const keyBoard = document.getElementsByClassName("bottom")[0]
const equationH2 = document.getElementsByClassName("equation")[0]
const outputH2 = document.getElementsByClassName("output")[0]
const historyEquation = document.getElementsByClassName("history-equation")[0] 

historyEquation.innerHTML = localStorage.getItem("history")




const keyboardHandler = (event)=>{
    console.log(event)
    if(String(event.target.textContent) === "="){
        console.log(eval(equationH2.innerHTML))
        outputH2.innerHTML = eval(equationH2.innerHTML)
        localStorage.setItem("history",String(equationH2.innerHTML))
        historyEquation.innerHTML = localStorage.getItem("history")
        return
    }


    if(String(event.target.textContent) === "C"){
        equationH2.innerHTML = ""
        return
    }
    const currentCharacter = String(event.target.textContent)
    const newEquation = String(equationH2.innerHTML)+currentCharacter
    equationH2.innerHTML = newEquation
}







keyBoard.addEventListener("click",keyboardHandler)
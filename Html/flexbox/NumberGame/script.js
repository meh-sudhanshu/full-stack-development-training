



const headingTag = document.getElementById("number")
console.log(headingTag)

var number = headingTag.innerHTML
console.log(number)


const buttons = document.getElementsByClassName("btn")
const increaseButton = buttons[0]
const decreaseButton = buttons[1]
console.log(buttons[0])
console.log(buttons[1])


function increaseHandler(){
    number = Number(number)
    if(number+1 > 10){
        alert("number can not go beyond 10")
        return
    }
    number = number+1
    headingTag.innerHTML = number
}

function decreaseHandler(){
    number = Number(number)
    if(number-1 < -10){
        alert("number can not go below -10")
        return
    }
    number = number-1
    headingTag.innerHTML = number
}

increaseButton.addEventListener("click",increaseHandler)
decreaseButton.addEventListener("click",decreaseHandler)
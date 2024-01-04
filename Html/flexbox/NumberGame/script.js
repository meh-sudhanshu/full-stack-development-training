



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
    number = number+1
    headingTag.innerHTML = number
}

increaseButton.addEventListener("click",increaseHandler)









const grid = document.getElementsByClassName("grid")[0]

var occupiedClasses = [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]

const min = 1
const max = 9
var count = 0;




const generateAvailableRandomIndex = (count)=>{
    console.log("count from generate method",count)
    if(count == 5){
        alert("all cells are already occupied")
        return
    }
    while(true){
       const randomIndex =  Math.floor(Math.random() * (max - min + 1)) + min
       if(occupiedClasses[randomIndex] == -1){
            return randomIndex
       }
    }
}


const checkIfThereISaWinner = ()=>{
    
}





const gridHandler = (event)=>{
    
    count+=1
    console.log("count from grid handler",count)
    const currentIndex = (event.target.title)
    if(occupiedClasses[currentIndex] != -1){
        alert("choose another block")
        return
    }
    occupiedClasses[currentIndex] = 1
    const className = "cell"+event.target.title
    var image = document.createElement("img")
    image.src = "x.png"

    const randomIndex = generateAvailableRandomIndex(count)
    const OClassName = "cell"+randomIndex
    occupiedClasses[randomIndex] = 1



    const currentDiv = document.getElementsByClassName(className)[0]
    currentDiv.appendChild(image)

    const oDiv = document.getElementsByClassName(OClassName)[0]
    image = document.createElement("img")
    image.src = "o.png"

    oDiv.appendChild(image)


    if(count >= 3){
        checkIfThereISaWinner()
    }

}






grid.addEventListener("click",gridHandler)
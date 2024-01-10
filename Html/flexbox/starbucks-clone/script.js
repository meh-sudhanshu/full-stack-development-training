
const allLinks = document.getElementsByClassName("links")
const contentHolder = document.getElementsByClassName("content-holder")[0]

const home = allLinks[0].children[0]
home.classList.add("active")
const homeHeading = document.createElement("h2")
homeHeading.innerHTML ="Home"
contentHolder.appendChild(
    homeHeading
)

const gift = allLinks[0].children[1]
const order = allLinks[0].children[2]
const pay = allLinks[0].children[3]
const store = allLinks[0].children[4]


const linkArray = [home,gift,order,pay,store]


const clickHandler = (event)=>{
    if(event.target.text == "Home"){
        home.classList.add("active")
        gift.classList.remove("active")
        order.classList.remove("active")
        pay.classList.remove("active")
        store.classList.remove("active")
    }
    if(event.target.text == "Gift"){
        gift.classList.add("active")
        home.classList.remove("active")
        order.classList.remove("active")
        pay.classList.remove("active")
        store.classList.remove("active")
    }
    if(event.target.text == "Order"){
        order.classList.add("active")
        gift.classList.remove("active")
        home.classList.remove("active")
        pay.classList.remove("active")
        store.classList.remove("active")
    }
    if(event.target.text == "Pay"){
        pay.classList.add("active")
        gift.classList.remove("active")
        order.classList.remove("active")
        home.classList.remove("active")
        store.classList.remove("active")
    }
    if(event.target.text == "Store"){
        store.classList.add("active")
        gift.classList.remove("active")
        order.classList.remove("active")
        pay.classList.remove("active")
        home.classList.remove("active")
    }
}



home.addEventListener("click",clickHandler)
gift.addEventListener("click",clickHandler)
order.addEventListener("click",clickHandler)
pay.addEventListener("click",clickHandler)
store.addEventListener("click",clickHandler)

console.log(linkArray);
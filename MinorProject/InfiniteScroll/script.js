// access key : kY7PiFzU8ZSXxphu5Q_yWa314BwT17iDyWcEN8pJDyo

// secret key : m-pNr9ohqfxR0JOwwQCRsT9FGnT8G3HyVAzpXieL3EM

// application id: 550928

const scrollThreshold = window.innerHeight/2; // 100vh in pixels
let hasScrolled100vh = false;

const apiToFetchSinglePhoto = "https://api.unsplash.com/photos/random/?client_id=PWYSk64OkgCrXYKfw5fWdg1UDs6Cnt7QQdrvfKws7mg"

const mainCtn =document.getElementsByClassName("main")[0]
console.log(mainCtn)


// function isScrollAtEnd() {
//     const body = document.body;
//     const html = document.documentElement;

//     const totalHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
//     const scrolledHeight = window.scrollY + window.innerHeight;

//     return scrolledHeight >= totalHeight;
// }



function scrollHandler(event){
    console.log("scrolling")


    const scrolledHeight = window.scrollY;
    if (scrolledHeight >= scrollThreshold && !hasScrolled100vh) {
        fetch(apiToFetchSinglePhoto).then((response) =>{
            console.log(response.url)
        }).catch(
            response =>{
                console.log(response)
            }
        )
        hasScrolled100vh = true;
    } else if (scrolledHeight < scrollThreshold) {
        // Reset the flag if scrolled back up
        hasScrolled100vh = false;
    }
}


// const scrollHandler = ()=>{
//     fetch("https://unsplash.com/photos/a-full-moon-is-seen-in-the-dark-sky-1QbY2dp0pmQ").then((response)=>{
//         console.log(response)
//     })
// }

document.addEventListener("scroll",scrollHandler)







//const api ="https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.freepik.com%2Ffree-photo%2Fisolated-happy-smiling-dog-white-background-portrait-4_1562-693.jpg&tbnid=hluxPG6aiVLRrM&vet=12ahUKEwigpNbuoLqEAxVCV2wGHT21DsAQMygBegQIARBw..i&imgrefurl=https%3A%2F%2Fwww.freepik.com%2Fphotos%2Fdog&docid=6PUhA7tbKLlbFM&w=626&h=417&q=dog%20pictures&ved=2ahUKEwigpNbuoLqEAxVCV2wGHT21DsAQMygBegQIARBw"


const api = "https://api.publicapis.org/entries"



const requestBody = {
    method:"GET",
    mode:"cors",
    headers:{
        "Access-Control-Allow-Origin":"*"
    }
}
const response = fetch(api,requestBody)

response.then(data => data.json()).then(value =>{
    console.log(value)
})


//console.log(response)
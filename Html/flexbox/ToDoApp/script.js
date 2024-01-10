

const addButton = document.getElementsByClassName("add_btn")[0]
const addItemForm = document.getElementsByClassName("add_item_form")[0]
const submitButton = document.getElementsByClassName("submit_btn")[0]
const itemContainer = document.getElementsByClassName("item_ctn")[0]
const discardButton = document.getElementsByClassName("discard_btn")[0]

const allInputFields = document.getElementsByClassName("ipf")
const titleField = allInputFields[0]
const descriptionField = allInputFields[1]
const startDateField = allInputFields[2]
const endDateField = allInputFields[3]

console.log(titleField,descriptionField,startDateField,endDateField)


function submitHandler(event){
    addItemForm.classList.add("hidden")
    event.preventDefault()
    console.log(event)

    const itemDiv = document.createElement("div")
    itemDiv.classList.add("item")

    const titleHeading = document.createElement("h2")
    titleHeading.classList.add("title")
    titleHeading.innerHTML = event.target.form[0].value

    const descriptionPara = document.createElement("p")
    descriptionPara.classList.add("desc")
    descriptionPara.innerHTML = event.target.form[1].value

    const footerDiv = document.createElement("div")
    footerDiv.classList.add("footer")



    const startDateH2 = document.createElement("h2")
    startDateH2.classList.add("date")
    startDateH2.innerHTML = event.target.form[2].value

    const endDateH2 = document.createElement("h2")
    endDateH2.classList.add("end_date")
    endDateH2.innerHTML = event.target.form[3].value

    const removeBtn = document.createElement("button")
    removeBtn.classList.add("remove_btn")
    removeBtn.innerHTML = "Remove Item"

    footerDiv.appendChild(startDateH2)
    footerDiv.appendChild(endDateH2)
    footerDiv.appendChild(removeBtn)

    itemDiv.appendChild(titleHeading)
    itemDiv.appendChild(descriptionPara)
    itemDiv.appendChild(footerDiv)
    // itemDiv.appendChild(removeBtn)


    itemContainer.appendChild(itemDiv)

    event.target.form[0].value = ""
    event.target.form[1].value = ""
    event.target.form[2].value = ""
    event.target.form[3].value = ""



    console.log(event.target.form[0].value)
    console.log(event.target.form[1].value)
    console.log(event.target.form[2].value)
    console.log(event.target.form[3].value)

}


function addButtonHandler(event){
    addItemForm.classList.remove("hidden")
}

function discardHandler(event){
    event.preventDefault()
    addItemForm.classList.add("hidden")
}

function titleChangeHandler(event){
    console.log(event.target.value)
}


addButton.addEventListener("click",addButtonHandler)
submitButton.addEventListener("click",submitHandler)
titleField.addEventListener("change",titleChangeHandler)
discardButton.addEventListener("click",discardHandler)
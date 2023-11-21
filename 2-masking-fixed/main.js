const allNavElements = document.querySelectorAll(".nav_item")
const allBoxElements = document.querySelectorAll(".boxes")
const parentElement = document.getElementById("parent")

allNavElements.forEach((item, index) => {
    const itemProperties = item.getBoundingClientRect()
    allBoxElements[index].style.setProperty("left", `${itemProperties.x}px`)

    item.addEventListener("mouseenter", function(event){
        parentElement.style.setProperty("--left", `${itemProperties.x}px`)
    })
})
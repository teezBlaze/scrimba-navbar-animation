const container = document.getElementById("container")
const myBox = document.getElementById("my_test_box")
const helloEl1 = document.getElementById("hello_one")
const helloEl2 = document.getElementById("hello_two")
const helloEl3 = document.getElementById("hello_three")
const helloEl4 = document.getElementById("hello_four")
const helloEl5 = document.getElementById("hello_five")


helloEl1.addEventListener("mouseenter", function(event){
    removeAllClasses()
    positionCalculation(event.target)
    myBox.classList.add("height_change_one")
})

helloEl2.addEventListener("mouseenter", function(event){
    removeAllClasses()
    positionCalculation(event.target)
    myBox.classList.add("height_change_two")
})

helloEl3.addEventListener("mouseenter", function(event){
    removeAllClasses()
    positionCalculation(event.target)
    myBox.classList.add("height_change_three")
})

helloEl4.addEventListener("mouseenter", function(event){
    removeAllClasses()
    positionCalculation(event.target)
    myBox.classList.add("height_change_four")
})

helloEl5.addEventListener("mouseenter", function(event){
    removeAllClasses()
    positionCalculation(event.target)
    myBox.classList.add("height_change_five")
})

function removeAllClasses(){
    myBox.classList.remove("height_change_one", "height_change_two", "height_change_three", "height_change_four", "height_change_five")
}

function positionCalculation(el){
    const windowWidth = window.innerWidth

    //center of text
    const elProperties = el.getBoundingClientRect()
    const myBoxProperties = myBox.getBoundingClientRect()
    const centerOfStaticElement = elProperties.left + (elProperties.width/2)
    const centerOfStaticElement_plus_widthOfMyBox = (centerOfStaticElement - myBoxProperties.width/2) + myBoxProperties.width
    const leftEdgeOfMyBox = centerOfStaticElement - myBoxProperties.width/2

    if(centerOfStaticElement_plus_widthOfMyBox > windowWidth){
        const rightEdge = windowWidth - myBoxProperties.width - (windowWidth - elProperties.right)
        myBox.style.setProperty("--left", `${rightEdge}px`)
    }else if(leftEdgeOfMyBox < 0){
        myBox.style.setProperty("--left", `${elProperties.x}px`)
    }else{
        const center = centerOfStaticElement - myBoxProperties.width/2
        myBox.style.setProperty("--left", `${center}px`)
    }
}
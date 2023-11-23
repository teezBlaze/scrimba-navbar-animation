const allNavElements = document.querySelectorAll("nav .nav--item")
const allBoxElements = document.querySelectorAll(".navbar--contents--item--container .item")
const parentElement = document.getElementById("parent")
const maskElement = document.getElementById("mask")
let timeOut
let parentVisibleTimeOut
const opacityRemoveTime = 600


// Sometimes the font load takes time. 
// window.addEventListener("load", () => {}) makes sure
// javascript execution waits for the font to load completely
window.addEventListener("load", () => {
    allNavElements.forEach((item, index) => {
        const navItemProperties = item.getBoundingClientRect()
        const centerOfNavItem = navItemProperties.left + navItemProperties.width/2
    
        const currentBoxItem = allBoxElements[index]
        const currentBoxItemProperties = currentBoxItem.getBoundingClientRect()
        const centerOfBoxItem = centerOfNavItem - currentBoxItemProperties.width/2
    
        if(centerOfBoxItem < 0){
            const firstNavItem_X_property = allNavElements[0].getBoundingClientRect().x
            currentBoxItem.style.setProperty("left", `${firstNavItem_X_property}px`)
        }else{
            currentBoxItem.style.setProperty("left", `${centerOfBoxItem}px`)
        }


        // When mouse enter over a nav item
        item.addEventListener("mouseenter", function(event){
            clearTimeout(timeOut)
            if(centerOfBoxItem < 0){ 
                const firstNavItem_X_property = allNavElements[0].getBoundingClientRect().x
                parentElement.style.setProperty("--left", `${firstNavItem_X_property}px`)
            }else{
                parentElement.style.setProperty("--left", `${centerOfBoxItem}px`)
            }

            currentBoxItem.style.setProperty("opacity", "1")
            allBoxElements.forEach(boxItem => {
                if(currentBoxItem != boxItem){
                    boxItem.style.setProperty("opacity", "0")
                }
            })
            parentElement.style.setProperty("--height", `${currentBoxItemProperties.height}px`)
            parentVisibleTimeOut = setTimeout(() => {
                parentElement.style.setProperty("opacity", "1")
            }, 300);
        })

        // When mouse leaves a nav item
        item.addEventListener("mouseleave", function(){
            timeOut = setTimeout(() => {
                parentElement.style.setProperty("opacity", "0")
            }, opacityRemoveTime)
            clearTimeout(parentVisibleTimeOut)
        })
    })


    parentElement.addEventListener("mouseenter", function(){
        clearTimeout(timeOut)
    })
    parentElement.addEventListener("mouseleave", function(){
        timeOut = setTimeout(() => {
            parentElement.style.setProperty("opacity", "0")
        }, opacityRemoveTime)
    })
})

var ourfirstDiv=document.createElement("div")
ourfirstDiv.innerHTML ="<p> this was </p>"
document.body.appendChild(ourfirstDiv)
ourfirstDiv.style.backgroundColor="yellow";

document.body.style.backgroundColor="pink"

var spanElement = document.createElement("span")
spanElement.textContact = "this text is a span element"
document.body.insertBefore(spanElement,ourfirstDiv)
ourfirstDiv.style.color="yellow";

//document.body.removeChild(ourfirstDiv)

var imageElement = document.createElement("img")
imageElement.src = "https://upload.wikimedia.org/wikipedia/en/0/0e/Picturehouselogo.jpg"
document.body.insertBefore(spanElement,ourfirstDiv)
document.body.replaceChild(imageElement,ourfirstDiv)

var firstH1 = document.getElementById("first")
firstH1.style.color = "blue"

var allElementWithName = document.getElementByName("firstH1name")
allElementWithName [H1] style.color = "red"
field = document.getElementById("field")

for(let i=0;i<120;i++){
    var square = document.createElement("div")
    square.className = "square"
    square.style.backgroundColor = "rgb("+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+")"
    field.appendChild(square)
}
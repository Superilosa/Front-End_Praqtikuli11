field = document.getElementById("field")

function spawnSquare(){
    square = document.createElement("div")
    square.className = "square"
    var p1 = Math.floor(Math.random()*51)+"%"
    var p2 = Math.floor(Math.random()*51)+"%"
    switch(Math.floor(Math.random()*4)){
        case 0:
            square.style.left = p1
            square.style.top = p2
            break
        case 1:
            square.style.right = p1
            square.style.top = p2
            break
        case 2:
            square.style.left = p1
            square.style.bottom = p2
            break
        case 3:
            square.style.right = p1
            square.style.bottom = p2
            break
    }
    field.appendChild(square)
}

setInterval(spawnSquare,3000)
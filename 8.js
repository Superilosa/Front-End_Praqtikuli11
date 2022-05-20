field = document.getElementById("field")

//delay - გაჩენამდე დაყოვნება წამებში
function spawnCircles(delay,n){
    finish = n
    k=0;
    setId = setInterval(spawnCircle,delay*1000)
}
//აჩენს წრეს
function spawnCircle(){
    circle = document.createElement("div")
    circle.className = "circle"
    var p1 = Math.floor(Math.random()*51)+"%"
    var p2 = Math.floor(Math.random()*51)+"%"
    switch(Math.floor(Math.random()*4)){
        case 0:
            circle.style.left = p1
            circle.style.top = p2
            break
        case 1:
            circle.style.right = p1
            circle.style.top = p2
            break
        case 2:
            circle.style.left = p1
            circle.style.bottom = p2
            break
        case 3:
            circle.style.right = p1
            circle.style.bottom = p2
            break
    }
    circle.style.backgroundColor = "rgb("+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+")"
    field.appendChild(circle)
    k++
    if(k==finish){
        clearInterval(setId)
    }
}

//ამოწმებს შეყვანილ მონაცემებს და სისწორის შემთხვევაში გადასცემს spawnCircles ფუნქციას
function checkInput(){
    in1 = document.getElementById("delay").value
    if(in1.length>0&&in1>=0){
        in2 = document.getElementById("n").value
        if(in2.length>0&&in2>=1&&Number.isInteger(parseFloat(in2))){
            spawnCircles(in1,in2)
        }else{
            alert("წრეების რაოდენობა არაა ვალიდური")
        }
    }else{
        alert("დაყოვნება არაა ვალიდური")
    }
}
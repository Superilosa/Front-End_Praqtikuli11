box = document.getElementById("square1")
root = document.documentElement;
transX = "0"
transY = "0"

//ზემოთ
function b1(){
    transY = "-100%"
    transCSS()
    box.style.animationName = "bottom"
    setTimeout(function(){
        box.style.top = "100%"
        trans()
    },5000)
}
//ქვემოთ
function b2(){
    transY = "0"
    transCSS()
    box.style.animationName = "top"
    setTimeout(function(){
        box.style.top = "0"
        trans()
    },5000)
}
//მარცხნივ
function b3(){
    transX = "0"
    transCSS()
    box.style.animationName = "left"
    setTimeout(function(){
        box.style.left = "0"
        trans()
    },5000)
}
//მარჯვნივ
function b4(){
    transX = "-100%"
    transCSS()
    box.style.animationName = "right"
    setTimeout(function(){
        box.style.left = "100%"
        trans()
    },5000)
}
//ქვემოთ-მარცხნივ
function b5(){
    transX = "0"
    transY = "-100%"
    transCSS()
    box.style.animationName = "bottom-left"
    setTimeout(function(){
        box.style.left = "0"
        box.style.top = "100%"
        trans()
    },5000)
}
//ქვემოთ-მარჯვნივ
function b6(){
    transX = "-100%"
    transY = "-100%"
    transCSS()
    box.style.animationName = "bottom-right"
    setTimeout(function(){
        box.style.left = "100%"
        box.style.top = "100%"
        trans()
    },5000)
}
//ზემოთ-მარცხნივ
function b7(){
    transX = "0"
    transY = "0"
    transCSS()
    box.style.animationName = "top-left"
    setTimeout(function(){
        box.style.left = "0"
        box.style.top = "0"
        trans()
    },5000)
}
//ზემოთ-მარჯვნივ
function b8(){
    transX = "-100%"
    transY = "0"
    transCSS()
    box.style.animationName = "top-right"
    setTimeout(function(){
        box.style.left = "100%"
        box.style.top = "0"
        trans()
    },5000)
}

//ცვლის CSS-ში translate ცვლადებს ანიმაციისთვის
function transCSS(){
    root.style.setProperty("--transX",transX)
    root.style.setProperty("--transY",transY)
}

//ცვლის translate ატრიბუტებს რომ დარჩეს ანიმაციის შემდეგ
function trans(){
    box.style.transform = "translateX("+transX+") translateY("+transY+")"
}
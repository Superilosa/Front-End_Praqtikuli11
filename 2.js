function addChild(object, tag){
    var element = document.createElement(tag)
    object.appendChild(element)
}

function addText(object, text){
    object.innerText = text
}

var body = document.body
addChild(body,"div")

var div = document.getElementsByTagName("div")[0]
addChild(div,"p")

var p = document.getElementsByTagName("p")[0]
addText(p,"Teqsti chawerili p-shi addText funqciit. Amocana 7(2.). ტექსტი ჩაწერილი პში ადდტექსტ ფუნქციით. ამოცანა 7(2.)")
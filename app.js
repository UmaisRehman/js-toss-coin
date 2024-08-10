var input = document.querySelector("#text")
var image = document.querySelector("#result")
var masjid = 1
var chand = 2

function sand(btn){
    console.log(btn)
    var Rnumber = Math.ceil(Math.random()*2)
    console.log(Rnumber)

    if(Rnumber == masjid ){
        input.innerHTML = "You win masjid"
        image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt9lv2yMz8SDHAbwcRwF4ZdpyoujdondwImw&s"
    }else{
        input.innerHTML ="You win chand"
        image.src = "https://en.numista.com/catalogue/photos/pakistan/423-original.jpg"
    }


}
function retry(){
    var camefrom =  localStorage.getItem("camefrom");
    if(camefrom ==2 ){
     window.location.href = "./advanced.html"
 
    } else if(camefrom ==3 ){
        window.location.href = "./insane.html"
    
       }
    
    else{
     window.location.href = "./page2.html"
 
    }}
function mainmenu(){
    window.location.href = "./index.html"
}
window.addEventListener("load",()=> {
    var lang = localStorage.getItem("lang");
    if(lang == 3){
        document.getElementById("BTN1").value = "الرئيسية"
        document.getElementById("BTN2").value =  "دور جديد"
        document.getElementById("loseH").innerHTML = "احزنني و الله يحج"
        document.getElementById("loseP").innerHTML = "حابب تلعب كمان دور ولا بدك تشرد؟"
    }
    if(lang == 4){
        document.getElementById("BTN1").value = "Hauptseite"
        document.getElementById("BTN2").value =  "wiederholen"
        document.getElementById("loseH").innerHTML = "Du hast verloren :["
        document.getElementById("loseP").innerHTML = "Willst du wieder spielen oder einfach gehen?"
    }
    if(lang == 5){
        document.getElementById("BTN1").value = "메인 페이지"
        document.getElementById("BTN2").value =  "다시 해 보다"
        document.getElementById("loseH").innerHTML = "당신이 지는 것을 보는 것은 슬프다 ;["
        document.getElementById("loseP").innerHTML = "다시 게임을 하시겠습니까, 아니면 그냥 나가시겠습니까?"
    }
})
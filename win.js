function retry(){
   var camefrom =  localStorage.getItem("camefrom");
   if(camefrom ==2 ){
    window.location.href = "./advanced.html"

   }
   else if(camefrom ==3 ){
    window.location.href = "./insane.html"

   }
   else{
    window.location.href = "./page2.html"

   }

}
function mainmenu(){
    window.location.href = "./index.html"
}
window.addEventListener("load",()=> {
    var lang = localStorage.getItem("lang");
    if(lang == 3){
        document.getElementById("wonH").innerHTML = "مبروك النصر يبو شريك"
        document.getElementById("wonP").innerHTML = "حابب تلعب كمان دور ولا بدك تشرد؟"
        document.getElementById("BTN1").value = "الرئيسية"
        document.getElementById("BTN2").value =  "دور جديد"
    }
    if(lang == 4){
        document.getElementById("wonH").innerHTML = "Herzlichen Glückwunsch!"
        document.getElementById("wonP").innerHTML = "was für ein gewinn! Willst du es noch einmal versuchen oder einfach gehen?"
        document.getElementById("BTN1").value = "Hauptseite"
        document.getElementById("BTN2").value =  "wiederholen"
    }
    if(lang == 5){
        document.getElementById("wonH").innerHTML = "축하해 얘야"
        document.getElementById("wonP").innerHTML = "난 네가 이길 줄 알았어 ;) 한 번 더 해봐"
        document.getElementById("BTN1").value = "메인 페이지"
        document.getElementById("BTN2").value =  "다시 해 보다"
    }
})
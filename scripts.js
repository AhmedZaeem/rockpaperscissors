
function begingame(){ 
    var x = document.getElementById("numinput").value;
    var e = document.getElementById("gamemode").value; 
    var e2 = document.getElementById("lang").value; 
    

    if(x%2 != 0 && e != 1  && e2 != 1 ){

       localStorage.setItem("rounds",x);
      
       localStorage.setItem("lang",e2);
       if (e == 2){
        window.location.href = "./page2.html"

       }
       else if (e == 3){
        window.location.href = "./advanced.html"

       }else if (e == 4){
        window.location.href = "./insane.html"

       }

    }
    else{
        document.getElementById("errorMSG").innerHTML = "Please make sure you've chosen an odd number of rounds and a language and a gamemode"
    }
}
function infobtn(){
    var e = document.getElementById("gamemode").value; 
    if(e == 1){
        window.location.href = "./info.html"

    }
   else if(e == 3){
        window.location.href = "./info2.html"

    }
    else if(e == 4){
        window.location.href = "./info3.html"

    }
    else{
        window.location.href = "./info1.html"

    }
    
}
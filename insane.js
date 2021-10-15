var roundsleft = 0;
var truerounds =0;
var selectedlang ;
window.addEventListener("load",()=> {
var rounds = localStorage.getItem("rounds");
var lang = localStorage.getItem("lang");
if(lang == 3){
  document.getElementById("title").innerHTML = "حجرة ورقة مقص"
}
if(lang == 4){
  document.getElementById("title").innerHTML = "Schere, Stein, Papier"
}
if(lang == 5){
  document.getElementById("title").innerHTML = "가위 바위 보"
}

truerounds = rounds;
selectedlang = lang;
roundsleft = Math.floor(--rounds/2);
})
const scoreDiv = document.querySelector(".scoreboard");
const resDiv = document.getElementById("MSG");
const choisen = document.getElementById("chosenchoice");
const cMsg = document.getElementById("choosemessage");
const handOptions = {
    "sponge": document.getElementById("sponge"),
    "paper":document.getElementById("paper"),
    "air": document.getElementById("air"),
    "water":document.getElementById("water"),
    "dragon": document.getElementById("dragon"),
    "devil": document.getElementById("devil"),
    "lightning":document.getElementById("lightning"),
    "gun": document.getElementById("gun"),
    "rock":document.getElementById("rock"),
    "fire": document.getElementById("fire"),
    "scissors": document.getElementById("scissors"),
    "snake":document.getElementById("snake"),
    "human": document.getElementById("human"),
    "tree":document.getElementById("tree"),
    "wolf": document.getElementById("wolf")
  };

  let pScoreSpan = document.getElementById("userscore");
  let bScoreSpan = document.getElementById("botscore");
  let pScore = 0;
  let bScore = 0;


  handOptions.sponge.addEventListener('click', ()=>{startgame("sponge");})
  handOptions.paper.addEventListener('click', ()=>{startgame("paper");})
  handOptions.air.addEventListener('click', ()=>{startgame("air");})
  handOptions.water.addEventListener('click', ()=>{startgame("water");})
  handOptions.dragon.addEventListener('click', ()=>{startgame("dragon");})
  handOptions.devil.addEventListener('click', ()=>{startgame("devil");})
  handOptions.lightning.addEventListener('click', ()=>{startgame("lightning");})
  handOptions.gun.addEventListener('click', ()=>{startgame("gun");})
  handOptions.rock.addEventListener('click', ()=>{startgame("rock");})
  handOptions.fire.addEventListener('click', ()=>{startgame("fire");})
  handOptions.scissors.addEventListener('click', ()=>{startgame("scissors");})
  handOptions.snake.addEventListener('click', ()=>{startgame("snake");})
  handOptions.human.addEventListener('click', ()=>{startgame("human");})
  handOptions.tree.addEventListener('click', ()=>{startgame("tree");})
  handOptions.wolf.addEventListener('click', ()=>{startgame("wolf");})
  

  var winMsg = ["You're crushing it!" , "Wow! what a choice!" , "That's Rampage!" , "Looks like it's your day ", "Have you been practicing lately? " , "Come on let me win or I will close this site :[" , "I've lost to you... wow", "Brooo hell noooo","Keep it up and you might beat me...MIGHT","Got lucky for a round?" , "I can see the smile on your face" , "No comment" , "Haven't seen a play like that since 2021.. that's when I was born", "I'm a computer come on why are you playing like that :(" , "Tired yet?!","Don't celebrate yet","Loosers luck? huh!"]

  var loseMsg = ["Maybe one day you'll beat me" , "You've lost this round but it's ok","Don't cry","I'm the best","Looks like you can't fight a stupid machine","Keep it up baby!","Go play fortnite","Have you ever won?","Don't be a loser just be yourself.. even thou they're both the same thing","Come on am I playing alone?","Go play a game that you can play not a game you can afford","Have you ever heard of TDK? just saying..","How old are you man!","You have a meesage from me that says leave this game","Still trying?","For how many times should I beat you?"]
  var drawMsg = ["Wow!! we've got the same choice!","Huh! trying to copy me?","A draw won't makes us lose right?","Hmmm.. Draw????","Draw then draw then lose","I know your moves", "It's you who's copying me","Look who's trying to be me!","Draw?! how silly !","Looks like the dev allowed draws","It's ok it's ok","Coming to beat you after a draw break"]

 function playerwin(language){
 if(pScore == roundsleft){
  localStorage.setItem("camefrom",3);

  window.location.href = "./win.html"
 }else{
  pScoreSpan.innerHTML =  ++pScore;
  if(language == 3){
    cMsg.innerHTML = "اختار بشويش عشان بس ضايل "+ --truerounds + "راوندات شد حيلك "

  }
  else if (language == 4){
    cMsg.innerHTML = "Wählen Sie mit Bedacht.. nur "+ --truerounds +" Runden übrig"

  }
  else if (language == 5){
    cMsg.innerHTML = "현명하게 선택하세요..만 "+ --truerounds +" 남은 라운드"
  
  }
  else{
    cMsg.innerHTML = "Chose wisly.. only "+ --truerounds +" rounds left"

  }
  resDiv.innerHTML = winMsg[ Math.floor(Math.random()*winMsg.length)]
 }
 }


 function draw(language){
  if(language == 3){
    cMsg.innerHTML = "اختار بشويش عشان بس ضايل "+ truerounds + "راوندات شد حيلك "


  }else if (language == 4){
    cMsg.innerHTML = "Wählen Sie mit Bedacht.. nur "+ truerounds +" Runden übrig"

  }
  else if (language == 5){
    cMsg.innerHTML = "현명하게 선택하세요..만 "+ truerounds +" 남은 라운드"
  
  }
  else{
    cMsg.innerHTML = "Chose wisly.. only "+ truerounds +" rounds left"

  }
  resDiv.innerHTML = drawMsg[ Math.floor(Math.random()*drawMsg.length)]

}


 function playerlose(language){
  if(bScore == roundsleft){
    localStorage.setItem("camefrom",3);

    window.location.href = "./lose.html"
  }
  else{

    if(language == 3){
      cMsg.innerHTML = "اختار بشويش عشان بس ضايل "+ --truerounds + "راوندات شد حيلك "

  
    }
   if (language == 4){
    cMsg.innerHTML = "Wählen Sie mit Bedacht.. nur "+ --truerounds +" Runden übrig"

  }
}  if (language == 5){
  cMsg.innerHTML = "현명하게 선택하세요..만 "+ --truerounds +" 남은 라운드"

}
    else{
      cMsg.innerHTML = "Choose wisely.. only "+ --truerounds +" rounds left"
  
    }
    bScoreSpan.innerHTML =  ++bScore;
    resDiv.innerHTML = loseMsg[ Math.floor(Math.random()*loseMsg.length)]
  
  }
 
 
  function getbotchoice(){
  const bChoice = Math.floor(Math.random()*15);
  const bChoices = ["sponge","paper","air","water","dragon","devil","lightning","gun","rock","fire","scissors","snake","human","tree","wolf"];
  return bChoices[bChoice];
 }


  function startgame(Choice){

    if (selectedlang == 3){
     loseMsg = ["يزم عالفاضي ما تحاول معي" , "عفكرة ما حد غلبني قبل هيك","اصحك تعيط","يلا قربت اخلص الجيم","علمت عليك","بتعرف انتا شو بنلعب صح؟؟","روح العب فورتنايت","و الله حزنان عليك","مش عارف تغلب بوت؟","حاسس حالي بلعب لحالي","انا بقول تشوفلك لعبة ثانية احسن","كيفك اليوم منيح؟","اكم عمرك يا شاطر","وصلك مسج مني بيقولك انقلع","لليوم ضايل انتا هنا بتحاول؟","لكم مرة لازم امسح فيك الموقع؟"]
     drawMsg = ["سبحان الله! نفس الخيار","بكفي هبل يا زلمة و العب","تعادل تعادل مش قصة","تعادل؟؟؟؟؟؟؟","ما تفكر ان التعادل هو اشارة برتقالية","بعرف كل حركاتك", "انتا الي بتقلدني مش العكس","بالله جد؟؟؟","ياااا راااجل","العب مود ثاني مش تتشاطر علي هنا","تقلقش تقلقش","حغلبك يعني حغلبك حتى لو تعادل هلقيت"]
     winMsg = ["يا زلمة و الله انك لعيب" , "كبير يا حج" , "عرفنا انك بتعرف تلعب تتفلسفش" , "ما تاخدليش بحالك مقلب ", "ول ول ول ول ول " , "و الله بفجر الموقع هلقيت هاا" , "فكرتك لاعب فورتنايت طلعت لاعب باتل فيلد", "اوه شيت هير وي جو اجين","نازل اليوم خبط هدي اللعب","يااااا شااكر!! يا شاكر" , "بيني و بينك دايما بسأل حالي ليش انا هان" , "لا تعليق يحج عشرة على عشرة" , "صب يباشا صب مش أول خسارة الي..", "على فكرة انا بوت يعني بنت فعشان هيك فوزني" , "و الله انك هكر","كان بودي كمبرمج أحط اشي هنا بس اللغة العربية مستفزة","العب العب ما تصدق حالك"]
    }
     if (selectedlang == 4){
       winMsg = ["YDu zerquetschst es!" , "Beeindruckend! was für eine wahl!" , "Das ist Rampage!" , "Sieht aus als wäre es dein Tag ", "Hast du in letzter Zeit geübt? " , "Komm lass mich gewinnen oder ich schließe diese Seite :[" , "Ich habe gegen dich verloren... wow", "Bruder hell noooo","Mach weiter so und du könntest mich schlagen ... KÖNNTE","Haben Sie Glück für eine Runde?" , "Ich kann das Lächeln in deinem Gesicht sehen" , "Kein Kommentar" , "So ein Theaterstück habe ich seit 2021 nicht mehr gesehen.. da wurde ich geboren", "Ich bin ein Computer, komm schon, warum spielst du so? :(" , "Noch müde?!","Feiern Sie noch nicht","Verlierer Glück? äh!"]
       loseMsg = ["Vielleicht besiegst du mich eines Tages" , "Du hast diese Runde verloren, aber es ist ok","Weine nicht","Ich bin der Beste","Sieht so aus, als könntest du eine dumme Maschine nicht bekämpfen","Weiter so Baby!","Geh spielen Fortnite","Haben Sie schon einmal gewonnen?","Sei kein Verlierer, sei einfach du selbst.. auch wenn sie beide dasselbe sind","Komm, spiele ich alleine?","Spiel ein Spiel, das du spielen kannst, kein Spiel, das du dir leisten kannst","Schon mal was von TDK gehört? nur sagen..","Wie alt bist du, Mann!","Du hast eine Nachricht von mir, die sagt, verlasse dieses Spiel","Versuche immer noch?","Wie oft soll ich dich schlagen?"]
       drawMsg = ["Beeindruckend!! Wir haben die gleiche Wahl!","Huch! versuchst du mich zu kopieren?","Ein Unentschieden bringt uns nicht zum Verlieren, oder?","Hmm.. Zeichnen????","Ziehe, dann ziehe, dann verliere","Ich kenne deine Bewegungen", "Du bist es, der mich kopiert","Schau, wer versucht, ich zu sein!","Zeichnen?! Wie albern !","Sieht so aus, als hätte der Entwickler Draws erlaubt","Es ist in Ordnung, es ist in Ordnung","Kommen, um dich nach einer Unentschieden-Pause zu schlagen"]
    }
    if (selectedlang == 5){
      winMsg = ["당신은 그것을 부수고있어!" , "우와! 어떤 선택을!" , "램페이지입니다!" , "너의 하루인 것 같아 ", "최근에 연습을 하고 있습니까? " , "어서 이기게 하지 않으면 이 사이트를 닫을 것입니다 :[" , "너에게 졌어... 와우", "왜 그렇게 무례합니까 :[","계속하면 나를 이길 수 있습니다 ... ~ 할 것 같다","라운드 운이 좋았습니까?" , "나는 당신의 얼굴에 미소를 볼 수 있습니다" , "노코멘트" , "2021년 이후로 그런 연극은 본 적이 없다.. 그때 내가 태어났다.", "난 컴퓨터인데 왜 그렇게 놀아요 :(" , "아직 피곤해?!","아직 축하하지 마세요","Loosers luck? huh!"]
      loseMsg = ["언젠가는 날 이길지도 몰라" , "이번 라운드에서 졌지만 괜찮아","울지마","내가 최고야", "바보같은 기계랑 못 싸우나봐","힘내라 자기야!","놀다 Fortnite","이긴 적이 있습니까?","패자하지 말고 너 자신이 되십시오. 둘 다 같은 것이더라도","나 혼자 놀아?","감당할 수 있는 게임이 아니라 할 수 있는 게임을 하세요.","TDK라고 들어보셨나요? 그냥 말..","당신은 몇 살입니다!","이 게임에서 나가라는 메시지가 있습니다.","아직 시도 중이신가요?","몇 번을 때려야 합니까?"]
      drawMsg = ["우와!! 우리는 같은 선택을했습니다!","뭐! 나를 모방하려고?","무승부가 우리를 지게 만들지 않습니까?","흠.. 무승부????","무승부 후 패","나는 당신의 움직임을 알고", "날 따라하는 건 너야","누가 내가 되려고 하는지 봐!","그리다?! 얼마나 어리석은가!","개발자가 무승부를 허용한 것 같습니다.","괜찮아 괜찮아","무승부 휴식 후 당신을 이길 것입니다"]
    }
    const bChoice = getbotchoice();
    const arCh = ["ذئب","شجرة","انسان","أفعى","مقص","نار","حجرة","مسدس","صعقة","شيطان","تنين","ماء","هواء","ورقة","اسفنحة"];
  
    const grCh = ["Schwamm","Papier","Luft","Wasser","Drachen","Teufel","Blitz","Pistole","Felsen","Feuer","Schere","Schlange","Mensch","Baum","Wölfin"];
  
    const krCh = ["스펀지","종이","공기","물","용","악마","번개","총","바위","불","가위","뱀","인간","나무","늑대"];
  
    var index;
    var index2;

    if(Choice == "sponge"){index = 0}
    if(Choice == "paper"){index = 1}
    if(Choice == "air"){index = 2}
    if(Choice == "water"){index = 3}
    if(Choice == "dragon"){index = 4}
    if(Choice == "devil"){index = 5}
    if(Choice == "lightning"){index = 6}
    if(Choice == "gun"){index = 7}
    if(Choice == "rock"){index = 8}
    if(Choice == "fire"){index = 9}
    if(Choice == "scissors"){index = 10}
    if(Choice == "snake"){index = 11}
    if(Choice == "human"){index = 12}
    if(Choice == "tree"){index = 13}
    if(Choice == "wolf"){index = 14}

    if(bChoice == "sponge"){index2 = 0}
    if(bChoice == "paper"){index2 = 1}
    if(bChoice == "air"){index2 = 2}
    if(bChoice == "water"){index2 = 3}
    if(bChoice == "dragon"){index2 = 4}
    if(bChoice == "devil"){index2 = 5}
    if(bChoice == "lightning"){index2 = 6}
    if(bChoice == "gun"){index2 = 7}
    if(bChoice == "rock"){index2 = 8}
    if(bChoice == "fire"){index2 = 9}
    if(bChoice == "scissors"){index2 = 10}
    if(bChoice == "snake"){index2 = 11}
    if(bChoice == "human"){index2 = 12}
    if(bChoice == "tree"){index2 = 13}
    if(bChoice == "wolf"){index2 = 14}

     if(selectedlang == 3){
      choisen.innerHTML = " انت اخترت " + arCh[index] +" و الاخ اختار " + arCh[index2]

     }
     else if(selectedlang == 4){
      choisen.innerHTML = "Sie haben gewählt " + grCh[index] +" und der Bot hat gewählt " + grCh[index2]

    }
    else if(selectedlang == 5){
      choisen.innerHTML = "선택하셨습니다 " + krCh[index] +" 로봇이 선택한 " + krCh[index2]

    }
    else{
      choisen.innerHTML = "You've chosen " + Choice +" and the bot have chosen " + bChoice
    }

    if((Choice == "rock"&& (bChoice=="scissors"|| bChoice=="fire" || bChoice=="snake" || bChoice=="human" || bChoice=="wolf" || bChoice=="sponge" || bChoice=="tree"))||(Choice == "scissors"&& (bChoice=="paper" || bChoice=="air" || bChoice=="tree" || bChoice=="snake" || bChoice=="human" || bChoice=="wolf" || bChoice=="sponge")) ||(Choice == "paper"&& (bChoice=="rock" || bChoice=="air" || bChoice=="water" ||
     bChoice=="devil" || bChoice=="dragon" || bChoice=="gun" || bChoice=="lightning")) || (Choice=="fire" &&(bChoice=="scissors" || bChoice=="paper" || bChoice=="snake" || bChoice=="human" || bChoice=="tree" || bChoice=="wolf" || bChoice=="sponge")) || (Choice == "snake" && (bChoice == "human" || bChoice=="wolf" || bChoice=="sponge" || bChoice=="tree" || bChoice=="paper" || bChoice=="air" || bChoice=="water")) || (Choice == "human" && (bChoice=="tree" || bChoice=="wolf" || bChoice=="sponge" || bChoice=="paper" || bChoice=="air" || bChoice=="water" || bChoice=="dragon")) || (Choice=="tree" && (bChoice=="wolf" || bChoice=="dragon" || bChoice=="sponge" || bChoice=="paper" || bChoice=="air" || bChoice=="water" || bChoice=="devil"))
     || (Choice == "wolf" && (bChoice=="sponge" || bChoice=="paper" || bChoice=="air" || bChoice=="water" || bChoice=="dragon" || bChoice=="devil" || bChoice=="lightning")) || (Choice == "sponge" && (bChoice=="paper" || bChoice=="air" || bChoice=="water" || bChoice=="devil" || bChoice=="dragon" || bChoice=="lightning")) || (Choice == "air" && (bChoice=="fire" || bChoice=="rock" || bChoice=="water" || bChoice=="devil" || bChoice=="gun" || bChoice=="dragon" || bChoice=="lightning")) || 
     (Choice == "water" && (bChoice=="devil" || bChoice=="dragon" || bChoice=="rock" || bChoice=="fire" || bChoice=="scissors" || bChoice=="gun" || bChoice=="lightning")) 
     || (Choice == "dragon" && (bChoice=="devil" || bChoice=="lightning" || bChoice=="fire" || bChoice=="rock" || bChoice=="scissors" || bChoice=="gun" || bChoice=="snake")) || (Choice == "devil" && (bChoice == "rock" || bChoice=="fire" || bChoice=="scissors" || bChoice=="gun" || bChoice=="lightning" || bChoice=="snake" || bChoice=="human")) || (Choice == "lightning" && (bChoice=="gun" || bChoice=="scissors" || bChoice=="rock" || bChoice=="tree" || bChoice=="fire" || bChoice=="snake" || bChoice=="human")) ||
     (Choice == "gun" && (bChoice=="rock" || bChoice=="tree" || bChoice=="fire" || bChoice=="scissors" || bChoice=="snake" || bChoice=="human" || bChoice=="wolf")) ){
      playerwin(selectedlang);
    }
    else if(Choice == bChoice){
    draw(selectedlang)
    }
    else{
     playerlose(selectedlang)
    }
  }

  
 
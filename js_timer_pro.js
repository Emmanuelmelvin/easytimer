var sec = 0;
var min = 0;
function Displaymin(some){   
    if(min == 2){clearInterval(timer_min)}
    else {
        let y = String(some);
        if (y.length === 1){
            let x = document.getElementById("minutes");
            x.innerHTML = "0" + some + ":";
        } else {
        let x = document.getElementById("minutes");
        x.innerHTML = some + ":";}}
    }
function Displaysec(some){
    if (min == 2 && sec === 0){clearInterval(timer_sec)}
   let y = String(some);
    if (y.length === 1){
        let x = document.getElementById("seconds");
        x.innerHTML = "0" + some ;
    } else {
    let x = document.getElementById("seconds");
    x.innerHTML = some ;
}}
let timer_sec = setInterval(function(){
    if (sec < 59){sec += 1}
    else {sec = 0}
    Displaysec(sec)
},1000);
let timer_min = setInterval(function(){
    if (min < 60){min += 1}
    else {min = 0}
    Displaymin(min)
},60 * 1000);
























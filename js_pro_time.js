function Displaysec(some){
    let x = String(some);
    if(x.length == 1){
        document.getElementById("seconds").innerHTML = "0" + some;
    } else { document.getElementById("seconds").innerHTML = some;} 
}
function Displaymin(some){
    let x = String(some);
    if(x.length == 1){
        document.getElementById("minutes").innerHTML = "0" + some + ":";
    } else {document.getElementById("minutes").innerHTML = some + ":"}
}
function Displayhour(some){
    let x = String(some);
    if(x.length == 1){
        document.getElementById("hours").innerHTML = "0" + some + ":"
    } else {document.getElementById("hours").innerHTML = some + ":"}
}
const d_now = new Date();
let  num = d_now.getTime();
let x = d_now.getFullYear();
let y = d_now.getMonth();
let z = d_now.getDate();
let a = d_now.getHours();
let b = d_now.getMinutes();
let c = d_now.getSeconds();
var hour = a + 0;
let min = b + 0;
let sec = c + 15 + 2;
    const date = new Date(x,y,z,hour,min,sec).getTime();
    let timer = function (){
        const d_now = new Date();
        let  num = d_now.getTime();
        let distance = date - num;
        var h = Math.floor((distance % ( 1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var s = Math.floor((distance % (1000 * 60)) / (1000));
        if (h == 0 && m === 0 && s == 0){
            clearInterval(Time);
            document.getElementById("audio").style.display = "block";
        }
     Displayhour(h);
     Displaymin(m);
     Displaysec(s);
    }
    const Time = setInterval(timer,1000);

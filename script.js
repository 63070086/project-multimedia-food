var scrollBefore = 0;
var moveHam = 0;
var winHeight = window.innerHeight;
var time = 0;
var num_pig = 4;
var burHeight = 0;
var time2 = 0;
var run = 0;
var lastHeight = 0;
window.addEventListener('scroll',function(e){
    scrolled = window.scrollY;
    moveHam += 10;
    if (scrolled <= winHeight){
        perHeight = (scrolled*100)/winHeight;
        document.getElementById('ham').style.transform = `translate(-${perHeight*0.5}vw, ${perHeight*1.2}vh)`;
    }
    if ((scrolled <= winHeight*6) && (scrolled >= winHeight*5)){
        perHeight = (((scrolled)*100)/winHeight)-500;
        if (perHeight > 70){
            document.getElementById('burger').style.transform = `translate(-${perHeight-75}vw, ${perHeight*1.5}vh)`;
            lastHeight = perHeight-75;
        }else{
            document.getElementById('burger').style.transform = `translate(0, ${perHeight}vh)`;
        }
    }else if ((scrolled <= winHeight*7) && (scrolled >= winHeight*6)){
        perHeight = (((scrolled)*100)/winHeight)-600;
        document.getElementById('character').style.transform = `translateX(${perHeight}vw)`;
        document.getElementById('burger').style.transform = `translate(-${lastHeight}vw, ${150}vh)`;
        console.log(lastHeight);
    }
})

setInterval(function(){
    time += 1;
}, 500)
function add_pig(){
    num_pig -= 1;
    if (num_pig <= 0){
        return 0;
    }
    const div = document.createElement('div');
    div.className = "child-pig";
    document.getElementById('pigground').appendChild(div);
}
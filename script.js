setInterval(function(){
    if (window.scrollY >= window.innerHeight*0.5){
        u1.style.transform = "rotateY(360deg)";
    }else{
        u1.style.transform = "rotateY(0deg)";
    }
    if (window.scrollY >= window.innerHeight){
        u2.style.transform = "rotateY(360deg)";
    }else{
        u2.style.transform = "rotateY(0deg)";
    }
    if (window.scrollY >= window.innerHeight*2){
        u3.style.transform = "rotateY(360deg)";
    }else{
        u3.style.transform = "rotateY(0deg)";
    }
}, 1000)
function notice(){
    if (f_name.value != ""){
        notice_btn.style.transform = "scale(1)";
        input.style.transform = "scale(0)";
    }
    
}
function disable(){
    notice_btn.style.transform = "scale(0)";
    input.style.transform = "scale(1)";
    input.value = "";
}
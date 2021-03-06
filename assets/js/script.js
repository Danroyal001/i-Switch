$(document).ready(function () {
    $(window).scroll(function () {
        var sc = $(window).scrollTop();
        if (sc > 100) {
            $(".navbar").addClass("sticky");
        }
        else {
            $(".navbar").removeClass("sticky");
        }
        if(sc > 3000){
            $(".navbar").addClass("none");
        }else{
            $(".navbar").removeClass("none");
        }
    });

    if($(".swiper-container").hasClass("team-member-slider")){
        var swiper = new Swiper('.swiper-container',{
            slidesPerView:3,
            allowTouchMove:true,
            loop:true,
            centeredSlides:true,
            slideToclickedslide:true,
            effect: "coverflow",
            grabcursor:true,
            autoplay:false,
            navigation:{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            coverflow:{
                rotate:0,
                stretch:100,
                depth:200,
                modifier:1,
                slideShadows:false
            },
            breakpoints:{
                767:{
                    slidesPerView:1,
                    centeredSlides:false,
                    effect:"slide",
                }
            }
        });
    }
});

window.onscroll = function() {
    scrollFunction()
};
function scrollFunction(){
    if (document.body.scrollTop > 20 || 
        document.documentElement.scrollTop > 20){
            document.getElementById("scrollButton").style.display = "block";
        } else{
            document.getElementById("scrollButton").style.display = "none";
        }
}

function upFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function ISWITCH (){
    const name = document.forms["ConForm"]["Name"]
    const text = document.forms["ConForm"]["Text"]

    if (name.value == ""){
        window.alert('Please enter your name.');
        name.focus();
        return false;
    }
    if(text.value == ""){
        window.alert("Please we'll love your input");
        text.focus();
        return false
    }
    return true
}
$(document).on("click",function(e){
    if(e.target.id === "btn1"){
        $("#img1").toggleClass("is__hidden");
    }
    else if(e.target.id === "btn2"){
        $("#img2").toggleClass("is__hidden");
    }
    
})


var i=1;
var img = document.getElementsByClassName("lun_img")[0];
var buto= document.getElementById("buto1")[0];
// setInterval(function() {
//           lun();      
//        }, 1000);
buto.click=function(){
    if(i++>5) i=1;
     img.src="./picture/lun"+i+".jpg";
}

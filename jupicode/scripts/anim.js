document.body.addEventListener('load', anim, true);
function anim () {
 var headers = document.getElementsByClassName("are-hero-headers")[0],
     image = document.getElementsByClassName("is-hero-custom-bg")[0];
    
  if(headers){
    console.log("headers");
       headers.style.left = 0;
     }
  image.style.right = 0;


}
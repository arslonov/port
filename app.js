
function sweetalertclick(){
    swal("Sardorbek Rajabov!", "You are Welcome!", "success");
  }
  var container = document.getElementById("imageContainer");
function change_img(image){
    container.src = image.src;
}

var scroll = document.getElementById("top");
window.addEventListener("scroll", function(){
  scroll.style.transform = "rotate("+window.pageYOffset+"deg)";
})

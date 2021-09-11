var reduire = document.querySelectorAll(".reduire");
console.log(reduire)
for(var i = 0; i < reduire.length; i++){
  reduire[i].addEventListener("click", function(){
    var result = this.nextElementSibling;
    result.classList.toggle("active");

     if(this.firstElementChild.innerText === "+"){
       this.firstElementChild.innerText = "-"
       }
    else{
      this.firstElementChild.innerText = "+"
    }

  })
}
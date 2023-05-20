let btn = document.querySelector(".calculator");
let display = document.querySelector(".display");
let num="";
let bufferedValue = 1;
  btn.addEventListener("click", function(e){
    num = e.target.innerText;
    //console.log(typeof num);
    bufferedValue += num;
    //console.log(bufferedValue);
    display.innerText = bufferedValue;
  })

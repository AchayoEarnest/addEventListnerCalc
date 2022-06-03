var num_one = document.getElementById("num_1");
var num_two = document.getElementById("num_2");
var total = document.getElementById("add_sum");


num_one.addEventListener("input", addNum);
num_two.addEventListener("input", addNum);

function addNum(){
  var one = parseFloat(num_one.value) || 0;
  var two = parseFloat(num_two.value) || 0;
  var sum = one + two;
  total.innerHTML = "The sum is equals to:" + " " + sum;
  total.style.color = "white";
  total.style.marginTop = "50px";
  total.style.fontSize = "18px";
}

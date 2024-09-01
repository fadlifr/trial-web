var total = 0;

function BookXp() {
  total += 650;
  i = 1;
  var list = document.getElementById("list");
  let li = document.createElement("li");
  li.innerText = i + "x Explorer and Robotics course";
  list.appendChild(li);
  document.getElementById("total").innerHTML = "Total =" + total;
}

var blackStar = "&#9733";
var whiteStar = "&#9734";

//additional
function Review() {
  total = prompt("How many Stars for today’s Wrokshop out of 5?");
  document.write("There are " + total + " Starts for you : <br>");

  for (i = 0; i < total; i++) {
    document.write(blackStar);
  }
  for (i = 0; i <= 5 - total; i++) {
    document.write(whiteStar);
  }
}

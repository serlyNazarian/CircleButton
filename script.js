function givealert() {
  var mydiv = document.createElement("div");
  mydiv.className = "my-div";
  mydiv.innerHTML = "This";
  mydiv.id = "my-div";
  document.getElementById("main-page").appendChild(mydiv);
  mydiv.style = "background-color: red;";

  var mydiv2 = document.createElement("div");
  mydiv2.className = "my-div";
  mydiv2.innerHTML = "Is";
  mydiv2.id = "my-div2";
  document.getElementById("main-page").appendChild(mydiv2);
  mydiv2.style = "background-color: blue;";

  var mydiv3 = document.createElement("div");
  mydiv3.className = "my-div";
  mydiv3.innerHTML = "Mouse";
  mydiv3.id = "my-div3";
  document.getElementById("main-page").appendChild(mydiv3);
  mydiv3.style = "background-color: orange;";
}

function changeColor() {
  var c = document.getElementById("my-div");
  c.style = "background-color: red;";
  var c2 = document.getElementById("my-div2");
  c2.style = "background-color: green;";
  var c3 = document.getElementById("my-div3");
  c3.style = "background-color: blue;";
}

const menu = (x) => {
  console.log(x);
  let a = document.getElementById("headmenu");
  switch (x) {
    case 1:
      a.src = "assets/image/cocoadeluxe.png";
      document.getElementById("namamenu").style.color = "rgb(120, 98, 75)";
      document.getElementById("namamenu").innerHTML = "Cocoa Smoothie";

      break;
    case 2:
      a.src = "assets/image/espresso.png";
      document.getElementById("namamenu").style.color = "rgb(220, 164, 104)";
      document.getElementById("namamenu").innerHTML = "Espresso Smoothie";
      break;
    case 3:
      a.src = "assets/image/mango.png";
      document.getElementById("namamenu").style.color = "rgb(234, 196, 72)";
      document.getElementById("namamenu").innerHTML = "Mango Smoothie";
      break;
    case 4:
      a.src = "assets/image/strawberry.png";
      document.getElementById("namamenu").style.color = "rgb(234, 72, 72)";
      document.getElementById("namamenu").innerHTML = "Strawberry Smoothie";

      break;
  }
};

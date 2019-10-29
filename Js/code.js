var e = document.getElementById("holi");
e.addEventListener("animationstart", listener, false);
e.addEventListener("animationend", listener, false);
e.addEventListener("animationiteration", listener, false);

e.className = "holi";function listener(e) {
  var l = document.createElement("li");
  switch(e.type) {
    case "animationstart":
      l.innerHTML = "Iniciado: tiempo transcurrido " + e.elapsedTime;
      break;
    case "animationend":
      l.innerHTML = "Finalizado: tiempo transcurrido " + e.elapsedTime;
      break;
    case "animationiteration":
      l.innerHTML = "Nueva iteración comenzó a los " + e.elapsedTime;
      break;
  }
  document.getElementById("output").appendChild(l);
}

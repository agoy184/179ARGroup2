let nms = []
let ct = 0;
nms[0] = document.getElementById("i1")
nms[1] = document.getElementById("s2")
nms[2] = document.getElementById("w3")
nms[3] = document.getElementById("d4")
v = document.getElementById("vis")
v.style.visibility = "hidden"
nms[0].onclick = function(){ct = ct==0?1:0;console.log(ct)}
nms[1].onclick = function(){ct = ct==1?2:0;console.log(ct)}
nms[2].onclick = function(){ct = ct==2?3:0;}
nms[3].onclick = function(){ct = ct==3?4:0;v.style.visibility = "visible"}
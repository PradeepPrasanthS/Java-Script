var element = document.createElement('div');

element.style.cssText = "width:200px; height:20px; width: 200px; background:green";

element.onclick = function(){alert('hello');};

document.body.appendChild(element);

//var target = document.getElementById("white");
//
//document.body.insertBefore(element, target);
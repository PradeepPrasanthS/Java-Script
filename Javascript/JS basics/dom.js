var pHello = document.getElementById('hello')
    
pHello.innerText += " new world"

pHello.innerHTML += "<span> Hello World</span>"

pHello.outerHTML = '<h2 id="hello">Hello new world<span> Hello World</span></h2>'

var spanH1 = document.querySelectorAll('h1 span')[0];

spanH1.innerHTML = " new text here!!";
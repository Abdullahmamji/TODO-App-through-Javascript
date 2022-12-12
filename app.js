var mainlist = document.getElementById("main-list");

var input = document.getElementById("take-value");

function addelem(){
    var a = document.createElement("LI");
    var b = document.createTextNode(input.value);
    a.appendChild(b);
    mainlist.appendChild(a);
    console.log(a);

    var c = document.createElement("BUTTON");
    var d = document.createTextNode("Delete");
    c.appendChild(d);
    a.appendChild(c);
    c.setAttribute('class','btn btn-warning ms-3 mt-2');
    c.setAttribute('onclick','del(this)');

    var e = document.createElement("BUTTON");
    var f = document.createTextNode("Edit");
    e.appendChild(f);
    a.appendChild(e);
    e.setAttribute('class','btn btn-danger ms-3 mt-2');
    e.setAttribute('onclick','edit(this)');
}

function del(element){
    element.parentNode.remove();
}
function edit(element){
    element.parentNode.firstChild.nodeValue = prompt();
}
function deleteall(){
    mainlist.innerHTML = "";
}
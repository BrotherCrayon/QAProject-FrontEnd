function pushRules(list){
    var rules = "";

    var listItem = document.getElementById('listItem').value;
    var li = document.createElement("li");
    // var rule = document.createTextNode(w);
    li.appendChild(rule);

    var removeBtn = document.createElement("input");
    removeBtn.type = "button";
    removeBtn.value = "Remove";
    removeBtn.onclick = remove;
    li.appendChild(removeBtn);
    document.getElementById("list").appendChild(li);
}

function remove(e) {
  var el = e.target;
  el.parentNode.remove();
}
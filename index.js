const elem = document.querySelector(".translate");
const text = document.getElementById("text");
const m_box = document.getElementById("output");
url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

function display(message){
    
    m_box.innerText = message;
}

function get_translate(e){
    fetch(url+"?text="+text.value)
    .then(resp => resp.json())
    .then(data => display(data.contents.translated));
}

elem.addEventListener("click", get_translate);
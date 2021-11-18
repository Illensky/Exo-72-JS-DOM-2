let div = document.getElementsByClassName("name-tag");

for ( let i = 0 ; i < div.length ; i++ ) {
    let newItem = document.createElement("p")
    newItem.innerHTML = "HELLO WORLD !"
    div[i].appendChild(newItem)
}










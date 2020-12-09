document.querySelector("#itens")
.addEventListener("wheel", Event => {
    if(Event.deltay > 0){
        Event.target.scrollby(300,0)}

    else {
        Event.target.scrollby(-300,0)
    }
 })
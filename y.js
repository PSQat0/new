let container=document.getElementById("container");
function createSquare(){
    let addedDiv=document.createElement("div");
    addedDiv.style.backgroundColor='red';
    addedDiv.style.maxWidth="5vw";
    addedDiv.style.height="5vw";
    return addedDiv;
}
function createCanvas(rows){
    for(let i=0; i<rows; i++){
        container.appendChild(createSquare());
    }
}
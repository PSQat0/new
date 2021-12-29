let container=document.getElementById("container");

//function creates div squares
function createSquare(){
    let addedDiv=document.createElement("div");
    addedDiv.style.backgroundColor='red';
    // addedDiv.style.maxWidth="5vw";
    // addedDiv.style.height="5vw";
    addedDiv.style.margin='0';
    addedDiv.textContent="123";
    addedDiv.style.textAlign="center";
    
    return addedDiv;
}
//function creates a grid of divs with specified amount of rows and columns 
function createCanvas(rows, columns){
    container.style.setProperty(
        'grid-template-columns',`repeat(${columns},1fr)`
    );
     for(let i=0; i<columns; i++){
         for(let j=0; j<rows; j++){
             container.appendChild(createSquare());
         }
     }

}
createCanvas(15,15);


let container=document.getElementById("container");

//function creates div squares
function createSquare(){
    let addedDiv=document.createElement("div");
    addedDiv.style.border="1px solid black";
    
    addedDiv.style.margin='0';
    addedDiv.className="created"
    
    addedDiv.textContent="";
    
    addedDiv.style.paddingTop="40%";
 
    
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
     hoverColor();
     

}

//change color on hover
function hoverColor(){
    
    let cells=document.querySelectorAll(".created");
    cells.forEach(i=>{
        i.addEventListener('mouseenter',()=>{
           i.style.backgroundColor="red";



            
        }
        
        )
        
    });

}


//function clears the screen and asks for the size of a new one
function clearScreen(){
    const top=document.getElementById("screenclear");
    top.style.display="flex";
    top.style.justifyContent="center";
    
    const reset=document.createElement("button")
    reset.textContent="RESET";
    reset.style.border="2px solid black";
    top.appendChild(reset);
    reset.addEventListener("click",()=>{
        

        let columns=prompt("columns");
        let rows=prompt("rows");
        createCanvas(rows,columns);
       
        
        
    })


}
clearScreen();
createCanvas(16,16);

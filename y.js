let container=document.getElementById("container");
let selectColor="transparent";
clearScreen();
colorPal();
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


function createCanvas(columns,rows){
    container.style.setProperty(
        'grid-template-columns',`repeat(${columns},1fr)`
        
    );
    container.style.setProperty(
        'grid-template-rows',`repeat(${rows},1fr)`
        
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
        i.addEventListener('click',()=>{
           i.style.backgroundColor=selectColor;



            
        }
        
        )
        
    });

}
//select color
function colorPal(){
    let  pallette=document.getElementById("colors");
    
    const colors=["red","green","blue","yellow","pink","white","black"];
    pallette.style.setProperty('grid-template-columns',`repeat(${colors.length},1fr)`)
    const color=(col)=>{
        let c=document.createElement("div");
        c.id=col;
        c.className="color";
        c.style.padding="5%";
        c.style.backgroundColor=col;
        return c


    }
    
  
    for(let i=0; i<colors.length; i++){
        
        
        pallette.appendChild(color(colors[i]));
    }
    let v=document.querySelectorAll(".color");
    v.forEach(e=>{
        e.addEventListener("click",()=>{
            selectColor=e.id;


        })
    })
   
    
    

    
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
        
        container.innerHTML='';
        let columns=prompt("columns");
        let rows=prompt("rows");
        if(columns>100 || rows>100){
           alert("too big")
           columns=0;
           rows=0;
        }else{
            createCanvas(columns,rows);
        
        
        }
        
        
    let c=document.querySelectorAll(".created");
    
    
       
    })


}


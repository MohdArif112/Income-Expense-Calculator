var container= document.getElementsByClassName("container")[0];
var listdiv = document.getElementsByClassName("list")[0];
// console.log("hey");

// var incdiv;
let income=0;
let expense=0;




function addIncome(){

    let input1= document.createElement("input");
    let input2= document.createElement("input");
    let incBtn= document.createElement("button");
    let incDiv= document.createElement("div");
    incDiv.className="incomeDiv";
    
    input1.style.margin="7px";
    input2.style.margin="7px";
    input1.placeholder="Income source";
    input2.placeholder="Amount ";

    input1.style.height="20px";
    input2.style.height="20px";

    incDiv.appendChild(input1);
    incDiv.appendChild(input2);
    incDiv.appendChild(incBtn);
    // console.log("hey")
    container.appendChild(incDiv);

     

    incBtn.innerText="add";
    incBtn.style.padding="10px";
    incBtn.style.margin="5px";
    incBtn.style.borderRadius="10px";
    incBtn.addEventListener("click",()=>{
    
    val1= input1.value;
     val2= input2.value;
     income+=Number(val2);
        alert("You have added "+val1 +" for "+ val2);
       
    });

}


function addExpense(){
    // incDiv.style.visibility="none";
    let input1= document.createElement("input");
    let input2= document.createElement("input");
    let incBtn= document.createElement("button");
    let incDiv= document.createElement("div");

    input1.style.margin="7px";
    input2.style.margin="7px";
    input1.style.height="20px";
    input2.style.height="20px";

    input1.placeholder="Expense source";
    input2.placeholder="Amount ";


    incDiv.appendChild(input1);
    incDiv.appendChild(input2);
    incDiv.appendChild(incBtn);

    container.appendChild(incDiv);

    incBtn.innerText="add";
    incBtn.style.padding="10px";
    incBtn.style.margin="5px";
    incBtn.style.borderRadius="10px";
    incBtn.addEventListener("click",function(){
         val3= input1.value;
         val4= input2.value;
         expense+=Number(val4);
        alert("You have added "+val3 +" for "+ val4);
        

        
    })

}

function display(){
    container.style.display="none";
    let displayIncome= document.createElement("div")
    displayIncome.innerText="Total Income =" + income;
    listdiv.appendChild(displayIncome);

    let displayExpense= document.createElement("div")
    displayExpense.innerText="Total Expense = " + expense;
    
    listdiv.appendChild(displayExpense);

    let saving = document.createElement("h3");
    saving.innerText= "TOTAL SAVING = " +(income- expense);
    listdiv.appendChild(saving);

    let resetDiv= document.createElement("div")

    let resetbtn= document.createElement("button");
    resetbtn.innerText="Reset";
    resetbtn.className="btn";
    resetDiv.appendChild(resetbtn);
    listdiv.appendChild(resetDiv);
    resetbtn.addEventListener("click",function(){
        console.log("hello");
        location.reload();
    })
}
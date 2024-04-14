// adding all the information starts
// JavaScript code for dynamically creating and adding elements

// Create a new div element
var newDiv = document.createElement("div");







// adding all the information end

let showBalance=document.getElementsByClassName("money")[0];//displaying the money


let visible =document.getElementsByClassName("popup");//popup 

let addedAmounts=document.getElementsByClassName("enterAmount");//entering the amount

let errorMsg = document.getElementById("error")//pritting
let errorMsg1= document.getElementById("error1")//pritting

let expenceDivShow=document.getElementById("expenceDiv");//hinding the expenses section before adding the money

//open popup for adding money to the account
function openPopup(){
    

    if (visible.length > 0) {
        visible[0].style.display = "block";
        
    }

    
}


// closing popup after adding the money
let totalMoney=0
function closePopup(){
    
    let addedAmount=addedAmounts[0]

    let totalMoneys=addedAmount.value;
    if(totalMoneys !="" && totalMoneys >0 ){
        totalMoney=totalMoney + parseFloat(totalMoneys);

        showBalance.innerText = totalMoney;
        var headings1 = ["Salary", "debit", totalMoney];
        

        visible[0].style.display="none"
        // addedAmounts.placeholder="7";
        // Reset placeholder
        // addedAmounts.placeholder = "Enter Your Amount";
        expenceDivShow.style.display="block";


        // Loop through the array and create h3 elements
        var newDiv = document.createElement("div");

        // Optional: Add a class to the div
        newDiv.classList.add("transaction");
        headings1.forEach(function(text) {

            // Create a new h3 element
            var h3 = document.createElement("h3");
            // Set the text content of the h3 element
            h3.textContent = text;
            // Append the h3 element to the div
            newDiv.appendChild(h3);
        });
        // Append the div to an existing element with id "container"
        document.getElementById("container").appendChild(newDiv);
    }
    else if(totalMoneys < 0){
        setTimeout(function (){
            errorMsg.innerText="Please enter money in positive number";
            setTimeout(function (){
                errorMsg.innerHTML="";
            },3000)
        },20)
    }
    else{
        setTimeout(function (){
            errorMsg.innerText="Please enter the amount";
            setTimeout(function (){
                errorMsg.innerHTML="";
            },3000)
        },20)
    }
    
}



// Create an array of text content for the h3 elements



// open add expenses
let len=0
function addExpenses(){
    let popup1Open=document.getElementsByClassName("popup1");

    let addExpense =document.getElementById("addExpense");
    let addExpense1=addExpense.value;
    console.log(addExpense1);
    console.log(typeof(addExpense1));

    let ExpenseMsg=document.getElementById("addExpenseMsg");
    let ExpenseMsg1 = ExpenseMsg.value;

    
    if(len%2==0){
        popup1Open[0].style.display="block"
        len++;
    }
    else{
        if(len%2 != 0 && addExpense1 !="" && ExpenseMsg1 !="" && addExpense1 > 0){
            if(addExpense1<=totalMoney){
                popup1Open[0].style.display="none"
                len++;

                //subsracting the money from balance
                totalMoney =totalMoney-addExpense1;
                showBalance.innerText = totalMoney;

                var headings2 = [ExpenseMsg1, "credit", addExpense1];

                // Loop through the array and create h3 elements
                var newDiv = document.createElement("div");

                // Optional: Add a class to the div
                newDiv.classList.add("transaction");
                headings2.forEach(function(text) {

                    // Create a new h3 element
                    var h3 = document.createElement("h3");
                    // Set the text content of the h3 element
                    h3.textContent = text;
                    // Append the h3 element to the div
                    newDiv.appendChild(h3);
                });
                // Append the div to an existing element with id "container"
                document.getElementById("container").appendChild(newDiv);
                
            }
            else{
                setTimeout(function (){
                    errorMsg1.innerText="expense can't be more than Total money";
                    setTimeout(function (){
                        errorMsg1.innerHTML="";
                    },3000)
                },20)
                
            }

        }
        else if(addExpense1 < 0){
            setTimeout(function (){
                errorMsg1.innerText="Expense amount can't be in negative number";
                setTimeout(function (){
                    errorMsg1.innerHTML="";
                },3000)
            },20)
        }
        else if(addExpense1 == ""){
            setTimeout(function (){
                errorMsg1.innerText="Please enter the expenses amount";
                setTimeout(function (){
                    errorMsg1.innerHTML="";
                },3000)
            },20)
        }
        else if(ExpenseMsg1 == ""){
            setTimeout(function (){
                errorMsg1.innerText="Please enter the expenses message";
                setTimeout(function (){
                    errorMsg1.innerHTML="";
                },3000)
            },20)
        }
        
    } 
           
    
    console.log(len);

}





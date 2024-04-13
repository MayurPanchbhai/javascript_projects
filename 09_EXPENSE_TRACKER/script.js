let showBalance=document.getElementsByClassName("money")[0];//displaying the money

let visible =document.getElementsByClassName("popup");//popup 

let addedAmounts=document.getElementsByClassName("enterAmount");//entering the amount

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
    if(totalMoneys !=""){
        totalMoney=totalMoney + parseFloat(totalMoneys);

        showBalance.innerText = totalMoney;
        

        visible[0].style.display="none"
        // addedAmounts.placeholder="7";
        // Reset placeholder
        // addedAmounts.placeholder = "Enter Your Amount";
    }
    else{
        alert("enter the number");
    }
    
}


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
        if(len%2 != 0 &&addExpense1 !="" && ExpenseMsg1 !=""){
            popup1Open[0].style.display="none"
            len++;

            //subsracting the money from balance
            totalMoney =totalMoney-addExpense1;
            showBalance.innerText = totalMoney;

        }
        else if(addExpense1 == ""){
            alert("enter the expenses amount")
        }
        else if(ExpenseMsg1 == ""){
            alert("enter the expenses message")
        }
        
    } 
           
    
    console.log(len);

}
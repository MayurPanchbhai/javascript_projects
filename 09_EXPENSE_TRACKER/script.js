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
    if(totalMoneys !=""){
        totalMoney=totalMoney + parseFloat(totalMoneys);

        showBalance.innerText = totalMoney;
        

        visible[0].style.display="none"
        // addedAmounts.placeholder="7";
        // Reset placeholder
        // addedAmounts.placeholder = "Enter Your Amount";
        expenceDivShow.style.display="block";
    }
    else{
        setTimeout(function (){
            errorMsg.innerText="You entered more money than balance";
            setTimeout(function (){
                errorMsg.innerHTML="";
            },3000)
        },20)
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
        if(len%2 != 0 && addExpense1 !="" && ExpenseMsg1 !=""){
            if(addExpense1<=totalMoney){
                popup1Open[0].style.display="none"
                len++;

                //subsracting the money from balance
                totalMoney =totalMoney-addExpense1;
                showBalance.innerText = totalMoney;
            }
            else{
                setTimeout(function (){
                    errorMsg1.innerText="You entered more money than balance";
                    setTimeout(function (){
                        errorMsg.innerHTML="";
                    },3000)
                },20)
                
            }

        }
        else if(addExpense1 == ""){
            setTimeout(function (){
                errorMsg1.innerText="enter the expenses amount";
                setTimeout(function (){
                    errorMsg1.innerHTML="";
                },3000)
            },20)
        }
        else if(ExpenseMsg1 == ""){
            setTimeout(function (){
                errorMsg1.innerText="enter the expenses message";
                setTimeout(function (){
                    errorMsg1.innerHTML="";
                },3000)
            },20)
        }
        
    } 
           
    
    console.log(len);

}
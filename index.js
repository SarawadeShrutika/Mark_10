const bill_amount=document.querySelector("#bill");
const checkbutton=document.querySelector("#Check");
const cashGiven=document.querySelector("#Cash-given");
const errormessage=document.querySelector("#error-message");

const NoOfNotes=document.querySelectorAll(".No-of-Notes");

const availableNotes=[2000,500,100,20,10,5,1];

checkbutton.addEventListener("click",()=>
{
    hide_message();
    if(bill_amount.value>0)
    {
        if(cashGiven.value>bill_amount.value)
        {
          const amountToBeReturn=cashGiven.value-bill_amount.value;
          calcualteChange(amountToBeReturn);
        }
        else if(cashGiven.value<bill_amount.value){
            showMessage("The cash provided should atleast be equal to the bill amount");
        }
        else{
          showMessage("The cash provided is equal to the given bill amount.");
        }
    }else{
      showMessage("Invalid Bill Amount");
    }
});

function hide_message(){
  errormessage.style.display="none";
}

function showMessage(message){
  errormessage.style.display="block";
  errormessage.innerText=message;
}


function calcualteChange(amountToBeReturn){

    for(let i=0;i<availableNotes.length;i++)
    {
      const numberofNotes=Math.trunc(amountToBeReturn/availableNotes[i]);
      amountToBeReturn %=availableNotes[i];
      NoOfNotes[i].innerText=numberofNotes;
    }
    
}
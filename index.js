const bill_amount=document.querySelector("#bill");
const checkbutton=document.querySelector("#Check");
const cashGiven=document.querySelector("#Cash-given");
const errormessage=document.querySelector("#error-message");

checkbutton.addEventListener("click",()=>
{
    errormessage.display="none";
    if(bill_amount.value>0)
    {
        if(bill_amount.value>=0)
        {

        }else{
            
        }
        console.log("cool");
    }else{
      errormessage.style.display="block";
      errormessage.innerText="The bill amount should be greater than 0";
    }
}



);
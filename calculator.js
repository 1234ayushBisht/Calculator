let screen=document.getElementById('screen');
let button=document.querySelectorAll('button');
let scrValue='';//default screen value which is none
for(item of button){
    // Adding event click so that button will work on click
    item.addEventListener('click',function cal(x){
        buttonText=x.target.innerText;//copied
        if (buttonText=='X'){
            buttonText='*';
            // scrValue=scrValue+buttonText;
            scrValue+=buttonText;
            screen.value=scrValue;
        }
        //This clears all data of calculator
        else if(buttonText=='Clr'){
            scrValue='';
            screen.value=scrValue;
        }
        //This function give result of above calculation
        else if(buttonText=='='){
            screen.value=eval(scrValue);//eval function evaluate screen value
        }
        // run this when above condition doesn't work
        else{
            scrValue+=buttonText;
            screen.value=scrValue;
        }
});
}
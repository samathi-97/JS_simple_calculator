let screen = document.getElementById('screen');
buttonsVal = document.querySelectorAll('button');
let screenValueofcal='';
for (item of buttonsVal){
    item.addEventListener('click',(e) => {
        buttonText = e.target.innerText;
        console.log('button text is', buttonText);

        if(buttonText=='X'){

            buttonText='*';
            screenValueofcal+= buttonText;
            screen.value = screenValueofcal;
        }
        else if (buttonText=='C'){
            screenValueofcal=" ";
            screen.value = screenValue;
        }
        else if (buttonText=='CE'){
            screenValueofcal=" ";
            screen.value = screenValueofcal;
        }
        else if (buttonText=='='){
            screen.value= eval(screenValueofcal) ;
        }
        else{
            screenValueofcal+=buttonText;
            screen.value = screenValueofcal;
        }
        
    })
}
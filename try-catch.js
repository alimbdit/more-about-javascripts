function checkAge() {
    const ageField = document.getElementById('age');
    const ageText = ageField.value;
    const errMessage = document.getElementById('error');

   

    try {
        // console.log(baperbank);
        if(isNaN(ageText)){
            throw "Please Enter Number"
        }
        else if (ageText < 18){
            throw "You are not allowed!!"
        }else if( ageText > 30){
            throw "Murubbi ra aisen na"
        }
        errMessage.innerText = '';
    }
    catch(error){
        // console.log('Error: ', error);
        errMessage.innerText = 'Error: ' + error;
    }
    finally {
        console.log("All done inside try catch");
    }
}
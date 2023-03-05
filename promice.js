const promise = new Promise((resolve, reject) => {
 

    const randomNum = Math.round(Math.random()*10);
    console.log(randomNum);
    if(randomNum < 5) {
        resolve(2548622);
    }
    else{

        reject('No data found');
    }
})

// console.log(promise);

promise.then(data => console.log(data-22)).catch((error) => console.log('ERR: ', error));
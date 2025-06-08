let input = `0`;
let firstPass = true;
let decPlace = false;


window.addEventListener("DOMContentLoaded", () => {
    console.log("DOM loaded");
    if (window.myAPI?.update) {
        window.myAPI.update(input);
    } else {
        console.error("myAPI or update not available");
        return;
    }

    const allNum = document.querySelectorAll(`#numbers li`);
    const numButtArr = Array.from(allNum);


    //for(let num of numButtArr) console.log(num.textContent);

    numButtArr.forEach(btn =>{
        btn.addEventListener(`click`,() => {

            if(!window.myAPI.overflow()){
                if(firstPass){
                    firstPass = btn.textContent === `0` && !decPlace;
                    input = btn.textContent;
                }else input += btn.textContent;
          
                window.myAPI.update(input);
            }
        });
    });

    const allFunc = document.querySelectorAll(`#functions li`);
    const funcButtArr = Array.from(allFunc);
    
    for(let func of funcButtArr) console.log(func.textContent);
    
    funcButtArr.forEach(btn =>{btn.addEventListener(`click`,() => {window.myAPI.upFunc(btn.textContent);});});


    const decimal = document.getElementById(`decimal`);

    decimal.addEventListener(`click`, () => {
         if(!decPlace){
            input += `.`;
            window.myAPI.update(input);
            decPlace = true;
            firstPass = false;
         }
    });

    const del = document.getElementById(`delete`);

    del.addEventListener(`click`, ()=> {
        if(input.length > 1){
            if(`.` === input.charAt(input.length-1)) decPlace = false;
            input = input === `Infinity` ? 0 : input.substring(0,input.length-1);
            window.myAPI.update(input);
            firstPass = input.length === 1;
        }else input = `0`;
        window.myAPI.update(input);
    });

    const clear = Array.from(document.getElementsByClassName(`clr`));

    clear.forEach(btn => {
        btn.addEventListener(`click`,() => {
            window.myAPI.update(0);
            input = `0`;
            firstPass = true;
            decPlace = false;
        });
    });

    const recip = document.getElementById(`reciprocal`);
    
    recip.addEventListener(`click`, () => {
        let up;
        if(decPlace && !window.myAPI.isFloat) up = `NaN`;
        else up = `${1/Number(input)}`;
        window.myAPI.update(up);

        if(window.myAPI.overflow()) window.myAPI.update(input);
        else input = up;
    });

    const sqr = document.getElementById(`square`);
    
    sqr.addEventListener(`click`, () => {
        let up;
        if(decPlace && !window.myAPI.isFloat) up = `NaN`;
        else up = `${Math.pow(Number(input),2)}`;
        window.myAPI.update(up);

        if(window.myAPI.overflow()) window.myAPI.update(input);
        else input = up;
    });

    const sqrRT = document.getElementById(`squareRoot`);
    
    sqrRT.addEventListener(`click`, () => {
        let up;
        if(decPlace && !window.myAPI.isFloat) up = `NaN`;
        else up = `${Math.pow(Number(input),1/2)}`;
        window.myAPI.update(up);

        if(window.myAPI.overflow()) window.myAPI.update(input);
        else input = up;
    });


});



/*

// original function

window.addEventListener("DOMContentLoaded", () => {
    console.log("DOM loaded");
    if (window.myAPI?.update) {
        window.myAPI.update(0);
    } else {
        console.error("myAPI or update not available");
    }
});
*/

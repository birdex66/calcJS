let input = `0`;
let firstPass = true;

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
                    firstPass = btn.textContent === `0`;
                    input = btn.textContent;
                }else input += btn.textContent;
            }
            window.myAPI.update(input);
        });
    });
});

/*
window.addEventListener("DOMContentLoaded", () => {
    console.log("DOM loaded");
    if (window.myAPI?.update) {
        window.myAPI.update(0);
    } else {
        console.error("myAPI or update not available");
    }
});
*/

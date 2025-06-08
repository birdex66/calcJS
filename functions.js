function testHello(){
   console.log(`hi`); 
}

function update(input) {
  const h1 = document.querySelector(`#input #in`);
  if (h1) h1.textContent = input;
  else console.error(`h1 not found inside #input`);
}

function upFunc(input){
  const h1 = document.querySelector(`#input #op`);
  if (h1) h1.textContent = input;
  else console.error(`h1 not found inside #input`);
}


function overflow() {
  const c = document.querySelector(`#input`);
  const e = document.querySelector(`#input #in`);
  const f = document.querySelector(`#input #op`);
    // maybe edit this so it decreases font size if overflow is detected, but this function returns false... until you reach the limit for decreasing font size
  // FIX LATER return e.scrollHeight > c.clientHeight || e.scrollWidth > (c.clientWidth + f.clientWidth)-88;
  return e.textContent.length > 28;
}

function isFloat(n){
	return typeof n === 'number' && !Number.isInteger(n);
}

module.exports = {
  testHello,
  update,
  upFunc,
  overflow,
  isFloat
};

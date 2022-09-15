const button = Array.from(document.querySelectorAll('button'));

let message = '';

button.forEach(element => {
  element.addEventListener('click', () => {

    if (element.classList[1] == 'number') {
      let ultimateNumber = Number(message += element.innerHTML)
      console.log(ultimateNumber);
      console.log("that is a number");
    }

    else if (element.classList[1] == 'operator') {
      message = ''
      console.log("that is a operator");
    }
      
    else if(element.classList[0] == 'all-clear') {
      console.log("that is a all clear button");
    }
      
    else if(element.classList[0] == 'back-space') {
      console.log("that is a back space button");
    }
  })
})
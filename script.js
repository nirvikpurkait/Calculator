const allButton = document.querySelector('.all-button');
const button = Array.from(document.querySelectorAll('button'));
const screen = document.querySelector('.screen');
let message = '';


screen.style.width = `${allButton.clientWidth}px`


button.forEach(element => {
  element.addEventListener('click', () => {

    if (element.classList[1] == 'number') {
      let ultimateNumber = Number(message += element.innerHTML)
      if (isNaN(ultimateNumber)) {
        screen.innerHTML = `Please provide a valid number`
        console.log(`please provide a valid number`);
        return
      }
      else {
        console.log(ultimateNumber);
        screen.innerHTML = message
        console.log("that is a number");
      }
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






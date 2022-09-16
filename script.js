const screen = document.querySelector('.screen');
const screenMessage = document.querySelector('.message');
const screenResult = document.querySelector('.result');
const allButton = document.querySelector('.all-button');
const button = Array.from(document.querySelectorAll('button'));

screen.style.width = `${allButton.clientWidth}px`

let text = ''

button.forEach((element) => {
  element.addEventListener('click', () => {

    if (element.classList[0] == 'point') {
      let dot = document.querySelector('.point').innerHTML;
      if (text.includes(dot)) {
        screenMessage.innerHTML = `Can't be more than one decimal point in a number`
        return
      }
      else {
        text += dot
      }
      console.log(text);
      screenResult.innerHTML = text
    }
    else if (element.classList[1] == 'number') {
      text += element.innerHTML        
      console.log(text);
      screenResult.innerHTML = text
    }
    else if (element.classList[1] == 'operator') {
    }
    else if (element.classList[0] == 'all-clear') {
      text = ''
      screenResult.innerHTML = text
    }
    else if (element.classList[0] == 'delete') {
      text = text.slice(0, -1)
      console.log(text);
      screenResult.innerHTML = text
    }
  })
})


// console.log(Number(''));
const addItemButton = document.querySelector('button.addItemButton');
const addItemInput = document.querySelector('input.addItemInput');
const listDiv = document.querySelector('.list');
let ol = document.getElementsByTagName('ol')[0];
let errorP = document.getElementById('errorMsg');



listDiv.addEventListener('click', (event) => {
  if (event.target.tagName == 'BUTTON' && event.target.textContent == 'x') {
    let li = event.target.parentNode;
    let ol = li.parentNode;
    ol.removeChild(li);

  }

  if (event.target.className == 'up') {
    let li = event.target.parentNode;
    let prevLi = li.previousElementSibling;
    let ol = li.parentNode;
    if (prevLi) {
      ol.insertBefore(li, prevLi);
    }
  }

  if (event.target.className == 'down') {
    let li = event.target.parentNode;
    let nextLi = li.nextElementSibling;
    let ol = li.parentNode;
    if (nextLi) {
      ol.insertBefore(nextLi, li)
    }
  }
})


addItemButton.addEventListener('click', () => {
  if (addItemInput.value.length > 0) {
    let ol = document.getElementsByTagName('ol')[0];
    let li = document.createElement('li');

    let remBut = document.createElement('button');
    remBut.className = 'remove';
    remBut.textContent = 'x';

    let upBut = document.createElement('button');
    upBut.className = 'up';
    upBut.textContent = '+';

    let downBut = document.createElement('button');
    downBut.className = 'down';
    downBut.textContent = '-';

    li.innerHTML = addItemInput.value;
    ol.appendChild(li);
    li.appendChild(upBut);
    li.appendChild(downBut);
    li.appendChild(remBut);

    errorP.innerHTML = '';
    addItemInput.value = '';
  } else {

    errorP.innerHTML = "Please enter something in the text field."
  }

})

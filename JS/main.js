import {UI_ELEMENTS} from "./view.js"

UI_ELEMENTS.LEFT_BUTTONS.addEventListener('click', leftButton);
UI_ELEMENTS.RIGHT_BUTTONS.addEventListener('click', rightButton);

const main = [1,2,3,4,5];

function leftButton() {
    main.unshift(main.at(-1));
    main.pop();
    createBlock(main.at(-1))
}

function rightButton() {
    createBlock(main[0]);
    main.push(main[0]);
    main.shift();
}

///whithout remove == comics
function createBlock(i) {
    removeBlock()
    const imageUrl = `url(./IMG/${i}.png)`;
    const div = document.createElement('div');
    div.setAttribute('id',`ID${i}`);
    div.className = `picture__new`;
    div.style.backgroundImage = imageUrl
    UI_ELEMENTS.DISPLAY.append(div);
}

function removeBlock(){
    UI_ELEMENTS.DISPLAY.lastChild.remove()
}




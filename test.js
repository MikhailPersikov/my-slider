const UI_ELEMENTS = {
    LEFT_BUTTONS: document.querySelector('.square__button--left'),
    RIGHT_BUTTONS: document.querySelector('.square__button--right'),
    DISPLAY: document.querySelector('.container__content--wrapper'),
    CONTENT: document.querySelector('.picture__one'),
}

const PICTURE_ITEM = {
    0:[
        { URL: "./IMG/levi.png",id: 1 },
        { URL: "./IMG/annie.png",id: 2 },
        { URL: "./IMG/mikasa.png",id: 3 },
        { URL: "./IMG/glasses.png",id: 4 },
        { URL: "./IMG/titan.png",id: 5 },
    ]
}

// .at[-1] last element for array.at; !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

UI_ELEMENTS.LEFT_BUTTONS.addEventListener('click', leftButton);
UI_ELEMENTS.RIGHT_BUTTONS.addEventListener('click', rightButton);

let main = [1,2,3,4,5];
// let newMain = [];
// let defaultItem = UI_ELEMENTS.CONTENT.textContent = main[0]

let default_id_l = main.at(-1);

function leftButton(e) {
    let currentId = document.querySelector(`#ID${main[0]}`)
    console.log(currentId)
    let defaultItem = document.getElementById('')
    console.log(main,'Array')
    if (defaultItem == main.at(-1)) {
        main.unshift(main[main.length - 1]);
        main.pop();
    }
    UI_ELEMENTS.CONTENT.innerHTML = main[main.length -1]
    console.log(main.at(-1),'new')
    main.unshift(main[main.length - 1]);
    main.pop();
    console.log(main,'Array')
    console.log(main.at(-1))
    createBlock(main.at(-1))
}

function rightButton() {
    console.log(main,'Array')
    let currentId = document.querySelector(`#ID${main[0]}`)
    console.log(currentId)
    if (currentId == main[0]) {
        main.push(main[0]);
        main.shift();
    }
    // console.log(main[0])
    console.log(main[0],'R')
    createBlock(main[0]);
    main.push(main[0]);
    main.shift();
}

function createBlock(i) {
    remove()
    console.log(i,'img')
    let imageUrl = `url(./IMG/${i}.png)`;
    console.log(imageUrl)
    const div = document.createElement('div');
    div.setAttribute('id',`ID${i}`);
    div.className = `picture__new`;
    div.style.backgroundImage = imageUrl
    UI_ELEMENTS.DISPLAY.append(div);
}

///whithout remove == comics

function remove(){
    UI_ELEMENTS.DISPLAY.lastChild.remove()

}
// console.log(UI_ELEMENTS.DISPLAY.childNodes)

// UI_ELEMENTS.DISPLAY.innerHTML = main[0];
// console.log(defaultItem)
// console.log(defaultItem == main[0])



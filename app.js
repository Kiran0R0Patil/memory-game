const cardArray = [
    {
        name: 'html',
        img: 'images/html.png' 
    },
    {
        name: 'css',
        img: 'images/css.png' 
    },
    {
        name: 'js',
        img: 'images/js.png' 
    },
    {
        name: 'sass',
        img: 'images/sass.png' 
    },
    {
        name: 'react',
        img: 'images/react.png' 
    },
    {
        name: 'nodejs',
        img: 'images/nodejs.png' 
    },
    {
        name: 'html',
        img: 'images/html.png' 
    },
    {
        name: 'css',
        img: 'images/css.png' 
    },
    {
        name: 'js',
        img: 'images/js.png' 
    },
    {
        name: 'sass',
        img: 'images/sass.png' 
    },
    {
        name: 'react',
        img: 'images/react.png' 
    },
    {
        name: 'nodejs',
        img: 'images/nodejs.png' 
    }
]
cardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
const finalDisplay = document.getElementById('final-massage')
let cardChosen = []
let cardChosenId = []
const cardsWon=[]

createBoard()
function createBoard(){
    for(let i=0; i< cardArray.length ;i++){
            const card = document.createElement('img')
            card.setAttribute('src','images/brain.png')
            card.setAttribute('data-id',i)
            card.addEventListener('click',flipCard)
            grid.appendChild(card)
        }
}

function checkMatch(){
    const cards = document.querySelectorAll('img')
    const option1id = cardChosenId[0]
    const option2id = cardChosenId[1]

    if(option1id == option2id){
        alert("you clicked the same image")
        cards[option1id].setAttribute('src','images/brain.png')
    }
    else if(cardChosen[0] === cardChosen[1]){
        cards[option1id].setAttribute('src','images/done.png')
        cards[option2id].setAttribute('src','images/done.png')
        cards[option1id].removeEventListener('click',flipCard)
        cards[option2id].removeEventListener('click',flipCard)
        cardsWon.push(cardChosen)
        resultDisplay.innerHTML = cardsWon.length
        if(cardsWon.length == 6){
            finalDisplay.innerHTML = 'Congratulations you found all matches!'  
        }
    }
    else{
        cards[option1id].setAttribute('src','images/brain.png')
        cards[option2id].setAttribute('src','images/brain.png')
    }
    cardChosen = []
    cardChosenId = []
}

function flipCard(){
    let cardId = this.getAttribute('data-id')
    cardChosen.push(cardArray[cardId].name)
    cardChosenId.push(cardId)
    this.setAttribute('src',cardArray[cardId].img)
    if(cardChosen.length === 2){
        setTimeout(checkMatch, 500)
    }
}
























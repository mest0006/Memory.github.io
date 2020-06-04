document.addEventListener('DOMContentLoaded', () => {
  //cards
  const cardsArray = [
    {
      name: 'grin',
      img: 'images/grin-alt-solid.svg'
    },
    {
      name: 'grin',
      img: 'images/grin-alt-solid.svg'
    },
    {
      name: 'beam',
      img: 'images/grin-beam-sweat-solid.svg'
    },
    {
      name: 'beam',
      img: 'images/grin-beam-sweat-solid.svg'
    },

    {
      name: 'laugh',
      img: 'images/laugh-solid.svg'
    },
    {
      name: 'laugh',
      img: 'images/laugh-solid.svg'
    },
    {
      name: 'smile-beam',
      img: 'images/smile-beam-solid.svg'
    },
    {
      name: 'smile-beam',
      img: 'images/smile-beam-solid.svg'
    },
    {
      name: 'wink',
      img: 'images/smile-wink-solid.svg'
    },
    {
      name: 'wink',
      img: 'images/smile-wink-solid.svg'
    },
    {
      name: 'surprise',
      img: 'images/surprise-solid.svg'
    },
    {
      name: 'surprise',
      img: 'images/surprise-solid.svg'
    },
    {
      name: 'tired',
      img: 'images/tired-solid.svg'
    },
    {
      name: 'tired',
      img: 'images/tired-solid.svg'
    }


  ]

  cardsArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.getElementById('result')
  var cardsChosen = []
  var cardsChosenId = []
  const cardsWon = []

  //create your board
  function createBoard () {
    for (let i = 0; i < cardsArray.length; i++) {
      var card = document.createElement('img')
      card.setAttribute('src', 'images/blank.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }

  //check for matches
  function checkForMatch () {
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]

    if (optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      alert('You have clicked the same image!')
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match')
      cards[optionOneId].setAttribute('src', 'images/white.png')
      cards[optionTwoId].setAttribute('src', 'images/white.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      alert('Sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = 'Congratulations! You found them all!'
    }
  }

  //flip your card
  function flipCard () {
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardsArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardsArray[cardId].img)
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500)
    }
  }

  createBoard()

})

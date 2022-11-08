document.addEventListener('DOMContentLoaded', () => {
    const cardArray = [
        {
            name: 'batman',
            img: 'images/icons8-batman-50.png'
        },
        {
            name: 'black panther',
            img: 'images/icons8-black-panther-mask-50.png',
        },
        {
            name: 'captain america',
            img: 'images/icons8-captain-america-50.png',
        },
        {
            name: 'hawkeye',
            img: 'images/icons8-hawkeye-50.png',
        },
        {
            name: 'joker',
            img: 'images/icons8-joker-suicide-squad-50.png',
        },
        {
            name: 'nabu',
            img: 'images/icons8-knight-helmet-50.png',
        },
        {
            name: 'batman',
            img: 'images/icons8-batman-50.png',
        },
        {
            name: 'black panther',
            img: 'images/icons8-black-panther-mask-50.png',
        },
        {
            name: 'captain america',
            img: 'images/icons8-captain-america-50.png',
        },
        {
            name: 'hawkeye',
            img: 'images/icons8-hawkeye-50.png',
        },
        {
            name: 'joker',
            img: 'images/icons8-joker-suicide-squad-50.png',
        },
        {
            name: 'nabu',
            img: 'images/icons8-knight-helmet-50.png',
        },
        {
            name: 'iron man',
            img: 'images/icons8-iron-man-50.png',
        },
        {
            name: 'hulk',
            img: 'images/icons8-hulk-50.png',
        },
        {
            name: 'spider man',
            img: 'images/icons8-spider-man-new-50.png'
        },
        {
            name: 'naruto',
            img: 'images/icons8-naruto-50.png'
        },         
        {
            name: 'iron man',
            img: 'images/icons8-iron-man-50.png',
        },
        {
            name: 'hulk',
            img: 'images/icons8-hulk-50.png',
        },
        {
            name: 'spider man',
            img: 'images/icons8-spider-man-new-50.png'
        },
        {
            name: 'naruto',
            img: 'images/icons8-naruto-50.png'
        },         
    ]

    const grid = document.querySelector('.grid')
    const result1 = document.querySelector('#result1')
    const result2 = document.querySelector('#result2')
    // score
    const p1 = document.querySelector('#p1')
    const p2 = document.querySelector('#p2')
    console.log([p1, p2])
    let cardsChosen = []
    let cardsChosenId = []
    const cardsMatchedBy1 = []
    const cardsMatchedBy2 = []
    let player1 = true
    let player2 = false

    //create your board
    function createGrid() {
      for (let i = 0; i < cardArray.length; i++) {
        let card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.setAttribute('class', 'tile')
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
      }
    }

    //check for matches
    function checkMatch() {
      let cards = document.querySelectorAll('img')
      const optionOneId = cardsChosenId[0]
      const optionTwoId = cardsChosenId[1]
      
      if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('You have clicked the same image!')
      }
      else if (cardsChosen[0] === cardsChosen[1]) {
        
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        if(player1){
          cardsMatchedBy1.push(cardsChosen)
        }
        else if(player2){
          cardsMatchedBy2.push(cardsChosen)
        }
        
      } else {
        setTimeout(() => {
          cards[optionOneId].setAttribute('src', 'images/blank.png')
          cards[optionTwoId].setAttribute('src', 'images/blank.png')
          if(player1){
            player1=false
            player2=true
          }
          else if(player2){
            player2=false
            player1=true
          }
        }, 500)
        currentPlayer()
      }
      cardsChosen = []
      cardsChosenId = []
      // current player
      function currentPlayer(){
        if(player1){
          p2.classList.add("active")
          p1.classList.remove("active")
        }
        else{
          p1.classList.add("active")
          p2.classList.remove("active")
        }
      }
      
      

      if(player1){
        result1.textContent = cardsMatchedBy1.length 
      }
      else if(player2){
        result2.textContent = cardsMatchedBy2.length
      }
      
    }
    
    //flip card
    function flipCard() {
      let cardId = this.getAttribute('data-id')
      cardsChosen.push(cardArray[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src', cardArray[cardId].img)
      if (cardsChosen.length ===2) {
        setTimeout(checkMatch, 500)
      }
    }    

    createGrid()
})
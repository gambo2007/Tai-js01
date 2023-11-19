import { Node } from './Node.js';
import { Card } from './Card.js';


export class Game {
    constructor() {
        this.gameBoard = new Node('div', 'game-board');
        this.coins = 10000;
        this.openedCards = [];
        this.matchedPairs = 0;
        this.shuffledCards = this.shuffle(this.getAllCards());
        this.createGameBoard();
        console.log('Game initialized.');
    }

    getAllCards() {
        const allCards = ['img1.jpeg', 'img2.jpeg', 'img3.jpeg', 'img4.jpeg', 'img5.jpeg', 'img6.jpeg', 'img7.jpeg', 'img8.jpeg', 'img9.jpeg', 'img10.jpeg'];
        return allCards.concat(allCards);
    }

    shuffle(array) {
        let currentIndex = array.length, randomIndex;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
        return array;
    }

    createGameBoard() {
        console.log('Creating game board...');
        for (let i = 0; i < 20; i++) {
            const cardNumber = i + 1;
            const card = new Card(cardNumber, `images/${this.shuffledCards[cardNumber - 1]}`, this.flipCard.bind(this));
            card.appendTo(this.gameBoard.element);
        }
    }

    flipCard() {
        const index = this.dataset.index;
        if (this.openedCards.length < 2 && !this.openedCards.includes(index)) {
            const card = this;
            const image = new Image();
            image.src = `images/${this.shuffledCards[index - 1]}`;

            image.onload = function () {
                card.style.backgroundImage = `url(${image.src})`;
                card.innerHTML = '';
                card.openedCards.push(index);
                if (card.openedCards.length === 2) {
                    setTimeout(card.checkMatch.bind(card), 500);
                }
            };
        }
    }

    checkMatch() {
        const [index1, index2] = this.openedCards;
        const card1 = document.querySelector(`.card[data-index="${index1}"]`);
        const card2 = document.querySelector(`.card[data-index="${index2}"]`);
        if (this.shuffledCards[index1 - 1] === this.shuffledCards[index2 - 1]) {
            card1.removeEventListener('click', this.flipCard);
            card2.removeEventListener('click', this.flipCard);
            this.openedCards = [];
            this.matchedPairs++;
            this.coins += 1000;
            card1.style.visibility = 'hidden';
            card2.style.visibility = 'hidden';
            if (this.matchedPairs === this.allCards.length / 2) {
                this.gameBoard.style.display = 'none';
                const winMessage = new Message('Congratulations! You won the game!', 'green');
                this.body.appendChild(winMessage.element);
                setTimeout(() => {
                    winMessage.element.style.display = 'none';
                    this.gameBoard.style.display = 'grid';
                    this.resetGame();
                }, 3000);
            }
        } else {
            setTimeout(() => {
                card1.style.backgroundImage = 'none';
                card2.style.backgroundImage = 'none';
                card1.innerHTML = card1.dataset.initialValue;
                card2.innerHTML = card2.dataset.initialValue;
            }, 500);
            this.openedCards = [];
            this.coins -= 500;

            if (this.coins <= 0) {
                this.gameBoard.style.display = 'none';
                const losingMessage = new Message('Game Over! You ran out of coins.', 'black');
                this.body.appendChild(losingMessage.element);

                setTimeout(() => {
                    losingMessage.element.style.display = 'none';
                    this.gameBoard.style.display = 'grid';
                    this.resetGame();
                }, 3000);
            }
        }
        this.updateCoin();
    }

    updateCoin() {
        this.coin.textContent = `Coins: ${this.coins}`;
        this.coin.style.fontFamily = 'sans-serif';
        this.coin.style.fontSize = '45px';
        this.coin.style.webkitTextFillColor = 'transparent';
        const textImg = 'images/vutru.jpeg';
        this.coin.style.backgroundImage = `url(${textImg})`;
        this.coin.style.webkitBackgroundClip = 'text';
        this.coin.style.fontWeight = 'bold';
    }

    getGameBoard() {
        return this.gameBoard;
    }

    resetGame() {
        this.shuffledCards = this.shuffle(this.allCards);
        this.openedCards = [];
        this.matchedPairs = 0;
        this.coins = 10000;
        this.gameBoard.innerHTML = '';
        this.createGameBoard();
        this.gameBoard.appendChild(this.coin);
        this.updateCoin();
    }
}

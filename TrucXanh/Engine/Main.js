import { Node } from './Node.js';
import { Game } from './Game.js';
import { Message } from './Message.js';

const body = new Node('body', '');
body.style = {
    position: 'absolute',
};

const documentElement = new Node('html', '');
documentElement.style = {
    height: '100%',
    margin: '0',
};

body.appendTo(documentElement.element);

const game = new Game();
console.log(game)
const gameBoard = game.getGameBoard();
console.log(gameBoard);
if (gameBoard) {
    gameBoard.appendTo(body.element);
} else {
    console.error('Unable to get gameBoard from Game instance.');
}

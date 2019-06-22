import storage from './storage';
import setDataFromStorage from './setter';
import { changeActivePlayer, holdCurrentScore } from './active';

export const startNewGame = () => {
    document.querySelector(`.player-1-panel`).classList.remove('active');
    storage.clear();
    const dataStorage = storage.getDataStorage();
    setDataFromStorage(dataStorage);
};

export const resetGame = () => {
    setTimeout(() => {
        storage.setItem('winner', false);
        document.querySelector('.modal').remove();
        startNewGame();
    }, 5000);
}

const randromDice = () => {
    return Math.floor(Math.random() * 6) + 1;
}

const roll = () => {
    const rollSound = new Audio('./sound/roll.mp3');
    rollSound.play();
    const dice1 = randromDice();
    const dice2 = randromDice();
    setTimeout(() => {
        document.querySelector('#dice-1').src = `./img/dice-${dice1}.png`;
        document.querySelector('#dice-2').src = `./img/dice-${dice2}.png`;
        const currentPlayer = storage.getItem('currentPlayer');
        const currentScore = 'current-' + currentPlayer; 
        let currentSum = 0;
        if (dice1 === 1 || dice2 === 1) {
            changeActivePlayer();
        } else {
            currentSum = storage.getItem(currentScore) + dice1 + dice2;
        }
        document.querySelector('#' + currentScore).textContent = currentSum;
        storage.setItem(currentScore, currentSum);
        storage.setItem('dice-1', dice1);
        storage.setItem('dice-2', dice2);  
    }, 370);
}

const hold = () => {
    holdCurrentScore(); 
    changeActivePlayer();
}

export const controlButtonsListener = event => {
    const { target } = event;
    if (target.classList.contains('btn-new')) {
        startNewGame();
    } else if (target.classList.contains('btn-roll')) {
        roll();
    } else {
        hold();
    }
}

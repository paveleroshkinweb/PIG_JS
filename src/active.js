import storage from './storage';
import { showWinner } from './modal';
import { startNewGame, resetGame } from './listeners';

export const changeActivePlayer = () => {
    const currentPlayer = storage.getItem('currentPlayer');
    const newCurrentPlayer = +!currentPlayer;
    document.querySelector('.active').classList.remove('active');
    document.querySelector(`.player-${newCurrentPlayer}-panel`).classList.add('active');
    storage.setItem('currentPlayer', newCurrentPlayer);
};

export const holdCurrentScore = () => {
    const currentPlayer = storage.getItem('currentPlayer');
    const sum = storage.getItem(`current-${currentPlayer}`) + storage.getItem(`score-${currentPlayer}`);
    document.querySelector(`#current-${currentPlayer}`).textContent = 0;
    document.querySelector(`#score-${currentPlayer}`).textContent = sum;
    storage.setItem(`current-${currentPlayer}`, 0);
    storage.setItem(`score-${currentPlayer}`, sum);
    if (sum >= 100) {
        storage.setItem('winner', true);
        showWinner();
        resetGame();
    }    
};
import storage from './storage';
import setDataFromStorage from './setter';
import { showRules } from './modal';
import { controlButtonsListener, resetGame } from './listeners';
import { showWinner } from './modal';

storage.setInitialData();

const dataStorage = storage.getDataStorage();
setDataFromStorage(dataStorage);

if (! storage.getItem('isFamiliarWithRules', true)) {
    setTimeout(showRules, 500);
}

document.querySelector('.control-buttons').addEventListener('click', controlButtonsListener);
if (storage.getItem('winner')) {
    showWinner();
    resetGame();
}
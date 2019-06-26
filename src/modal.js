import storage from './storage';

const modal = html => {
    const modalWindow = document.createElement('div');
    modalWindow.classList.add('modal');
    const innerContent = document.createElement('div');
    innerContent.innerHTML = html;
    modalWindow.appendChild(innerContent);
    document.body.appendChild(modalWindow);
}

export const showRules = () => {
    modal(
            `<div class="modal-content fadeIn">
                <div class="exit">X</div>
                <div class="modal-title">Are you already familiar with rules of this game?</div>
                <br>
                    <div class="modal-text">
                        This game is played by 2 players. Each player in turn presses the roll. The sum of the cubes falls into your current account. If you drop 1 at least on one of the cubes, your current account is reset to zero. You can click hold and then the current account will be added to the total and then reset to zero and the move will go to another player. The winner is the one who quickly scores 100 points. GOOD LUCK!
                    </div>
                </div>
             </div>`
    );
    document.querySelector('.exit').addEventListener('click', () => {
        storage.setItem('isFamiliarWithRules', true);
        const modalContent = document.querySelector('.modal-content');
        modalContent.classList.replace('fadeIn', 'fadeOut');
        modalContent.addEventListener("animationend", () => {
            document.querySelector('.modal').remove();
        });
    })
}

export const showWinner = () => {
    const audio = new Audio('./sound/win.mp3');
    audio.play();
    modal(
        `<div class="winner">
            <div class="winner-text">We have a winner - player ${storage.getItem('currentPlayer') + 1}</div>
            <img src="./img/winner.gif">
        </div>`
    );
}
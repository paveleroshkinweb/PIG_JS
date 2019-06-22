export default dataStorage => {
    const keys = Object.keys(dataStorage);
    document.querySelector(`.player-${dataStorage[keys[0]]}-panel`).classList.add('active');
    keys.slice(1).forEach(key => {
        const element = document.getElementById(key);
        if (element.nodeName === 'DIV') {
            element.textContent = dataStorage[key];
        } else if (element.nodeName === 'IMG') {
            element.src = `./img/dice-${dataStorage[key]}.png`;
        } else {
            element.value = dataStorage[key];
        }
    });
}
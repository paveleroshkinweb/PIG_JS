export default {
    __keys__ : [
        'currentPlayer', 
        'score-0', 
        'score-1', 
        'current-0', 
        'current-1',
        'dice-1',
        'dice-2',
    ],

    __defaultValues__: {
        'currentPlayer': 0, 
        'score-0': 0,
        'score-1': 0,
        'current-0': 0, 
        'current-1': 0,
        'dice-1': 6,
        'dice-2': 6,
    },

    clear() {
        this.__keys__.forEach(key => this.setItem(key, this.__defaultValues__[key]));
    },

    getItem(key) {
        const item = sessionStorage.getItem(key);
        if (key === 'isFamiliarWithRules' || key === 'winner') return parseBoolean(item);
        return isNaN(Number(item)) ? item : Number(item);
    },

    setItem(key, value) {
        sessionStorage.setItem(key, value);
    },

    setInitialData() {
        this.setItem('isFamiliarWithRules', this.getItem('isFamiliarWithRules'));
        this.setItem('dice-1', this.getItem('dice-1') || this.__defaultValues__['dice-1']);
        this.setItem('dice-2', this.getItem('dice-2') || this.__defaultValues__['dice-2']);
    },

    getDataStorage() {
        return this.__keys__.reduce((acc, key) => Object.assign(acc, { [key]: this.getItem(key) }), {});
    }
}

const parseBoolean = value => {
    return value == undefined ? false : JSON.parse(value);
}
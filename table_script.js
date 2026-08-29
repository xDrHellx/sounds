import sounds from './sounds_list.js';
document.addEventListener('DOMContentLoaded', () => {

    const tbody = document.getElementById('sounds_table').getElementsByTagName('tbody')[0];
    for (let i = 0; i < sounds.length; i++) {
    if (sounds[i][1].length == 0) {
        continue;
    }

    tbody.insertAdjacentHTML('beforeend', `<tr><th colspan="3">${sounds[i][0]}</th></tr>`);
    for (let j = 1; j < sounds[i].length; j++) {  

        let tr = tbody.insertRow()
        for (let k = 0; k < sounds[i][j].length; k++){
            tr.insertAdjacentHTML('beforeend', `<td>${sounds[i][j][k]}</td>`);
        }
    }
    }
});

import './styles/index.css';
import { sum } from './utils/math.utils';
import superheroes from 'superheroes';

const root = document.getElementById('app');

const result = sum(1, 2, 3, 45, 1, 2121);
root.innerHTML = `Result: ${result}`;

document.querySelector('.jsButton').addEventListener('click', () => {
    import(/* webpackChunkName: "message" */ './message').then(message => {
        alert(message.default);
    });
});

console.log(superheroes.random());

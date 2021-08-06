/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';

// const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', 'Количество фильмов');
// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// const a = prompt('Один из последних просмотренных фильмов?', 'Властелин колец');
// const b = prompt('На сколько оцените его', 'от 0 до 10');
// const c = prompt('Один из последних просмотренных фильмов?', 'Властелин колец');
// const d = prompt('На сколько оцените его', 'от 0 до 10');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

// if (1) {
//     console.log('Ok!');
// } else {
//     console.log('Error');
// }

// const num = 49;

// // Условия if else
// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('Много');
// } else {
//     console.log('Ok!');
// }

// // Тернарный оператор (?)
// (num === 50) ? console.log('Ok!'): console.log('Error');

// // оператор switch (только строгое сравнение, то есть ===)

// switch (num) {
//     case 49:
//         console.log('Неверно');
//         break; // прерывает скрипт
//     case 100:
//         console.log('Неверно');
//         break;
//     case 50:
//         console.log('Верно');
//         break;
//     default: // выведет если ни одно значение не верно
//         console.log('Не повезло');
//         break;
// }

let num = 50;

// // цикл
// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }

// while (num < 55);

for  (let i = 1; i < 8; i++) {
    console.log(num);
    num++;
}

for  (let i = 1; i < 10; i++) {
    if (i === 6) {
        break;
    }

    console.log(i);
}

for  (let i = 1; i < 10; i++) {
    if (i % 2 === 0) {
        continue;
    }

    console.log(i);
}

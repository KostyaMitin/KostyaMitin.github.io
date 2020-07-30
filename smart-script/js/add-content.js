/*этот сценарий выводит на экран приветствие пользователю, основываясь на текущем времени */

var today = new Date();                                // создаём новый объект данных
var hourNow = today.getHours();                        // находим текущий час
var greeting;

if (hourNow > 18) {                                    // отображаем приветствие в зависимости от текущего времени                       
    greeting = 'Добрый вечер!';
} else if (hourNow > 12) {
    greeting = 'Добрый день!';
} else if (hourNow > 0) {
    greeting ='Доброе утро!';
} else {
    greeting = 'Приветствуем!';
}

document.write('<h3>' + greeting + '</h3>');
/** 1. class ... extends ...consrtuctor... super  */

/*Например, раньше для создание компонента в реакте использовалась конструкция */
var Content = React.createClass({
    getInitialState: function () {
        return{
            text: 'some text'
        }
    }
})

/*В Ес6 при создании компонента с посощью реакта использовали: */
class Content extends Reacr.Component{
    constructor(){
        super();
        this.state ={ ... }
    }
}
/* 1.1 сlass - не может быть вызван до объявления, как это возможно просто при объявлении функции*/
/* 1.2 extends - используется для наследования */
/* 1.3 constructor - используется для создания объекстов, внутри класса */
/* 1.4 super() - просто должен быть использован до использования this, т.к инициализирует его   */

/**2. import ... export */
/* 2.1 import позволяет производить импорт   */
/* Было */
var React = require('react')
/* ntgthm*/
import React from 'React'
import {React , noReact} from 'module' /*когда несколько частей кода из одного файла имортировать нужно*/
import './style.css' /* просто целиком файл импортировать*/


/* 2.2 export позволет экспортировать переменные в другие части программы (модуля)*/
/*Было*/
module.exports = Content;
/*Стало*/
export default Content;


/** 3. .bind(this)*/
/* используется, чтобы не потерять контекст this, создаёт новую функцию
которая вне зависимости от способа вызова использует определённое значение this.
      (можно передать и какие-то аргументы дополнительно)*/
this.SearchInputChange.bind(this)

/** 4. Стрелочная функция () => {}  */
/*Стрелочная функция на смену анонимной функции(не записывается в переменную)
. + внутри неё не теряется контекст для this*/
/*Было*/
API.getVideos().then(function (ourdata) {
    console.log(ourdata);
    _this.setState = ({
        videos: ourdata
    })
})

/*Стало*/
API.getVideos().then( (ourdata) => {
    console.log(ourdata);
    this.setState = ({
        videos: ourdata
    })
})


/** 5. var - let */
/* облать видимости другая. var - делало переменную глобальной, let нет.*/
/* let только внутри функции */
let x = 2+2;

/*  var если будет внутри функции можно использовать в других частях программв*/
var y = 2+2;

/** 6. const */
/* просто постоянная переменная.*/
const c = 10 ; /*теперь нельзя менять*/

/** 7. Появились встроенные промисы  */
return new Promise(function (resolve, reject) {

})

/**8. fetch */
fetch('https://api.github.com/search/repositories?q=react')
    .then(function(response) {
        console.log(data.data.items);
    })

/*раньше использовался XMLHttpRequest*/

/** 9. { video }*/
/* когда в объекте ключ совпадает со значение можно использовать 1 слово, вместо двух*/

x = {
    video: 'video'
}

/*можно теперь :*/

x ={ video}

/** 10. Экспорт функции*/
export function getVideos() {
}

/** 11. Внутри входящих параметров функции можно передать целый объект*/
export default (store = {
    videos_list: [],
    loading: false
}, action) => {}

/**12. ...спрэды */
/*В новый объект переносятся старые свойства*/
...someObject /*запись о том, что это новый объект и в него переносятся старые свойства*/

/**13. Декоратор, уже 7-й ес*/
/*Позволяет на ходу модифицировать полученные в аргументе функции объект*/
@connect((store) => {
    return{
        videos: store.videos
    }
})


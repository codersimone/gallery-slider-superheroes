//задаем первый индекс для отсчета
let index = 0;
//созданный массив фиксирует вывод слайдов по порядку
const superArr = ['Бетмен', 'Капитан Америка', 'Человек паук'];
//готовим объект
const superDescription = {
    'Бетмен': {
        description: "о бетмене",
        image: "картинка бетмена"
    },
};

function slideNext() {
    //зацикливание слайдов 
    if (index == superArr.length-1) {
        index = 0;
    } else (index = index+1);

    //получаем данные карточки героя
    let heroeName = superArr[index];
    const description = superDescription[heroeName].description;
    const image = superDescription[heroeName].image;

    //куда мы будем вставлять данные карточки героя
    document.getElementsByClassName('.slider__card01');

    //нужно подставить информацию о героях на один и тот же слайд
    


}
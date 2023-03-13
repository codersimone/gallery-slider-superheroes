// //JSON array of super heroes
// let arraySuperHeroesJSON = `[{
//     "superHeroePic": "pics/batman.jpeg",
//     "superHeroePicAlternativeText": "Batman",
//     "superHeroeCharacter": "Бэтмен",
//     "comicsUniverse": "DC Comics", 
//     "alterEgo": "Брюс Уэйн", 
//     "typeOfActivity": "борец с преступностью, филантроп, миллиардер", 
//     "friends": "Робин, Бэтгерл", 
//     "superPowers": "интеллект, обширные познания, знания боевых искусств, ловкость"
// }, {
//     "superHeroePic": "pics/superman.jpeg",
//     "superHeroePicAlternativeText": "Superman",
//     "superHeroeCharacter": "Супермен",
//     "comicsUniverse": "DC Comics", 
//     "alterEgo": "Кларк Кент", 
//     "typeOfActivity": "борец за справедливость", 
//     "friends": "собака Крипто", 
//     "superPowers": "непробиваемость, суперсила, полет, самоисцеление, суперзрение и суперслух, классный костюм"
// }, {
//     "superHeroePic": "pics/ironman.jpeg",
//     "superHeroePicAlternativeText": "Iron Man",
//     "superHeroeCharacter": "Железный человек",
//     "comicsUniverse": "Marvel Comics", 
//     "alterEgo": "Тони Старк", 
//     "typeOfActivity": "гений, миллиардер, плейбой, филантроп", 
//     "friends": "Мстители", 
//     "superPowers": "высокий уровень интеллекта, широкие познания науки и техники, связь со всемирной паутиной, бронекостюмы"
// }, {
//     "superHeroePic": "pics/spiderman.jpeg",
//     "superHeroePicAlternativeText": "Spider-man",
//     "superHeroeCharacter": "Спайдер-мен/Человек-паук",
//     "comicsUniverse": "Marvel Comics", 
//     "alterEgo": "Питер Паркер", 
//     "typeOfActivity": "борец за справедливость, студент, фотограф", 
//     "friends": "Мстители, Фантастическая четверка, Люди Икс", 
//     "superPowers": "сверхчеловеческие рефлексы, «паучье чутье», способность прилепляться к твердым поверхностям, производство паутины"
// }, {
//     "superHeroePic": "pics/capitainamerica.jpeg",
//     "superHeroePicAlternativeText": "Capitain America",
//     "superHeroeCharacter": "Капитан Америка",
//     "comicsUniverse": "Marvel Comics", 
//     "alterEgo": "Стивен Роджерс", 
//     "typeOfActivity": "супер-солдат", 
//     "friends": "Мстители", 
//     "superPowers": "сила, выносливость, бессмертие, быстрая регенерация, мастерство скрытности и боя"
// }, {
//     "superHeroePic": "pics/thor.jpeg",
//     "superHeroePicAlternativeText": "Thor",
//     "superHeroeCharacter": "Тор",
//     "comicsUniverse": "Marvel Comics", 
//     "alterEgo": "нет; полное имя — Тор Одинсон", 
//     "typeOfActivity": "борец за справедливость, скандинавский бог", 
//     "friends": "Мстители", 
//     "superPowers": "все, что может бог, плюс молот Мьелнир"
// }, {
//     "superHeroePic": "pics/hulk.jpeg",
//     "superHeroePicAlternativeText": "Hulk",
//     "superHeroeCharacter": "Халк",
//     "comicsUniverse": "Marvel Comics", 
//     "alterEgo": "Брюс Беннер", 
//     "typeOfActivity": "супергерой, борец за справедливость, ученый-биохимик", 
//     "friends": "Мстители", 
//     "superPowers": "сверхчеловеческая сила и скорость, выносливость, полет"
// }, {
//     "superHeroePic": "pics/wonderwoman.jpeg",
//     "superHeroePicAlternativeText": "Wonder Woman",
//     "superHeroeCharacter": "Чудо-женщина",
//     "comicsUniverse": "DC Comics", 
//     "alterEgo": "Диана Принс", 
//     "typeOfActivity": "супергероиня, секретарь-референт", 
//     "friends": "Лига Справедливости, Бэтмен, Супермен", 
//     "superPowers": "сверхчеловеческая сила и скорость, выносливость, полет"
// }, {
//     "superHeroePic": "pics/blackwidow.jpeg",
//     "superHeroePicAlternativeText": "Black Widow",
//     "superHeroeCharacter": "Черная вдова",
//     "comicsUniverse": "Marvel Comics", 
//     "alterEgo": "Наташа Романофф", 
//     "typeOfActivity": "супергероиня, шпионка", 
//     "friends": "Мстители", 
//     "superPowers": "пик человеческого физического потенциала, замедленное старение, знание многих языков"
// }, {
//     "superHeroePic": "pics/deadpool.jpeg",
//     "superHeroePicAlternativeText": "Deadpool",
//     "superHeroeCharacter": "Дэдпул",
//     "comicsUniverse": "Marvel Comics", 
//     "alterEgo": "Уэйд Уинстон Уилсон", 
//     "typeOfActivity": "антигерой, наемник", 
//     "friends": "частично Мстители, Человек-паук, Росомаха", 
//     "superPowers": "высокий болевой порог, регенерация и бессмертие, сверхчеловеческая иммунная система"
// }]`;

//parsing JSON array of super heroes
// const superHeroesBase = JSON.parse(arraySuperHeroesJSON);
// console.log(superHeroesBase);


//созданный массив фиксирует вывод слайдов по порядку
const superArr = ['Бэтмен', 'Супермен', 'Железный человек', 'Спайдер-мен/Человек-паук', 'Капитан Америка', 'Тор', 'Халк', 'Чудо-женщина', 'Черная вдова', 'Дэдпул'];

//готовим объект
const superDescription = {
    'Бэтмен': {
        superHeroePic: "pics/batman.jpeg!!!!!!!!!!!!!!!!!!!!!!",
        comicsUniverse: "DC Comics", 
        alterEgo: "Брюс Уэйн", 
        typeOfActivity: "борец с преступностью, филантроп, миллиардер", 
        friends: "Робин, Бэтгерл", 
        superPowers: "интеллект, обширные познания, знания боевых искусств, ловкость",
        moreDetailed: "по популярности человек-летучая мышь может сравниться только с Суперменом. Его образ кажется очень мистическим и мрачным: черный костюм с развевающимся плащом, устрашающий Бэтмобиль, штаб-квартира в сырой пещере. Его биография настолько же темна, как и образ. В детстве у него на глазах убили родителей, и юный Брюс поклялся всеми силами защищать родной Готэм от преступности.<br>Брюс знаменит, несмотря на пожилой возраст: первый выпуск с его участием вышел аж в 1939 году. С каждым годом популярность только крепнет. Большую роль в этом сыграли экранизации: «Темный рыцарь», сериал «Готэм» и несколько одноименных картин. Главная причина такой любви среди фанатов — мысль, что каждый может стать Бэтменом.<br>Если подумать, это один из немногих героев, кто добился своего положения за счет ума и упорства, а не за счет мутаций."
    },
    'Супермен': {
        description: "о Супермене",
        image: "картинка Супермена"
    }
};
//console.log(superDescription['Бэтмен'].description);

//задаем первый индекс для отсчета
let index = -1;
//увеличивает индекс на 1 шаг и отрисовывает его (становится 0 индексом/Бэтмен)
slideNext();
//уменьшение на 1 индекс и отрисовывает слайд (9 индекс/ Дэдпул)
// slidePrev()


//json файл


function showSlide() {
        //получаем данные карточки героя
        //имя берется поочередности из массива с именами, заложенного в переменной 
        let heroeName = superArr[index];
        // чтение полей/ключей из объекта(распарсеной строки json, заложенной в константе superHeroesBase)
        const universe = superDescription[heroeName].comicsUniverse;
        const alterEgo = superDescription[heroeName].alterEgo;
        const activity = superDescription[heroeName].typeOfActivity;
        const friends = superDescription[heroeName].friends;
        const powers = superDescription[heroeName].superPowers;
        const description = superDescription[heroeName].moreDetailed;
        const image = superDescription[heroeName].superHeroePic;
    
        const contentHtml = `<div class="slider__main-text">
        <h2 class="slider__card-name">${heroeName}</h2>
        <div class="details"><b>Вселенная:</b> ${universe}</div>
        <div class="details"><b>Альтер эго:</b> ${alterEgo}</div>
        <div class="details"><b>Род деятельности:</b> ${activity}</div>
        <div class="details"><b>Друзья:</b> ${friends}</div>
        <div class="details"><b>Суперсилы:</b> ${powers}</div>
        <div class="details"><b>Подробнее:</b> ${description}</div>
        </div>
        <img src="${image}" class="slider__card-image" alt="Batman / DC comics" />`

        //куда мы будем вставлять данные карточки героя
        document.getElementById("super-slider-card").innerHTML = contentHtml;
    
        //нужно подставить информацию о героях на один и тот же слайд
    }

// создаю события онклик с привязкой по id к каждой стрелке
// superArrowLeft.onclick = slidePrev;
// superArrowRight.onclick = slideNext;

function slideNext() {
        //зацикливание слайдов 
        //когда текущий индекс (переменная index) доходит до конца массива, то текущий индекс (переменная index) становится нулевым (index = 0)
        if (index == superArr.length-1) {
            index = 0;
        // в других случаях текущий индекс (переменная index) станет следующим слайдом (index+1)
        } else (index = index+1);
        showSlide()
}

function slidePrev() {
    //обратная прокрутка слайдов
    //когда текущий индекс (переменная index) становится на исходную точку (index == 0), то текущий индекс (переменная index) перелистывается в обратную сторону/с первого слайда на последний (index = superArr.length-1)
    if (index == 0) {
    index = superArr.length-1
    //в других случаях текущий индекс (переменная index) станет предыдущим слайдом (index-1)
    } else (index = index-1);
    showSlide()
}
// Написать функцию, что при клике на “Выбрать тур” , “Получить консультацию” или “Расписание туров” (все 3 элемента)  подложка (класс overlay) медленно появлялась на странице (через прозрачность), а само модальное окно (класс modal) плавно выезжало сверху

// Написать функцию, что при клике на крестик всё происходило бы наоборот: подложка исчезала, модальное окно уезжало вверх

// Проверить, чтобы все работало и не было ошибок в консоли.

// Добавить папку с уроком на GitHub

$(document).ready(function () {
    console.log('Страница загружена')
    $(".main_btna").on('click', function () {
        $(".overlay").fadeToggle('slow');
        $(".modal").animate(
            {
                opacity: "200",
                height: "toggle"
            } , 1000)
    })

    $(".main_btn").on('click', function () {
        $(".overlay").fadeToggle('slow');
        $(".modal").animate(
            {
                opacity: "200",
                height: "toggle"
            } , 1000)
    })
    $(`.tury`).on('click', function () {
        $(".overlay").fadeToggle('slow');
        $(".modal").animate(
            {
                opacity: "200",
                height: "toggle"
            } , 1000)
    }) 

    $(".close").on('click', function() {
        $(".modal").fadeToggle('slow');
        $(".overlay").fadeToggle(3000);
    });
    



    

})


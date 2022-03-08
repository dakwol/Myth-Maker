function parallax(event) {
    this.querySelectorAll(".layer").forEach(layer => {
        let speed = layer.getAttribute("data-speed") * 0.001;
        let distanceX = (screen.width / 2 - event.clientX) * speed;
        let distanceY = (screen.height / 2 - event.clientY) * speed;
        layer.style.transform = `translate(${distanceX}px, ${distanceY}px)`;
       
    });
}
document.addEventListener("mousemove", parallax);


$('.menu-btn').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('menu-btn_active');
    $('.menu-nav').toggleClass('menu-nav_active');
});

$(document).ready(function() {
    $("#menu").on("click", "a", function(event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({
            scrollTop: top
        }, 1200);
    });
});


AOS.init({});



    $(function($) {
        $('#post').on('submit', function(event) {
            event.preventDefault();
          if ( validateForm() ) { // если есть ошибки возвращает true
            return false;
          } else {
            var i = 3;//время в сек.
            function time(){
            document.getElementById("time").innerHTML = i;//визуальный счетчик
            i--;//уменьшение счетчика
            if (i < 0) location.href = "thank-you.html";//редирект
            }
            time();
            setInterval(time, 1000);
          }
        });
        
        function validateForm() {
          $(".text-error").remove();
          
          // Проверка имени    
          var el_l = $("#formName");
          if ( el_l.val().length < 3 ) {
            var v_login = true;
            el_l.after('<span class="text-error for-login">Имя должно быть больше 2 символов</span>');
          } 
          $("#formName").toggleClass('error', v_login );
          
          // Проверка e-mail
          var reg = /^\w+([\.-]?\w+)*@(((([a-z0-9]{2,})|([a-z0-9][-][a-z0-9]+))[\.][a-z0-9])|([a-z0-9]+[-]?))+[a-z0-9]+\.([a-z]{2}|(com|net|org|edu|int|mil|gov|arpa|biz|aero|name|coop|info|pro|museum))$/i;
          var el_e = $("#formEmail");
          var v_email = el_e.val()?false:true;
        
          if ( v_email ) {
            el_e.after('<span class="text-error for-email">Поле e-mail обязательно к заполнению</span>');
          } else if ( !reg.test( el_e.val() ) ) {
            v_email = true;
            el_e.after('<span class="text-error for-email">Вы указали недопустимый e-mail</span>');
          }
          $("#formEmail").toggleClass('error', v_email );
          
          // Проверка текста
          
          var el_p1 = $("#formText");
          
          var v_pass1 = el_p1.val()?false:true;
          
       
         if ( el_p1.val().length < 6 ) {
            var v_pass1 = true;
            el_p1.after('<span class="text-error for-pass1">Напишите как любите печеньки)</span>');
          } 
          
          $("#formText").toggleClass('error', v_pass1 );
          
          return ( v_login || v_email || v_pass1 );
        }

   
         
      });




$('.btn__slide').on('click', function() {
    $('.slide__item').toggleClass('slide__item-origin'); // код для первого клика       
    $('.slider__text').toggleClass('slider__text-origin');
    $('.btn__slide--close').toggleClass('btn__slide-origin'); // код для первого клика       
    // код для первого клика       
});
$('.btn__slide--close').on('click', function() {
    $('.slide__item').toggleClass('slide__item-origin'); // код для первого клика
    $('.slider__text').toggleClass('slider__text-origin'); // код для первого клика
    $('.btn__slide--close').toggleClass('btn__slide-origin');
});

( function ($) {
  // Heredamos las funcionalidades de jQuery.extendo
  $.fn.extend({
    // Le asignamos un nombre a nuestro plugin y le pasamos como parametro las opciones del usuario
    onePageScrolling : function(opcionesUsuario){
      // Declaramos una variable inicial
      var valoresIniciales = {
              velocidad : 1000
      },
      opc = $.extend(opcionesUsuario, valoresIniciales)

      function inicializar()
      {
        function adondeScroll(evento)
        {
            evento.preventDefault()
                idEnlace = $(this).attr('href'),
                  cordsSeccion = $(idEnlace).offset().top

            $('html, body')
                .animate({
                                  scrollTop : cordsSeccion},opc.velocidad)
            $('.menu').hide(2500)
        }

        $(this).
                    on('click', adondeScroll)


      }
      return $(this).each( inicializar )
    }
  } )
} )( jQuery )

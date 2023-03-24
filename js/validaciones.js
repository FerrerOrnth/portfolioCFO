// import Swal from 'sweetalert2/dist/sweetalert2.js'

(function(){
    //Variables
    var formulario = document.getElementsByName('miformulario')[0],

        boton = document.getElementById('boton');

    var validarNombre = function(e){
        if (miformulario.nombrecompleto.value == 0){
            Swal.fire({
                title: 'Oops!',
                text: 'Debes ingresar tu nombre',
                icon: 'error',
                confirmButtonText: 'Ok',
                width: '20em',
                background: '#00101c',
                customClass: "sweetAlert2"
              });
            e.preventDefault();
        }
    };

    var validarMail = function(e){
        if (miformulario.email.value == 0){
            Swal.fire({
                title: 'Oops!',
                text: 'El campo e-mail es obligatorio',
                icon: 'error',
                confirmButtonText: 'Entendido',
                width: '20em',
                background: '#00101c',
                customClass: "sweetAlert2"
              });
            e.preventDefault();
        }
    };

    var validarAsunto = function(e){
        if (miformulario.asunto.value == 0){
            Swal.fire({
                title: 'Oops!',
                text: 'Por favor ingresa un asunto',
                icon: 'error',
                confirmButtonText: 'Bien!',
                width: '20em',
                background: '#00101c',
                customClass: "sweetAlert sweetAlert2"
              })
              ;
            e.preventDefault();
        }
    };

    var validarMensaje = function(e){
        if (miformulario.mensaje.value.length < 15 == true) {
            Swal.fire({
                title: 'Oops!',
                text: 'Tu mensaje es demasiado corto',
                icon: 'error',
                confirmButtonText: 'De acuerdo!',
                width: '20em',
                background: '#00101c',
                customClass: "sweetAlert sweetAlert2"
              });
          e.preventDefault();
        }	 
      };

    //   var validarMensaje = function(e){
    //     if (miformulario.mensaje.value.length < 15 == true) {
    //       alert("Tu mensaje es demasiado corto.");
    //       e.preventDefault();
    //     }	 
    //   };
    
    var validar = function(e){
        validarNombre(e);
        validarMail(e);
        validarAsunto(e);
        validarMensaje(e);
        
    };

    miformulario.addEventListener("submit", validar);
}())
// Stop annoying page refresh!
// const submit = document.querySelector('#boton'),
// 			form = document.querySelector('#form');

// submit.addEventListener('click', (e) => {
// 	e.preventDefault();
// 	form.reset();
// }, false);

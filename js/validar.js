window.addEventListener('load', ()=> {
    const boton = document.querySelector('#botonformulario')
    const nombre = document.getElementById('nombre')
    const checkIni = document.getElementById('checkIni')
    const checkInt = document.getElementById('checkInt')
    const checkAva = document.getElementById('checkAva')
    const checkExa = document.getElementById('checkExa')
    const checkVia = document.getElementById('checkVia')
    const form = document.getElementById("formulario")



    boton.addEventListener('click', (e) => {
        e.preventDefault()
        validaCampos()
    })
    
    const validaCampos = ()=> {
        // si se cumplen 3 validaciones se devuelve mensaje de exito
        let cantValidaciones = 0;

        //capturar los valores ingresados por el usuario
        const nombreValor = nombre.value.trim()
        const emailValor = email.value.trim()
    

        //validando campo nombre
        if(!nombreValor){
            alert("Debe ingresar un nombre")
        }  else {
            cantValidaciones++;
        }

        
        //validando campo email

        const validaEmail = (email) => {
            return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);        
        }

        if(!emailValor){
            alert("Debe ingresar un email")          
        }else if(!validaEmail(emailValor)) {
            alert("El email es invalido")
        }else {
            cantValidaciones++;
        }

        //validar checks
        if(!checkIni.checked && !checkInt.checked && !checkInt.checked 
            && !checkAva.checked && !checkExa.checked && !checkVia.checked){
            alert("Selecciona al menos una opción")
        } else {
            cantValidaciones++;
        }


        if(cantValidaciones == 3){

            alert(`Hola ${nombre.value}\nGracias por completar el formulario.\nA la brevedad nos contactaremos con vos`)
            form.submit();
        }




    }

})
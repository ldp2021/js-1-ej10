
function mostrarOcultarForm(e) {
    var divForm = document.getElementById('container_form');
    divForm.classList.toggle('d-none');
}

function validateForm(e) {
    console.log("Validando...");
    var formIsValid = true;
    try {
        var nombreCompletoInput = document.getElementById('nombre_completo');
        var edadInput = document.getElementById('edad');
        var emailInput = document.getElementById('email');
        var fechaIncidenteInput = document.getElementById('fecha_incidente');
        var descripcionInput = document.getElementById('descripcion');

        // var divsErrors = document.querySelector('.invalid-feedback');
        var divsErrors = document.getElementsByClassName('invalid-feedback');
        // for (var i=0; i<divsErrors.length; i++) {
        for (divError of divsErrors) {
            // divsError.classList.remove('d-none');
            divError.style.display = 'none';
        }
        inputs = [
            nombreCompletoInput,
            edadInput,
            emailInput,
            fechaIncidenteInput,
            descripcionInput,    
        ]
        for (input of inputs) {
            // input.setCustomValidity('');
            input.classList.remove('is-invalid');
        }
        
        var nombreCompleto = nombreCompletoInput.value;
        var edadInt = parseInt(edadInput.value);
        var email = emailInput.value;
        var fechaIncidente = new Date(fechaIncidenteInput.value+" 00:00:00 -3:00");
        var fechaMin = new Date(2017, 8, 1); // 8 = septiembre
        var fechaHoy = new Date();
        var descripcion = descripcionInput.value;

        // Validaciones
        if (!(nombreCompleto.length<50)) {
            // nombreCompletoInput.setCustomValidity('El nombre completo debe tener menos de 50 caracteres');
            nombreCompletoInput.classList.add('is-invalid');
            var errorElement = document.getElementById('error_nombre_completo_1');
            errorElement.style.display='block';
            formIsValid = false;
            // e.preventDefault();
            // return false;
        }
        var arrayPalabras = nombreCompleto.trim().split(' ');
        if (!(arrayPalabras.length>=2)) {
            // console.log("Fallo no tiene 2 palabras");
            // nombreCompletoInput.setCustomValidity('El nombre completo debe tener al menos 2 palabras');
            nombreCompletoInput.classList.add('is-invalid');
            var errorElement = document.getElementById('error_nombre_completo_2');
            errorElement.style.display='block';
            formIsValid = false;
            // e.preventDefault();
            // return false;
        }
        for (i=0; i<2; i++) {
            if (!(arrayPalabras[i].length>=5)) {
                // console.log("Fallo la palabra "+ i + " no tiene 5 caracteres");
                // nombreCompletoInput.setCustomValidity('El nombre completo debe tener al menos 2 palabras de 5 letras');
                nombreCompletoInput.classList.add('is-invalid');
                var errorElement = document.getElementById('error_nombre_completo_3');
                errorElement.style.display='block';
                formIsValid = false;
                // e.preventDefault();
                // return false;
            }     
        }
        if (!(edadInt>=18 && edadInt<=85)) {
            // edadInput.setAttribute("isvalid", "true");
            // edadInput.setCustomValidity('La edad tiene que ser mayor a 18 años y menor a 85 años');
            edadInput.classList.add('is-invalid');
            var errorElement = document.getElementById('error_edad');
            errorElement.style.display='block';
            formIsValid = false;
            // e.preventDefault();
            // return false;
        }
        if (!(email.length<120)) {
            // emailInput.setCustomValidity('El email debe tener menos de 120 caracteres');
            emailInput.classList.add('is-invalid');
            var errorElement = document.getElementById('error_email');
            errorElement.style.display='block';
            formIsValid = false;
            // e.preventDefault();
            // return false;
        }
        if (!(fechaIncidente.getTime()>=fechaMin.getTime() && fechaIncidente.getTime()<=fechaHoy.getTime())) {
            // fechaIncidenteInput.setCustomValidity('Las fechas de incidente válidas abarcan entre el 01/09/2017 y la fecha del día');
            fechaIncidenteInput.classList.add('is-invalid');
            var errorElement = document.getElementById('error_fecha_incidente');
            errorElement.style.display='block';
            formIsValid = false;
            // e.preventDefault();
            // return false;
        }
        if (!(descripcion.length>30)) {
            // descripcionInput.setCustomValidity('La descripcion debe tener al menos 30 caracateres');
            descripcionInput.classList.add('is-invalid');
            var errorElement = document.getElementById('error_descripcion');
            errorElement.style.display='block';
            formIsValid = false;
            // e.preventDefault();
            // return false;
        }
    } catch (e) {
        console.log(e)
        e.preventDefault();
        return false;
    }
    if (!formIsValid) {
        e.preventDefault();
        return false;    
    }
}

function inicio() {
    document.getElementById("my_button").addEventListener("click", mostrarOcultarForm);
    document.getElementById("my_form").addEventListener("submit", validateForm);
    // document.getElementById("my_form").onsubmit = validateForm;
}

window.onload = inicio;

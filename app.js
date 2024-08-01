

const btn = document.getElementById("btn");
const nombreinput = document.getElementById("name");
const apellidoinput = document.getElementById("Apellido");
const emaildoinput = document.getElementById("email");



function insertar() {
    var nombre = nombreinput.value;
    var apellido = apellidoinput.value;
    var email = emaildoinput.value

    if (nombre.trim() === "" || apellido.trim() === ""  || email.trim() === "" ) {
         
        nombreinput.classList.add("error");
        apellidoinput.classList.add("error"); 
        emaildoinput.classList.add("error")
        nombreinput.classList.remove("filled");
        emaildoinput.classList.remove("filled");
        apellidoinput.classList.remove("filled");


    }  else if (nombre.trim() === "" || apellido.trim() === ""  || email.trim() === "" ) {
      
           erroformulario(); 
         
    } else {
      
        formulario(nombre); 

    }
}



function formulario(nombre) {
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: `Enviado con éxito`,
        showConfirmButton: false,
        timer: 1000
    });
}


function erroformulario(){
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Error a llenar el formulario `,
        timer: 1500
      });
}


nombreinput.addEventListener("input", () => {
    if (nombreinput.value.trim() !== "") {
        nombreinput.classList.remove("error");
        nombreinput.classList.add("filled");
    }
});

btn.addEventListener("click", insertar);

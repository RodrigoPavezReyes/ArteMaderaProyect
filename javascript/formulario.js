class ClienteForm{
    constructor(nombre, email, asunto, mensaje){
        this.nombre=nombre;
        this.email=email;
        this.asunto=asunto;
        this.mensaje=mensaje;
    }
}

const arrayClientesForm=[];

const formulario = document.getElementById("formulario");

formulario.addEventListener ("submit", (e)=>{
    e.preventDefault(); //evito el comportamiento por default del formulario
    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");
    const asunto= document.getElementById("asunto");
    const mensaje= document.getElementById("mensaje");

    const cliente=new ClienteForm(nombre.value, email.value,asunto.value,mensaje.value);

    arrayClientesForm.push(cliente);

    console.log(arrayClientesForm);

    formulario.reset(); //reseteo el form
})
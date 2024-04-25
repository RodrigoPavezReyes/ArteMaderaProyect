
let carrito =[];  //creamos array de carrito vacio

//cargar carrito desde el local storage // si hay algo en el local storage lo cargamos en el carrito

//Usamos operador avanzado logico OR
carrito = JSON.parse(localStorage.getItem("carrito")) || [];




let contenedorProductos = document.getElementById("contenedorProductos");  //Modifico DOM para mostrar productos


const mostrarProductos =()=>{

    arrayProductos.forEach (producto => {

        const cardProducto= document.createElement ("div");
        cardProducto.className="cardProducto";
        cardProducto.innerHTML=`<img class="imgCard" src="${producto.img}" alt="${producto.nombre}">
        <h3 class="nombreCard">${producto.nombre}</h3>
        <p class="precioCard">$${producto.precio}</p>
        <p class="descripcionCard">${producto.descripcion}</p>
        <button class="buttonAgregar" id="boton${producto.id}">Agregar al carrito</button>`;  //asocio cada boton agregar al id correspondiente
        
        contenedorProductos.appendChild(cardProducto);


        //Agregamos productos al carrito
        const boton = document.getElementById(`boton${producto.id}`);
        boton.addEventListener("click", ()=>{
            agregarAlCarrito(producto.id);

            //Libreria 
            Toastify({
                text: "Agregaste un producto",
                duration: 3000,
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                  background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
                }).showToast();

        })

        
})
};


mostrarProductos();



//Creamos funcion agregar al carrito

const agregarAlCarrito = (id)=>{
    const productoEnCarrito = carrito.find (producto => producto.id ===id);
    if(productoEnCarrito){
        productoEnCarrito.cantidad++
    }else{
        const producto = arrayProductos.find(producto=>producto.id ===id);
        carrito.push(producto);
    }
    console.log(carrito)
    calcularTotal();

    //Trabajamos local storage
    localStorage.setItem("carrito", JSON.stringify(carrito) );
}



//Mostrar carrito de compras

const contenedorCarrito = document.getElementById("contenedorCarrito");

const mostrarCarrito =()=>{
    contenedorCarrito.innerHTML="";
    carrito.forEach(producto => {
        const cardProducto= document.createElement ("div");
        cardProducto.className="cardProductoCarrito";
        cardProducto.innerHTML=`<img class="imgCardCarrito" src="${producto.img}" alt="${producto.nombre}">
                                <div>
                                <h3 class="nombreCardCarrito">${producto.nombre}</h3>
                                <p class="precioCardCarrito">$${producto.precio}</p>
                                <p class="cantidadCardCarrito">Cantidad: ${producto.cantidad}</p>
                                <button class="buttonEliminarCarrito" id="eliminar${producto.id}" >Eliminar</button>
                                </div>`; 

        contenedorCarrito.appendChild(cardProducto);

        //Eliminar productos del carrito
        const boton = document.getElementById(`eliminar${producto.id}`);
        boton.addEventListener("click", ()=>{

            eliminarDelCarrito(producto.id);

        })
    })
    calcularTotal();
}


//Funcion para eliminar producto del carrito:
const eliminarDelCarrito = (id)=>{
    const producto = carrito.find(producto => producto.id===id);
    const indice = carrito.indexOf(producto);
    carrito.splice(indice,1);

    mostrarCarrito();

    //Local storage
    localStorage.setItem("carrito", JSON.stringify(carrito));
}


//Vaciar el carrito de compras

const vaciarCarrito = document.getElementById("vaciarCarrito");
vaciarCarrito.addEventListener("click", ()=>{
    eliminarTodoElCarrito();
})

const eliminarTodoElCarrito =() =>{
    carrito = [];
    mostrarCarrito();

     //Local storage
    localStorage.clear();
};

//Mostramos total de compra
const total= document.getElementById("total");

const calcularTotal =()=>{
    let totalCompra = 0;
    carrito.forEach(producto=>{

        totalCompra += producto.precio*producto.cantidad;
    })
    total.innerHTML=`$${totalCompra}`;
}






//modo oscuro//modo claro//////////////////////////

let botonModo = document.getElementById("botonModo");

botonModo.addEventListener("click", ()=>{
    document.body.classList.toggle("dark");


    if(document.body.classList.contains("dark")){
        localStorage.setItem("modo", "dark");
    }else{
        localStorage.setItem("modo","claro");
    }
})

//Recuperamos el modo del localStorage

const modo= localStorage.getItem("modo");

if(modo==="dark"){
    document.body.classList.add("dark")
}else{
    document.body.classList.remove("dark");
}


////////////////////////////////////////////


//FUNCIONES DEL MODAL

// Seleccionar elementos del DOM
const verCarrito = document.getElementById("verCarrito");
const modal = document.getElementById("modal");
const closeModalBtn = document.getElementById("closeModalBtn");

// Función para abrir el modal
verCarrito.addEventListener("click", function() {
  modal.style.display = "block";
  mostrarCarrito();
});

// Función para cerrar el modal haciendo clic en el botón de cerrar
closeModalBtn.addEventListener("click", function() {
  modal.style.display = "none";
});

// Función para cerrar el modal haciendo clic fuera de él
window.addEventListener("click", function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});










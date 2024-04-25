//Funcion Constructora
class Producto {
    constructor(id, nombre, precio, descripcion, img){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
        this.img = img;
        this.cantidad = 1;
    }
};

//Creacion de objetos

const pizarron = new Producto (1, "Pizarrón", 10000, "Pizarron fabricado con aglomerado de 5 mm de espesor, bastidor trasero en chapa galvanizada y sujeciones en Aluminio.Tambien se utiliza con imanes de Neodimio","../assets/pizarron.png"  );
const sillaMecedora = new Producto (2, "Silla mecedora", 15000, "Tejidas con cordón PVC o cuerda símil yute de Alta calidad. Estructura de Hierro, pintadas con epoxi al horno, anti oxido blanco o negro. Ideal para interiores y exteriores. Soportan hasta 150 kg.", "../assets/silla.png");
const bancoTriple = new Producto (3, "Banco triple", 12000, "Banco triple de Madera masisa. Tres tamaños en uno. Diseño exlusivo y unico. Soporta hasta 150kg", "../assets/banco-triple.png");
const banquito = new Producto (4, "Banquito", 13000, "Banquito de madera torneada. Funda tejida de crochet -Medidas: 30 cm de altura 23 cm diámetro de base", "../assets/banquitos.png");
const conjuntoEscandinavo = new Producto (5, "Conjunto escandinavo", 21000, "Tapa de melamina de 18mm, patas de madera Pino lustrado, tonalizado en peteribi y protegido con aceite de lino.", "../assets/mesa-y-sillas.png");
const barraBar = new Producto (6, "Barra bar", 29000, "Barra para bar. Hecha a medida, ideal para utilizar en quinchos. Diseño exlusivo fabricado con madera masisa.", "../assets/barra.png" );

//Creacion de array de objetos ( catalogo de productos )

const arrayProductos = [pizarron, sillaMecedora, bancoTriple, banquito, conjuntoEscandinavo, barraBar];
console.log(arrayProductos)


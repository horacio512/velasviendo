# Bienvenido al repositorio de VELASVIENDO

#### Instalación:

Para clonar el repositorio solo dirigete a donde quieras tener la página.
Luego Ejecuta el siguiente comando:
`git clone` https://github.com/horacio512/velasviendo.git

Luego entra a /velasviendo
A continuación ejecuta el comando `npm install ` para instalar todas las dependecias necesarias (mas adelante las detallaremos).

[========]

### Introducción:

VELASVIENDO es un proyecto que nace gracias a la participación en un curso de
**React js** en Coder House aqui te dejo un link por si te interesa [Link](https://www.coderhouse.com/ "Link")

La propuesta era hacer una página web que incluyera algún tipo de compra, en mi caso simplemente surgió la idea de ver una vela en la mesa del comedor.

[========]

### Diseño
###### La página esta dividida en cuatro componentes principales:
#####  Home
El home de nuestra página consta de los productos para vender (velas y candelabros), desde la misma se puede filtrar por categorias en caso de solo estar interesado en algo particular. Destaco que decidi no listar las categorias en el menú de navegación porque si sonaba práctico pero a mi parecer limitaba la tentativa al momento de comprar.

##### Sobre Nosotros
Está parte se mantiene simple solo una breve reseña sobre la historia de la compania.

##### Contacto
Aqui tenemos un formulario de contacto funcional (envía los datos a firebase) por el cual el cliente podra tanto evaluar dudas antes de comprar, preguntar por ventas por mayor, pedir productos personalizados, etc.

##### Carrito de compras
Otro de los componentes principales de nuestra página es el carro de compras, el mismo recibe toda la información mediante useContext para poder tener el carrito pronto al momento de hacer cllick, además guarda la información en LocalStorage para que en caso de estar navegando y sufrir un corte de datos o de corriente no pierda su compra.

[========]

### Dependencias principales

    "@fontsource/roboto": "^4.5.3", establece el tipo de fuente.
    "@mui/icons-material": "^5.5.1", implementamos algunos iconos para nuestra página (carrito, boton borrar, etc)
    "@mui/material": "^5.5.1",  nos permite manejar el lenguaje visual de nuestra página de manera mas sencilla.
    "firebase": "^9.6.11",  aqui guardamos los datos de los productos, las ordenes de compra y los datos y mensajes de contacto.
    "react-helmet-async": "^1.3.0",  nos permite cambiar los datos del head en cada página de manera mas sencilla.
    "react-router-dom": "^6.2.2", nos permite manejar las rutas de nuestro proyecto



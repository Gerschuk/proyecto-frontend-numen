# Proyecto Front-End en React.js para Numen Academy

## Requerimientos de Diseño
1. Se realizará el diseño tomando de referencia el siguiente diseño en Figma:
https://www.figma.com/file/ptZy1a106K1UbSFh1O4v93/Food-store-template-(Community)?node-id=0-1

### Se deberán respetar los siguientes requerimientos
- Layout
- Dimensiones
- Posicionamiento de elementos en la página
    - Menú superior
    - Carrito de compras a la derecha
    - Logo a la izquierda
    - Imagen de bienvenida de fondo
    - etc.
- Queda a criterio de los desarrolladores el contenido de la Homepage
    - Imagenes a utilizar
    - Estilo de iconos
    - Nombre de la empresa u organización
    - Logo
    - Texto
    - Paleta de colores

## Requerimientos técnicos
- La aplicación deberá estar dividida en componentes funcionales
- Los estilos deben estar hechos con el approach de *Mobile First*
- El diseño debe ser *responsive*
- La información será consumida de un backend mockeado con *[json-server](https://www.npmjs.com/package/json-server)*
- Para las consultas al backend, se deberá utilizar la librería [*axios*](https://axios-http.com/)
- Para facilitar los estilos, se pueden utilizar librerías FrontEnd de CSS (Se utiliza *[Bootstrap](https://getbootstrap.com/)*

## Requerimientos funcionales
- Al presionar el botón de compra, se deberá abrir un *Modal* para confirmar la compra
- Al confirmar la compra, el número items en el carrito deberá aumentar en uno.
- La galería de imágenes de *Instagram* deberá desplegar al menos diez imagenes en un carrusel

---

## Temática seleccionada
- Ecommerce de indumentaria y calzado

## Librerías Front-End
- [Bootstrap](https://getbootstrap.com/)
- [Bootstrap icons](https://icons.getbootstrap.com/)

## Estructura de archivos
- src
    - assets
        - css
        - imagenes
    - componentes
        - nombre-componente
            - Componente.js
            - componente.css

## Idioma
- Tanto el código como los textos serán en **Español**

# Pasos para probar el proyecto

### Descargar el proyecto

### Instalar las dependencias
Para instalar todas las dependencias del proyecto ejecutar el siguiente comando
`npm install`

### Simular la API con JSON-Server
Para poder visualizar el contenido del sitio es necesario levantar el servicio de json-server con el siguiente comando.
`json-server --watch "src/assets/db/db.json"`

### Ejecutar el proyecto
Para ejecutar el proyecto y poder verlo en el navegador, ejecutar el siguiente comando: 
`npm start`
En caso de solicitarlo presionar la tecla `y` para que react corra en el puerto 3001 ya que el puerto 3000 lo utiliza json-server

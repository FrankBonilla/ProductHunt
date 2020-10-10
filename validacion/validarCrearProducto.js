export default function validarCrearProducto(valores){
    let errores = {};

    //validar el nombre del usuario
    if(!valores.nombre) {
        errores.nombre = "El nombre es obligatorio";
    }

    //validar empresa
    if(!valores.empresa) {
        errores.empresa = "Nombre de empresa es obligatorio";
    }

    //validar url
    if(!valores.url) {
        errores.url = "La URL es obligatoria";
    }else if (!/^(ftp|http|https):\/\/[^"]+$/.test(valores.url)){
        errores.url = "Formato de la URL no válida";
    }

    //validar descripcion
    if(!valores.descripcion){
        errores.descripcion = "Agrega una descripción de tu producto"
    }
    
    return errores;
}